const db = require('../../database/models')


module.exports = {
    productDetail: (req, res) => {

        let productoId = +req.params.id;

        db.products.findOne({
            where: {
                id: productoId
            },
            include: [{ association: "images"}, { association: "ingredients"},{association:"categories"}]
        })
        .then((producto) => {
            
            res.status(200).json({
                producto
            })
        })
        .catch((error) => { res.send(error)})        
    },
    allProductsFilter:(req,res)=>{

        let products = db.products.findAll({
            include: [{ association: "images"}, { association: "ingredients"},{association:"categories"}]
        })

        let categories = db.categories.findAll()
        
        Promise.all([products,categories])
            .then(result=>{
                res.json({
                    products:result[0],
                    categories:result[1]
                })
            })
    },
    createProduct:async (req,res)=>{
        let idProducto = undefined

        db.products.create({
            name : req.body.name,
            description: req.body.description,
            price: req.body.price,
            coment : req.body.coment,
            category: req.body.category,
            stock: req.body.stock ? req.body.stock : req.body.stock = 0,
            discount: req.body.discount ? req.body.discount : req.body.discount = null
        }, {include: [{ association: "images"}, { association: "ingredients"}]})
        .then(async (product) => {

            idProducto = product.id

            let defaultImage = "https://res.cloudinary.com/ecommerce-tea/image/upload/v1658196622/product_htzrzn.png"
            let urlNamesArray = []

            if(req.files.length > 0){

                let pathsArray = []
                let tempUrls = []
                let imageUrl1 = ''
                let imageUrl2 = ''
                let imageUrl3 = ''
    
                req.files.forEach(file=>{
                    pathsArray.push(file.path)
                })
    
                imageUrl1 = req.files && req.files[0] ? await cloudinary.v2.uploader.upload(req.files[0].path) : undefined
                imageUrl2 = req.files && req.files[1] ? await cloudinary.v2.uploader.upload(req.files[1].path) : undefined
                imageUrl3 = req.files && req.files[2] ? await cloudinary.v2.uploader.upload(req.files[2].path) : undefined
                tempUrls.push(imageUrl1)
                tempUrls.push(imageUrl2)
                tempUrls.push(imageUrl3)

                tempUrls.forEach(image=>{
                    if(image !== undefined){
                        urlNamesArray.push({
                            src: image.secure_url,
                            public_id:image.public_id
                        })
                    }
                })
                pathsArray.forEach(pathFile=>{
                    fs.unlinkSync(pathFile)
                })
            } else {
                urlNamesArray.push({
                    src:defaultImage,
                    public_id:''
                })
            }

            let arrayImages = urlNamesArray.map(image => {
                return {
                    ...image,
                    product_id: product.id
                }
            })
            

            let ingredients = [req.body.ingredient1, req.body.ingredient2, req.body.ingredient3]
            
            let arrayIngredients = ingredients.map( ingredient => {
                return {
                    name: ingredient,
                    product_id: product.id
                }
            })

            let imagenes = db.images.bulkCreate(arrayImages)
            let ingredientes = db.ingredients.bulkCreate(arrayIngredients)

            return Promise.all([imagenes, ingredientes])
        })
        .then(() => {
            

            /*return db.categories.findAll({
                where: {
                    name: req.body.category
                }
            })*/
        })
        /*.then((categoryResult) => { 
            let idCategory = categoryResult[0].id

            let productCategories = {
                product_id: product.id,
                category_id: idCategory
            }
            return db.product_category.create(productCategories)
        })
        .then((result) => {
            res.redirect("/admin/productos")
        })
        .catch((error) => {
            console.log(error)
        })*/
    }
}