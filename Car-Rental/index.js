const carContainer = document.querySelector(".container");

const carCards = [
    {
        img : "./assets/Car-1.png",
        name : "car-1",
        price: 1000,
    },

    {
        img : "./assets/Car-2.png",
        name : "car-2",
        price: 2000,
    },

    {
        img : "./assets/Car-3.png",
        name : "car-3",
        price: 3000,
    },

    {
        img : "./assets/Car-4.png",
        name : "car-4",
        price: 4000,
    },

    {
        img : "./assets/Car-5.png",
        name : "car-5",
        price: 5000,
    },

    {
        img : "./assets/Car-6.png",
        name : "car-6",
        price: 6000,
    }
]

const displayCards = () => {
    carCards.forEach((cars) => {
        const card = `<div class="collection-item rounded-lg border border-black mx-10">
            <div class="img-container">
                <img src="${cars.img}">
            </div>

            <div class="details-container">
                <p>${cars.name}</p>
                <h1>${cars.price}<sub>/day</sub></h1>
                <div class="button-container">
                    <div class="button">
                        <button>Rent Now</button>
                    </div>
                </div>

            </div>
        </div>`

        carContainer.innerHTML += card; 
    }) 
} 

displayCards();