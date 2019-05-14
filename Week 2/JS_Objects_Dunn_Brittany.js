function deepEqual(x,y){
	//Check if strict equal
	if(x===y){
		return true;
	}
	//If strict equal because null then false
	else if (x != "object" && x == null) {
		return false;
	}
	//If strict equal because null then false
	else if (y != "object" && y == null) {
		return false
	}
	else{
		//Check for same number of props
		var countX = 0;
		var countY = 0;

		for(var prop in x){
			countX = countX + 1;
		}
		for(prop in y){
			countY = countY + 1;
		}
		//If not same number of props then false
		if(countX != countY){
			return false;
		}
		//If same number of props then compare each prop
		else{
			//Recursive call to deepEqual to compare props
			for(prop in obj){
				//If props not equal then false
				if (!deepEqual(x[prop],y[prop])){
					return false;
				}
				//If all props equal then true
				else{
					return true;
				}
			}
		
		}
	}
}	




let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true