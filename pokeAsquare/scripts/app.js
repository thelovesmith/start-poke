const $squares = $('.squares');

// let blue = 'blue'
// let red = 'red'
// let green = 'green'



// This is how James did everything //
const creatSquares = (numberOfSquares) => {
	//create array to pick numbers from// 
	const colorArr = ['blue', 'red', 'green', 'orange', 'violet', 'yellow']
	//for loop to make divs based on numberOfSquares//
	for (let i = 0; i < numberOfSquares; i++) {
		//creating squares//
		const $div = $('<div/>');

		//Generate random color for each div//
		$div.css('background-color', `${colorArr[Math.floor(Math.random() * 6)]}` );

		//attach to the square class//
		$squares.append($div);
	}
}


$('button').on('click', () => { 

creatSquares(100)
//WHen the user clicks the button, it populates the squares
	console.log('click is on');
});