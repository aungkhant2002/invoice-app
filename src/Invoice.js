import listener from "./listener.js";
import initialRender from "./initialRender.js";

class Invoice {
    init() {
        console.log("Invoice App start");
        initialRender();
        listener()
    }
}

export default Invoice;