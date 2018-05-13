//Homepage

var frontLeaves = document.querySelectorAll('.front-leaves');
var backLeaves = document.querySelectorAll('.back-leaves');
var homeTl = new TimelineMax({
	repeatDelay: 0,
	repeat: -1,
	yoyo: true
});

homeTl.to(frontLeaves, 1, {
		rotation: 20,
		transformOrigin: "right 60%"
	})
	.to(backLeaves, 1, {
		rotation: -20,
		transformOrigin: "left 100%"
	}, '-=1');

homeTl.play();

var fishContainer = document.querySelector('.fish-container');
var fishAmount = 20;
var pondWidth;
var pondHeight;


window.addEventListener('resize', function() {
	setSliderWidth();
	fishContainerSize();
});

window.addEventListener('load', function() {
	setSliderWidth();
	fishContainerSize();
	spawnStartingFish();
});

fishContainer.addEventListener('click', stirPond);

function fishContainerSize() {
	pondWidth = fishContainer.offsetWidth;
	pondHeight = fishContainer.offsetHeight;
}

function spawnStartingFish() {
	for (var i = 0; i < fishAmount; i++) {
		spawnFish(getRandom(pondWidth), getRandom(pondHeight));
	}
}

//Bubbles
function spawnBubbles() {
	var bubbleContainer = document.querySelector('.bubble-container');
	var bubble = document.createElement('div');
	bubble.classList.add('bubble');
	bubbleContainer.appendChild(bubble);
	//Bubble position
	bubble.style.transform = 'translate(' + Math.floor(Math.random() * pondWidth) + 'px, ' + 0 + 'px)';
	//Bubble size
	var radius = (Math.random() * 2 + 0.5).toFixed(2) + 'em';
	bubble.style.width = radius;
	bubble.style.height = radius;
	//Bubble opacity
	bubble.style.opacity = (Math.random() * (1 - 0.5) + 0.5).toFixed(2);
	//Remove bubble
	setTimeout(function() {
		bubbleContainer.removeChild(bubble);
	}, 10000);
}

function stirPond(event) {
	var x = event.clientX - this.offsetLeft;
	var y = event.clientY - this.offsetTop;
	spawnWorm(x, y);
}

function spawnWorm(x, y) {
	var worm = document.createElement('div');
	worm.classList.add('worm');
	fishContainer.appendChild(worm);

	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttributeNS(null, "viewBox", "0 0 512 512");
	svg.setAttributeNS(null, "width", Math.random() * 2 + 1 + 'em');
	svg.style.transform = 'rotate(' + Math.random() * 140 + 120 + 'deg)';
	worm.appendChild(svg);

	var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path1.setAttribute("d", "M135.57 402.386H39.507C17.688 402.386 0 384.699 0 362.879c0-21.82 17.688-39.507 39.507-39.507h96.063c51.927 0 99.134-32.642 117.471-81.224 34.542-91.519 129.618-146.067 226.055-129.7 21.513 3.65 35.992 24.048 32.341 45.558-3.648 21.513-24.034 36.002-45.558 32.341-59.273-10.069-117.689 23.463-138.911 79.702-14.747 39.073-40.699 72.28-75.05 96.031-34.352 23.752-74.585 36.306-116.348 36.306z");
	path1.setAttribute("fill", "#f37d79");
	svg.appendChild(path1);

	var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
	group.setAttribute("fill", "#d86666");
	svg.appendChild(group);

	var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path2.setAttribute("d", "M504.65 128.458c.274 3.252.147 6.591-.424 9.958-3.648 21.513-24.034 36.002-45.558 32.341-59.273-10.069-117.689 23.463-138.912 79.701-30.023 79.544-106.063 132.337-191.396 132.337H32.296c-13.255 0-24.976-6.534-32.143-16.55 1.71 20.243 18.67 36.141 39.354 36.141h96.063c41.762 0 81.995-12.554 116.346-36.307 34.351-23.751 60.303-56.958 75.05-96.031 21.224-56.238 79.639-89.771 138.912-79.702 21.525 3.661 41.91-10.827 45.558-32.341 1.832-10.786-.898-21.292-6.786-29.547z");
	group.appendChild(path2);

	var path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path3.setAttribute("d", "M362.314 127.006c-26.179 11.542-49.844 28.489-69.264 49.828 5.95 28.054 24.911 51.296 50.272 63.119 14.405-19.562 34.114-34.406 56.445-42.991-21.88-15.806-36.399-41.16-37.453-69.956z");
	group.appendChild(path3);

	var path4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path4.setAttribute("d", "M383.14 181.435c-22.348 10.739-41.454 27.987-54.322 50.016 4.54 3.259 9.389 6.116 14.504 8.501 12.962-17.602 30.831-32.169 52.265-41.297.014-.006.029-.012.043-.018 1.369-.582 2.748-1.141 4.137-1.675-6.175-4.461-11.763-9.682-16.627-15.527z");
	path4.setAttribute("fill", "#cc5c5c");
	svg.appendChild(path4);

	var path5 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path5.setAttribute("d", "M246.563 256.447c-11.342 21.384-28.602 38.806-49.223 50.511 9.983 26.709 32.234 47.432 59.901 55.306 22.884-16.914 41.769-38.159 55.763-62.593-28.232-3.455-52.439-19.923-66.441-43.224z");
	path5.setAttribute("fill", "#d86666");
	svg.appendChild(path5);

	var path6 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path6.setAttribute("d", "M295.795 295.817c-15.998 22.799-36.529 42.091-60.563 56.842 6.8 4.124 14.187 7.378 22.008 9.603l.003-.003c2.844-2.102 5.626-4.272 8.345-6.506.033-.027.066-.055.099-.082 14.97-12.315 28.053-26.626 38.925-42.59l.018-.027c2.956-4.343 5.747-8.804 8.367-13.378.001-.003.003-.005.004-.008-5.931-.724-11.685-2.032-17.206-3.851z");
	path6.setAttribute("fill", "#cc5c5c");
	svg.appendChild(path6);

	var path7 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path7.setAttribute("d", "M167.136 399.956c-21.196-19.051-32.538-47.13-29.489-76.625-3.311.057 7.44.041-58.388.041-13.681 24.692-14.774 53.961-4.141 79.014 64.841 0 72.307.627 92.018-2.43z");
	path7.setAttribute("fill", "#d86666");
	svg.appendChild(path7);

	var path8 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path8.setAttribute("d", "M151.444 381.503c-14.858 1.671-18.755 1.293-82.111 1.293 1.195 6.823 3.152 13.385 5.785 19.591 65.404 0 72.37.618 92.018-2.43-6.018-5.41-11.3-11.619-15.692-18.454z");
	path8.setAttribute("fill", "#cc5c5c");
	svg.appendChild(path8);

	var path9 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path9.setAttribute("d", "M457.875 145.935h-4.121c-4.267 0-7.727-3.459-7.727-7.727 0-4.268 3.459-7.727 7.727-7.727h4.121c4.267 0 7.727 3.459 7.727 7.727.001 4.268-3.46 7.727-7.727 7.727z");
	path9.setAttribute("fill", "#827f7d");
	svg.appendChild(path9);
	//Worm position
	worm.style.transform = 'translate(' + (x - 25) + 'px, ' + y + 'px)';
	//Remove worm after animation
	setTimeout(function() {
		fishContainer.removeChild(worm);
	}, 10000);
}

function spawnFish(x, y) {
	// setup fish
	var fish = document.createElement('div');
	fish.classList.add('fish');
	fishContainer.appendChild(fish);

	var fishBob = document.createElement('div');
	fishBob.classList.add('fish-bob');
	fish.appendChild(fishBob);

	var fishDirection = document.createElement('div');
	fishDirection.classList.add('fish-direction');
	fishBob.appendChild(fishDirection);

	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttributeNS(null, "viewBox", "0 0 45.52 45.52");
	svg.setAttributeNS(null, "width", Math.random() * 2 + 2 + 'em');
	svg.style.transform = 'rotate(225deg)';

	var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path1.setAttribute("d", "M45.028 13.98c.574-.619.322-1.683-.45-2.027-1.798-.8-1.061-3.459-2.564-3.318-1.724.161-2.99-1.104-2.828-2.828.161-1.724-1.104-2.99-2.828-2.828C34.634 3.14 36.314.46 33.53.151c0 0-1.945-.751-2.13 1.111l-.029 7.258H20.164C9.126 8.52.178 17.468.178 28.506V45.52h16.876c11.114 0 20.124-9.01 20.124-20.124V14.237l7.244.067c.256-.04.453-.16.606-.324z");
	path1.setAttribute("fill", "#698b9e");
	svg.appendChild(path1);

	var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path2.setAttribute("d", "M21.951 39.899h-2c0-7.72-6.28-14-14-14v-2c8.822 0 16 7.177 16 16z");
	path2.setAttribute("fill", "#5d7989");
	svg.appendChild(path2);

	var path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path3.setAttribute("d", "M25.206 36.644h-2c0-7.72-6.28-14-14-14v-2c8.822 0 16 7.178 16 16z");
	path3.setAttribute("fill", "#5d7989");
	svg.appendChild(path3);

	var path4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path4.setAttribute("d", "M28.315 33.534h-2c0-7.72-6.28-14-14-14v-2c8.822 0 16 7.178 16 16z");
	path4.setAttribute("fill", "#5d7989");
	svg.appendChild(path4);

	var path5 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path5.setAttribute("d", "M31.57 30.28h-2c0-7.72-6.28-14-14-14v-2c8.822 0 16 7.177 16 16z");
	path5.setAttribute("fill", "#5d7989");
	svg.appendChild(path5);

	var path6 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path6.setAttribute("d", "M14.824 9.263c-.394-1.98-1.211-4.133-2.77-6.285 0 0-8.224 4.078-4.851 10.331 2.185-1.865 4.775-3.257 7.621-4.046zm21.995 19.868c-.605 3.221-1.979 6.164-3.922 8.647 2.863.326 7.064.045 11.238-2.98 0 0-2.8-5.647-7.316-5.667z");
	path6.setAttribute("fill", "#546a79");
	svg.appendChild(path6);

	var path7 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	path7.setAttribute("cx", "8.951");
	path7.setAttribute("cy", "39.384");
	path7.setAttribute("r", "2");
	path7.setAttribute("fill", "#38454f");
	svg.appendChild(path7);

	fishDirection.appendChild(svg);

	if (getRandom(2) < 1) {
		fish.classList.add('fish-flip');
	}

	fishBob.style.animationDelay = getRandom(7) + 's';

	positionFish(fish, x, y);
	// let fish go
	setTimeout(doFishyThings.bind(this, fish), getRandom(10000));
	// $count.text($('.fish').length);
}

function positionFish(fish, x, y) {
	fish.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	fish.setAttribute('x', x);
	fish.setAttribute('y', y);
}

function doFishyThings(fish) {
	fishBubble(fish);

	if(fish.getAttribute('x') > pondWidth/2){
		fishPoop(fish);
	}
	moveFish(fish);

	var timeout = fish.setAttribute('data', 'timeout');
	clearTimeout(timeout);
	timeout = setTimeout(doFishyThings.bind(this, fish), 10000 + getRandom(6000));
	fish.setAttribute('timeout', timeout);
}

function moveFish(fish) {
	var x = getRandom(pondWidth);
	var y = getRandom(pondHeight);

	if (x < fish.getAttribute('x')) {
		fish.classList.add('fish-flip');
	} else {
		fish.classList.remove('fish-flip');
	}
	positionFish(fish, x, y);
}

function fishBubble(fish) {
  var bubble = document.createElement('div');
  bubble.classList.add('fish-bubble');
  fishContainer.appendChild(bubble);

  var x = fish.getAttribute('x');
  var y = fish.getAttribute('y');

  bubble.style.top = y + 'px';
  bubble.style.left = x + 'px';

  setTimeout(function() {
	  fishContainer.removeChild(bubble);
  }, 4000);
}

function fishPoop(fish) {
  var poop = document.createElement('div');
  poop.classList.add('poop');
  fishContainer.appendChild(poop);

  var x = fish.getAttribute('x');
  var y = fish.getAttribute('y');

  poop.style.top = y + 'px';
  poop.style.left = x + 'px';

  setTimeout(function() {
	  fishContainer.removeChild(poop);
  }, 4000);
}

function getRandom(upper) {
	return Math.random() * upper;
}

//Variables
var currentSlideID = 0;
var animatePos = 0;
var containerWidth;
var sliderWidth;

var slider = document.querySelector('.slider');
var slides = document.querySelectorAll('.slide');
var slidesLength = slides.length;
var openSliderButton = document.querySelector('.open-slider');
var sliderControls = document.querySelector('.slider-controls');
var prevButton = document.querySelector('.prev-button');
var prevButtonSpan = document.querySelector('.prev-button span');
var nextButton = document.querySelector('.next-button');
var nextButtonSpan = document.querySelector('.next-button span');
var bubbleSpawner;
var wormSpawner;

//Gesture init
var mc = new Hammer(slider);

//Events
openSliderButton.addEventListener('click', openSlider);
nextButton.addEventListener('click', animateNext);
prevButton.addEventListener('click', animatePrev);
mc.on('swipeleft', animateNext);
mc.on('swiperight', animatePrev);

//Functionality
function openSlider(e) {
	slider.classList.add("slider--open");
	sliderControls.classList.add("slider-controls--active");
	currentSlideID = 0;
	animatePos = containerWidth * currentSlideID;
	containerWidth = window.innerWidth;
	sliderNavIcons();
	initPos();
	bubbleSpawner = setInterval(spawnBubbles, Math.random() * 4000 + 1500);
	wormSpawner = setInterval(function() {
		spawnWorm(Math.floor(Math.random() * (pondWidth /2)), -50);
	}, Math.random() * 2000 + 1000);
	e.stopPropagation();
	e.preventDefault();
}

function closeSlider() {
	slider.classList.remove("slider--open");
	sliderControls.classList.remove("slider-controls--active");
	sliderNavIcons();
	initPos();
	clearInterval(bubbleSpawner);
	clearInterval(wormSpawner);
}

function setSliderWidth() {
	containerWidth = window.innerWidth;
	sliderWidth = slidesLength * containerWidth;
	animatePos = containerWidth * currentSlideID;
	slider.style.width = (slidesLength * 100) + '%';
	slider.style.transform = 'translateX(-' + animatePos + 'px)';
}

function animateNext() {
	if (currentSlideID < (slidesLength - 1)) {
		currentSlideID++;
		animatePos = containerWidth * currentSlideID;
		slider.style.transform = 'translateX(-' + animatePos + 'px)';
		sliderNavIcons();
	} else {
		closeSlider();
	}

	sliderNavBg();

}

function animatePrev() {
	if (currentSlideID > 0) {
		currentSlideID--;
		animatePos = containerWidth * currentSlideID;
		slider.style.transform = 'translateX(-' + animatePos + 'px)';
		sliderNavIcons();
	} else {
		closeSlider();
	}
	sliderNavBg();
}

function sliderNavBg(){
	//Check if animation need to play
	if(currentSlideID >= 3){
		return sliderControls.classList.add('slider-controls--green');
		// clearInterval(bubbleSpawner);
	} else {
		return sliderControls.classList.remove('slider-controls--green');
		// bubbleSpawner = setInterval(spawnBubbles, Math.random() * 3000 + 1500);
	}
}

function sliderNavIcons() {

	if (currentSlideID === 0) {
		prevButtonSpan.textContent = "Terug";
	} else {
		prevButtonSpan.textContent = "Terug";
		prevButton.style.display = 'inline';
	}
	if (currentSlideID >= (slidesLength - 1)) {
		nextButtonSpan.textContent = "Einde";

	} else {
		nextButtonSpan.textContent = "Volgende stap";
	}

}

function initPos() {
	animatePos = containerWidth * currentSlideID;
	slider.style.transform = 'translateX(-' + animatePos + 'px)';
}
