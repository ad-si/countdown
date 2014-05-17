
function Countdown_to()
	{	
		var to_year = 2011;
		var to_month = 8;
		var to_day = 15;
		var to_hour = 0;
		var to_minute = 0;
		var to_second = 0;
	
		var now = new Date();
		var countdown = new Date(to_year, to_month-1, to_day, to_hour, to_minute, to_second);		
		var milliseconds = countdown.getTime() - now.getTime();
		var Rest = milliseconds;
		CountdownText = "";

			var Tage = Math.floor(Rest/86400000);
			
			Rest = milliseconds % 86400000;
			
			if( Tage > 9) {
				CountdownText += Tage;
			}
			else{
				CountdownText += "0" + Tage;
			}

			var Stunden = Math.floor(Rest/3600000);
			Rest = milliseconds % 3600000;

			if( Stunden > 9){
				CountdownText += Stunden;
			}
			else{
				CountdownText += "0" + Stunden;
			}
			
			var Minuten = Math.floor(Rest/60000);
			Rest = milliseconds % 60000;

			if( Minuten > 9) {
				CountdownText += Minuten;
			}
			else { 
				CountdownText += "0" + Minuten;
			}

			var Sekunden = Math.floor(Rest/1000);
			Rest = milliseconds % 1000;
			
			if( Sekunden > 9) {
				CountdownText += Sekunden;
			}
			else {       
				CountdownText += "0" + Sekunden;
			}				
				
			if( Rest >= 100) {
				CountdownText += Rest;
			}
			else if(Rest < 100 && Rest >= 10) {
				CountdownText += "0" + Rest;
			}
			else{
				CountdownText += "00" + Rest;	
			}	
			
			
			if (milliseconds < 0){				
				CountdownText = "00000000000";	
				redirect();
			}
			
				countdownNumber = CountdownText.split(""); //Array of countdown-values
				
		Countdown(countdownNumber);	
	}

function clock(){
	var date = new Date();
	var time = date.getTime();
	var num = time;
	
	Countdown(time);
}


function redirect(){
	window.location = "http://www.google.de/"
}

	

	var date = new Date();
	var time = date.getTime();
		
	if (time > 1322577420000){				
		redirect();
	}
	
	


	TestString = new Array();
	var Interval;	
	
	num  = new Array();
	start  = new Array();
	move  = new Array();
	size  = new Array();	
	

	
	function flip(pos){
			num[pos] += 5;			
			
			if(num[pos] <= 50){		//shrink			
				move[pos] = 50 - num[pos];
				
				document.getElementById("number" + pos + "_up_front").style.height = move[pos] + "px";
				
				document.getElementById("number" + pos + "_up_front").style.top = num[pos] + "px";
			}
			else if(num[pos] <= 100) //expand
			{		
				size[pos] = num[pos] - 50;
				
				document.getElementById("number" + pos + "_down_back").style.visibility = "visible";				
				document.getElementById("number" + pos + "_down_back").style.height = size[pos] + "px";			
				
			}
			
			if(num[pos] > 100){	clearTimeout(start[pos]);}
			start[pos] = setTimeout('flip(' + pos + ')', 30);
			
																				
		}
		

	function changeCountdownnumber(newVal, position){
		
		newValue = parseInt(newVal, 10);
	
		oldValue = (newValue + 1)%10;
		
			document.getElementById("number" + position + "_up_front").src = "img/up_" + oldValue +  ".png";		
			document.getElementById("number" + position + "_down_front").src = "img/down_" + oldValue +  ".png";
			
			document.getElementById("number" + position + "_down_back").style.visibility = "hidden";
			document.getElementById("number" + position + "_down_back").src = "img/down_" + newValue +  ".png";			
			document.getElementById("number" + position + "_up_back").src = "img/up_" + newValue +  ".png";
			
			
			
		num[position] = 0;
			
		flip(position);
	}


	function Countdown(newNumber)
	{	
				for(var i=0; i<9; i++ ){
					if(newNumber[i] != TestString[i]){  //Test wether the countdownumber changed
						changeCountdownnumber(newNumber[i], i+1);  //If changed --> 
					}			
				}
				
				TestString = newNumber;		
				
				window.setTimeout("Countdown_to()", 200); //Reload frequency in ms			
	}



/*	
	function Countdown()
	{
	
		var to_year = 2011;
		var to_month = 5;
		var to_day = 1;
		var to_hour = 0;
		var to_minute = 0;
		var to_second = 0;
	
		var now = new Date();
		var countdown = new Date(to_year, to_month-1, to_day, to_hour, to_minute, to_second);		
		var milliseconds = countdown.getTime() - now.getTime();
		var Rest = milliseconds;
		CountdownText = "";

			var Tage = Math.floor(Rest/86400000);
			
			Rest = milliseconds % 86400000;
			
			if( Tage > 9) {
				CountdownText += Tage;
			}
			else{
				CountdownText += "0" + Tage;
			}

			var Stunden = Math.floor(Rest/3600000);
			Rest = milliseconds % 3600000;

			if( Stunden > 9){
				CountdownText += Stunden;
			}
			else{
				CountdownText += "0" + Stunden;
			}
			
			var Minuten = Math.floor(Rest/60000);
			Rest = milliseconds % 60000;

			if( Minuten > 9) {
				CountdownText += Minuten;
			}
			else { 
				CountdownText += "0" + Minuten;
			}

			var Sekunden = Math.floor(Rest/1000);
			Rest = milliseconds % 1000;
			
			if( Sekunden > 9) {
				CountdownText += Sekunden;
			}
			else {       
				CountdownText += "0" + Sekunden;
			}				
				
			if( Rest >= 100) {
				CountdownText += Rest;
			}
			else if(Rest < 100 && Rest >= 10) {
				CountdownText += "0" + Rest;
			}
			else{
				CountdownText += "00" + Rest;	
			}	
			
			
			if (milliseconds < 0){				
				CountdownText = "00000000000";	
				redirect();
			}
			
				countdownNumber = CountdownText.split(""); //Array of countdown-values
				 
				for(var i=0; i<9; i++ ){
					if(countdownNumber[i] != TestString[i]){  //Test wether the countdownnumber changed
						changeCountdownnumber(countdownNumber[i], i+1);  //If changed --> 
					}			
				}
				
				TestString = countdownNumber;		
				
				window.setTimeout("Countdown()", 200); //Reload frequency in ms
			
	}
	
*/