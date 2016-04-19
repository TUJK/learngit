var myScroll;
var scroll;
var  scrollBack;
var setTime;
var timer = 3000;
var cut;
var speed = 0;

function pictureCarousel(scrollbox, photoWidth){
	clearInterval(myScroll);
	
		if(cut <= -612){
			scrollbox.style.left = photoWidth + 40 + 'px';
			scrollBack = setInterval(function(){
				scrollbox.style.left = scrollbox.offsetLeft + speed + 'px';                              			
				cut = parseInt(scrollbox.style.left);
				speed = (-cut) / 5;
				speed = speed > 0 ? Math.ceil(speed):Math.floor(speed);
				if (speed == 1) {
					speed = 2;
				}
				if (cut == 1 || cut > 1) {
					scrollbox.style.left = 0+ 'px'; 
					clearInterval(scrollBack);
					clearInterval(scroll);
				}
			}, 30); 
		} 
		scroll = setInterval(function(){   

		scrollbox.style.left = scrollbox.offsetLeft - speed + 'px';
		cut = parseInt(scrollbox.style.left);
		speed =  (photoWidth - (-cut % photoWidth)) / 2;
		speed=speed > 0 ? Math.ceil(speed):Math.floor(speed);
		if (speed == 1) {
			speed = 2;
		}
		/*console.log("scrollbox.offsetLeft:" + scrollbox.offsetLeft);
		console.log("cut:" + cut);
		console.log("speed:" + speed);*/
		for (var i =  0; i <= cLi.length - 1; i++) {
			if (cut == -i * photoWidth ) {
				clearInterval(scroll);
			}
		}
	} ,30);
myScroll = setInterval(function(){
	return pictureCarousel(scrollbox, photoWidth);
}, timer);
}


function chooseNmuber(item, id, photoWidth){
	clearTimeout(setTime);
	clearInterval(scroll);
	clearInterval(myScroll);
	clearInterval(scrollBack);
	id.style.left = 0 - item * photoWidth + 'px';
	cut = parseInt(id.style.left);
	speed =  (photoWidth - (-cut % photoWidth)) / 2;
	speed=speed > 0 ? Math.ceil(speed):Math.floor(speed);
	setTime = setTimeout(function(){
		return pictureCarousel(id, photoWidth);
	},3500);
}