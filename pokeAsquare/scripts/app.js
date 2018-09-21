const $squares = $('.squares');
const creatSquares = (numberOfSquares) => {
	for (let i = 0; i < numberOfSquares; i++) {
		$squares.clone().appendTo('.squares')
	}
}





$('button').on('click', () => { 

creatSquares(3)

	console.log('click is on');
});