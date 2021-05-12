import config from "/ssfw-api/config";

export default {
    methods: {
        SsfwGetProductUrl(product) { 
            const oldLink = product.node.link.replace(config.SsfwDataUrl, "");
            const newUrl = `/p/${product.node.uuid}/${oldLink}`;
            return newUrl;
        },
        SsfwGetProductName(product) { 
            const newName = product.node.name.replace('"', "");
            return newName;
        },
        SsfwGetProductImage(product) { 
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
        },
        SsfwGetProductAltFromUrlImages(url) {
            const productAlt = url.split('/').join(',').split('.').join(',').split(',');
            const lastArray = productAlt[productAlt.length - 2];

            return lastArray;
        }
    }
  }
