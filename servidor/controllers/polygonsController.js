const Polygon = require('../models/Polygons');

exports.polygon = async (req, res) => {
  try {
    let polygons = await Polygon.find({ name: req.params.polygon });
    console.log(polygons);
    res.status(200).json(polygons);
  } catch (error) {
    console.log(error);
    res, status(500).send('Error');
  }
};
