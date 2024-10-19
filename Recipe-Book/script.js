const container = document.querySelector(".container");

const recipeBook = [
    {
        name: "Grilled Cheese",
        ingredients: "Bread",
    },
    {
        name: "Peanut Butter",
        ingredients: "Peanut Butter",
    },
    {
        name: "Spaghetti",
        ingredients: "Meatballs",
    },
    {
        name: "Pancakes",
        ingredients: "Syrup",
    }
]

recipeBook.forEach((item) => {
    const card = `  <div class="border-[4px] border-blue-800 p-4 shadow-xl shadow-blue-400 rounded-[20px]">
                    <h2 class="text-xl text-center font-bold">${item.name}</h2>
                    <p class="text-lg">Ingredients:</p>
                    <ul class="text-center">
                        <li>${item.ingredients}</li>
                </div>`
    container.innerHTML += card;
})