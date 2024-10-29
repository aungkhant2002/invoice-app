import listener from "./listener.js";
import initialRender from "./initialRender.js";
import observer from "./observer.js";

class Invoice {
    init() {
        console.log("Invoice App start");
        observer();
        initialRender();
        listener()
    }
}

export default Invoice;