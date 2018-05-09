var frontLeaves = document.querySelectorAll('.front-leaves');
var backLeaves = document.querySelectorAll('.back-leaves');
var tl = new TimelineMax({
	repeatDelay: 0,
	repeat: -1,
	yoyo: true
});

tl.to(frontLeaves, 1, {
		rotation: 20,
		transformOrigin: "right 60%"
	})
	.to(backLeaves, 1, {
		rotation: -20,
		transformOrigin: "left 100%"
	},'-=1');

tl.play();
