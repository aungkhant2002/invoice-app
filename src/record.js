import {createRecodeForm, recordGroup, recordNetTotal, recordRowTemplate, recordTax, recordTotal} from "./selectors.js";
import {products} from "./states.js";

export const createRecordFormHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(createRecodeForm);
    const currentProduct = products.find(({id}) => id == formData.get("product_select"));
    recordGroup.append(createRecordRow(currentProduct, formData.get("quantity")));
    createRecodeForm.reset();

    const total = calculateRecordCostTotal();
    const tax = calculateTax(total);
    recordTotal.innerText = total;
    recordTax.innerText = tax;
    recordNetTotal.innerText = total + tax;
}

export const createRecordRow = ({id, name, price}, quantity) => {
    const recordRow = recordRowTemplate.content.cloneNode(true);
    const recordProductName = recordRow.querySelector(".record-product-name");
    const recordProductPrice = recordRow.querySelector(".record-product-price");
    const recordQuantity = recordRow.querySelector(".record-quantity");
    const recordCost = recordRow.querySelector(".record-cost");
    const currentRecordRow = recordRow.querySelector(".record-row");

    currentRecordRow.setAttribute("product-id", id);
    recordProductName.innerText = name;
    recordProductPrice.innerText = price;
    recordQuantity.innerText = quantity;
    recordCost.innerText = price * quantity;

    return recordRow;
}

export const calculateRecordCostTotal = () => {
    let total = 0;
    recordGroup.querySelectorAll(".record-cost").forEach(el => total += parseFloat(el.innerText));
    return total;
}

export const calculateTax = (amount, percentage = 5) => (amount / 100) * percentage;