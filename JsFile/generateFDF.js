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

    drawPageOne();
    doc.addPage();
    drawPageTwo();
    doc.addPage();
    drawPageThree();

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
        '• Condition, adequacy or compliance of electrical, gas and plumbing systems including roof plumbing, underground pipes or \n' +
        '  drainage systems; \n' +
        '• Operation adequacy or compliance of security and communications systems, smoke detectors, building services, building \n' +
        '  automation, electrically operated doors including garage doors, plant, equipment, mechanical, gas or electrical appliances \n' +
        '  and fittings; \n' +
        '• Footings below ground, soil conditions, site factors and hazards; \n' +
        '• Compliance with legal, planning, regulatory including Building Code of Australia, sustainability or environmental matters \n' +
        '  including but not limited to the adequacy or safety of insulation, waterproof membranes and/or other installations, \n' +
        '  Bushfire Attack Level assessments; \n' +
        '• Timber, metal or other framing sizes and adequacy.');

    /**
     * Subtitles of the tables
     * */
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
    doc.text(15, 20, 'Property Assessment Report');
}