var bunnies = [];
var bunnyArray = [];

bunnyArray.push({name:"Fluffy",position:1,url:"images/bunny1.jpg"});
bunnyArray.push({name:"Snowy",position:2,url:"images/bunny2.jpg"});
bunnyArray.push({name:"Felix",position:3,url:"images/bunny3.jpg"});
bunnyArray.push({name:"Chewy",position:4,url:"images/bunny4.jpg"});
bunnyArray.push({name:"Mitten",position:5,url:"images/bunny5.jpg"});
bunnyArray.push({name:"Sparkle",position:6,url:"images/bunny6.jpg"});
bunnyArray.push({name:"Stountain",position:7,url:"images/bunny7.jpg"});
bunnyArray.push({name:"Cyrus",position:8,url:"images/bunny8.jpg"});
bunnyArray.push({name:"Cleo",position:9,url:"images/bunny9.jpg"});
bunnyArray.push({name:"Cookie",position:10,url:"images/bunny10.jpg"});


function loadBunnies()
{
	var $bunnyPanelElem	= $('#bunnypanel');
	var count = 0;
	var bunny = function(name,position,url){
		this.bunnyName = name;
		this.position = position;
		this.url = url;
		this.cnt = 0;
		this.counterText = "Clicks: " + this.cnt;
		this.id = "bunnypic" + this.position;
		this.counterElement = "#click-count" + this.position;
	}
	
	var num = $('#numbunnies').val();
	if(num <1 || num>10 )
	{
		alert("Choose a number between 1 and 10!");
		return;
	}
	for(var i = 0;i<=num-1;i++)
	{
		var rabbit = new bunny(window.bunnyArray[i].name,window.bunnyArray[i].position,window.bunnyArray[i].url);
		window.bunnies.push(rabbit);
	}
	//var rabbit = new bunny("Fluffy",1,"images/bunny2.jpg");
	//window.bunnies.push(rabbit);
	//rabbit = new bunny("Snowy",2,"images/bunny3.jpg");
	//window.bunnies.push(rabbit);

	for(var i = 0;i<window.bunnies.length;i++)
	{
		var thisBunny = window.bunnies[i];
		var thisElem = "click-count" + thisBunny.position;
		var thisID = "bunnypic"+ thisBunny.position;
		$bunnyPanelElem.append('<div class="bunnyframe">' +
            '<h3 id="'+thisElem+'"">' + thisBunny.bunnyName +' '+ thisBunny.counterText + '</h3>' +
            '<img id="'+thisID+'" class="bunnypic" src="' + thisBunny.url +'"/></div>');

		$()
	}

	$("img").on("click",$('.bunnypic'),function(){
		//alert($(this).attr("src"));
		addBunnyClick(this.id);
	});
	return false;
};

function incrementCounter(bunny)
{
	var b = bunny;
	b.cnt++;
	b.counterText = "Clicks: "+b.cnt;
}

function addBunnyClick(id)
{
	for(var i=0;i<window.bunnies.length;i++)
	{
		var bun = window.bunnies[i];
		if(bun.id == id)
		{
			incrementCounter(bun);
			var $curCounter = $(bun.counterElement);
			$curCounter.text(bun.bunnyName +' '+ bun.counterText );
		}
	}
	return false;
}


function countClick(id){
	//alert($(this).attr("src"));
	var $mainContainer = $('#main-container');
	var $counter = $('#click-count');
	$counter.text("");
	window.count++;

	$counter.text("Clicks: " + count);
	console.log("button clicked");

	return false;
};

$( "p" ).click(function() {
  $( this ).slideUp();
  console.log("sliiiide");
});

$('#form-container').submit(loadBunnies);


	//$("img").on("click",$('.bunnypic'),function(){
	//	alert($(this).attr("src"));
	//	countClick()
	//})


