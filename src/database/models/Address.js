module.exports= (sequelize,dataTypes)  =>{
    let alias= "address";
    let cols= {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false

            },
        location:{
            type:dataTypes.STRING(50),
            allowNull: false
            }

        }
        
            let config= {
            tableName: "address",
            timestamps:false
        }
           const Address= sequelize.define(alias,cols,config)
           
           Address.associate=(models)=>{
            Address.hasMany(models.users,{
                as:"users",
                foreignKey:"address_id"
            })
        }
        return Address;
}
         
