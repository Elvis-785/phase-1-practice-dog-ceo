console.log('%c HI', 'color: firebrick')

// challenge 1: Fetch Images and display Them
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    fetchImage();
});
// Fetch images from the API and display them
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchImage() {
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById("dog-image-container");
            data.message.forEach(imageURL => {
                const img = document.createElement("img");
                img.src = imageURL;
                imageContainer.appendChild(img);
            })
        })
}

//challenge2:  Fetch breeds and list them.
// fetch breed from API and and list them;
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
    fetchBreeds();
});

function fetchBreeds() {
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = data.message;
            const breedList = document.getElementById("dog-breeds");
            for (let breed in breeds) {
                const li = document.createElement("li");
                li.textContent = breed;
                //challenge3: Change the font color on click
                li.addEventListener("click", () => {
                    li.style.color = "brown";
                });
                breedList.appendChild(li);
            }
        })  
}


// Challenge4: Filter breeds by first letter
// add filter functionality based on user selection;
document.addEventListener("DOMContentLoaded", () => {
    fetchBreeds();
    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", (event) => {
        const selectedLetter = event.target.value;
        filterBreeds(selectedLetter);
    });
});

function filterBreeds(letter) {
    const breedList = document.getElementById("dog-breeds");
    breedList.innerHTML = "";
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = data.message;
            for (let breed in breeds) {
                if (breed.startsWith(letter)) {
                    const li = document.createElement("li");
                    li.textContent = breed;
                    li.addEventListener("click", () => {
                        li.style.color = "blue";
                    });
                    breedList.appendChild(li);
                }
            }
        });
}