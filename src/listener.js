import {addNewProductBtn, closeSideBarBtn, manageInventoryBtn} from "./selectors.js";
import {closeSideBarBtnHandler, manageInventoryBtnHandler} from "./handlers.js";
import {addNewProductBtnHandler} from "./inventory.js";

const listener = () => {
    manageInventoryBtn.addEventListener('click', () => {
        manageInventoryBtnHandler();
    })
    closeSideBarBtn.addEventListener('click', () => {
        closeSideBarBtnHandler();
    })
    addNewProductBtn.addEventListener('click', () => {
        addNewProductBtnHandler();
    })
}

export default listener;