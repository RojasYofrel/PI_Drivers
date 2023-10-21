const axios = require('axios');
const { Team }= require('../db');

const getTeamsFromAPI = async () => {
  try {
    console.log('Buscando en la APi');
    const response = await axios('http://localhost:5000/drivers'); 
    const data = response.data;
    const teamsArray = [];

    data.forEach((objeto) => {
      if (objeto.teams) {
        const teamsInObject = objeto.teams.split(',').map((team) => team.trim());
        teamsArray.push(...teamsInObject);
      }
    });
    const filterTeams = [...new Set(teamsArray)];
    filterTeams.sort();

    const teamForBDD = filterTeams.map((teamName)=>({
        Nombre: teamName,
    }))
    console.log(teamForBDD);
    console.log(filterTeams);
    await Team.bulkCreate(teamForBDD);

    return filterTeams;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getTeamsFromAPI,
}