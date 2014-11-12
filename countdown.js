!function (window, document) {

	var TestString = [],
	    num = [],
	    start = [],
	    move = [],
	    size = [],
	    newValue,
	    oldValue,
		date

	window.countdownTo = function (_date) {
		
		var to_year,
			to_month,
			to_day,
			to_hour,
			to_minute,
			to_second,
			Sekunden,
			now,
			countdown,
			milliseconds,
			Rest,
			Tage,
			Stunden,
			CountdownText,
			Minuten,
			countdownNumber
		
		
		date = date || new Date(_date),

		to_year = date.getFullYear(),
		to_month = date.getMonth() + 1,
		to_day = date.getDay(),
		to_hour = date.getHours(),
		to_minute = date.getMinutes(),
		to_second = date.getSeconds(),
		Sekunden,

		now = new Date(),
		countdown = new Date(to_year, to_month - 1, to_day, to_hour, to_minute, to_second),
		milliseconds = countdown.getTime() - now.getTime(),
		Rest = milliseconds,
		Tage = Math.floor(Rest / 86400000),
		Stunden,
		CountdownText = "",
		Minuten,
		countdownNumber
		
		console.log(date);

		console.log(to_year, to_month, to_day,
				to_hour, to_minute, to_second)
			

		Rest = milliseconds % 86400000

		if (Tage > 9)
			CountdownText += Tage
		else
			CountdownText += "0" + Tage


		Stunden = Math.floor(Rest / 3600000)
		Rest = milliseconds % 3600000

		if (Stunden > 9)
			CountdownText += Stunden
		else
			CountdownText += "0" + Stunden


		Minuten = Math.floor(Rest / 60000)
		Rest = milliseconds % 60000

		if (Minuten > 9)
			CountdownText += Minuten
		else
			CountdownText += "0" + Minuten

		Sekunden = Math.floor(Rest / 1000);
		Rest = milliseconds % 1000

		if (Sekunden > 9)
			CountdownText += Sekunden
		else
			CountdownText += "0" + Sekunden

		if (Rest >= 100)
			CountdownText += Rest
		else if (Rest < 100 && Rest >= 10)
			CountdownText += "0" + Rest
		else
			CountdownText += "00" + Rest


		if (milliseconds < 0) {
			CountdownText = "00000000000"
			redirect()
		}

		//Array of countdown-values
		countdownNumber = CountdownText.split("")

		Countdown(countdownNumber)
	}

	function clock () {

		var date = new Date(),
		    time = date.getTime()

		Countdown(time)
	}

	function redirect () {
		window.location = "http://www.google.de/"
	}

	function flip (pos) {
		num[pos] += 5

		//shrink
		if (num[pos] <= 50) {
			move[pos] = 50 - num[pos]

			document
				.getElementById("number" + pos + "_up_front")
				.style
				.height = move[pos] + "px"

			document
				.getElementById("number" + pos + "_up_front")
				.style
				.top = num[pos] + "px"
		}
		//expand
		else if (num[pos] <= 100) {
			size[pos] = num[pos] - 50

			document
				.getElementById("number" + pos + "_down_back")
				.style
				.visibility = "visible"
			document
				.getElementById("number" + pos + "_down_back")
				.style
				.height = size[pos] + "px"

		}

		if (num[pos] > 100)
			clearTimeout(start[pos])

		start[pos] = setTimeout(function () {
			flip(pos)
		}, 30)
	}

	function changeCountdownnumber (newVal, position) {

		newValue = parseInt(newVal, 10)

		oldValue = (newValue + 1) % 10

		document.getElementById("number" + position + "_up_front").src = "img/up_" + oldValue + ".png"
		document.getElementById("number" + position + "_down_front").src = "img/down_" + oldValue + ".png"

		document.getElementById("number" + position + "_down_back").style.visibility = "hidden"
		document.getElementById("number" + position + "_down_back").src = "img/down_" + newValue + ".png"
		document.getElementById("number" + position + "_up_back").src = "img/up_" + newValue + ".png"


		num[position] = 0

		flip(position)
	}

	function Countdown (newNumber) {

		var i

		for (i = 0; i < 9; i++) {
			//Test wether the countdownumber changed
			if (newNumber[i] != TestString[i]) {
				changeCountdownnumber(newNumber[i], i + 1)
			}
		}

		TestString = newNumber

		//Reload frequency in ms
		window.setTimeout(countdownTo, 200);
	}

	/*
	if (time > 1322577420000) {
		redirect()
	}
	*/

}(window, document)
