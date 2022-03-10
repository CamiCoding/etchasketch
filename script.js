const grid = document.querySelector('.grid');
const reset = document.getElementById('reset');
const eraser = document.getElementById('eraser');
const black = document.getElementById('black');
const color = document.getElementById('color');

function createGrid() {
	for (let i = 0; i < 256; i++) {
		const div = document.createElement('div');
		div.classList.add('cell');
		div.addEventListener('mouseover', function(event) {
			event.target.style.backgroundColor = 'black';
		});
		grid.appendChild(div); 
	};
};

reset.addEventListener('click', () => {
	let cell = document.querySelectorAll('.cell');
	for (var i = 0; i < cell.length; i++) {
		cell[i].style.backgroundColor = 'white';
	};
});

eraser.addEventListener('click', function eraser() {
	let cell = document.querySelectorAll('.cell');
	for (var i = 0; i < cell.length; i++) {
		cell[i].addEventListener('mouseover', function(event) {
			event.target.style.backgroundColor = 'white';
		});
	};
});

black.addEventListener('click', () => {
	let cell = document.querySelectorAll('.cell');
	for (var i = 0; i < cell.length; i++) {
		cell[i].addEventListener('mouseover', function(event) {
			event.target.style.backgroundColor = 'black';
		});
	};
});

color.addEventListener('input', () => {
	let cell = document.querySelectorAll('.cell');
	let newColor = document.getElementById('color').value;
	for (var i = 0; i < cell.length; i++) {
		cell[i].addEventListener('mouseover', function(event) {
			event.target.style.backgroundColor = newColor;
		});
	};
});



window.onload = () => {
	createGrid();
}