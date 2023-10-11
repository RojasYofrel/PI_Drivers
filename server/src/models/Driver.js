const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:UUIDV4,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    Descripcion:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    Imagen:{
      type:DataTypes.STRING,
    },
    Nacionalidad:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    Fecha_de_nacimiento:{
      type:DataTypes.DATEONLY,
      allowNull: false,
    },
  },{timestamps:false});
};