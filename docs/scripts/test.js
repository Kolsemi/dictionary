const myHeading = document.querySelector('h1');
console.log(myHeading);
async function getTextFromStream(readableStream) {
    let reader = readableStream.getReader();
    let utf8Decoder = new TextDecoder();
    let nextChunk;
    
    let resultStr = '';
    
    while (!(nextChunk = await reader.read()).done) {
        let partialData = nextChunk.value;
        resultStr += utf8Decoder.decode(partialData);
    }
    
    return resultStr;
}

async function getCSV() {
    const requestURL = 'https://github.com/Kolsemi/dictionary/blob/main/dictionary.csv';
    const request = new Request(requestURL);
    const response = await fetch(request, {mode: 'no-cors', headers: {'Content-Type': 'text/plain'}});
    let responseText = await getTextFromStream(response.body)
    document.getElementById('result').innerHTML = responseText;
}

