var button_left = new Image();
button_left.src = "assets/touch_controls/left.png";
var button_right = new Image();
button_right.src = "assets/touch_controls/right.png";
var button_up = new Image();
button_up.src = "assets/touch_controls/up.png";
var button_down = new Image();
button_down.src = "assets/touch_controls/down.png";

var button_shoot = new Image();
button_shoot.src = "assets/touch_controls/shoot.png";

var button_reload = new Image();
button_reload.src = "assets/touch_controls/reload.png";

var border = canvas.getBoundingClientRect();
var display_ratio_output = canvas.width / canvas.height;

var buttons =  [
			   {x : canvas.width / 16, y : canvas.height / 1.5, width : 100, height : 20, img : button_up},
			   {x : (canvas.width / 16) - 20, y : (canvas.height / 1.5) + 20, width : 20, height : 100, img : button_left},
			   {x : (canvas.width / 16) + 100, y : (canvas.height / 1.5) + 20, width : 20, height : 100, img : button_right},
			   {x : canvas.width / 16, y : (canvas.height / 1.5) + 120, width : 100, height : 20, img : button_down},
			   {x : canvas.width - 200, y : canvas.height - 200, width : 80, height : 80, img : button_shoot},
			   {x : canvas.width - 120, y : canvas.height - 120, width : 80, height : 80, img : button_reload},
			  ];

// mousebox

var mousebox = {x : 0, y : 0, width : 50, height : 50};

function touch_draw(){
	if (isMobile()){
		for (var i = 0; i <= buttons.length; i++) {
			if (buttons[i]){
				if (typeof buttons[i].img !== "undefined"){
					ctx.drawImage(buttons[i].img, buttons[i].x, buttons[i].y);
				}	
			}
		}	
	}

	// ctx.fillStyle = "blue";
	// ctx.fillRect(mousebox.x, mousebox.y, mousebox.width, mousebox.height);
}

function touchstart(event){
	start();
	
	mousebox.x = (event.touches[0].clientX - canvas.offsetLeft);
	mousebox.y = (event.touches[0].clientY - canvas.offsetTop);
}

function touchmove(event){
	const swipeDistance = event.changedTouches[0].pageY - this.touchY;
	
	if (swipeDistance > touchThreshold) {
		console.log("swipedown");
	}

	if (swipeDistance < -touchThreshold) {
		console.log("swipeup");
	}
}

function touchend(event){
	// console.log("End");
}

function touch_update(){
	if (isMobile()){
		if (CheckCollision(mousebox, buttons[0])){
			current_img = img_up;
		}
		if (CheckCollision(mousebox, buttons[1])){
			current_img = img_left;
		}
		if (CheckCollision(mousebox, buttons[2])){
			current_img = img_right;
		}
		if (CheckCollision(mousebox, buttons[3])){
			current_img = img_down;
		}
		if (CheckCollision(mousebox, buttons[4])){
			add_bullet();
		}
		if (CheckCollision(mousebox, buttons[5])){
			reset();
		}	
	}
}

function mousebox_reset(){
	mousebox.x = 0;
	mousebox.y = 0;
}

function isMobile () {
   if (/Android | webOS | iPhone | iPad | iPod | BlackBerry | IEMobile | Opera Mini/i.test (navigator.userAgent)) {
       return true
   }
   else {
       return false
   };
};