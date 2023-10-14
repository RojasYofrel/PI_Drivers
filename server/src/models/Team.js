const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize=>{
    sequelize.define('Team',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:UUIDV4,
        },
        Nombre:{
            type:DataTypes.STRING,
        }
    },{timestamps:false});
})