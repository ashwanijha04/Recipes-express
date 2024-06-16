const service = require("../services/recipes");

const getAll = async (req, res, next) => {
  try {
    res.json({ data: await service.getAll() });
  } catch (error) {
    next(error);
  }
};

const getAllNames = async (req, res, next) => {
  try {
    res.json({ data: await service.getAllNames() });
  } catch (error) {
    next(error);
  }
};

module.exports = {
 getAll,
 getAllNames
};