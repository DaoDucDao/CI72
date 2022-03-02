import { counting } from './counting/count.js';
import { Clock } from './components/component.js';

const c1 = new Clock('c1');
const c2 = new Clock('c2');
const c3 = new Clock('c3');
const c4 = new Clock('c4');
const c5 = new Clock('c5');

const container = document.getElementById('container');
container.append(
	c1.render(),
	c2.render(),
	c3.render(),
	c4.render(),
	c5.render()
);

let allClock = [c1, c2, c3, c4, c5];

const allButtonContainer = document.createElement('div');
allButtonContainer.classList.add();

const startAllButton = document.createElement('button');
startAllButton.classList.add();
startAllButton.innerText = 'Start All';
startAllButton.addEventListener('click', () => {
	allClock.forEach((e) => {
		e.$press++;
		if (e.$press === 1) {
			e.$interval = setInterval(() => {
				e.$counter++;
				e.$display.textContent = counting(e.$counter);
			}, 1000);
		}
	});
});

const pauseAllButton = document.createElement('button');
pauseAllButton.classList.add();
pauseAllButton.textContent = 'Pause All';
pauseAllButton.addEventListener('click', () => {
	allClock.forEach((e) => {
		clearInterval(e.$interval);
		e.$press = 0;
	});
});

const stopAllButton = document.createElement('button');
stopAllButton.classList.add();
stopAllButton.textContent = 'Stop All';
stopAllButton.addEventListener('click', () => {
	allClock.forEach((e) => {
		clearInterval(e.$interval);
		e.$display.innerText = '00 : 00';
		e.$press = 0;
		e.$counter = 0;
	});
});

allButtonContainer.append(stopAllButton, pauseAllButton, startAllButton);
container.appendChild(allButtonContainer);
