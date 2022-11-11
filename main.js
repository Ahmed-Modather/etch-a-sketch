const container = document.querySelector('.container');

/* 
    this function takes as argument the number of squares wanted per 
    colomn or row and construct a grid of squares with that dimension.
    
    -   -   -   Notes   -  -   -
    * the grid is limited by 720px * 720px.
    * squares should fit dinamically the grid 
      and its color become black when hovering.
    
*/
function makeGrid(squaresPerRow) {
	let numberOfRows = squaresPerRow;

	//create the rows first.
	const row_divs = [...arguments];
	for (let y = 1; y <= numberOfRows; y++) {
		row_divs[y] = document.createElement('div');
		row_divs[y].classList.toggle('rows'); //".rows" class is prespecified in the CSS file.
		row_divs[y].classList.toggle(`row${y}`);

		container.appendChild(row_divs[y]);
	}

	// then create the squares per each row.
	for (let y = 1; y <= numberOfRows; y++) {
		// row_divs.forEach(() => {
		const square_divs = [...arguments];
		const rowSelector = document.querySelector(`.row${y}`);
		console.log(rowSelector);
		for (let x = 1; x <= squaresPerRow; x++) {
			square_divs[x] = document.createElement('div');
			square_divs[x].classList.toggle('squares'); //".squares" class is prespecified in the CSS file.
			rowSelector.appendChild(square_divs[x]);
		}
	}
}
