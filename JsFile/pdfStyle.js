/**
 * Created by TengShinan on 1/9/17.
 */

/**
 * Set the style of the title (largest one),
 * Call this function every time to starting writing a title
 */
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

function footerTextStyle() {
    doc.setFontSize(5);
    doc.setTextColor(128, 128, 128);
}

function setBigHeadTitleStyle() {
    doc.setFontSize(25);
    doc.setFontType("bold");
    doc.setTextColor(255, 0, 0);
}