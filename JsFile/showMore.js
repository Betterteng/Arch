/**
 * Created by TengShinan on 12/9/17.
 */

function moreSiteGardenBoundaries()
{
	 var div = document.getElementById('SiteGardenBoundary');
	 var button = document.getElementById('moreBoundariesButton');
	// var div2 = document.getElementById('SiteGardenBoundary2');
	if (div.style.display === 'none')
	{
		div.style.display = 'block';
		button.innerHTML = "Hide";
	}
	else
	{
		div.style.display = 'none';
		button.innerHTML = "Add More Boundaries";
	}

}

function moreSiteGardenSheds()
{
	var div = document.getElementById('SiteGardenShed');
	var button = document.getElementById('moreShedButton');

	if (div.style.display === 'none')
	{
		div.style.display = 'block';
		button.innerHTML = "Hide";
	}
	else
	{
		div.style.display = 'none';
		button.innerHTML = "Add More Garage or Sheds";
	}

}

function morePropertyExteriorWall()
{
    var div = document.getElementById('PropertyExteriorWall');
    var button = document.getElementById('morePropertyExteriorWallButton');
    if (div.style.display === 'none')
	{
		div.style.display = 'block';
        button.innerHTML = "Hide"
	}
	else
	{
		div.style.display = 'none';
       button.innerHTML = "Add More Wall"
	}

}

function morePropertyExteriorVerandahs()
{
    var div = document.getElementById('PrepertyExteriorVerandahs');
    var button = document.getElementById('morePropertyExteriorVerandahsButton');
    if (div.style.display === 'none')
	{
		div.style.display = 'block';
        button.innerHTML = "Hide"
	}
	else
	{
		div.style.display = 'none';
       button.innerHTML = "Add More Verandahs"
	}
    
}

function moreLivingAreaRooms()
{
//    alert("you click add more rooms button LivingAreaRooms moreLivingAreaRoomButton")
    var div = document.getElementById('LivingAreaRooms');
    var button = document.getElementById('moreLivingAreaRoomButton');
    if (div.style.display === 'none')
	{
		div.style.display = 'block';
        button.innerHTML = "Hide"
	}
	else
	{
		div.style.display = 'none';
       button.innerHTML = "Add More Rooms"
	}
}
function moreLivingAreaStair()
{
    
    var div = document.getElementById('LivingAreaStair2');
    var button = document.getElementById('moreLivingAreaStairButton');
    if (div.style.display === 'none')
	{
		div.style.display = 'block';
        button.innerHTML = "Hide"
	}
	else
	{
		div.style.display = 'none';
       button.innerHTML = "Add One Stair"
	}
}

function moreLivingAreaKitchen()
{
    
    var div = document.getElementById('LivingAreaKitchen2');
    var button = document.getElementById('moreLivingAreaKitchenButton');
    if (div.style.display === 'none')
	{
		div.style.display = 'block';
        button.innerHTML = "Hide"
	}
	else
	{
		div.style.display = 'none';
       button.innerHTML = "Add One Kitchen"
	}
}

function moreBedrooms()
{
    var div = document.getElementById('BedroomAreasMoreRooms');
    var button = document.getElementById('moreBedroomsButton');
    if (div.style.display === 'none')
	{
		div.style.display = 'block';
        button.innerHTML = "Hide"
	}
	else
	{
		div.style.display = 'none';
       button.innerHTML = "Add More Bedrooms"
	}
}



function moreBathrooms()
{
    var div = document.getElementById('ServiceAreaBathRooms');
    var button = document.getElementById('moreBathroomsButton');
    if (div.style.display === 'none')
	{
		div.style.display = 'block';
        button.innerHTML = "Hide"
	}
	else
	{
		div.style.display = 'none';
       button.innerHTML = "Add More Bathroom"
	}
    
}

function morePowderRooms()
{

    var div = document.getElementById('ServiceAreaMorePowderRooms');
    var button = document.getElementById('morePowderRoomsButton');
    if (div.style.display === 'none')
	{
		div.style.display = 'block';
        button.innerHTML = "Hide"
	}
	else
	{
		div.style.display = 'none';
       button.innerHTML = "Add More Powder Rooms"
	}
}

function moreLaundry()
{
    var div = document.getElementById('ServiceAreaMoreLaundry');
    var button = document.getElementById('moreLaundryButton');
    if (div.style.display === 'none')
	{
		div.style.display = 'block';
        button.innerHTML = "Hide"
	}
	else
	{
		div.style.display = 'none';
       button.innerHTML = "Add One Laundry"
	}
}