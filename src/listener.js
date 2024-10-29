import {addNewProductBtn, closeSideBarBtn, createRecodeForm, manageInventoryBtn, recordGroup} from "./selectors.js";
import {closeSideBarBtnHandler, manageInventoryBtnHandler} from "./handlers.js";
import {addNewProductBtnHandler} from "./inventory.js";
import {createRecordFormHandler, recordGroupHandler} from "./record.js";

const listener = () => {
    manageInventoryBtn.addEventListener('click', manageInventoryBtnHandler);
    closeSideBarBtn.addEventListener('click', closeSideBarBtnHandler);
    addNewProductBtn.addEventListener('click', addNewProductBtnHandler);
    createRecodeForm.addEventListener('submit', createRecordFormHandler);
    recordGroup.addEventListener('click', recordGroupHandler);
}

export default listener;