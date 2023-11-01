const router = require("express").Router();

const InmueblesController = require("../../controllers/inmuebles.controller");

router.get("/", InmueblesController.getInmuebles);
router.post("/", InmueblesController.createInmueble);
router.put("/:inmuebleId", InmueblesController.updateInmueble);
router.delete("/:inmuebleId", InmueblesController.deleteInmueble);

module.exports = router;
