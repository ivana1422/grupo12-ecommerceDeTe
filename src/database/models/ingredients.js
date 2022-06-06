

module.exports= (sequelize,dataType)  =>{
    let alias= "ingredients";
    let cols= {
        id:{
            type:dataTypes.INTEGER,
             primaryKey:true,
             autoIncrement: true,
             allowNull: false,

            },
         src:{
                type:dataTypes.STRING(200),
                 allowNull: true,
    
                },
         product_id:{
                    type:dataTypes.INTEGER,
                     allowNull: false,
                     primaryKey:"",
        
                    },
        }
        
            let config= {
            tableName: "ingredients",
            timestamps:false,
        }
           const User= sequelize.define(alias,cols,config)
           product.belongsToMany(models.categories,{
           as:"ingredients",
           through:"product_category",
           foreignkey:"product_id",
           otherkey:"category_id",
           timestamps:false,

})
         return ingredients;
}