const axios = require('axios');
const {Driver, Team }= require('../db');


const getAllDrivers = async () => {
  try {
    const response = await axios('http://localhost:5000/drivers');
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
}

const getFilterDrivers = async (name)=>{
  try {
    const response = await axios('http://localhost:5000/drivers');
    const all = response.data;
    const searchName = name.toLowerCase();
    const filterDriversByName = all.filter(driver => driver.name.forename.toLowerCase() === searchName);
    const driverFiveteen = filterDriversByName.slice(0,15);
    return driverFiveteen;
  } catch (error) {
    throw error;
  }
}

const getDetailDriver = async (id,optionSearch)=>{
  try {
    if(optionSearch==='API'){
      const response = await axios(`http://localhost:5000/drivers/${id}`);
      const {data} = response;
      const detail = {
        Nombre: `${data.name.surname} ${data.name.forename}`,
        Team: data.teams,
      }
    return detail;
    }else if (optionSearch==='bbd'){
      Driver.findByPk(id);
    }
  } catch (error) {
    throw error;
  }
}

const createDriver = async (nombre, apellido, descripcion, nacionalidad, bod, team)=>{
  try {
    // console.log('name:', nombre);
    // console.log('apellido:', apellido);
    // console.log('nacionalidad:', nacionalidad);
    // console.log('teams:', teams)
    const eldriver = await Driver.create({
      Nombre: nombre,
      Apellido: apellido,
      Descripcion: descripcion,
      Nacionalidad: nacionalidad,
      Fecha_de_nacimiento: bod,
    })
    
    if (team && team.length > 0) {
      const teamsArray = team.split(',').map(team => team.trim()); // Divide la cadena en un arreglo de equipos y quita espacios en blanco
    
      // Realiza una búsqueda para cada nombre de equipo en teamsArray
      const teamsAssociate = await Promise.all(teamsArray.map(teamName => {
        return Team.findOne({ where: { Nombre: teamName } });
      }));
    
      await eldriver.setTeams(teamsAssociate);
    }
    return eldriver;

  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllDrivers,
  getDetailDriver,
  getFilterDrivers,
  createDriver,
};