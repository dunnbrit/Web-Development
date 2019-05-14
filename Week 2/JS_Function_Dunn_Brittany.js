//This function works
console.log(double(10));

function double(x){
	return x*2;
}

//This function does not work
console.log(half(10));

var half = function(x){
	return x/2;
}