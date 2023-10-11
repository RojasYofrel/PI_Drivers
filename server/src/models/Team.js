const {DataTypes} = require('sequelize');

module.exports = (sequelize=>{
    sequelize.define('Team',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
        },
        Nombre:{
            type:DataTypes.STRING,
        }
    },{timestamps:false});
})