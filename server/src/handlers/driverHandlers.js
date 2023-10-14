const {getAllDrivers, getDetailDriver, getFilterDrivers, createDriver} = require('../controllers/driverController');

const getDriversHandler = async (req, res) => {
  try {
    const name = req.query['name.forename'];
    //console.log('Valor de name:', name);
    if(!name){
      const allDrivers = await getAllDrivers();
     // console.log(allDrivers);
      res.status(200).json(allDrivers);
    }else{
      const filterDrivers = await getFilterDrivers(name);
      res.status(200).json(filterDrivers);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getDetailHandler = async (req,res) =>{
  const {id} = req.params;
  const optionSearch = isNaN(id) ? "bbd" : "API";
  try {
    const detailDriver = await getDetailDriver(id , optionSearch);
    console.log(detailDriver);
    res.status(200).json(detailDriver);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const postDriver = async (req,res)=>{
  try {
    const { nombre, apellido, descripcion, nacionalidad, bod, teams } = req.body;
    // console.log('Datos del cuerpo de la solicitud:',nombre, apellido, descripcion, nacionalidad, bod, teams  ); // Agrega este registro
    const newDriver = await createDriver(nombre, apellido, descripcion, nacionalidad, bod, teams);
    console.log('Nuevo conductor:', newDriver); 
    res.status(200).json(newDriver);
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ message: 'Ocurrió un error al procesar la solicitud.' });
  }
}
  
module.exports = {
    getDriversHandler,
    getDetailHandler,
    postDriver,
};