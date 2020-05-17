
catchBook()
.then(response => {
    console.log('yay')
})
.catch(error => {
    console.log('error!');
    console.error(error);
});

async function catchBook() {
const response = await fetch('../img/bg.jpg')
console.log(response)
const blob = await response.blob();
console.log(blob)
document.getElementById('books').src = URL.createObjectURL(blob);
}


