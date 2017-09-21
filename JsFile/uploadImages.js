//button trigger events，"choose all photos" button
function TimberSummaryUploadImages()
{
     document.getElementById('TimberSummaryUploadImages').click();
}
function TimberRecommendationUploadImages()
{
     document.getElementById('TimberRecommendationUploadImages').click();
}
function TimberSiteUploadImages()
{
    document.getElementById('TimberSiteUploadImages').click();
}
function TimberExteriorUploadImages()
{
    document.getElementById('TimberExteriorUploadImages').click();
}
function TimberInteriorUploadImages()
{
    document.getElementById('TimberInteriorUploadImages').click();
}
function TimberRoofUploadImages()
{
    document.getElementById('TimberRoofUploadImages').click();
}
function TimberSubfloorUploadImages()
{
    document.getElementById('TimberSubfloorUploadImages').click();
}

function AseessmentSiteUploadImages()
{
    document.getElementById('AseessmentSiteUploadImages').click();
}
function AssessmentExteriorUploadImages()
{
    document.getElementById('AssessmentExteriorUploadImages').click();
}
function AssessmentInteriorLivingUploadImages()
{

    document.getElementById('AssessmentInteriorLivingUploadImages').click();
}
function AssessmentInteriorBedroomUploadImages()
{

    document.getElementById('AssessmentInteriorBedroomUploadImages').click();
}
function AseessmentInteriorServiceUploadImages()
{
    document.getElementById('AseessmentInteriorServiceUploadImages').click();
}


//Upload all images
$("#TimberSummaryUploadImages").change(function() 
{
  read3ImagesURL(this,'AddTimberSummaryImageButton0','AddTimberSummaryImageButton1','AddTimberSummaryImageButton2','TimberSummaryImage0','TimberSummaryImage1','TimberSummaryImage2','TimberSummaryImageText0','TimberSummaryImageText1','TimberSummaryImageText2','TimberSummaryRemoveButton0','TimberSummaryRemoveButton1','TimberSummaryRemoveButton2');
});
$("#TimberRecommendationUploadImages").change(function() 
{
  read3ImagesURL(this,'AddTimberRecommendationImageButton0','AddTimberRecommendationImageButton1','AddTimberRecommendationImageButton2','TimberRecommendationImage0','TimberRecommendationImage1','TimberRecommendationImage2','TimberRecommendationImageText0','TimberRecommendationImageText1','TimberRecommendationImageText2','TimberRecommendationRemoveButton0','TimberRecommendationRemoveButton1','TimberRecommendationRemoveButton2');
});
$("#TimberSiteUploadImages").change(function()
{
  read3ImagesURL(this,'AddTimberSiteImageButton0','AddTimberSiteImageButton1','AddTimberSiteImageButton2','TimberSiteImage0','TimberSiteImage1','TimberSiteImage2','TimberSiteImageText0','TimberSiteImageText1','TimberSiteImageText2','TimberSiteRemoveButton0','TimberSiteRemoveButton1','TimberSiteRemoveButton2'); 
});
$("#TimberExteriorUploadImages").change(function()
{
  read3ImagesURL(this,'AddTimberExteriorImageButton0','AddTimberExteriorImageButton1','AddTimberExteriorImageButton2','TimberExteriorImage0','TimberExteriorImage1','TimberExteriorImage2','TimberExteriorImageText0','TimberExteriorImageText1','TimberExteriorImageText2','TimberExteriorRemoveButton0','TimberExteriorRemoveButton1','TimberExteriorRemoveButton2'); 
});
$("#TimberInteriorUploadImages").change(function()
{
  read3ImagesURL(this,'AddTimberInteriorImageButton0','AddTimberInteriorImageButton1','AddTimberInteriorImageButton2','TimberInteriorImage0','TimberInteriorImage1','TimberInteriorImage2','TimberInteriorImageText0','TimberInteriorImageText1','TimberInteriorImageText2','TimberInteriorRemoveButton0','TimberInteriorRemoveButton1','TimberInteriorRemoveButton2'); 
});
$("#TimberRoofUploadImages").change(function()
{
  read3ImagesURL(this,'AddTimberRoofImageButton0','AddTimberRoofImageButton1','AddTimberRoofImageButton2','TimberRoofImage0','TimberRoofImage1','TimberRoofImage2','TimberRoofImageText0','TimberRoofImageText1','TimberRoofImageText2','TimberRoofRemoveButton0','TimberRoofRemoveButton1','TimberRoofRemoveButton2'); 
});
$("#TimberSubfloorUploadImages").change(function()
{
  read3ImagesURL(this,'AddTimberSubfloorImageButton0','AddTimberSubfloorImageButton1','AddTimberSubfloorImageButton2','TimberSubfloorImage0','TimberSubfloorImage1','TimberSubfloorImage2','TimberSubfloorImageText0','TimberSubfloorImageText1','TimberSubfloorImageText2','TimberSubfloorRemoveButton0','TimberSubfloorRemoveButton1','TimberSubfloorRemoveButton2'); 
});


$("#AseessmentSiteUploadImages").change(function()
{
  read3ImagesURL(this,'AddAssessmentSiteImageButton0','AddAssessmentSiteImageButton1','AddAssessmentSiteImageButton2','AssessmentSiteImage0','AssessmentSiteImage1','AssessmentSiteImage2','AssessmentSiteImageText0','AssessmentSiteImageText1','AssessmentSiteImageText2','AssessmentSiteRemoveButton0','AssessmentSiteRemoveButton1','AssessmentSiteRemoveButton2'); 
//  read6ImagesURL(this,'AddAssessmentSiteImageButton0','AddAssessmentSiteImageButton1','AddAssessmentSiteImageButton2','AddAssessmentSiteImageButton3','AddAssessmentSiteImageButton4','AddAssessmentSiteImageButton5','AssessmentSiteImage0','AssessmentSiteImage1','AssessmentSiteImage2','AssessmentSiteImage3','AssessmentSiteImage4','AssessmentSiteImage5','AssessmentSiteImageText0','AssessmentSiteImageText1','AssessmentSiteImageText2','AssessmentSiteImageText3','AssessmentSiteImageText4','AssessmentSiteImageText5','AssessmentSiteRemoveButton0','AssessmentSiteRemoveButton1','AssessmentSiteRemoveButton2','AssessmentSiteRemoveButton3','AssessmentSiteRemoveButton4','AssessmentSiteRemoveButton5'); 
});
$("#AssessmentExteriorUploadImages").change(function()
{
  read6ImagesURL(this,'AddAssessmentExteriorImageButton0','AddAssessmentExteriorImageButton1','AddAssessmentExteriorImageButton2','AddAssessmentExteriorImageButton3','AddAssessmentExteriorImageButton4','AddAssessmentExteriorImageButton5','AssessmentExteriorImage0','AssessmentExteriorImage1','AssessmentExteriorImage2','AssessmentExteriorImage3','AssessmentExteriorImage4','AssessmentExteriorImage5','AssessmentExteriorImageText0','AssessmentExteriorImageText1','AssessmentExteriorImageText2','AssessmentExteriorImageText3','AssessmentExteriorImageText4','AssessmentExteriorImageText5','AssessmentExteriorRemoveButton0','AssessmentExteriorRemoveButton1','AssessmentExteriorRemoveButton2','AssessmentExteriorRemoveButton3','AssessmentExteriorRemoveButton4','AssessmentExteriorRemoveButton5'); 
});
$("#AssessmentInteriorLivingUploadImages").change(function()
{
  read6ImagesURL(this,'AddAssessmentInteriorLivingImageButton0','AddAssessmentInteriorLivingImageButton1','AddAssessmentInteriorLivingImageButton2','AddAssessmentInteriorLivingImageButton3','AddAssessmentInteriorLivingImageButton4','AddAssessmentInteriorLivingImageButton5','AssessmentInteriorLivingImage0','AssessmentInteriorLivingImage1','AssessmentInteriorLivingImage2','AssessmentInteriorLivingImage3','AssessmentInteriorLivingImage4','AssessmentInteriorLivingImage5','AssessmentInteriorLivingImageText0','AssessmentInteriorLivingImageText1','AssessmentInteriorLivingImageText2','AssessmentInteriorLivingImageText3','AssessmentInteriorLivingImageText4','AssessmentInteriorLivingImageText5','AssessmentInteriorLivingRemoveButton0','AssessmentInteriorLivingRemoveButton1','AssessmentInteriorLivingRemoveButton2','AssessmentInteriorLivingRemoveButton3','AssessmentInteriorLivingRemoveButton4','AssessmentInteriorLivingRemoveButton5'); 
});
$("#AssessmentInteriorBedroomUploadImages").change(function()
{
  read6ImagesURL(this,'AddAssessmentInteriorBedroomImageButton0','AddAssessmentInteriorBedroomImageButton1','AddAssessmentInteriorBedroomImageButton2','AddAssessmentInteriorBedroomImageButton3','AddAssessmentInteriorBedroomImageButton4','AddAssessmentInteriorBedroomImageButton5','AssessmentInteriorBedroomImage0','AssessmentInteriorBedroomImage1','AssessmentInteriorBedroomImage2','AssessmentInteriorBedroomImage3','AssessmentInteriorBedroomImage4','AssessmentInteriorBedroomImage5','AssessmentInteriorBedroomImageText0','AssessmentInteriorBedroomImageText1','AssessmentInteriorBedroomImageText2','AssessmentInteriorBedroomImageText3','AssessmentInteriorBedroomImageText4','AssessmentInteriorBedroomImageText5','AssessmentInteriorBedroomRemoveButton0','AssessmentInteriorBedroomRemoveButton1','AssessmentInteriorBedroomRemoveButton2','AssessmentInteriorBedroomRemoveButton3','AssessmentInteriorBedroomRemoveButton4','AssessmentInteriorBedroomRemoveButton5'); 
});
$("#AseessmentInteriorServiceUploadImages").change(function()
{
    console.log("here 1")
  read3ImagesURL(this,'AddAssessmentInteriorServiceImageButton0','AddAssessmentInteriorServiceImageButton1','AddAssessmentInteriorServiceImageButton2','AssessmentInteriorServiceImage0','AssessmentInteriorServiceImage1','AssessmentInteriorServiceImage2','AssessmentInteriorServiceImageText0','AssessmentInteriorServiceImageText1','AssessmentInteriorServiceImageText2','AssessmentInteriorServiceRemoveButton0','AssessmentInteriorServiceRemoveButton1','AssessmentInteriorServiceRemoveButton2'); 
});



//Timber - Summary upload one image per time
$("#TimberSummaryUploadImage0").change(function()
{
    readOneImageURL(this,'TimberSummaryImage0','AddTimberSummaryImageButton0','TimberSummaryRemoveButton0','TimberSummaryImageText0');
});
$("#TimberSummaryUploadImage1").change(function()
{
    readOneImageURL(this,'TimberSummaryImage1','AddTimberSummaryImageButton1','TimberSummaryRemoveButton1','TimberSummaryImageText1');
});
$("#TimberSummaryUploadImage2").change(function()
{
    readOneImageURL(this,'TimberSummaryImage2','AddTimberSummaryImageButton2','TimberSummaryRemoveButton2','TimberSummaryImageText2');
});

//Timber-Recommendation upload one image per time
$("#TimberRecommendationUploadImage0").change(function()
{
    readOneImageURL(this,'TimberRecommendationImage0','AddTimberRecommendationImageButton0','TimberRecommendationRemoveButton0','TimberRecommendationImageText0');
});
$("#TimberRecommendationUploadImage1").change(function()
{
    
    readOneImageURL(this,'TimberRecommendationImage1','AddTimberRecommendationImageButton1','TimberRecommendationRemoveButton1','TimberRecommendationImageText1');
});
$("#TimberRecommendationUploadImage2").change(function()
{
    
    readOneImageURL(this,'TimberRecommendationImage2','AddTimberRecommendationImageButton2','TimberRecommendationRemoveButton2','TimberRecommendationImageText2');
});

//Timber - Site upload one image per time
$("#TimberSiteUploadImage0").change(function()
{
    readOneImageURL(this,'TimberSiteImage0','AddTimberSiteImageButton0','TimberSiteRemoveButton0','TimberSiteImageText0');
});
$("#TimberSiteUploadImage1").change(function()
{
    console.log("here?");
    readOneImageURL(this,'TimberSiteImage1','AddTimberSiteImageButton1','TimberSiteRemoveButton1','TimberSiteImageText1');
});
$("#TimberSiteUploadImage2").change(function()
{
    readOneImageURL(this,'TimberSiteImage2','AddTimberSiteImageButton2','TimberSiteRemoveButton2','TimberSiteImageText2');
});

//Timber - Exterior upload one image per time
$("#TimberExteriorUploadImage0").change(function()
{
    readOneImageURL(this,'TimberExteriorImage0','AddTimberExteriorImageButton0','TimberExteriorRemoveButton0','TimberExteriormageText0');
});
$("#TimberExteriorUploadImage1").change(function()
{
    readOneImageURL(this,'TimberExteriorImage1','AddTimberExteriorImageButton1','TimberExteriorRemoveButton1','TimberExteriormageText1');
});
$("#TimberExteriorUploadImage2").change(function()
{
    readOneImageURL(this,'TimberExteriorImage2','AddTimberExteriorImageButton2','TimberExteriorRemoveButton2','TimberExteriormageText2');
});

//Timber - Interior upload one image per time
$("#TimberInteriorUploadImage0").change(function()
{
    readOneImageURL(this,'TimberInteriorImage0','AddTimberInteriorImageButton0','TimberInteriorRemoveButton0','TimberInteriorImageText0');
});
$("#TimberInteriorUploadImage1").change(function()
{
    readOneImageURL(this,'TimberInteriorImage1','AddTimberInteriorImageButton1','TimberInteriorRemoveButton1','TimberInteriorImageText1');
});
$("#TimberInteriorUploadImage2").change(function()
{
    readOneImageURL(this,'TimberInteriorImage2','AddTimberInteriorImageButton2','TimberInteriorRemoveButton2','TimberInteriorImageText2');
});

//Timber - Roof space upload one imge per time
$("#TimberRoofUploadImage0").change(function()
{
    readOneImageURL(this,'TimberRoofImage0','AddTimberRoofImageButton0','TimberRoofRemoveButton0','TimberRoofImageText0');
});
$("#TimberRoofUploadImage1").change(function()
{
    readOneImageURL(this,'TimberRoofImage1','AddTimberRoofImageButton1','TimberRoofRemoveButton1','TimberRoofImageText1');
});
$("#TimberRoofUploadImage2").change(function()
{
    readOneImageURL(this,'TimberRoofImage2','AddTimberRoofImageButton2','TimberRoofRemoveButton2','TimberRoofImageText2');
});

//Timber - Sub Floor upload one image per time
$("#TimberSubfloorUploadImage0").change(function()
{
    readOneImageURL(this,'TimberSubfloorImage0','AddTimberSubfloorImageButton0','TimberSubfloorRemoveButton0','TimberSubfloorImageText0');
});
$("#TimberSubfloorUploadImage1").change(function()
{
    readOneImageURL(this,'TimberSubfloorImage1','AddTimberSubfloorImageButton1','TimberSubfloorRemoveButton1','TimberSubfloorImageText1');
});
$("#TimberSubfloorUploadImage2").change(function()
{
    readOneImageURL(this,'TimberSubfloorImage2','AddTimberSubfloorImageButton2','TimberSubfloorRemoveButton2','TimberSubfloorImageText2');
});

//Assessment - Site and Garder, upload one image per time
$("#AssessmentSiteUploadImage0").change(function()
{
   readOneImageURL(this,'AssessmentSiteImage0','AddAssessmentSiteImageButton0','AssessmentSiteRemoveButton0','AssessmentSiteImageText0'); 
});

$("#AssessmentSiteUploadImage1").change(function()
{
   readOneImageURL(this,'AssessmentSiteImage1','AddAssessmentSiteImageButton1','AssessmentSiteRemoveButton1','AssessmentSiteImageText1'); 
});

$("#AssessmentSiteUploadImage2").change(function()
{
   readOneImageURL(this,'AssessmentSiteImage2','AddAssessmentSiteImageButton2','AssessmentSiteRemoveButton2','AssessmentSiteImageText2'); 
});

$("#AssessmentSiteUploadImage3").change(function()
{
   readOneImageURL(this,'AssessmentSiteImage3','AddAssessmentSiteImageButton3','AssessmentSiteRemoveButton3','AssessmentSiteImageText3'); 
});

$("#AssessmentSiteUploadImage4").change(function()
{
   readOneImageURL(this,'AssessmentSiteImage4','AddAssessmentSiteImageButton4','AssessmentSiteRemoveButton4','AssessmentSiteImageText4'); 
});

$("#AssessmentSiteUploadImage5").change(function()
{
   readOneImageURL(this,'AssessmentSiteImage5','AddAssessmentSiteImageButton5','AssessmentSiteRemoveButton5','AssessmentSiteImageText5'); 
});

//Assessment - Exterior, upload one image per time
$("#AssessmentExteriorUploadImage0").change(function()
{
   readOneImageURL(this,'AssessmentExteriorImage0','AddAssessmentExteriorImageButton0','AssessmentExteriorRemoveButton0','AssessmentExteriorImageText0'); 
});
$("#AssessmentExteriorUploadImage1").change(function()
{
   readOneImageURL(this,'AssessmentExteriorImage1','AddAssessmentExteriorImageButton1','AssessmentExteriorRemoveButton1','AssessmentExteriorImageText1'); 
});
$("#AssessmentExteriorUploadImage2").change(function()
{
   readOneImageURL(this,'AssessmentExteriorImage2','AddAssessmentExteriorImageButton2','AssessmentExteriorRemoveButton2','AssessmentExteriorImageText2'); 
});
$("#AssessmentExteriorUploadImage3").change(function()
{
   readOneImageURL(this,'AssessmentExteriorImage3','AddAssessmentExteriorImageButton3','AssessmentExteriorRemoveButton3','AssessmentExteriorImageText3'); 
});
$("#AssessmentExteriorUploadImage4").change(function()
{
   readOneImageURL(this,'AssessmentExteriorImage4','AddAssessmentExteriorImageButton4','AssessmentExteriorRemoveButton4','AssessmentExteriorImageText4'); 
});
$("#AssessmentExteriorUploadImage5").change(function()
{
   readOneImageURL(this,'AssessmentExteriorImage5','AddAssessmentExteriorImageButton5','AssessmentExteriorRemoveButton5','AssessmentExteriorImageText5'); 
});

//Assessment - Interior Living Room, upload one image per time

$("#AssessmentInteriorLivingUploadImage0").change(function()
{
   readOneImageURL(this,'AssessmentInteriorLivingImage0','AddAssessmentInteriorLivingImageButton0','AssessmentInteriorLivingRemoveButton0','AssessmentInteriorLivingImageText0'); 
});
$("#AssessmentInteriorLivingUploadImage1").change(function()
{
   readOneImageURL(this,'AssessmentInteriorLivingImage1','AddAssessmentInteriorLivingImageButton1','AssessmentInteriorLivingRemoveButton1','AssessmentInteriorLivingImageText1'); 
});
$("#AssessmentInteriorLivingUploadImage2").change(function()
{
   readOneImageURL(this,'AssessmentInteriorLivingImage2','AddAssessmentInteriorLivingImageButton2','AssessmentInteriorLivingRemoveButton2','AssessmentInteriorLivingImageText2'); 
});
$("#AssessmentInteriorLivingUploadImage3").change(function()
{
   readOneImageURL(this,'AssessmentInteriorLivingImage3','AddAssessmentInteriorLivingImageButton3','AssessmentInteriorLivingRemoveButton3','AssessmentInteriorLivingImageText3'); 
});
$("#AssessmentInteriorLivingUploadImage4").change(function()
{
   readOneImageURL(this,'AssessmentInteriorLivingImage4','AddAssessmentInteriorLivingImageButton4','AssessmentInteriorLivingRemoveButton4','AssessmentInteriorLivingImageText4'); 
});
$("#AssessmentInteriorLivingUploadImage5").change(function()
{
   readOneImageURL(this,'AssessmentInteriorLivingImage5','AddAssessmentInteriorLivingImageButton5','AssessmentInteriorLivingRemoveButton5','AssessmentInteriorLivingImageText5'); 
});

//Assessment - Interior Bedroom, upload one image per tim3
$("#AssessmentInteriorBedroomUploadImage0").change(function()
{
    console.log("here");
   readOneImageURL(this,'AssessmentInteriorBedroomImage0','AddAssessmentInteriorBedroomImageButton0','AssessmentInteriorBedroomRemoveButton0','AssessmentInteriorBedroomImageText0'); 
});
$("#AssessmentInteriorBedroomUploadImage1").change(function()
{
   readOneImageURL(this,'AssessmentInteriorBedroomImage1','AddAssessmentInteriorBedroomImageButton1','AssessmentInteriorBedroomRemoveButton1','AssessmentInteriorBedroomImageText1'); 
});
$("#AssessmentInteriorBedroomUploadImage2").change(function()
{
   readOneImageURL(this,'AssessmentInteriorBedroomImage2','AddAssessmentInteriorBedroomImageButton2','AssessmentInteriorBedroomRemoveButton2','AssessmentInteriorBedroomImageText2'); 
});
$("#AssessmentInteriorBedroomUploadImage3").change(function()
{
   readOneImageURL(this,'AssessmentInteriorBedroomImage3','AddAssessmentInteriorBedroomImageButton3','AssessmentInteriorBedroomRemoveButton3','AssessmentInteriorBedroomImageText3'); 
});
$("#AssessmentInteriorBedroomUploadImage4").change(function()
{
   readOneImageURL(this,'AssessmentInteriorBedroomImage4','AddAssessmentInteriorBedroomImageButton4','AssessmentInteriorBedroomRemoveButton4','AssessmentInteriorBedroomImageText4'); 
});
$("#AssessmentInteriorBedroomUploadImage5").change(function()
{
   readOneImageURL(this,'AssessmentInteriorBedroomImage5','AddAssessmentInteriorBedroomImageButton5','AssessmentInteriorBedroomRemoveButton5','AssessmentInteriorBedroomImageText5'); 
});

//Assessment - Interior Service, upload one image per time
$("#AssessmentInteriorServiceUploadImage0").change(function()
{
    console.log("here");
   readOneImageURL(this,'AssessmentInteriorServiceImage0','AddAssessmentInteriorServiceImageButton0','AssessmentInteriorServiceRemoveButton0','AssessmentInteriorServiceImageText0'); 
});
$("#AssessmentInteriorServiceUploadImage1").change(function()
{
    console.log("here");
   readOneImageURL(this,'AssessmentInteriorServiceImage1','AddAssessmentInteriorServiceImageButton1','AssessmentInteriorServiceRemoveButton1','AssessmentInteriorServiceImageText1'); 
});
$("#AssessmentInteriorServiceUploadImage2").change(function()
{
    console.log("here");
   readOneImageURL(this,'AssessmentInteriorServiceImage2','AddAssessmentInteriorServiceImageButton2','AssessmentInteriorServiceRemoveButton2','AssessmentInteriorServiceImageText2'); 
});


//button trigger events Only upload one iamge，“add" button
function AddTimberSummaryImage0()
{
    document.getElementById('TimberSummaryUploadImage0').click();
}
function AddTimberSummaryImage1()
{
    document.getElementById('TimberSummaryUploadImage1').click();
}
function AddTimberSummaryImage2()
{
    document.getElementById('TimberSummaryUploadImage2').click();
}

function AddTimberRecommendationImage0()
{
    document.getElementById('TimberRecommendationUploadImage0').click();
}
function AddTimberRecommendationImage1()
{
    document.getElementById('TimberRecommendationUploadImage1').click();
}
function AddTimberRecommendationImage2()
{
    document.getElementById('TimberRecommendationUploadImage2').click();
}


function AddTimberSiteImage0()
{
    document.getElementById('TimberSiteUploadImage0').click();
}
function AddTimberSiteImage1()
{
    document.getElementById('TimberSiteUploadImage1').click();
}
function AddTimberSiteImage2()
{
    document.getElementById('TimberSiteUploadImage2').click();
}

function AddTimberExteriorImage0()
{
    document.getElementById('TimberExteriorUploadImage0').click();
}
function AddTimberExteriorImage1()
{
    document.getElementById('TimberExteriorUploadImage1').click();
}
function AddTimberExteriorImage2()
{
    document.getElementById('TimberExteriorUploadImage2').click();
}

function AddTimberInteriorImage0()
{
    document.getElementById('TimberInteriorUploadImage0').click();
}
function AddTimberInteriorImage1()
{
    document.getElementById('TimberInteriorUploadImage1').click();
}
function AddTimberInteriorImage2()
{
    document.getElementById('TimberInteriorUploadImage2').click();
}

function AddTimberRoofImage0()
{
    document.getElementById('TimberRoofUploadImage0').click();
}
function AddTimberRoofImage1()
{
    document.getElementById('TimberRoofUploadImage1').click();
}
function AddTimberRoofImage2()
{
    document.getElementById('TimberRoofUploadImage2').click();
}

function AddTimberSubfloorImage0()
{
    document.getElementById('TimberSubfloorUploadImage0').click();
}
function AddTimberSubfloorImage1()
{
    document.getElementById('TimberSubfloorUploadImage1').click();
}
function AddTimberSubfloorImage2()
{
    document.getElementById('TimberSubfloorUploadImage2').click();
}

function AddAssessmentSiteImage0()
{
    document.getElementById('AssessmentSiteUploadImage0').click();
}
function AddAssessmentSiteImage1()
{
    document.getElementById('AssessmentSiteUploadImage1').click();
}
function AddAssessmentSiteImage2()
{
    document.getElementById('AssessmentSiteUploadImage2').click();
}
function AddAssessmentSiteImage3()
{
    document.getElementById('AssessmentSiteUploadImage3').click();
}
function AddAssessmentSiteImage4()
{
    document.getElementById('AssessmentSiteUploadImage4').click();
}
function AddAssessmentSiteImage5()
{
    document.getElementById('AssessmentSiteUploadImage5').click();
}

function AddAssessmentExteriorImage0()
{
    document.getElementById('AssessmentExteriorUploadImage0').click();
}
function AddAssessmentExteriorImage1()
{
    document.getElementById('AssessmentExteriorUploadImage1').click();
}
function AddAssessmentExteriorImage2()
{
    document.getElementById('AssessmentExteriorUploadImage2').click();
}
function AddAssessmentExteriorImage3()
{
    document.getElementById('AssessmentExteriorUploadImage3').click();
}
function AddAssessmentExteriorImage4()
{
    document.getElementById('AssessmentExteriorUploadImage4').click();
}
function AddAssessmentExteriorImage5()
{
    document.getElementById('AssessmentExteriorUploadImage5').click();
}

function AddAssessmentInteriorLivingImage0()
{
    document.getElementById('AssessmentInteriorLivingUploadImage0').click();
}
function AddAssessmentInteriorLivingImage1()
{
    document.getElementById('AssessmentInteriorLivingUploadImage1').click();
}
function AddAssessmentInteriorLivingImage2()
{
    document.getElementById('AssessmentInteriorLivingUploadImage2').click();
}
function AddAssessmentInteriorLivingImage3()
{
    document.getElementById('AssessmentInteriorLivingUploadImage3').click();
}
function AddAssessmentInteriorLivingImage4()
{
    document.getElementById('AssessmentInteriorLivingUploadImage4').click();
}

function AddAssessmentInteriorLivingImage5()
{
    document.getElementById('AssessmentInteriorLivingUploadImage5').click();
}

function AddAssessmentInteriorBedroomImage0()
{
    document.getElementById('AssessmentInteriorBedroomUploadImage0').click();
}
function AddAssessmentInteriorBedroomImage1()
{
    document.getElementById('AssessmentInteriorBedroomUploadImage1').click();
}
function AddAssessmentInteriorBedroomImage2()
{
    document.getElementById('AssessmentInteriorBedroomUploadImage2').click();
}
function AddAssessmentInteriorBedroomImage3()
{
    document.getElementById('AssessmentInteriorBedroomUploadImage3').click();
}
function AddAssessmentInteriorBedroomImage4()
{
    document.getElementById('AssessmentInteriorBedroomUploadImage4').click();
}
function AddAssessmentInteriorBedroomImage5()
{
    document.getElementById('AssessmentInteriorBedroomUploadImage5').click();
}

function AddAssessmentInteriorServiceImage0()
{
    document.getElementById('AssessmentInteriorServiceUploadImage0').click();
}
function AddAssessmentInteriorServiceImage1()
{
    document.getElementById('AssessmentInteriorServiceUploadImage1').click();
}
function AddAssessmentInteriorServiceImage2()
{
    document.getElementById('AssessmentInteriorServiceUploadImage2').click();
}



//MARK: UPLOAD FUNCTIONS
//upload max 6 images
function read6ImagesURL(input,addButtonID0,addButtonID1,addButtonID2,addButtonID3,addButtonID4,addButtonID5,imageID0,
                        imageID1,imageID2,imageID3,imageID4,imageID5,text0,text1,text2,text3,text4,text5,removeButton0,
                        removeButton1,removeButton2,removeButton3,removeButton4,removeButton5)
{
    var count = input.files.length;
    console.log(count);
    //check if the number of images are more than six
    if (count > 6)
    {
        alert ("You can only selected six images maximum")  ;
    }
       var addButton0 = document.getElementById(addButtonID0);
       var addButton1 = document.getElementById(addButtonID1);
       var addButton2 = document.getElementById(addButtonID2);
       var addButton3 = document.getElementById(addButtonID3);
       var addButton4 = document.getElementById(addButtonID4);
       var addButton5 = document.getElementById(addButtonID5);
    
       addButton0.style.display = 'block';
       addButton1.style.display = 'block';
       addButton2.style.display = 'block';
       addButton3.style.display = 'block';
       addButton4.style.display = 'block';
       addButton5.style.display = 'block';
       if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
          var image = '#' + imageID0;
          $(image).attr('src', e.target.result);
          var image = document.getElementById(imageID0);
          var text = document.getElementById(text0);
          var button = document.getElementById(removeButton0);
            image.style.display = 'block';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton0.style.display = 'none';
        }

        reader.readAsDataURL(input.files[0]);
      }
       if (input.files && input.files[1]) {
        var reader = new FileReader();
      
        reader.onload = function(e) {
          var image = '#' + imageID1;
          $(image).attr('src', e.target.result);
          //$('#RecommendationImage1').attr('src', e.target.result);
          var image = document.getElementById(imageID1);
          var text = document.getElementById(text1);
          var button = document.getElementById(removeButton1);
            image.style.display = 'block';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton1.style.display = 'none';
        }

        reader.readAsDataURL(input.files[1]);
      }
       if (input.files && input.files[2]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var image = '#' + imageID2;
          $(image).attr('src', e.target.result);
          //$('#RecommendationImage2').attr('src', e.target.result);
          var image = document.getElementById(imageID2);
          var text = document.getElementById(text2);
          var button = document.getElementById(removeButton2);
            image.style.display = 'block';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton2.style.display = 'none';
        }

        reader.readAsDataURL(input.files[2]);
      } 
       if (input.files && input.files[3]) {
         var reader = new FileReader();

         reader.onload = function(e) {
         var image = '#' + imageID3;
         $(image).attr('src', e.target.result);
          //$('#RecommendationImage2').attr('src', e.target.result);
         var image = document.getElementById(imageID3);
         var text = document.getElementById(text3);
         var button = document.getElementById(removeButton3);
         image.style.display = 'block';
         text.style.display = 'block';
         button.style.display = 'block';
         addButton3.style.display = 'none';
        }

        reader.readAsDataURL(input.files[3]);
      } 
    
      if (input.files && input.files[4])
      {
          var reader = new FileReader();
           reader.onload = function(e) {
            var image = '#' + imageID4;
          $(image).attr('src', e.target.result);
          //$('#RecommendationImage2').attr('src', e.target.result);
          var image = document.getElementById(imageID4);
          var text = document.getElementById(text4);
          var button = document.getElementById(removeButton4);
            image.style.display = 'block';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton4.style.display = 'none';
        }

        reader.readAsDataURL(input.files[4]);      
      }
    
      if (input.files && input.files[5])
      {
          var reader = new FileReader();
         reader.onload = function(e) {
            var image = '#' + imageID5;
          $(image).attr('src', e.target.result);
          //$('#RecommendationImage2').attr('src', e.target.result);
          var image = document.getElementById(imageID5);
          var text = document.getElementById(text5);
          var button = document.getElementById(removeButton5);
            image.style.display = 'block';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton5.style.display = 'none';
        }

        reader.readAsDataURL(input.files[5]);      
      }
      

       
    
       
}
//upload max 3 images
function read3ImagesURL(input,addButtonID0,addButtonID1,addButtonID2,imageID0,imageID1,imageID2,text0,text1,text2,removeButton0,removeButton1,removeButton2) {
    var count = input.files.length;
    //check if the selected images are more than 3
    if (count > 3)
    {
          alert ("You can only selected three images maximum")  ;
    }
    
       var addButton0 = document.getElementById(addButtonID0);
       var addButton1 = document.getElementById(addButtonID1);
       var addButton2 = document.getElementById(addButtonID2);
//    var addButton3 = document.getElementById('addImageButton3');
       addButton0.style.display = 'block';
       addButton1.style.display = 'block';
       addButton2.style.display = 'block';
    //addButton3.style.display = 'block';
       if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
          var image = '#' + imageID0;
          $(image).attr('src', e.target.result);
          var image = document.getElementById(imageID0);
          var text = document.getElementById(text0);
          var button = document.getElementById(removeButton0);
            image.style.display = 'block';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton0.style.display = 'none';
        }

        reader.readAsDataURL(input.files[0]);
      }
       if (input.files && input.files[1]) {
        var reader = new FileReader();
      
        reader.onload = function(e) {
          var image = '#' + imageID1;
          $(image).attr('src', e.target.result);
          //$('#RecommendationImage1').attr('src', e.target.result);
          var image = document.getElementById(imageID1);
          var text = document.getElementById(text1);
          var button = document.getElementById(removeButton1);
            image.style.display = 'block';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton1.style.display = 'none';
        }

        reader.readAsDataURL(input.files[1]);
      }
       if (input.files && input.files[2]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var image = '#' + imageID2;
          $(image).attr('src', e.target.result);
          //$('#RecommendationImage2').attr('src', e.target.result);
          var image = document.getElementById(imageID2);
          var text = document.getElementById(text2);
          var button = document.getElementById(removeButton2);
            image.style.display = 'block';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton2.style.display = 'none';
        }

        reader.readAsDataURL(input.files[2]);
      }  
    
    
   
//        if (input.files && input.files[3]) {
//        var reader = new FileReader();
//
//        reader.onload = function(e) {
//          $('#RecommendationImage3').attr('src', e.target.result);
//            var image = document.getElementById("RecommendationImage3");
//          var text = document.getElementById('RecommendationImageText3');
//          var button = document.getElementById('imageButton3');
//            image.style.display = 'block';
//            text.style.display = 'block';
//            button.style.display = 'block';
//            addButton3.style.display = 'none';
//        }
//
//        reader.readAsDataURL(input.files[3]);
//      }

    }

//Only upload one image per time
function readOneImageURL(input,imageID,addButtonID,removeButtonID,textID)
{
    console.log("here 1");
    if(input.files && input.files[0])
        {
            var image = '#' + imageID;
            var reader = new FileReader();
            var button = document.getElementById(addButtonID);
            var removeButton = document.getElementById(removeButtonID);
            var imageID = document.getElementById(imageID);
            var text = document.getElementById(textID);
            reader.onload = function(e)
            {
                $(image).attr('src',e.target.result);
                button.style.display = 'none';
                removeButton.style.display = 'block';
                imageID.style.display = 'block';
                text.style.display = 'block';
            }
            reader.readAsDataURL(input.files[0]);
            
        }
}