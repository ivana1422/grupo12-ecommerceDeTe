

module.exports= (sequelize,dataTypes)  =>{
    let alias= "categories";
    let cols= {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false

            },
        name:{
            type:dataTypes.STRING(50),
            allowNull: false,
    
            }

        }
        
            let config= {
            tableName: "categories",
            timestamps:false,
        }
           const Category= sequelize.define(alias,cols,config)

           Category.associate=(models)=>{
               Category.belongsToMany(models.products,{
                   as:"products",
                   through:"product_category",
                   foreignKey:"category_id",
                   otherKey:"product_id",
                   timestamps:false
               })
           }

          
         return Category;
}