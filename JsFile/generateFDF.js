/**
 * Created by TengShinan on 31/8/17.
 */

var doc = new jsPDF();
var entryPageOne = {
    firstTable: [],
    secondTable: [],
    thirdTable: []
};

/*
 * Generate the PDF file and save it.
 * */
function generatePDF() {
    console.log('滕施男太帅了！');
    drawPageOne();
    // Save the PDF file
    doc.save('a4.pdf');
}

/*
 * Set the style of the title (largest one),
 * Call this function every time to starting writing a title
 * */
function setHeadTitleStyle() {
    doc.setFontSize(20);
    doc.setFontType("bold");
    doc.setTextColor(255, 0, 0);
}

function setExplanationStyle() {
    doc.setFontSize(9);
    doc.setFontType("normal");
    doc.setTextColor(0, 0, 0);
}

function setTableTitleStyle() {
    doc.setFontSize(9);
    doc.setFontType("bold");
    doc.setTextColor(255, 0, 0);
}

function setTableContentStyle() {
    doc.setFontSize(9);
    doc.setFontType("bold");
    doc.setTextColor(0, 0, 0);
}

function setLinesStyle() {
    doc.setDrawColor(228, 228, 228);
}

function drawPageOne() {
    var firstTableBorderY = 35;
    var firstTableContentY1 = 45;
    var firstTableContentY2 = 45;
    var firstColArr = ['Name:', 'Telephone:', 'Address of property:', 'Suburb:', 'Date of assessment:',
        'Existing use of property:', 'Weather conditions:', 'Verbal summary of:'];

    // Title
    setHeadTitleStyle();
    doc.text(15, 20, 'Property Assessment Report');

    // Explanation
    setExplanationStyle();
    doc.text(15, 25, 'This Property Assessment Report is a visual assessment of the conditions of the reasonably ' +
        'accessible areas of the property \nat the time of the assessment, including the subject residence and associated ' +
        'areas where the property is a unit or apartment.');

    // Draw table lines
    setLinesStyle();
    // Draw table's horizontal lines
    for (var i = 0; i < 10; i++) {
        doc.line(15, firstTableBorderY, 195, firstTableBorderY);
        firstTableBorderY += 6;
    }
    // Draw vertical lines
    doc.line(60, 41, 60, 89);
    doc.line(110, 47, 110, 53);
    doc.line(110, 59, 110, 71);
    doc.line(150, 59, 150, 65);

    // Subtitle of the table
    setTableTitleStyle();
    doc.text(17, 39, 'CUSTOMER DETAILS');

    // Content in the table
    setTableContentStyle();
    // First column
    for (var i = 0; i < 8; i++) {
        doc.text(17, firstTableContentY1, firstColArr[i]);
        firstTableContentY1 += 6;
    }
    // Second column
    doc.text(112, 51, 'Booking No:');
    doc.text(112, 63, 'State:');
    doc.text(112, 69, 'Time of Assessment:');
    // Third column
    doc.text(152, 63, 'Postcode:');

    // Fill user's input
    setExplanationStyle();
    getContentPageOne();
    for (var i = 0; i < 8; i++) {
        doc.text(65, firstTableContentY2, entryPageOne.firstTable[i]);
        firstTableContentY2 += 6;
    }
}

function getContentPageOne() {
    // The first table
    for (var i = 0; i < 12; i++) {
        if (document.getElementById("" + i).value == "") {
            alert("Empty input is not accept!");
            break;
        } else {
            entryPageOne.firstTable[i] = document.getElementById("" + i).value;
        }
    }
    console.log(entryPageOne.firstTable);
}