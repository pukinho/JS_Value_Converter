
let $ = function (id) {
	return document.getElementById(id);
};

let listValue = $('selectConv');

// Initial values for each droplist selection
$('selectConv').addEventListener('click', function () {
	if ($('selectConv').value === "1") {
		$('valInput').value = 0;
		$('input-text').innerHTML = 'Insert kilograms';
		$('1-output-text').innerHTML = 'Stones:';
		$('2-output-text').innerHTML = 'Pounds';
		$('3-output-text').innerHTML = 'Ounces';
		$('1-output').innerHTML = 0;
		$('2-output').innerHTML = 0;
		$('3-output').innerHTML = 0;
	} else if ($('selectConv').value === "2") {
		$('valInput').value = 0;
		$('input-text').innerHTML = 'Insert Joules';
		$('1-output-text').innerHTML = 'Watt/h:';
		$('2-output-text').innerHTML = 'Kilocalories';
		$('3-output-text').innerHTML = 'Foot-pounds';
		$('1-output').innerHTML = 0;
		$('2-output').innerHTML = 0;
		$('3-output').innerHTML = 0;
	} else if ($('selectConv').value === "3") {
		$('valInput').value = 0;
		$('input-text').innerHTML = 'Insert kilometers';
		$('1-output-text').innerHTML = 'Feet:';
		$('2-output-text').innerHTML = 'Miles';
		$('3-output-text').innerHTML = 'Yards';
		$('1-output').innerHTML = 0;
		$('2-output').innerHTML = 0;
		$('3-output').innerHTML = 0;
	} else if ($('selectConv').value === "0") {
		$('input-text').innerHTML = 'Insert value';
		$('1-output-text').innerHTML = '-';
		$('2-output-text').innerHTML = '-';
		$('3-output-text').innerHTML = '-';
	}
});

// Calculations on value changes
$('valInput').addEventListener('input', function (e) {
	let val = e.target.value;

	if ($('selectConv').value === "1") {

		$('1-output').innerHTML = val * 0.157473;
		$('2-output').innerHTML = val * 2.20462;
		$('3-output').innerHTML = val * 35.274;

	} else if ($('selectConv').value === "2") {

		$('1-output').innerHTML = val * 0.000277778;
		$('2-output').innerHTML = val * 0.000239006;
		$('3-output').innerHTML = val * 0.737562;

	} else if ($('selectConv').value === "3") {

		$('1-output').innerHTML = val * 3280.84;
		$('2-output').innerHTML = val * 0.621371;
		$('3-output').innerHTML = val * 1093.61;

	} else if ($('selectConv').value === "0") {

		$('1-output').innerHTML = ' ';
		$('2-output').innerHTML = ' ';
		$('3-output').innerHTML = ' ';
	}
});