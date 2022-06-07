module.exports= (sequelize,dataType)  =>{
    let alias= "users";
    let cols= {
        id:{
        type:dataType.INTEGER,
         primaryKey:true,
         autoIncrement: true,
         allowNull: false,

    },
    name:{
        type:dataType.STRING(50),
        allowNull:false,
    },
    surname:{
        type:dataType.STRING(50),
        allowNull:false,
    },
    pass:{
        type:dataType.STRING(50),
        allowNull:false,
    },
    avatar:{
        type:dataType.STRING(100)
    },
    rol:{
        type:dataType.BOOLEAN,
        allowNull:false,
    },
    address_id:{
        type:dataType.INTEGER,
        allowNull:false,
    },
    email:{
        type:dataType.STRING(50),
        allowNull:false,
    }
}
let config= {
    tableName: "users",
    timestamps:false
}
const User= sequelize.define(alias,cols,config)

User.associate=(models)=>{
    User.belongsTo(models.address,{
        as:"address",
        foreignKey:"address_id"
    })

    User.hasMany(models.orders,{
        as:"orders",
        foreignKey:"user_id"
    })
}
return User;
 
}