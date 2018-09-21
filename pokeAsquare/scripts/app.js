const $squares = $('.squares');

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
		const $div = $('<div/>');

	  $div.css('background-color', `${generateRandomColors()}`)
		//attach to the square class//
		$squares.append($div)
	}
}


$('button').on('click', () => { 
creatSquares(100)
//WHen the user clicks the button, it populates the squares
	console.log('click is on');
});