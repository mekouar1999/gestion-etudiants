require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const etudiantRoutes = require("./routes/etudiantRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Mon premier serveur MERN !");
});

app.get("/api/test", (req, res) => {
    res.json({ message: "L'API fonctionne correctement" });
});

app.use("/api/etudiants", etudiantRoutes);

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB est connecté");
        app.listen(PORT, () => {
            console.log(`Serveur lancé sur le port ${PORT}`);
        });
    } catch (error) {
        console.error("Erreur MongoDB :", error.message);
        process.exit(1);
    }
}

startServer();
