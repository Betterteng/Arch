/**
 * Created by TengShinan on 31/8/17.
 */
var doc = new jsPDF();

/*
* Generate the PDF file and save it.
* */
function generatePDF() {
    pageOne();
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

function pageOne() {
    var firstTableY = 35;
    var firstColY = 45;
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

    // Draw first table's horizontal lines
    setLinesStyle();
    for (var i = 0; i < 10; i++) {
        doc.line(15, firstTableY, 195, firstTableY);
        firstTableY += 6;
    }

    // Title of the table
    setTableTitleStyle();
    doc.text(17, 39, 'CUSTOMER DETAILS');

    // Content in the table (first column)
    setTableContentStyle();
    for (var i = 0; i < 8; i++) {
        doc.text(17, firstColY, firstColArr[i]);
        firstColY += 6;
    }
}