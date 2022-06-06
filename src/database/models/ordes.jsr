

module.exports= (sequelize,dataType)  =>{
    let alias= "orders";
    let cols= {
        id:{
            type:dataTypes.INTEGER,
             primaryKey:true,
             autoIncrement: true,
             allowNull: false,

            },
         user_id:{
                type:dataTypes.INTEGER,
                 allowNull: true,
    
                },
         state:{
                    type:dataTypes.INTEGER,
                     allowNull: false,
                     
        
                    },
         created_at:{
                type:dataTypes.DATE,
                 allowNull: false,
                         
            
                 },
        }
        
            let config= {
            tableName: "orders",
            timestamps:false,
        }
           const User= sequelize.define(alias,cols,config)
           product.belongsToMany(models.categories,{
           as:"orders",
           through:"product_category",
           foreignkey:"product_id",
           otherkey:"category_id",
           timestamps:false,

})
         return orders;
}