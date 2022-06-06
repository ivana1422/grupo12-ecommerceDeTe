module.exports= (sequelize,dataType)  =>{
    let alias= "users";
    let cols= {
        id:{
        type:dataTypes.INTEGER,
         primaryKey:true,
         autoIncrement: true,
         allowNull: false,

    },
    name:{
        type:dataType.STRING(50),
        aloowNull:false,
    },
    surname:{
        type:dataType.STRING(50),
        aloowNull:false,
    },
    pass:{
        type:dataType.STRING(50),
        aloowNull:false,
    },
    avatar:{
        type:dataType.STRING(100),
        aloowNull:true,
    },
    rol:{
        type:dataType.BOOLEANO,
        aloowNull:false,
    },
    adress_id:{
        type:dataType.INTEGER,
        aloowNull:false,
    },
    email:{
        type:dataType.STRING(50),
        aloowNull:false,
    },
    created_at:{
        type:dataType.DATE,
        aloowNull:false,
    },
    updated_at:{
        type:dataType.DATE,
        aloowNull:false,
    },
}
let config= {
    tableName: ""
}
const User= sequelize.define(alias,cols,config)
return User;
 
}