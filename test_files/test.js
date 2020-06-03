//==================//
// 		Part 1	 	//
//==================//

var userBalance = 0;
var finalBalance = 0;

// Gets called whenever the money finished tweening to the bottom.
function addFromCatch(value)
{
	userBalance += value;
}

// Gets called every frame. 
// Time elapsed since the last update is passed into the function(milliseconds)
function onUpdate({delta})
{
	if(finalBalance < userBalance){
		
		var increment = (userBalance - finalBalance)/(200 / delta );
		finalBalance+=increment;
		updateBalance(Math.round(finalBalance));

	}
}

// You have access to a function updateBalance which 
// takes in a string and sets the ui to that value
// updateBalance("1");




//==================//
// 		Part 2	 	//
//==================//



// TEST ARRAYS /////////////////////////////////////
var array1 = [
	[4,3,2,4,2],
	[1,2,3,4,5],
	[1,1,3,4,2],
	[1,1,1,4,1],
	[2,2,2,2,3],
	[1,1,1,1,1]
];

var array2 = [
	[1,3,2,4,1],
	[1,1,1,1,1],
	[1,2,1,4,2],
];

var array3 = [
	[1,3,2,4,1],
	[1,2,3,2,5],
	[2,4,1,4,2],

];
///////////////////////////////////////////////////

function processSlots(input)
{
	console.log("Output: " + input);
};

//potential scores based on each symbol (1,2,or 3)
var whichScores = [
	[5,10,15],
	[10,25,50],
	[25,50,100]
];

var scores;
var finalScore = 0;

//Use Test Array as Argument
scoreCalculation(array2);

function scoreCalculation(inputArray){
	//nested loop used to check if any numbers repeat in the same row, then add the appropriate score value to the final score
	for(var y = 0; y<inputArray.length; y++){
		//Check to see if the first column has a symbol of interest and if so check to see if following
		if(inputArray[y][0] == 1 || inputArray[y][0]== 2 || inputArray[y][0]== 3){
			var numInARow = 1;
			scores = whichScores[inputArray[y][0]-1];
			//check to see if the current value is repeated 
			for(var x = 0; x<inputArray[0].length-1; x++){
				if(inputArray[y][x]==inputArray[y][x+1]){
					numInARow++;
				}else{break;}
			}
			//if there are 3 numbers in a row then add the appropriate score value 
			if(numInARow >= 3){
				addFinalScore(numInARow);
			}
		}
	}

	
	//loop used to check if numbers repeate in the diagonal patterns
	if(inputArray[0][0] == 1 || inputArray[0][0]== 2 || inputArray[0][0]== 3){
		var rowIterator = 0;
		var numInARow = 1;
		scores = whichScores[inputArray[0][0]-1];
		var incrementing = true;

		for(var i = 0; i<inputArray[0].length-1; i++){
			//increment through the rows for the first half of the matrix, and degrement through the second half
			if(i < 2){
				incrementing = true;
			}else{
				incrementing = false;
			}
			//compare the value diagonal to the current value
			if(incrementing){
				if(inputArray[rowIterator][i]==inputArray[rowIterator+1][i+1]){
					numInARow++;
					rowIterator++;console.log(numInARow);
				}else{break;}
			}else{
				if(inputArray[rowIterator][i]==inputArray[rowIterator - 1][i+1]){
					numInARow++;
					rowIterator--;console.log(numInARow);
				}else{break;}
			}
		}
		//if there are 3 numbers in a row then add the appropriate score value 
		if(numInARow >= 3){
		addFinalScore(numInARow);
		}

	}

	//like the last loop for diagonal patters, but inverted. Start at matrix[0,2] and reverse the incrementing conditions
	if(inputArray[0][2] == 1 || inputArray[0][2]== 2 || inputArray[0][2]== 3){
		var rowIterator = 2;
		var numInARow = 1;
		scores = whichScores[inputArray[0][2]-1];
		var incrementing = false;

		for(var i = 0; i<inputArray[0].length-1; i++){
		//Check to see if the first column has a symbol of interest and if so check to see if following			
		
			if(i < 2){
				incrementing = false;
			}else{
				incrementing = true;
			}
			if(incrementing){
				if(inputArray[rowIterator][i]==inputArray[rowIterator+1][i+1]){
					numInARow++;
					rowIterator++;console.log(numInARow);
				}else{break;}
			}else{
				if(inputArray[rowIterator][i]==inputArray[rowIterator - 1][i+1]){
					numInARow++;
					rowIterator--;console.log(numInARow);
				}else{break;}
			}
		}
		//if there are 3 numbers in a row then add the appropriate score value 
		if(numInARow >= 3){
		addFinalScore(numInARow);
		}

	}

	processSlots(finalScore);
}


function addFinalScore(numInARow){
	finalScore += scores[numInARow - 3]
	
}

////////////TIME/////////////
//=========================//
//  Part 1 start: 10:50am  //
//  Part 1 end: 11:15am    //
//  Total : 25 minutes     //
//=========================//
/////////////////////////////
//=========================//
//  Part 2 start: 12:00pm  //
//  Part 2 end: 3:00pam    //
//  Total : 3 hours        //
//=========================//
/////////////////////////////
