<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0 plus SVG 1.1//EN"
"http://www.w3.org/2002/04/xhtml-math-svg/xhtml-math-svg.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:svg="http://www.w3.org/2000/svg" xml:lang="en">

<head>
	<meta http-equiv="content-type" content="application/xhtml+xml; charset=UTF-8" />

	<title>Studium Countdown</title>

	<meta name="description" content="Studium Countdown" />
	<meta name="keywords" content="countdown" />
			
	<script type="text/javascript" src="functions.js"></script>
	
	<link type="text/css" rel="stylesheet" href="style.css" />
	<link rel="icon" href="favicon.png" type="image/png" />
</head>

<body onload="Countdown_to()" >	

<h1>Studium</h1>

<?php
include 'functions.php';
echo countdown(9);
?>	

</body >
</html>