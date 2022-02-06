const myHeading = document.querySelector('h1');
console.log(myHeading);

async function getCSV() {
    const requestURL = 'https://github.com/Kolsemi/dictionary/blob/main/dictionary.csv';
    const request = new Request(requestURL);

    const response = await fetch(request);
}

