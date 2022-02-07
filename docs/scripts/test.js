const myHeading = document.querySelector('h1');
console.log(myHeading);
/*async function getTextFromStream(readableStream) {
    let reader = readableStream.getReader();
    let utf8Decoder = new TextDecoder();
    let nextChunk;
    
    let resultStr = '';
    
    while (!(nextChunk = await reader.read()).done) {
        let partialData = nextChunk.value;
        resultStr += utf8Decoder.decode(partialData);
    }
    
    return resultStr;
}*/
myArticle = document.getElementById('
function getData() {
    var myRequest = new Request('https://github.com/Kolsemi/dictionary/blob/main/dictionary.txt');
    fetch(myRequest, {mode: 'no-cors'}).then(function(response) {
    return response.text().then(function(text) {
      myArticle.innerHTML = text;
    });
  });
}

