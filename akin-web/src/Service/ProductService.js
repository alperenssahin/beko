//import firebase

export class ProductService{
    static async getBuildingProduct(){
        //firebase await
        let data = {
            "asdaskldjkalsjd": {
                photo:"#000",
                brand:"koctas",
                color:"black"
            },
            "asdasdasdasdafa": {
                photo:"#000",
                brand:"koctas",
                color:"black"
            },
            "gagagagdsgafasdad": {
                photo:"#000",
                brand:"koctas",
                color:"black"
            },
        }
        return Object.keys(data).map(key => {
            return {
            id:key,
            photo:data[key].photo,
            brand:data[key].brand,
            color:data[key].color
            }
        })
    }

    static async getTrusimProduct(){
        //firebase await
        return [
            {
                photo:"#000",
                brand:"koctas",
                color:"black"
            },
            {
                photo:"#0f0",
                brand:"koctas",
                color:"green"
            },
            {
                photo:"#00f",
                brand:"koctas",
                color:"blue"
            },
            {
                photo:"#f00",
                brand:"koctas",
                color:"red"
            }
        ]
    }
}