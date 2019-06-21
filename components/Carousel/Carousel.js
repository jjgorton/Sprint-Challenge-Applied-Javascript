class Carousel {
	constructor(element) {
		this.element = element;
		this.leftBtn = document.querySelector('.left-button');
		this.rightBtn = document.querySelector('.right-button');
		this.imgs = document.querySelectorAll('.carousel-img');
		this.counterPre = this.imgs.length - 1;
		this.counterCurr = 0;
		this.counterNex = 1;
		window.addEventListener('load', this.loadFirstImg());
		this.rightBtn.addEventListener('click', () => this.changeImgR());
		this.leftBtn.addEventListener('click', () => this.changeImgL());
	}

	reset() {
		this.imgs.forEach((pic) => {
			pic.classList.remove('previous-img', 'currant-img', 'next-img');
		});
	}

	loadFirstImg() {
		let previousImg = this.imgs[this.counterPre];
		let currantImg = this.imgs[this.counterCurr];
		let nextImg = this.imgs[this.counterNex];

		this.reset();
		previousImg.classList.add('previous-img');
		currantImg.classList.add('currant-img');
		nextImg.classList.add('next-img');
	}

	changeImgR() {
		//--------------checks number to keep counter looping within number of imgs----------
		if (this.counterPre >= this.imgs.length - 1) {
			this.counterPre = 0;
		} else {
			this.counterPre++;
		}

		if (this.counterCurr >= this.imgs.length - 1) {
			this.counterCurr = 0;
		} else {
			this.counterCurr++;
		}

		if (this.counterNex >= this.imgs.length - 1) {
			this.counterNex = 0;
		} else {
			this.counterNex++;
		}

		let previousImg = this.imgs[this.counterPre];
		let currantImg = this.imgs[this.counterCurr];
		let nextImg = this.imgs[this.counterNex];

		// window.setTimeout(function () {
		//     console.log(previousImg);
		//     previousImg.style.display = "none";
		// }, 2000);

		this.reset();

		previousImg.classList.add('previous-img');
		currantImg.classList.add('currant-img');
		nextImg.classList.add('next-img');
	}

	changeImgL() {
		//---------------------------------------change without animation---------------
		// if (this.counter === 0) {
		// 	this.counter = this.imgs.length - 1;
		// } else {
		// 	this.counter--;
		// }
		// this.currantImg = this.imgs[this.counter];
		// this.imgs.forEach((pic) => (pic.style.display = 'none'));
		// this.currantImg.style.display = 'block';

		//--------------checks number to keep counter looping within number of imgs----------
		if (this.counterPre <= 0) {
			this.counterPre = this.imgs.length - 1;
		} else {
			this.counterPre--;
		}

		if (this.counterCurr <= 0) {
			this.counterCurr = this.imgs.length - 1;
		} else {
			this.counterCurr--;
		}

		if (this.counterNex <= 0) {
			this.counterNex = this.imgs.length - 1;
		} else {
			this.counterNex--;
		}

		let previousImg = this.imgs[this.counterPre];
		let currantImg = this.imgs[this.counterCurr];
		let nextImg = this.imgs[this.counterNex];

		// window.setTimeout(function () {
		//     console.log(previousImg);
		//     previousImg.style.display = "none";
		// }, 2000);

		this.reset();

		previousImg.classList.add('previous-img');
		currantImg.classList.add('currant-img');
		nextImg.classList.add('next-img');
	}
}

let carousel = document.querySelector('.carousel');
// console.log(carousel);
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
