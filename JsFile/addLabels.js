/**
 * Created by TengShinan on 10/9/17.
 */
var siteGardenFlag1 = true;
var siteGardenFlag2 = true;
var propertyExteriorFlag1 = true;
var propertyExteriorFlag2 = true;

function addSiteGardenLabel1() {
    if (siteGardenFlag1) {
        document.getElementById('siteGardenLbl1').innerHTML = '';
        document.getElementById('siteGardenLbl1').innerHTML += document.getElementById('siteGardenSlc1').value + ' ';
        siteGardenFlag1 = false;
    } else {
        document.getElementById('siteGardenLbl1').innerHTML += document.getElementById('siteGardenSlc1').value + ' ';
    }
}

function addSiteGardenLabel2() {
    if (siteGardenFlag2) {
        document.getElementById('siteGardenLbl2').innerHTML = '';
        document.getElementById('siteGardenLbl2').innerHTML += document.getElementById('siteGardenSlc2').value + ' ';
        siteGardenFlag2 = false;
    } else {
        document.getElementById('siteGardenLbl2').innerHTML += document.getElementById('siteGardenSlc2').value + ' ';
    }
}

function addPropertyExteriorLabel1() {
    if (propertyExteriorFlag1) {
        document.getElementById('propertyExteriorLbl1').innerHTML = '';
        document.getElementById('propertyExteriorLbl1').innerHTML += document.getElementById('propertyExteriorSlc1').value + ' ';
        propertyExteriorFlag1 = false;
    } else {
        document.getElementById('propertyExteriorLbl1').innerHTML += document.getElementById('propertyExteriorSlc1').value + ' ';
    }
}

function addPropertyExteriorLabel2() {
    if (propertyExteriorFlag2) {
        document.getElementById('propertyExteriorLbl2').innerHTML = '';
        document.getElementById('propertyExteriorLbl2').innerHTML += document.getElementById('propertyExteriorSlc2').value + ' ';
        propertyExteriorFlag2 = false;
    } else {
        document.getElementById('propertyExteriorLbl2').innerHTML += document.getElementById('propertyExteriorSlc2').value + ' ';
    }
}