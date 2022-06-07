

module.exports= (sequelize,dataTypes)  =>{
    let alias= "ingredients";
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
         product_id:{
                    type:dataTypes.INTEGER,
                     allowNull: false
                    },
        }
        
            let config= {
            tableName: "ingredients",
            timestamps:false,
        }
           const Ingredient= sequelize.define(alias,cols,config)
           
           Ingredient.associate=(models)=>{
               Ingredient.belongsTo(models.products,{
                   as:"products",
                   foreignKey:"product_id"
               })
           }

         return Ingredient;
}