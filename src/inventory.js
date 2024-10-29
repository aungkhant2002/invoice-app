import {v4 as uuidv4} from 'uuid';
import {newProductName, newProductPrice, productCardTemplate, productGroup, productSelect} from "./selectors.js";
import {products} from "./states.js";

export const addNewProductBtnHandler = () => {
    const createId = uuidv4();
    productGroup.append(createProductCard(createId, newProductName.value, newProductPrice.valueAsNumber));
    productSelect.append(new Option(`${newProductName.value} - ${newProductPrice.valueAsNumber}`, createId));
    products.push({
        id: createId,
        name: newProductName.value,
        price: newProductPrice.valueAsNumber,
    })

    newProductName.value = null;
    newProductPrice.value = null;
}

export const productRender = (products) => {
    products.forEach(({id, name, price}) => {
        productGroup.append(createProductCard(id, name, price));
        productSelect.append(new Option(`${name} - ${price}`, id));
    })
}

export const createProductCard = (id, name, price) => {
    const productCard = productCardTemplate.content.cloneNode(true);
    const productName = productCard.querySelector(".product-name");
    const productPrice = productCard.querySelector(".product-price");
    const currentProductCard = productCard.querySelector(".product-card");
    currentProductCard.classList.add("animate__animated", "animate__zoomIn");
    currentProductCard.id = id;
    productName.innerText = name;
    productPrice.innerText = price;
    return productCard;
}