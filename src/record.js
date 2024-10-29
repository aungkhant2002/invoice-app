import {v4 as uuidv4} from 'uuid';
import {createRecodeForm, recordGroup, recordNetTotal, recordRowTemplate, recordTax, recordTotal} from "./selectors.js";
import {products} from "./states.js";
import Swal from "sweetalert2";

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
    currentRecordRow.setAttribute("row-id", uuidv4());

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

export const removeRecord = (rowId) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            const currentRecordRow = document.querySelector(`[row-id='${rowId}']`);
            currentRecordRow.remove();
            const total = calculateRecordCostTotal();
            const tax = calculateTax(total);
            recordTotal.innerText = total;
            recordTax.innerText = tax;
            recordNetTotal.innerText = total + tax;
        }
    });
}

export const recordGroupHandler = (event) => {
    if (event.target.classList.contains("record-remove")) {
        const currentRecordRow = event.target.closest(".record-row");
        removeRecord(currentRecordRow.getAttribute("row-id"));
    }
}