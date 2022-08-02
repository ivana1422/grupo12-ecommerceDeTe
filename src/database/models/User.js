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
        type:dataType.STRING(100),
        allowNull:false,
    },
    avatar:{
        type:dataType.STRING(100)
    },
    avatar_public_id:{
        type:dataType.STRING(100)
    },
    rol:{
        type:dataType.INTEGER,
        allowNull:false,
    },
    address:{
        type:dataType.STRING(100),
        allowNull:false,
    },
    email:{
        type:dataType.STRING(50),
        allowNull:false,
        unique: true
    },

}
let config= {
    tableName: "users",
    timestamps:false
}
const User= sequelize.define(alias,cols,config)

User.associate=(models)=>{

    User.hasMany(models.orders,{
        as:"orders",
        foreignKey:"user_id"
    })
}
return User;
 
}