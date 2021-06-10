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
