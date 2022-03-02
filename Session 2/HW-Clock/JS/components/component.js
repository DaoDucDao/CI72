import { counting } from '../counting/count.js';

export class Clock {
	$clockContainer;
	$display;
	$start;
	$pause;
	$stop;

	$counter;
	$press;
	$interval;

	constructor(clock_ID) {
		this.$press = 0;
		this.$counter = 0;

		this.$clockContainer = document.createElement('div');
		this.$clockContainer.id = clock_ID;
		this.$clockContainer.classList.add();

		this.$display = document.createElement('div');
		this.$display.textContent = '00:00';
		this.$display.classList.add();

		this.$start = document.createElement('button');
		this.$start.innerText = 'Start';
		this.$start.classList.add();
		this.$start.addEventListener('click', this.handleStart);

		this.$pause = document.createElement('button');
		this.$pause.classList.add();
		this.$pause.addEventListener('click', this.handlePause);
		this.$pause.innerText = 'Pause';

		this.$stop = document.createElement('button');
		this.$stop.classList.add();
		this.$stop.addEventListener('click', this.handleStop);
		this.$stop.innerText = 'Stop';
	}

	handleStart = () => {
		this.$press++;
		if (this.$press === 1) {
			this.$interval = setInterval(() => {
				this.$counter++;
				this.$display.textContent = counting(this.$counter);
			}, 1000);
		}
	}; //function must be outside of constructor

	handlePause = () => {
		clearInterval(this.$interval);
		this.$press = 0;
	}; //function must be outside of constructor

	handleStop = () => {
		clearInterval(this.$interval);
		this.$press = 0;
		this.$display.textContent = '00 : 00';
		this.$counter = 0;
	}; //function must be outside of constructor

	render() {
		this.$clockContainer.append(
			this.$display,
			this.$start,
			this.$pause,
			this.$stop
		);
		return this.$clockContainer; //render function must be outside of constructor
	}
}
