

module.exports= (sequelize,dataTypes)  =>{
    let alias= "images";
    let cols= {
        id:{
            type:dataTypes.INTEGER,
             primaryKey:true,
             autoIncrement: true,
             allowNull: false,

            },
            
         src:{
                type:dataTypes.STRING(200)
            },
         public_id:{
                type:dataTypes.STRING(100)
            },
         product_id:{
                    type:dataTypes.INTEGER
        
                    },
        }
        
            let config= {
            tableName: "images",
            timestamps:false,
        }
           const Image= sequelize.define(alias,cols,config)
           Image.associate=(models)=>{
               Image.belongsTo(models.products,{
                   as:"products",
                   foreignKey: "product_id"
               })
           }

         return Image;
}