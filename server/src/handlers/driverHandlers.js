const {getAllDrivers, getDetailDriver} = require('../controllers/driverController');

const getDriversHandler = async (req, res) => {
  try {
    const allDrivers = await getAllDrivers();
    res.status(200).json(allDrivers);
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

  
module.exports = {
    getDriversHandler,
    getDetailHandler,
};