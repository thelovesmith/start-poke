const $squares = $('.squares');
const $clickSquare = $('.clickSquare');
let score = 0;
const $h1 = $('h1')
let time = 10;
let round = 1;
// let blue = 'blue'
// let red = 'red'
// let green = 'green'


//function to generate colors randomly//
const generateRandomColors = () =>{
	//create array to pick numbers from// 
	const colorArr = ['blue', 'red', 'green', 'orange', 'violet', 'yellow']
	//Generate random color for each div//
	const color = colorArr[Math.floor(Math.random() * 6)]
	return color
}


// Generate squares//
const creatSquares = (numberOfSquares) => {
	
	//for loop to make divs based on numberOfSquares//
	for (let i = 0; i < numberOfSquares; i++) {
		//creating squares//
		const $div = $('<div/>').on('click', disappearSquares);

	  $div.css('background-color', `${generateRandomColors()}`)
	  //add class to square
	  $div.addClass('.clickSquare')
	  //Trying to add event listener to clickSquare class then fadeTo//
	  //my way didn't work//
	// 	$('.clickSquare').on('click', () =>{
	// 	$('.clickSquare').fadeTo('fast', 0.2);
	// });

		//attach to the square class//
		$squares.append($div)
		
	}
}

//function to make squares disappear once they are clicked//
const disappearSquares = (e) =>{
	//e is short for event
	//e.currentTarget gives you the div you are clicking on
	const color = $(e.currentTarget).css('background-color')
	checkValidPoke(color)
	 $(e.currentTarget).fadeTo('fast', 0.1);
	
}
	
//function to check color and add point accordingly//
const checkValidPoke = (colorAsString) =>{
	console.log(colorAsString);
	//checking if color is blue 
	//if color is blue add one point to score//
	if(colorAsString === 'rgb(0, 0, 255)'){
		//updating score//
		score ++
	} else{
		//subtract one point if color is not blue//
		score--
	}
	//Sending new score to h1 in html//
	$h1.text('Scoreboard: ' + score)
} 


//event listener and handler for clicking Begin button// 
$('button').on('click', () => { 
creatSquares(100)
//WHen the user clicks the button, it populates the squares
	console.log('click is on');
});