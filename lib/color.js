var teller = 0;

function init(){
    loadIn();
	makeSlide();
	addColorToBackground();
	$("#red").change(addColorToSelf);
	$("#green").change(addColorToSelf);
	$("#blue").change(addColorToSelf);
	$("btnChangeBackground").click(addColorToBackground);
	$("btnChangeForeGround").click(addColorToForeGround);
	$("#btnRandom").click(addColorRandomColorToBackground);
}

function loadIn(){
    teller++;
    $("body").append(
    '<div id="colorpicker">'+
		'<label for="red'+teller+'">R: </label><div id="red'+teller+'"></div>'+
		'<label for="green'+teller+'">G: </label><div id="green'+teller+'"></div>'+
		'<label for"blue'+teller+'">B: </label><div id="blue'+teller+'"></div>'+
		'<button id="btnChangeBackground">Background Color</button>'+
		'<button id="btnChangeForeGround">Text Color</button>'+
		'<button id="btnRandom">Random Color</button>'+
	'</div>'+
	'<div id="color">'+
		'<label for="colorRed'+teller+'">R: </label><input id="colorRed'+teller+'" type="number">'+
		'<label for="colorGreen'+teller+'">G: </label><input id="colorGreen'+teller+'" type="number">'+
		'<label for="colorBlue'+teller+'">B: </label><input id="colorBlue'+teller+'" type="number">'+
	'</div>'
	);
}

function makeSlide(){
	//console.log("in makeSlide");
	$( "#red1, #green1, #blue1" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      slide: addColorToBackground,
      change: addColorToBackground
    });
    $( "#red1" ).slider( "value", 255 );
    $( "#green1" ).slider( "value", 140 );
    $( "#blue1" ).slider( "value", 60 );
}

function addColorToBackground(){
	var red = $("#red1").slider("value");
	var green = $("#green1").slider("value");
	var blue = $("#blue1").slider("value");

	//console.log("rgb("+red+","+green+","+blue+")");

	$("#colorRed1").val(red);
	$("#colorGreen1").val(green);
	$("#colorBlue1").val(blue);

    //this has to change to the custom div.
	$("body").css("background-color", "rgb("+red+","+green+","+blue+")");
}

function addColorToForeGround(){
	var red = $("#red1").slider("value");
	var green = $("#green1").slider("value");
	var blue = $("#blue1").slider("value");

	//console.log("rgb("+red+","+green+","+blue+")");

	$("#colorRed1").val(red);
	$("#colorGreen1").val(green);
	$("#colorBlue1").val(blue);

    //this has to change to the custom div.
	$("div.color").css("color", "rgb("+red+","+green+","+blue+")");
}

function addColorToSelf(){
    
}

function addColorRandomColorToBackground(){
    var red = Math.random()*255;
    var green = Math.random()*255;
    var blue = Math.random()*255;
    
	$("#colorRed1").val(red);
	$("#colorGreen1").val(green);
	$("#colorBlue1").val(blue);
    
    $( "#red1" ).slider( "value", red );
    $( "#green1" ).slider( "value", green );
    $( "#blue1" ).slider( "value", blue );
}

function addAnotherColorToScreen(){
    loadIn();
}