

module.exports= (sequelize,dataType)  =>{
    let alias= "categories";
    let cols= {
        id:{
            type:dataTypes.INTEGER,
             primaryKey:true,
             autoIncrement: true,
             allowNull: false,

            },
            name:{
                type:dataTypes.STRING(50),
                 allowNull: false,
    
                },

        }
        
            let config= {
            tableName: "categories",
            timestamps:false,
        }
           const User= sequelize.define(alias,cols,config)
           product.belongsToMany(models.categories,{
           as:"categories",
           through:"product_category",
           foreignkey:"product_id",
           otherkey:"category_id",
           timestamps:false,

})
         return categories;
}