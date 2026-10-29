const express = require("express");
const router = express.Router();
const {
    getEtudiants,
    createEtudiant,
    updateEtudiant,
    deleteEtudiant
} = require("../controllers/etudiantController");

router.get("/", getEtudiants);
router.post("/", createEtudiant);
router.put("/:id", updateEtudiant);
router.delete("/:id", deleteEtudiant);

module.exports = router;
