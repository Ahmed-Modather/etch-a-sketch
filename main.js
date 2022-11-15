const container = document.querySelector('.container');

/* 
    this function takes as argument the number of squares wanted per 
    colomn or row and construct a grid of squares with that dimension.
    
    -   -   -   Notes   -  -   -
    * the grid is limited by 720px * 720px.
    * squares should fit dinamically the grid 
      and its color become black when hovering.
    
*/
function makeGrid(squaresPerRow = 24) {
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
		for (let x = 1; x <= squaresPerRow; x++) {
			square_divs[x] = document.createElement('div');
			square_divs[x].classList.toggle('squares'); //".squares" class is prespecified in the CSS file.
			rowSelector.appendChild(square_divs[x]);
		}
	}
}

makeGrid();
setSquaresTime();

// this function for each square's' mouse event "pointer go out from it" call timeout().
function setSquaresTime() {
	const allSquares = document.querySelectorAll('.squares');
	allSquares.forEach((sqr) => {
		sqr.onmouseout = function (event) {
			let target = event.target;
			timeout(target);
		};
	});
}

// time out function set the background for a square to black and after 5000 ms to white.
function timeout(target) {
	setTimeout(() => {
		target.style.background = 'black';
	}, 0);
	timeId = setTimeout(() => {
		target.style.background = 'white';
	}, 5000);
}

/*  Function for a poping up a modal when the user press the button "setting the grid"  */
function askUser() {
	// Get the modal
	const modal = document.querySelector('.modal');
	modal.style.display = 'block';

	// Get the <span> element that closes the modal
	const close_btn = document.querySelector('.close-btn');
	// Get the <button> element that set the grid and closes the modal
	const ok_btn = document.querySelector('.ok-btn');

	// When the user clicks on <span> (x), close the modal
	close_btn.onclick = function () {
		modal.style.display = 'none';
	};

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	};

	/* When the user input valed input (0 to 100) and press "OK" button
		clear the old grid and creat new one with the new dimention */
	ok_btn.addEventListener('click', () => {
		const userInput = document.querySelector('#input').value;
		console.log(userInput);
		if (userInput >= 0 && userInput <= 100) {
			container.innerHTML = '';
			makeGrid(userInput);
			setSquaresTime();
			modal.style.display = 'none';
		}
	});
}
