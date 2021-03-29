# monzoo-bot
Monzoo-bot est un bot destiné à automatiser les actions répétitive en jeu. 

- Remise à niveau des employés
- Envoie d'espion
- Envoie de super espion
- Augmentation automatique du prix du ticket en fonction du nombre de visiteur
- Recupérer les informations pratique
# Getting started
## Installation
You need to install [nodejs](https://nodejs.org/fr/download/releases/) preferably version 14.13.1.

After install node modules using the command below
```bash
#it will install all dependency it may take a few minutes
npm install
```
## Configuration
Bot can be configured editing config.json
```json
{
    "login": {
        "user": "user",
        "pass": "password"
    },
    "browserConfig": {}
}
```
### Starting

When it's done you can lauch your Node console at the server root using the command below
```bash
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
