/**
 * Created by TengShinan on 31/8/17.
 */

var doc = new jsPDF();
//var functionArr = [drawPageOne()];
var entryPageOne = {firstTable: [], secondTable: [], thirdTable: []};

/**
 * Generate the PDF file and save it.
 * */
function generatePDF() {

    console.log('滕施男太帅了！');

    // drawPageOne();
    // doc.addPage();
    // drawPageTwo();
    // doc.addPage();
    // drawPageThree();
    // doc.addPage();
    // drawPageFour();
    // doc.addPage();
    drawPageFive();

    // Save the PDF file
    doc.save('a4.pdf');
}

/**
 * PAGE 1
 * */
function drawPageOne() {

    var firstTableBorderY = 35;
    var firstTableContentY1 = 45;
    var secondTableBorderY = 100;
    var secondTableContentY1 = 110;
    var thirdTableBorderY = 148;
    var thirdTableContentY1 = 158;
    var firstTableLeftContentArr = ['Name:', 'Telephone:', 'Address of property:', 'Suburb:', 'Date of assessment:',
        'Existing use of property:', 'Weather conditions:', 'Verbal summary of:'];
    var secondTableLeftContentArr = ['Archicentre Australia Architect:', 'Registration Number:', 'Email Address:',
        'Phone:', 'Address:'];
    var thirdTableLeftContentArr = ['Sub-Structure:', 'Floors:', 'Roof:', 'Walls:', 'No. of Storeys:',
        'Windows:', 'Site Grade:', 'Furnished:', 'Tree Coverage:', 'Extensions / Renovation:', 'Estimated Age / Period:'];

    // Title
    setHeadTitleStyle();
    doc.text(15, 20, 'Property Assessment Report');

    // Explanation
    setExplanationStyle();
    doc.text(15, 25, 'This Property Assessment Report is a visual assessment of the conditions of the reasonably ' +
        'accessible areas of the property \nat the time of the assessment, including the subject residence and associated ' +
        'areas where the property is a unit or apartment.');

    /**
     * Draw table lines
     * */
    setLinesStyle();
    // Draw first table's horizontal lines
    for (var i = 0; i < 10; i++) {
        doc.line(15, firstTableBorderY, 195, firstTableBorderY);
        firstTableBorderY += 6;
    }
    // Draw second table's horizontal lines
    for (var i = 0; i < (secondTableLeftContentArr.length + 2); i++) {
        doc.line(15, secondTableBorderY, 195, secondTableBorderY);
        secondTableBorderY += 6;
    }
    // Draw third table's horizontal lines
    for (var i = 0; i < (thirdTableLeftContentArr.length +2); i++) {
        doc.line(15, thirdTableBorderY, 195, thirdTableBorderY);
        thirdTableBorderY += 6;
    }
    // Draw vertical lines
    doc.line(110, 47, 110, 53);
    doc.line(110, 59, 110, 71);
    doc.line(150, 59, 150, 65);

    /**
     * Subtitles of the tables
     * */
    setTableTitleStyle();
    doc.text(17, 39, 'CUSTOMER DETAILS');
    doc.text(17, 104, 'ARCHITECT DETAILS');
    doc.text(17, 152, 'PROPERTY SUMMARY - Primary construction materials and site conditions');

    /**
     * Content in the tables
     * */
    setTableContentStyle();
    // First table - first column
    for (var i = 0; i < 8; i++) {
        doc.text(17, firstTableContentY1, firstTableLeftContentArr[i]);
        firstTableContentY1 += 6;
    }
    // First table - second column
    doc.text(112, 51, 'Booking No:');
    doc.text(112, 63, 'State:');
    doc.text(112, 69, 'Time of Assessment:');
    // First table - third column
    doc.text(152, 63, 'Postcode:');
    // Second table - first column
    for (var i = 0; i < secondTableLeftContentArr.length; i++) {
        doc.text(17, secondTableContentY1, secondTableLeftContentArr[i]);
        secondTableContentY1 += 6;
    }
    // Third table
    for (var i = 0; i < thirdTableLeftContentArr.length; i++) {
        doc.text(17, thirdTableContentY1, thirdTableLeftContentArr[i]);
        thirdTableContentY1 += 6;
    }

    /**
     *  Fill user's input - if you want to only draw the skeletons such as table borders,
     *  comment these methods below.
     * */
    //fillUserInputPageOne();
}

function fillUserInputPageOne() {

    var firstTableContentY2 = 45;
    var secondTableContentY2 = 110;
    var thirdTableContentY2 = 158;

    setExplanationStyle();

    /**
     * The first table
     * */
    // Get entries
    for (var i = 0; i < 12; i++) {
        if (document.getElementById("" + i).value == "") {
            alert("Empty input is not accept!");
            break;
        } else {
            entryPageOne.firstTable[i] = document.getElementById("" + i).value;
        }
    }
    // Put user's input on the PDF file
    for (var i = 0; i < 8; i++) {
        doc.text(65, firstTableContentY2, entryPageOne.firstTable[i]);
        firstTableContentY2 += 6;
    }
    // Booking No.
    doc.text(135, 51, entryPageOne.firstTable[8]);
    // State
    doc.text(125, 63, entryPageOne.firstTable[9]);
    // Postcode
    doc.text(172, 63, entryPageOne.firstTable[11]);
    // Time of Assessment
    doc.text(148, 69, entryPageOne.firstTable[10]);
    /**
     * The second table
     * */
    for (var i = 0; i < 5; i++) {
        entryPageOne.secondTable[i] = document.getElementById('architectDetails').getElementsByTagName('input')[i].value;
        doc.text(70, secondTableContentY2, entryPageOne.secondTable[i]);
        secondTableContentY2 += 6;
    }
    /**
     * The third table
     * */
    for (var i = 0; i < 11; i++) {
        entryPageOne.thirdTable[i] = document.getElementById('propertySummary').getElementsByTagName('input')[i].value;
        doc.text(70, thirdTableContentY2, entryPageOne.thirdTable[i]);
        thirdTableContentY2 += 6;
    }

    console.log(entryPageOne.firstTable);
    console.log(entryPageOne.secondTable);
    console.log(entryPageOne.thirdTable);
}

/**
 * PAGE 2
 * */
function drawPageTwo() {

    // Title
    setHeadTitleStyle();
    doc.text(15, 20, 'The Scope of Assessment');

    // Explanation
    setExplanationStyle();
    doc.text(15, 25, 'This Report is prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – ' +
        'and in accordance with Australian \nStandard 4349.1-2007 Assessment of Buildings Part 1: Pre-purchase ' +
        'Inspections – Residential Buildings and any other \nAustralian Standards and definitions cited in the ' +
        'Terms and Conditions. \n\n' +
        'This Report is a subjective assessment prepared by the appraising architect on a visual assessment of the condition of \n' +
        'the reasonably accessible parts of the property and on the basis of the prevailing structural, soil and weather conditions \n' +
        'at the time of the assessment and does not cover enquiries of councils or other authorities. It is not a certificate of \n' +
        'compliance for the property within the requirements of any Act, regulation, ordinance or local by-law. \n\n' +
        'Prolonged periods of wet or dry weather may cause structural changes to the property as described in the Property \n' +
        'Maintenance Guide which you can download from the link found in the body of your Report and in the Report cover letter. \n\n' +
        'This Report will not disclose defects in inaccessible areas, defects that are concealed and/or not reasonably visible, \n' +
        'defects that may be apparent in other weather conditions or defects that have not yet arisen. \n\n' +
        'This Report is not a rigorous assessment of all building elements and does not cover all maintenance items, particularly \n' +
        'those such as jamming doors, windows or catches, decorative finishes and hairline or slight cracks.  This is in \n' +
        'accordance with Category 0 and 1 of Appendix C –AS 2870-2011. \n\n' +
        'This Report is not a pest inspection. Archicentre Australia recommends that a pest inspection be carried out on all \n' +
        'properties being considered for purchase. Customers wishing to have a full pest inspection should contact Archicentre \n' +
        'Australia to arrange a separate pest inspection. Archicentre Australia’s Timber Pest Inspections are undertaken by highly \n' +
        'qualified, independent and authorised inspectors.  Archicentre Australia does not sell pest control services so you can \n' +
        'trust that you will not be recommended treatments that you do not need. \n\n' +
        'The assessment assumes that the existing use of the property will continue and the Report is prepared on that basis. As \n' +
        'such, the assessment will not assess the fitness of the property for any other intended purpose.  We advise you to verify \n' +
        'any proposed change in use with the relevant authorities. \n\n' +
        'If you are intending to purchase the property, and in consideration of the limitations of a visual assessment, as well as \n' +
        'budgeting for the anticipated cost of the recommended repairs and maintenance, Archicentre Australia recommends \n' +
        'budgeting a further 5% of the value of the property, to provide a "safety net" against unexpected costs that may arise \n' +
        'over the first five years of ownership and that this be taken into account when establishing a purchase price. The amount \n' +
        'of this safety net is a rough guide for properties generally and not specific to your property. \n\n' +
        'Where the property is a unit or apartment, associated areas may include common areas pertinent and immediately \nadjacent ' +
        'to the subject residence, for which major defects only will be noted.');
    doc.text(15, 170, '• Identification of observed building defects upon a visual assessment of the reasonably accessible parts ' +
        'of the property; \n' +
        '• Assessment of defects for significance relative to the expected condition of a well maintained property of similar age and \n' +
        '  construction type; \n' +
        '• Recommended actions for identified defects; \n' +
        '• Recommended professionals and/or trades who may be appropriate to undertake further investigation or carry out the \n' +
        '  recommended action; \n' +
        '• General and specific additional advice on maintenance matters that your architect has deemed appropriate.');
    doc.text(15, 205, '• Identification of toxic mould, or asbestos related products; \n' +
        '• Condition or operation of swimming pools, spas or their surroundings, rainwater or grey water tanks or treatment and \n' +
        '  similar facilities; \n' +
        '• Condition, adequacy or compliance of electrical, gas and plumbing systems including roof plumbing, underground pipes \n' +
        '  or drainage systems; \n' +
        '• Operation adequacy or compliance of security and communications systems, smoke detectors, building services, building \n' +
        '  automation, electrically operated doors including garage doors, plant, equipment, mechanical, gas or electrical appliances \n' +
        '  and fittings; \n' +
        '• Footings below ground, soil conditions, site factors and hazards; \n' +
        '• Compliance with legal, planning, regulatory including Building Code of Australia, sustainability or environmental matters \n' +
        '  including but not limited to the adequacy or safety of insulation, waterproof membranes and/or other installations, \n' +
        '  Bushfire Attack Level assessments; \n' +
        '• Timber, metal or other framing sizes and adequacy.');

    // Subtitles
    setTableTitleStyle();
    doc.text(15, 165, 'What is included in this Report');
    doc.text(15, 200, 'What is not included in this Report');
}

/**
 * PAGE 3
 * */
function drawPageThree() {

    // Title
    setHeadTitleStyle();
    doc.text(15, 20, 'Defect Definitions');
    doc.text(15, 115, 'Assessment Access');

    // Subtitles
    setTableTitleStyle();
    doc.text(15, 25, 'Minor Defect/ Maintenance Item');
    doc.text(15, 40, 'Major Defect');
    doc.text(15, 65, 'Serious Structural Defect');

    // Explanation
    setExplanationStyle();
    doc.text(15, 30, 'Any items of repair which are common to well maintained properties of similar age or type of construction and as described \n' +
        'in the Property Maintenance Guide, including decorative features and finishes.');
    doc.text(15, 45, 'A defect of sufficient magnitude where rectification has to be carried out without undue delay to avoid: \n' +
        '   • unsafe conditions, posing a threat to life or serious injury; or, \n' +
        '   • loss of utility whereby the defect is such that the whole of the relevant part of the property can no longer serve its \n' +
        '     intended function; or,\n' +
        '   • further substantial deterioration of the property.');
    doc.text(15, 70, 'A major defect in any internal or external primary load bearing component of the building which seriously affects the \n' +
        'structural integrity of the building requiring rectification to be carried out without undue delay to avoid:\n' +
        '   • unsafe conditions, posing a threat to life or serious injury; or,\n' +
        '   • loss of utility, whereby the defect is such that the whole of the relevant part of the building can no longer serve its \n' +
        '     intended function; or,\n' +
        '   • further substantial deterioration of the property.\n' +
        'In the case of cracking, a serious structural defect denotes severe cracking as defined by Category 4, Appendix C – \nAustralian ' +
        'Standard AS 2870-2011.');
    doc.text(15, 120, 'The architect can only assess the reasonably accessible parts of the property.  It is your responsibility to ensure that any \n' +
        'inaccessible parts of the property that can be made reasonably accessible for an assessment are made so, prior to the \n' +
        'assessment.  If parts of the property have been noted as being inaccessible during the assessment, it is important that you \n' +
        'contact the architect and arrange for a second assessment when access to restricted areas has been made available. \n' +
        'Inaccessible areas cannot be assessed.\n\n' +
        'Reasonably and Safely Accessible – Accessible areas which can be accessed by a 3.6 metre ladder or those which have \nat ' +
        'least 600mm unimpeded vertical and horizontal clearance without the removal of any fixed or unfixed furniture, fittings, \n' +
        'stored items, cladding or lining materials, plants or soil.\n\n' +
        'Archicentre Australia architects are unable to access areas where there is a risk of adverse disturbance or damage to the \n' +
        'property, including the garden area.  The architect will determine the extent of accessible areas at the time of the \n' +
        'assessment.\n\n' +
        'Workplace Health and Safety access conditions apply subject to relevant State and Territory regulations. Archicentre \n' +
        'Australia authorised architects are unable to inspect areas higher than 3 metres above ground level unless secure ladder \n' +
        'access is available and fall prevention devices or barriers are present.\n\n' +
        'Reasonable Access may not be possible due to physical obstructions or conditions that may be hazardous or unsafe to the \n' +
        'architect.\n\n' +
        'Access restrictions will be noted where appropriate.');
}

/**
 * PAGE 4
 * */
function drawPageFour() {

    var firstTableBorderY = 45;
    var secondTableBorderY = 100;
    var rulesArr = [' \u2713 - No visible significant defect', ' X - Maintenance item or Minor Defect', 'XX - Major defect',
        ' U - Unknown / Inaccessible / Not tested', 'NA - Not applicable, no such item'];
    var firstTableLeftContentArr = ['Damp', 'Framing', 'Stumps / Piers', 'Cracking', 'Water Supply', 'Timber Rot',
        'Electrics', 'Roof', 'Suspected Illegal Building'];

    // Title
    setHeadTitleStyle();
    doc.text(15, 20, 'Your Property Assessment Summary');
    doc.text(15, 95, 'Evident Defect Summary');

    // Explanation
    setExplanationStyle();
    doc.text(15, 25, 'This Property Assessment summary provides you with a “snapshot” of the items the architect considers of greatest \n' +
        'significance for you when considering this property. Please refer to the Definitions and the complete Report for detailed \n' +
        'information regarding visible defects and recommended actions. Please note that this summary is not the complete \n' +
        'Report and that in the event of an apparent discrepancy the complete Report overrides the Summary information.');
    doc.text(17, 55, 'Apparent condition of the building with respect to its age:');
    doc.text(17, 67, 'Are there any Major Defects evident?');
    doc.text(17, 79, 'Are there any Serious Structural Defects evident?');

    // Subtitles
    setTableTitleStyle();
    doc.text(17, 49, 'Summary of the Condition of the Property');
    doc.text(17, 61, 'Major Defects');
    doc.text(17, 73, 'Serious Structural Defects');
    doc.text(17, 164, 'Assessment Summary');
    
    // Draw lines
    // Horizontal
    setLinesStyle();
    for (var i = 0; i < 7; i++) {
        doc.line(15, firstTableBorderY, 195, firstTableBorderY);
        firstTableBorderY += 6;
    }
    for (var i = 0; i < (rulesArr.length + 1); i++) {
        doc.line(100, secondTableBorderY, 195, secondTableBorderY);
        secondTableBorderY += 6;
    }
    secondTableBorderY = 100;
    for (var i = 0; i < (firstTableLeftContentArr.length + 1); i++) {
        doc.line(15, secondTableBorderY, 95, secondTableBorderY);
        secondTableBorderY += 6;
    }

    // Put content in the second table on the left
    secondTableBorderY = 104;
    setTableContentStyle();
    for (var i = 0; i < firstTableLeftContentArr.length; i++) {
        doc.text(17, secondTableBorderY, firstTableLeftContentArr[i]);
        secondTableBorderY += 6;
    }
    setExplanationStyle();
    secondTableBorderY = 104;
    for (var i = 0; i < rulesArr.length; i++) {
        doc.text(102, secondTableBorderY, rulesArr[i]);
        secondTableBorderY += 6;
    }

    console.log(document.getElementById('evidentDefectSummary').getElementsByTagName('select')[8].value);
    /**
     *  Fill user's input - if you want to only draw the skeletons such as table borders,
     *  comment these methods below.
     * */
    fillUserInputPageFour();
}

function fillUserInputPageFour() {

    var eviDefSumArr = [];
    var positionY = 104;
    var positionY2 = 0;

    setTableContentStyle();
    // Summary of the condition of the property
    if (document.getElementById('conditionOfBuilding').value != 'Other') {
        doc.text(100, 55, document.getElementById('conditionOfBuilding').value);
    } else {
        doc.text(100, 55, document.getElementById('conditionOfBuildingText').value);
    }
    // Major defects
    if (document.getElementById('majorDefects').value != 'Other') {
        doc.text(74, 67, document.getElementById('majorDefects').value);
    } else {
        doc.text(74, 67, document.getElementById('majorDefectsText').value);
    }
    // Serious structural defects
    if (document.getElementById('seriousStructuralDefects').value != 'Other') {
        doc.text(91, 79, document.getElementById('seriousStructuralDefects').value);
    } else {
        doc.text(91, 79, document.getElementById('seriousStructuralDefectsText').value);
    }

    // Evident defect summary (Extract data + put it in the table)
    setExplanationStyle();
    for (var i = 0; i < 9; i++) {
        eviDefSumArr[i] = document.getElementById('evidentDefectSummary').getElementsByTagName('select')[i].value;
        doc.text(70, positionY, eviDefSumArr[i]);
        positionY += 6;
    }

    console.log(eviDefSumArr);
}

/**
 * PAGE 5
 * */
function drawPageFive() {

    const firstTableGap = 4;
    const startPointX = 15;
    const endPointX = 195;
    const startPointY = 20;
    const firstTableTitleArr1 = ['AR', 'BC', 'BR', 'CC', 'CJ', 'CM', 'DH', 'DR', 'EL', 'EX', 'FC', 'GL', 'HM', 'HR'];
    const firstTableContentArr1 = ['Architects', 'Building Contractors', 'Bricklayers', 'Concrete Contractors', 'Carpenter & Joiners',
        'Cabinet Makers', 'Damp Houses', 'Drainers', 'Electrical Contractors', 'Excavating Contractors', 'Fencing Contractors',
        'Glass Merch/Glazier', 'Home Maint./Repair', 'House Restump/Reblock'];
    const firstTableTitleArr2 = ['IC', 'LA', 'LG', 'UP', 'PC', 'PD', 'PG', 'PL', 'PV', 'RC', 'SE', 'TL', 'TS'];
    const firstTableContentArr2 = ['Insulation Contractors', 'Landscape Architects', 'Landscape Gardener & Contractors', 'Underpinning Services',
        'Pest Control', 'PD', 'PG', 'PL', 'PV', 'RC', 'SE', 'TL', 'TS'];

    var firstTablePositionY;

    // Title
    setHeadTitleStyle();
    doc.text(startPointX, startPointY, 'Property Assessment Notes');

    // Subtitles
    setTableTitleStyle();
    doc.text(startPointX, startPointY + 5, 'Professional and Trade Guide');

    // Explanation
    setExplanationStyle();
    doc.text(startPointX, startPointY + 10, 'Your architect may refer you to the  following professional or tradespeople:');

    // Horizontal lines
    setLinesStyle();
    firstTablePositionY = 35;
    doc.line(startPointX, firstTablePositionY, endPointX, firstTablePositionY);
    doc.line(startPointX, firstTablePositionY + firstTableTitleArr1.length * firstTableGap + 2, endPointX, firstTablePositionY + firstTableTitleArr1.length * firstTableGap + 2);

    // Titles in the table
    setTableContentStyle();
    firstTablePositionY += firstTableGap;
    for (var i = 0; i < firstTableTitleArr1.length; i++) {
        doc.text(startPointX + 2, firstTablePositionY, firstTableTitleArr1[i]);
        firstTablePositionY += firstTableGap;
    }

    // Content in the table
    setExplanationStyle();
    firstTablePositionY = 35;
    firstTablePositionY += firstTableGap;
    for (var i = 0; i < firstTableContentArr1.length; i++) {
        doc.text(startPointX + 10, firstTablePositionY, firstTableContentArr1[i]);
        firstTablePositionY += firstTableGap;
    }
}
