// fetch('https://type.fit/api/quotes')
// .then(res => res.json())
// .then(data => console.log(data[0].text))
const quote = document.getElementById("quote")

window.onload = main();

function main(){
	
	fetch('https://type.fit/api/quotes')
	.then(res => res.json())
	.then((data) => {
		let rand = Math.floor(Math.random()*data.length);
		quote.textContent = data[rand].text
		// console.log(data.length)
	})
	.catch(err => console.log(err));
}

