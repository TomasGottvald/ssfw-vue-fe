import config from "/ssfw-api/config";

export default {
    methods: {
        SsfwPrintData(){
            console.log("Cart content: " + localStorage.getItem("SsfwCartContent"));
            console.log("Address: " +localStorage.getItem("SsfwOrderAddress"));
            console.log("Billing: " +localStorage.getItem("SsfwOrderBilling"));
            console.log("Payment: " +localStorage.getItem("SsfwOrderPayment"));
            console.log("Shipping: " +localStorage.getItem("SsfwOrderShipping"));
        },

        SsfwSaveAddress(address) {
            if(process.browser){

                localStorage.setItem('SsfwOrderAddress', "");
                localStorage.setItem('SsfwOrderAddress', JSON.stringify(address));
            }
        },

        SsfwSaveDelivery(address) {
            if(process.browser){

                localStorage.setItem('SsfwOrderDelivery', "");
                localStorage.setItem('SsfwOrderDelivery', JSON.stringify(delivery));
            }
        },

        SsfwSavePayment(payment) {
            if(process.browser){
                localStorage.setItem('SsfwOrderPayment', "");
                localStorage.setItem('SsfwOrderPayment', JSON.stringify(payment));
            }
        },

        SsfwSaveShipping(shipping) {
            if(process.browser){
                localStorage.setItem('SsfwOrderShipping', "");
                localStorage.setItem('SsfwOrderShipping', JSON.stringify(shipping));
            }
        },
    }
}
