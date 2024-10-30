import {
    addNewProductBtn,
    closeSideBarBtn,
    createRecodeForm,
    manageInventoryBtn,
    print,
    recordGroup
} from "./selectors.js";
import {closeSideBarBtnHandler, manageInventoryBtnHandler, printHandler} from "./handlers.js";
import {addNewProductBtnHandler} from "./inventory.js";
import {createRecordFormHandler, recordGroupHandler} from "./record.js";

const listener = () => {
    manageInventoryBtn.addEventListener('click', manageInventoryBtnHandler);
    closeSideBarBtn.addEventListener('click', closeSideBarBtnHandler);
    addNewProductBtn.addEventListener('click', addNewProductBtnHandler);
    createRecodeForm.addEventListener('submit', createRecordFormHandler);
    recordGroup.addEventListener('click', recordGroupHandler);
    print.addEventListener('click', printHandler);
}

export default listener;