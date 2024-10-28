import {closeSideBarBtn, manageInventoryBtn} from "./selectors.js";
import {closeSideBarBtnHandler, manageInventoryBtnHandler} from "./handlers.js";

const listener = () => {
    manageInventoryBtn.addEventListener('click', () => {
        manageInventoryBtnHandler();
    })
    closeSideBarBtn.addEventListener('click', () => {
        closeSideBarBtnHandler();
    })
}

export default listener;