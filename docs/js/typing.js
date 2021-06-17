const texts = ["Hello, I am a Data Scientist", "Do you know about data scientist?", "How about an A.I.?"];
let counter = 0;
let index = 0;
let text = "";
let letter = "";
let delta = 1;


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


function update_delta(index, text){
	if (index > text.length){
		return -1;
	}
	else {
		return 1;
	}
}


(function typing(){
	if (counter === texts.length){
		counter = 0;
	}
	text = texts[counter];
	letter = text.slice(0, index);
	index += delta;
	if (index <0 ){
		document.querySelector('.typing').textContent = "";
		document.querySelector('.input').textContent = "In ["+(counter+1)+"]:";
		counter++;
		delta = update_delta(index, text);
		index = 0;
	} else{
	document.querySelector('.typing').textContent = letter;
	document.querySelector('.input').textContent = "In ["+(counter+1)+"]:";
	}
	
	if (index > text.length + 1){
		delta = update_delta(index, text);
		index += delta;
		sleep(1000);
	}
	setTimeout(typing, 100)
}());