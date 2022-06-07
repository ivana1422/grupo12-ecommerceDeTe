

module.exports= (sequelize,dataTypes)  =>{
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
                 allowNull: false,
    
                },
         state:{
                type:dataTypes.INTEGER,
                allowNull: false,
                },
         created_at:{
                type:dataTypes.DATE,
                allowNull: false
                 },
        }
        
            let config= {
            tableName: "orders",
            createdAt:"created_at",
            updatedAt:false,
            deletedAt:false
        }
           const Order= sequelize.define(alias,cols,config)

           Order.associate=(models)=>{
                Order.belongsTo(models.users,{
                    as:"users",
                    foreignKey:"user_id"
                })

                Order.belongsToMany(models.products,{
                    as:"products",
                    through:"orders_product",
                    foreignKey:"order_id",
                    otherKey:"product_id",
                    createdAt:"created_at",
                    updatedAt:false,
                    deletedAt:false
                })
           }
         return Order;
}