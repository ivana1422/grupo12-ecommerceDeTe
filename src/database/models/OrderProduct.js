

module.exports= (sequelize,dataTypes)  =>{
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
                 allowNull: false
    
                },
         product_id:{
                    type:dataTypes.INTEGER,
                     allowNull: false
                    },
         cant_product:{
                type:dataTypes.INTEGER,
                 allowNull: false
                 },
        }
        
            let config= {
            tableName: "orders_product",
            timestamps:false,
        }
           const OrderProduct= sequelize.define(alias,cols,config)


         return OrderProduct;
}