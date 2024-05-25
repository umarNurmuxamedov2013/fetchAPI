fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then(data => createCards(data))

function createCards(products) {
    const cards = document.querySelector(".cards")
    products.forEach(product => {
        const card = document.createElement("div")
        card.classList.add("card")


        const id = document.createElement("h2")
        id.classList.add("idNumber")
        id.textContent = `id : ${product.id}`

        const titleProduct = document.createElement("h2")
        titleProduct.classList.add("titile")
        titleProduct.textContent = `title: ${product.title}`

        
        const descriptionProduct = document.createElement("p")
        descriptionProduct.classList.add("description")
        descriptionProduct.textContent = `description: ${product.description}`



        const price = document.createElement("p")
        price.classList.add("price")
        price.textContent = `${product.price}$`


        card.append(id,titleProduct.descriptionProduct,price)
        cards.append(card)

        console.log(card);

    });
}

console.log(createCards);