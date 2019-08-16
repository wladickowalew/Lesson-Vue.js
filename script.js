let f = document.getElementById("f");
let t = f.value;
let a = ["hi", "22", "WEGWRG"];
generateList(a);

f.addEventListener("input", function(event){
	t = event.target.value; 
	console.log(t);
});

function generateList(array){
	let list = $("#list");
	list.html();
	array.forEach(function(item){
		list.append("<li>"+item+"</li>");
	});
}