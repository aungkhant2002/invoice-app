import { v4 as uuidv4 } from 'uuid';
import {newProductName, newProductPrice, productCardTemplate, productGroup, productSelect} from "./selectors.js";

export const addNewProductBtnHandler = () => {
    const createId = uuidv4();
    productGroup.append(createProduct(createId, newProductName.value, newProductPrice.valueAsNumber));
    productSelect.append(new Option(newProductName.value, createId));
    newProductName.value = null;
    newProductPrice.value = null;
}

export const createProduct = (id, name, price) => {
    const productCard = productCardTemplate.content.cloneNode(true);
    const productName = productCard.querySelector(".product-name");
    const productPrice = productCard.querySelector(".product-price");
    const currentProductCard = productCard.querySelector(".product-card");
    currentProductCard.id = id;
    productName.innerText = name;
    productPrice.innerText = price + "mmk";
    return productCard;
}