
module.exports= (sequelize,dataType)  =>{
    let alias= "products";
    let cols= {
        id:{
            type:dataType.INTEGER,
             primaryKey:true,
             autoIncrement: true,
             allowNull: false,

        },
        name:{
            type:dataType.STRING(50),
            allowNull:false,
        },
        price:{
            type:dataType.INTEGER, 
            allowNull:false,
        },
        discount:{
            type:dataType.INTEGER
        },
        stock:{
            type:dataType.INTEGER,
            allowNull:false,
        },
        description:{
            type:dataType.TEXT,
            allowNull:false,
        },
        coment:{
            type:dataType.TEXT,
            allowNull:false,
        },
        offer:{
            type:dataType.BOOLEAN
        },
        weight:{
            type:dataType.STRING(50)
        },
        category_id:{
            type:dataType.INTEGER,
            allowNull:false,
        }
    }
let config= {
    tableName: "products",
    timestamps:false,
}

const Product= sequelize.define(alias,cols,config);

Product.associate=(models)=>{
    Product.hasMany(models.images,{
        as:"images",
        foreignKey:"product_id"
    })

    Product.hasMany(models.ingredients,{
        as:"ingredients",
        foreignKey:"product_id"
    })

    Product.belongsTo(models.categories,{
        as:"categories",
        foreignKey:"category_id",
    })

    Product.belongsToMany(models.orders,{
        as:"orders",
        through:"orders_product",
        foreignKey:"product_id",
        otherKey:"order_id",
        createdAt:"created_at",
        updatedAt:false,
        deletedAt:false
    })
}
return Product;
}