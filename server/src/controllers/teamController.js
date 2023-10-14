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
    await Team.bulkCreate(teamForBDD);

    return teamForBDD;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getTeamsFromAPI,
}