

module.exports= (sequelize,dataTypes)  =>{
    let alias= "product_category";
    let cols= {
        id:{
            type:dataTypes.INTEGER,
             primaryKey:true,
             autoIncrement: true,
             allowNull: false,

            },
         product_id:{
                type:dataTypes.INTEGER,
                 allowNull: false,
    
                },
         category_id:{
                    type:dataTypes.INTEGER,
                     allowNull: false,

                    },
        
        }
        
            let config= {
            tableName: "product_category",
            timestamps:false,
        }
           const ProductCategory= sequelize.define(alias,cols,config)


         return ProductCategory;
}