const img = document.querySelector('#dog-img');

document.querySelector("#dog-button").addEventListener('click', function() {
    console.log("HELELELEL");
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            img.src = data.message;
            img.alt = 'A random dog image';
        });
})

