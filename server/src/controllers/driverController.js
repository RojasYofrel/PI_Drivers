const { drivers } = require('../../api/db.json');
const axios = require('axios');

// // Función para filtrar conductores por nombre
// function filterDriversByName(name) {
//   return drivers.filter(driver => driver.driverRef === name);
// }

// // Función para obtener todos los conductores
// function getAllDrivers() {
//   return drivers;
// }

const { Driver, Team } = require('../db'); // Asegúrate de importar los modelos de la base de datos

async function detailDriverFromDB(id) {
  try {
    // Utiliza el modelo Driver para buscar un conductor por su ID
    const driver = await Driver.findByPk(id, {
      include: Team, // Incluye los equipos asociados al conductor
    });

    if (!driver) {
      return null; // Devuelve null si el conductor no se encuentra en la base de datos
    }

    // Formatea los detalles del conductor como desees
    const detail = {
      id: driver.id,
      name: `${driver.Nombre} ${driver.Apellido}`,
      team: driver.Teams.map((team) => team.Nombre), // Obtiene el nombre de los equipos
      // Agrega más propiedades aquí si es necesario
    };

    return detail;
  } catch (error) {
    throw error;
  }
}

// Función para obtener todos los conductores desde la API
async function getAllDrivers() {
  try {
    const response = await axios.get('http://localhost:5000/drivers');
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function detailDriver(id){
  try {
    const response = await axios.get(`http://localhost:5000/drivers/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}





module.exports = {
  getAllDrivers,
  detailDriver,
  detailDriverFromDB,
};

