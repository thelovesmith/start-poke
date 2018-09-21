const $squares = $('.squares');
// this is how I did everything //
// const creatSquares = (numberOfSquares) => {
// 	for (let i = 0; i < numberOfSquares; i++) {
// 		$squares.clone().appendTo($squares)
// 	}
// }





$('button').on('click', () => { 

creatSquares(30)
//WHen the user clicks the button, it populates the squares
	console.log('click is on');
});

// This is how James did everything //
const creatSquares = (numberOfSquares) => {
	for (let i = 0; i < numberOfSquares; i++) {
		//creating squares//
		const $div = $('<div/>');
		//attach to the square class
		$squares.append($div);
	}
}
