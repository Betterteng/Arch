//Function 
function RemoveImage(imageID,removeButtonID,addButtonID)
{
    $(imageID).attr('src','#');
    var button = document.getElementById(removeButtonID);
    var addButton = document.getElementById(addButtonID);
   
    button.style.display = 'none';
    addButton.style.display = 'block';
    
    
}

//Action
function RemoveTimberSummaryImage0()
{
    RemoveImage('#TimberSummaryImage0','TimberSummaryRemoveButton0','AddTimberSummaryImageButton0');

}
function RemoveTimberSummaryImage1()
{
    RemoveImage('#TimberSummaryImage1','TimberSummaryRemoveButton1','AddTimberSummaryImageButton1');

}
function RemoveTimberSummaryImage2()
{
    RemoveImage('#TimberSummaryImage2','TimberSummaryRemoveButton2','AddTimberSummaryImageButton2');
}

function RemoveTimberRecommendationImage0()
{
    RemoveImage('#TimberRecommendationImage0','TimberRecommendationRemoveButton0','AddTimberRecommendationImageButton0');
//    var button = document.getElementById('addImageButton0');
//    button.style.display = 'block';
}
function RemoveTimberRecommendationImage1()
{
     RemoveImage('#TimberRecommendationImage1','TimberRecommendationRemoveButton1','AddTimberRecommendationImageButton1');
}
function RemoveTimberRecommendationImage2()
{
     RemoveImage('#TimberRecommendationImage2','TimberRecommendationRemoveButton2','AddTimberRecommendationImageButton2');
}

function RemoveTimberSiteImage0()
{
    RemoveImage('#TimberSiteImage0','TimberSiteRemoveButton0','AddTimberSiteImageButton0');
//    var button = document.getElementById('addImageButton0');
//    button.style.display = 'block';
}
function RemoveTimberSiteImage1()
{
    RemoveImage('#TimberSiteImage1','TimberSiteRemoveButton1','AddTimberSiteImageButton1');
//    var button = document.getElementById('addImageButton0');
//    button.style.display = 'block';
}
function RemoveTimberSiteImage2()
{
    RemoveImage('#TimberSiteImage2','TimberSiteRemoveButton2','AddTimberSiteImageButton2');
//    var button = document.getElementById('addImageButton0');
//    button.style.display = 'block';
}

function RemoveTimberExteriorImage0()
{
    RemoveImage('#TimberExteriorImage0','TimberExteriorRemoveButton0','AddTimberExteriorImageButton0');
//    var button = document.getElementById('addImageButton0');
//    button.style.display = 'block';
}
function RemoveTimberExteriorImage1()
{
    RemoveImage('#TimberExteriorImage1','TimberExteriorRemoveButton1','AddTimberExteriorImageButton1');
}
function RemoveTimberExteriorImage2()
{
    RemoveImage('#TimberExteriorImage2','TimberExteriorRemoveButton2','AddTimberExteriorImageButton2');
}

function RemoveTimberInteriorImage0()
{
    console.log("here")
    RemoveImage('#TimberInteriorImage0','TimberInteriorRemoveButton0','AddTimberInteriorImageButton0');
}
function RemoveTimberInteriorImage1()
{
    RemoveImage('#TimberInteriorImage1','TimberInteriorRemoveButton1','AddTimberInteriorImageButton1');
}
function RemoveTimberInteriorImage2()
{
    RemoveImage('#TimberInteriorImage2','TimberInteriorRemoveButton2','AddTimberInteriorImageButton2');
}

function RemoveTimberRoofImage0()
{
    RemoveImage('#TimberRoofImage0','TimberRoofRemoveButton0','AddTimberRoofImageButton0');
}
function RemoveTimberRoofImage1()
{
    RemoveImage('#TimberRoofImage1','TimberRoofRemoveButton1','AddTimberRoofImageButton1');
}
function RemoveTimberRoofImage2()
{
    RemoveImage('#TimberRoofImage2','TimberRoofRemoveButton2','AddTimberRoofImageButton2');
}

function RemoveTimberSubfloorImage0()
{
    RemoveImage('#TimberSubfloorImage0','TimberSubfloorRemoveButton0','AddTimberSubfloorImageButton0');
}
function RemoveTimberSubfloorImage1()
{
    RemoveImage('#TimberSubfloorImage1','TimberSubfloorRemoveButton1','AddTimberSubfloorImageButton1');
}
function RemoveTimberSubfloorImage2()
{
    RemoveImage('#TimberSubfloorImage2','TimberSubfloorRemoveButton2','AddTimberSubfloorImageButton2');
}


function RemoveAssessmentSiteImage0()
{
    RemoveImage('#AssessmentSiteImage0','AssessmentSiteRemoveButton0','AddAssessmentSiteImageButton0');
}
function RemoveAssessmentSiteImage1()
{
    RemoveImage('#AssessmentSiteImage1','AssessmentSiteRemoveButton1','AddAssessmentSiteImageButton1');
}
function RemoveAssessmentSiteImage2()
{
    RemoveImage('#AssessmentSiteImage2','AssessmentSiteRemoveButton2','AddAssessmentSiteImageButton2');
}
function RemoveAssessmentSiteImage3()
{
    RemoveImage('#AssessmentSiteImage3','AssessmentSiteRemoveButton3','AddAssessmentSiteImageButton3');
}
function RemoveAssessmentSiteImage4()
{
    RemoveImage('#AssessmentSiteImage4','AssessmentSiteRemoveButton4','AddAssessmentSiteImageButton4');
}
function RemoveAssessmentSiteImage5()
{
    RemoveImage('#AssessmentSiteImage5','AssessmentSiteRemoveButton5','AddAssessmentSiteImageButton5');
}

function RemoveAssessmentExteriorImage0()
{
    RemoveImage('#AssessmentExteriorImage0','AssessmentExteriorRemoveButton0','AddAssessmentExteriorImageButton0');
}
function RemoveAssessmentExteriorImage1()
{
    RemoveImage('#AssessmentExteriorImage1','AssessmentExteriorRemoveButton1','AddAssessmentExteriorImageButton1');
}
function RemoveAssessmentExteriorImage2()
{
    RemoveImage('#AssessmentExteriorImage2','AssessmentExteriorRemoveButton2','AddAssessmentExteriorImageButton2');
}
function RemoveAssessmentExteriorImage3()
{
    RemoveImage('#AssessmentExteriorImage3','AssessmentExteriorRemoveButton3','AddAssessmentExteriorImageButton3');
}
function RemoveAssessmentExteriorImage4()
{
    RemoveImage('#AssessmentExteriorImage4','AssessmentExteriorRemoveButton4','AddAssessmentExteriorImageButton4');
}
function RemoveAssessmentExteriorImage5()
{
    RemoveImage('#AssessmentExteriorImage5','AssessmentExteriorRemoveButton5','AddAssessmentExteriorImageButton5');
}


function RemoveAssessmentInteriorLivingImage0()
{
    RemoveImage('#AssessmentInteriorLivingImage0','AssessmentInteriorLivingRemoveButton0','AddAssessmentInteriorLivingImageButton0');
}
function RemoveAssessmentInteriorLivingImage1()
{
    RemoveImage('#AssessmentInteriorLivingImage1','AssessmentInteriorLivingRemoveButton1','AddAssessmentInteriorLivingImageButton1');
}
function RemoveAssessmentInteriorLivingImage2()
{
    RemoveImage('#AssessmentInteriorLivingImage2','AssessmentInteriorLivingRemoveButton2','AddAssessmentInteriorLivingImageButton2');
}
function RemoveAssessmentInteriorLivingImage3()
{
    RemoveImage('#AssessmentInteriorLivingImage3','AssessmentInteriorLivingRemoveButton3','AddAssessmentInteriorLivingImageButton3');
}
function RemoveAssessmentInteriorLivingImage4()
{
    RemoveImage('#AssessmentInteriorLivingImage4','AssessmentInteriorLivingRemoveButton4','AddAssessmentInteriorLivingImageButton4');
}
function RemoveAssessmentInteriorLivingImage5()
{
    RemoveImage('#AssessmentInteriorLivingImage5','AssessmentInteriorLivingRemoveButton5','AddAssessmentInteriorLivingImageButton5');
}

function RemoveAssessmentInteriorBedroomImage0()
{
    RemoveImage('#AssessmentInteriorBedroomImage0','AssessmentInteriorBedroomRemoveButton0','AddAssessmentInteriorBedroomImageButton0');
}
function RemoveAssessmentInteriorBedroomImage1()
{
    RemoveImage('#AssessmentInteriorBedroomImage1','AssessmentInteriorBedroomRemoveButton1','AddAssessmentInteriorBedroomImageButton1');
}
function RemoveAssessmentInteriorBedroomImage2()
{
    RemoveImage('#AssessmentInteriorBedroomImage2','AssessmentInteriorBedroomRemoveButton2','AddAssessmentInteriorBedroomImageButton2');
}
function RemoveAssessmentInteriorBedroomImage3()
{
    RemoveImage('#AssessmentInteriorBedroomImage3','AssessmentInteriorBedroomRemoveButton3','AddAssessmentInteriorBedroomImageButton3');
}
function RemoveAssessmentInteriorBedroomImage4()
{
    RemoveImage('#AssessmentInteriorBedroomImage4','AssessmentInteriorBedroomRemoveButton4','AddAssessmentInteriorBedroomImageButton4');
}
function RemoveAssessmentInteriorBedroomImage5()
{
    RemoveImage('#AssessmentInteriorBedroomImage5','AssessmentInteriorBedroomRemoveButton5','AddAssessmentInteriorBedroomImageButton5');
}

function RemoveAssessmentInteriorServiceImage0()
{
    RemoveImage('#AssessmentInteriorServiceImage0','AssessmentInteriorServiceRemoveButton0','AddAssessmentInteriorServiceImageButton0');
}
function RemoveAssessmentInteriorServiceImage1()
{
    RemoveImage('#AssessmentInteriorServiceImage1','AssessmentInteriorServiceRemoveButton1','AddAssessmentInteriorServiceImageButton1');
}
function RemoveAssessmentInteriorServiceImage2()
{
    RemoveImage('#AssessmentInteriorServiceImage2','AssessmentInteriorServiceRemoveButton2','AddAssessmentInteriorServiceImageButton2');
}

