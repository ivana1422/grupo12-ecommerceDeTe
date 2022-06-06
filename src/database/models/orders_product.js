

module.exports= (sequelize,dataType)  =>{
    let alias= "orders_product";
    let cols= {
        id:{
            type:dataTypes.INTEGER,
             primaryKey:true,
             autoIncrement: true,
             allowNull: false,

            },
         order_id:{
                type:dataTypes.INTEGER,
                 allowNull: true,
                 primaryKey:'',
    
                },
         produc_id:{
                    type:dataTypes.INTEGER,
                     allowNull: false,
                     primaryKey:'',
    
                     
        
                    },
         cant_produc:{
                type:dataTypes.INTEGER,
                 allowNull: false,
                         
            
                 },
        }
        
            let config= {
            tableName: "orders_product",
            timestamps:false,
        }
           const User= sequelize.define(alias,cols,config)
           product.belongsToMany(models.categories,{
           as:"orders_product",
           through:"product_category",
           foreignkey:"product_id",
           otherkey:"category_id",
           timestamps:false,

})
         return orders_product;
}