

module.exports= (sequelize,dataType)  =>{
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
           const User= sequelize.define(alias,cols,config)
           product.belongsToMany(models.categories,{
           as:"product_category",
           through:"product_category",
           foreignkey:"product_id",
           otherkey:"category_id",
           timestamps:false,

})
         return product_category;
}