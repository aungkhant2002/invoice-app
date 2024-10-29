import {productSideBar} from "./selectors.js";
import {productRender} from "./inventory.js";
import {products} from "./states.js";

const initialRender = () => {
    productRender(products);
}

export default initialRender;