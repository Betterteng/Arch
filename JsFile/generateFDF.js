/**
 * Created by TengShinan on 31/8/17.
 */

var doc = new jsPDF();
var entryPageOne = {firstTable: [], secondTable: [], thirdTable: []};

/**
 * Generate the PDF file and save it.
 * */
function generatePDF() {
    console.log('滕施男太帅了！');
    drawPageOne();
    // Save the PDF file
    doc.save('a4.pdf');
}

function drawPageOne() {
    var firstTableBorderY = 35;
    var firstTableContentY1 = 45;
    var secondTableBorderY = 100;
    var secondTableContentY1 = 110;
    var firstColArr = ['Name:', 'Telephone:', 'Address of property:', 'Suburb:', 'Date of assessment:',
        'Existing use of property:', 'Weather conditions:', 'Verbal summary of:'];
    var secondTableLeftContentArr = ['Archicentre Australia Architect:', 'Address:', 'Email Address:',
        'Registration No:', 'Phone:'];

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
    // Draw vertical lines
    doc.line(110, 47, 110, 53);
    doc.line(110, 59, 110, 71);
    doc.line(150, 59, 150, 65);

    // Subtitle of the table
    setTableTitleStyle();
    doc.text(17, 39, 'CUSTOMER DETAILS');
    doc.text(17, 104, 'ARCHITECT DETAILS');

    /**
     * Content in the tables
     * */
    setTableContentStyle();
    // First table - first column
    for (var i = 0; i < 8; i++) {
        doc.text(17, firstTableContentY1, firstColArr[i]);
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

    /**
     *  Fill user's input - if you want to only draw the skeletons such as table borders,
     *  comment these methods below.
     * */
    //fillUserInputPageOne();
}

function fillUserInputPageOne() {
    var firstTableContentY2 = 45;

    setExplanationStyle();

    // The first table
    for (var i = 0; i < 12; i++) {
        if (document.getElementById("" + i).value == "") {
            alert("Empty input is not accept!");
            break;
        } else {
            entryPageOne.firstTable[i] = document.getElementById("" + i).value;
        }
    }
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

    console.log(entryPageOne.firstTable);
}