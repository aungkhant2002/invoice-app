import {addNewProductBtn, closeSideBarBtn, createRecodeForm, manageInventoryBtn} from "./selectors.js";
import {closeSideBarBtnHandler, manageInventoryBtnHandler} from "./handlers.js";
import {addNewProductBtnHandler} from "./inventory.js";
import {createRecordFormHandler} from "./record.js";

const listener = () => {
    manageInventoryBtn.addEventListener('click', manageInventoryBtnHandler);
    closeSideBarBtn.addEventListener('click', closeSideBarBtnHandler);
    addNewProductBtn.addEventListener('click', addNewProductBtnHandler);
    createRecodeForm.addEventListener('submit', createRecordFormHandler);
}

export default listener;