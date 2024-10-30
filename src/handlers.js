import {closeSideBarBtn, productSideBar} from "./selectors.js";

export const manageInventoryBtnHandler = () => {
    productSideBar.classList.remove('translate-x-full');
    productSideBar.classList.add('duration-300');
}

export const closeSideBarBtnHandler = () => {
    productSideBar.classList.add('translate-x-full', 'duration-300');
}

export const printHandler = () => {
    window.print();
}