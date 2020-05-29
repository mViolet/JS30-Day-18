//solved this one on my own & checked different values for totalSeconds using https://www.tools4noobs.com/online_tools/seconds_to_hh_mm_ss/

const videos = document.querySelector(".videos");
const data = videos.getElementsByTagName("li");

const timesArray = []; //this will be an array containing all times as strings
let totalSeconds = 0;  //this will hold total # of seconds

for (i = 0; i < data.length; i++) {  //push time values into an empty array
	// console.log(`Video: ${i + 1}... Time: ${data[i].dataset.time}`); //works
	timesArray.push(data[i].dataset.time);
}

function getTotal(item, currentValue) { //function to use in reduce
	return item + currentValue;
}

const timesToSec = timesArray.map(item => {  //new array containing total # of seconds from minutes as an array of integer values
	const n = item.split(':')[1]; //splits item after the ':' into ordered substrings, so for example n[0] and n[1] for the first item would be 4 and 3;
	return (parseInt(item) * 60) + parseInt(n); //parseInt(item) gets the minutes before the ':', incredibly! So I converted that to seconds by multiplying by 60, and then added that to the int value for everything after the ":"
});

totalSeconds = timesToSec.reduce(getTotal, 0);  //gets the total # of seconds (is an integer value)

console.log(`Total Time: ${Math.floor(totalSeconds / 3600)} Hours, ${((totalSeconds % 3600) - (totalSeconds % 60)) / 60} Minutes, ${totalSeconds % 60} Seconds`);  //phew!
