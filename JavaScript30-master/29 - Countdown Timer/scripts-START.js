const displayTime = document.querySelector('.display');
const timerButtons = document.querySelectorAll('.timer__button');
let myInter;
const inputMin = document.querySelector('#custom');

timerButtons.forEach(button => button.addEventListener('click', showCLock));
inputMin.addEventListener('submit', showCLock);

function showCLock(e) {
	e.preventDefault();
	let a = Number(this.dataset.time);
	let minnute = Number((this.minutes || {}).value)*60;
	let time = a || minnute;
	clearInterval(myInter);

	myInter = setInterval(function () {
		const mins = addZezo(Math.floor(time/60));
		const second = addZezo(time%60);
		displayTime.querySelector('h1').innerHTML = `${mins}:${second}`;
		if(time) {
			time --;
		} else {
			clearInterval(myInter);
		};
	}, 300);
}

function addZezo(num) {
	if (num < 10) {
		return `0${num}`
	}
	return num;
}
