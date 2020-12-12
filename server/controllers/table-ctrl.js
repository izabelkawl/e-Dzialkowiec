import Table from "../models/table.js";

const createTable = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a table",
    });
  }

  const table = new Table(body);

  if (!table) {
    return res.status(400).json({ success: false, error: err });
  }

  table
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: table._id,
        message: "table created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "table not created!",
      });
    });
};

const updateTable = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Table.findOne({ _id: req.params.id }, (err, table) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "table not found!",
      });
    }
    table.title = body.title;
    table.user_id = body.user_id;
    table.content = body.content;
    table.image = body.image;
    table
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: table._id,
          message: "table updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "table not updated!",
        });
      });
  });
};

const deleteTable = async (req, res) => {
  await Table.findOneAndDelete({ _id: req.params.id }, (err, table) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!table) {
      return res
        .status(404)
        .json({ success: false, error: `table not found` });
    }

    return res.status(200).json({ success: true, data: table });
  }).catch((err) => console.log(err));
};

const getTableById = async (req, res) => {
  await Table.findOne({ _id: req.params.id }, (err, table) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!table) {
      return res
        .status(404)
        .json({ success: false, error: `table not found` });
    }
    return res.status(200).json({ success: true, data: table });
  }).catch((err) => console.log(err));
};

const getTables = async (req, res) => {
  await Table.find({}, (err, tables) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!tables.length) {
      return res
        .status(404)
        .json({ success: false, error: `table not found` });
    }
    return res.status(200).json({ success: true, data: tables });
  }).catch((err) => console.log(err));
};

export default {
  createTable,
  updateTable,
  deleteTable,
  getTables,
  getTableById,
};
