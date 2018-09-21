const $squares = $('.squares');
const $clickSquare = $('.clickSquare')

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
	// 	$('.clickSquare').on('click', () =>{
	// 	$('.clickSquare').fadeTo('fast', 0.2);
	// });

		//attach to the square class//
		$squares.append($div)
		
	}
}

const disappearSquares = (e) =>{
	//e is short for event
	//e.currentTarget gives you the div you are clicking on
	$(e.currentTarget).css('opacity', 0);
}
	
 

$('button').on('click', () => { 
creatSquares(100)
//WHen the user clicks the button, it populates the squares
	console.log('click is on');
});