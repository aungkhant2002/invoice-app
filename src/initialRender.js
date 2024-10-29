import {productSideBar} from "./selectors.js";

const initialRender = () => {
    // open sidebar
    productSideBar.classList.remove("translate-x-full");
}

export default initialRender;