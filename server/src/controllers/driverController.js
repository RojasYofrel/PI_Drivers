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

const createDriver = async (nombre, apellido, descripcion, nacionalidad, bod, teams)=>{
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
    // console.log(eldriver);
    if (teams) {
      console.log('Inside teams check');
      const teamsArray = teams.split(',').map(team => team.trim());
      console.log('teamsArray:', teamsArray);
    
      console.log('Before database team lookup');
      const teamsAssociate = await Team.findAll({
        where: { Nombre: teamsArray }
      });
      console.log('teamsAssociate:', teamsAssociate);
    
      console.log('Before adding teams to driver');
      await Driver.addTeams(teamsAssociate);
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