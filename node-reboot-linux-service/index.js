const axios = require("axios");
const { exec } = require("child_process");
const cron = require("node-cron");

// URL à vérifier
const TARGET_URL = "https://testodoo.issoufali.phidia.fr";

// Password to be passed for sudo
const PASSWORD = "-------------";

// Fonction pour redémarrer le service Odoo avec sudo
const restartOdooService = () => {
    console.log("Redémarrage du service Odoo -> Mayotte Tropic...");
    const COMMAND = `echo ${PASSWORD} | sudo -S systemctl start odoo16.service`;
    
    exec(COMMAND, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erreur lors du redémarrage : ${error}`);
            return;
        }
        console.log("L'application a été redémarré avec succès.")
    });
};

// Fonction pour vérifier l'état de l'application et redémarrer le service si nécessaire
const checkAndRestart = () => {
    axios.get(TARGET_URL)
        .then(response => {
            console.log(`Statut de la requête : ${response.status}`);
            console.log("L'application est en marche");
        })
        .catch(error => {
            console.error(`Erreur lors de la vérification de l'application : ${error}`);
            console.log("L'application n'est pas accessible. Redémarrage du service...");
            restartOdooService();
        });
};

// Planifier l'exécution de la fonction toutes les 5 minutes
cron.schedule("*/60 * * * * *", () => {
    console.log("Exécution de la vérification...");
    checkAndRestart();
})

