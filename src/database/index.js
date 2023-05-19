require("dotenv").config();
const DB_URL = process.env.DB_URL;
const mongoose = require("mongoose");

let db;

module.exports = {
  connect: async () => {
    db = await mongoose.connect(DB_URL);
    console.log("Banco conectado com sucesso");
  },

  getDB: async () => {
    return;
  },
};
