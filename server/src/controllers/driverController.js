const axios = require('axios');
const Driver = require('../models/Driver');

const getAllDrivers = async () => {
  try {
    const response = await axios('http://localhost:5000/drivers'); 
    return response.data;
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

module.exports = {
  getAllDrivers,
  getDetailDriver,
};