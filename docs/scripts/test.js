const myHeading = document.querySelector('h1');
console.log(myHeading);

const reader = new FileReader();
reader.addEventListener('load', (event) => {
    img.src = event.target.result;
    });
reader.readAsDataURL(file);