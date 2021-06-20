import config from "/ssfw-api/config";

export default {
    methods: {
        SsfwGetProductUrl(product) {
            const oldLink = product.node.link.replace(config.SsfwDataUrl, "");
            const newUrl = `/p/${product.node.uuid}/${oldLink}`;
            return newUrl;
        },

        SsfwGetProductName(product) { 
            if(product.node){
                const newName = product.node.name.replace('"', "");
                return newName;
            }
            if(product.name){
                const newName = product.name.replace('"', "");
                return newName;
            }
        },

        SsfwGetProductImage(product) { 
            if(product.node){
                var mainImage = product.node.images.slice(0, 1).map(item => {
                    if(item){
                        return item.url; 
                    } 
                });
    
                if(mainImage != "") {
                    return mainImage;
                } else {
                    return config.SsfwNoImageUrl;
                }
            }
            if(product.images){
                var mainImage = product.images.slice(0, 1).map(item => {
                    if(item){
                        return item.url; 
                    } 
                });
    
                if(mainImage != "") {
                    return mainImage;
                } else {
                    return config.SsfwNoImageUrl;
                }
            }
        },

        SsfwAddItem(product, qty) {
            const addCartItem = { 
                productUuid: product.uuid,
                quantity: this.qty,
                item: product
            }
            if(process.browser){
                localStorage.setItem('SsfwCartContent', "");
                localStorage.setItem('SsfwCartContent', JSON.stringify(addCartItem));
            }
        },
        
        SsfwGetCartContent() {
            if(process.browser){
                const cartContent = localStorage.getItem("SsfwCartContent");
                console.log(JSON.parse(cartContent));
                return JSON.parse(cartContent);
            }
        },

        SsfwGetCartContentItems() {
            if(process.browser){
                const cartContent = JSON.parse(localStorage.getItem("SsfwCartContent"));
                console.log(cartContent.item);
                return cartContent.item;
            }
        },

        SsfwGetCartCount() {
            if(process.browser){
                return localStorage.getItem("SsfwCartContent").length;
            }
        },
        SsfwGetProductAltFromUrlImages(url) {
            const productUrl = url.split('/').join(',').split('.').join(',').split(',');
            const productAlt = productUrl[productUrl.length - 2];

            return productAlt;
        },
        SsfwProductParameters(category, brand, parameters) {
            const categoryValues = category.map(obj => {
                return obj.name;
            }).join('');

            const parametersValues = parameters.map(obj => {
                return obj.name + ' : ' + obj.values[0].text;
            }).join(', ');

            const categoryData = {name: category[0].__typename, value: categoryValues};
            const brandData = {name: brand.__typename, value: brand.name};
            const parametersData = {name: parameters[0].__typename, value: parametersValues};
            const data = [categoryData, brandData, parametersData];

            return data;
        }
    }
}

