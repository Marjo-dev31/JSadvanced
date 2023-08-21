const fs = require('fs');

function readFile() {
    try { 
        const fileData = fs.readFileSync('data.json'); /*essaie ça*/
    } catch {
        console.log('An errror occured!'); /*si ça marche pas, fait ça !  Permet de continuer le script mêm si rencontre une erreur*/
    }
    console.log('Hi there!');
}

readFile()