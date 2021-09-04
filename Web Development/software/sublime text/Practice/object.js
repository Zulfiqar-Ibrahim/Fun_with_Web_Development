/*var button=document.querySelector("button");
var ispurple=false;
button.addEventListener("click",function(){
	
	if(ispurple)
	{
		document.body.style.background="white";
		ispurple=false;


	}
	else
	{
		document.body.style.background="purple";
		ispurple=true;
	}



	
});*/
alert("Connected!");
var p1Button=document.querySelector("#p1");
var p2Button=document.getElementById("p2");
var resetButton=document.getElementById("res");
var p1Score=0;
var p2Score=0;
var gameover=false;
var winningScore=5;
var h1=document.querySelector("#pOneDisplay");
var h2=document.querySelector("#pTwoDisplay");
p1Button.addEventListener("click",function(){
	if(!gameover)
	{
		p1Score++;
		if(p1Score==winningScore)
		{
			gameover=true;
			h1.classList.add("winner");

		}
		h1.textContent=p1Score;
	}
	


});

p2Button.addEventListener("click",function(){
	if(!gameover)
	{
		p2Score++;
		if(p2Score==winningScore)
		{
			gameover=true;
			h2.classList.add("winner");

		}
		h2.textContent=p2Score;
	}
});

resetButton.addEventListener("click",function(){
	p1Score=0;
	p2Score=0;
	h1.textContent=p1Score;
	h2.textContent=p2Score;
	h1.classList.remove("winner");
	h2.classList.remove("winner");
	gameover=false;
});
