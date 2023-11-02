const { Schema, model } = require("mongoose");

const inmuebleSchema = new Schema(
  {
    piso: Number,
    letra: String,
    extension_m2: Number,
    num_habitaciones: Number,
    alquilado: Boolean,
    propietario: String,
    email: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("inmueble", inmuebleSchema);
