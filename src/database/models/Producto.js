const { productDetail } = require("../../controllers/productsControllers");

module.exports= (sequelize,dataType)  =>{
    let alias= "products";
    let cols= {
        id:{
            type:dataTypes.INTEGER,
             primaryKey:true,
             autoIncrement: true,
             allowNull: false,

        },
        name:{
            type:dataType.STRING(100),
            aloowNull:false,
        },
        price:{
            type:dataType.INTEGER, 
            aloowNull:false,
        },
        discount:{
            type:dataType.INTEGER,
        },
        categoryId:{
            type:dataType.INTEGER,
            aloowNull:false,
        },
        projectId:{
            type:dataType.INTEGER,
            aloowNull:false,
        },
        stock:{
            type:dataType.BOOLEAN,
            aloowNull:false,
        },
        description:{
            type:dataType.TEXT,
            aloowNull:false,
        },
        Image:{
            type:dataType.STRING,
            aloowNull:true,
        }
    }
let config= {
    tableName: "products",
    timestamps:false,
}
const User= sequelize.define(alias,cols,config);

product.associate=(models)=>{
    product.haaMany(models.images,{
        as:"images",
        foreignKey:"produc_id"
    });
    
    product.haaMany=(models.ingredients,{
        as:"ingredients",
        foreignKey:"produc_id"
        });








product.belongsToMany(models.categories,{
    as:"categories",
    through:"product_category",
    foreignkey:"product_id",
    otherkey:"category_id",
    timestamps:false,

})
return product;
 
}}