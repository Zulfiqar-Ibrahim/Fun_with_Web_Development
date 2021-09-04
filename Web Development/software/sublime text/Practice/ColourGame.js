alert("connected")
var numOfSqares=6;
var colours=generateColors(numOfSqares);
var squares=document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var pickedColor=randomColorSelection();
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function()
{
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numOfSqares=3;
	colours=generateColors(numOfSqares);
	pickedColor=randomColorSelection();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colours[i])
		{
			squares[i].style.background=colours[i];
		}
		else
			squares[i].style.display="none";
	}

});

hardBtn.addEventListener("click",function()
{
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");


	colours=generateColors(numOfSqares);
	pickedColor=randomColorSelection();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colours[i];
		squares[i].style.display="block";
	}




});


resetButton.addEventListener("click",function()
{
	colours=generateColors(numOfSqares);
	pickedColor=randomColorSelection();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	this.textContent="New Colors";

	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colours[i];

	}
	h1.style.backgroundColor="steelblue";
});
colorDisplay.textContent=pickedColor;


for(var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor=colours[i];

	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;

		//compare color to pickedColor
		if(clickedColor === pickedColor) 
		{
			//alert("Correct!");
			messageDisplay.textContent="Correct";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="play again"
		} else 
		{
			//alert("WRONG!!!");
			this.style.background= "steelblue";
			messageDisplay.textContent="Try again";
		}
	});

}
function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
        squares[i].style.backgroundColor=color;
	}
}
function randomColorSelection()
{
	var random=Math.floor(Math.random()*colours.length);
	return colours[random];
}

function generateColors(num)
{
	arr=[]
	for(var i=0;i<num;i++)
	{
		arr.push(randomRGBSelction());

	}
	return arr;
}
function randomRGBSelction()
{
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);

  return "rgb(" + r + ", "+ g + ", " + b + ")";
}