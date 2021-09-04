


/*var answer=prompt("Are we there yet");
while(answer!="yes")
{
	if (answer=="yes")
	{
		prompt("Yes we are there!")
	}
	else
	{
		var answer=prompt("Are we there yet")
	}

}
alert("Yayy, we are there");*/
/*var str="abcdefghijklmnopqrstuwxyz"
for(var i=0;i<str.length;i++)
{
	console.log(str[i])
}*/

var todos=["Buy new Turtles"];
var input=prompt("WHat would you like to do");
while(input!="quit")
{
	if(input=="list")
	{
		listTodo();

	}
	else if(input=="new")
	{
		var newTodo=prompt("Enter new Todo");
		todos.push(newTodo);
		console.log("Added Todo");

	}
	else if(input=="delete")
	{
		var index=prompt("Entr the index to delete the item");
		todos.slice(index,1);
		console.log("Deletd Todo");

	}
	input = prompt("what would you like to do");
}
console.log("Ok you hae quite the app")

function listTodo()
{
	console.log("********")
	todos.forEach(function(todo,i)
	{
		console.log(i+": "+todo);
	});
	console.log("*******")
}