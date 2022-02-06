const myHeading = document.querySelector('h1');
console.log(myHeading);

async function getCSV() {
    const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
}

