# TemplateBot

TemplateBot est un bot Discord de base conçu comme point de départ pour développer votre propre bot. Il inclut la configuration minimale et la structure nécessaire pour démarrer rapidement avec Discord.js.

## Fonctionnalités

- Connexion simple au client Discord
- Gestion des commandes de base
- Support de slash commands (interactions)
- Configuration via un fichier `config.json`

## Prérequis

- Node.js v18 ou plus
- Un bot Discord créé via le portail développeur Discord
- Un token Discord valide

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Gabizoc/TemplateBot.git
   cd TemplateBot

2. Installez les dépendances :

   ```bash
   npm install

3. Créez un fichier `config.json` à la racine avec le contenu suivant :

   ```json
   {
     "token": "VOTRE_TOKEN_DISCORD",
     "clientId": "VOTRE_CLIENT_ID",
     "guildId": "VOTRE_GUILD_ID"
   }

4. Démarrez le bot :

   ```bash
   node index.js

## Usage

* Ajoutez vos commandes dans le dossier `commands`
* Utilisez la structure des événements pour gérer les interactions utilisateurs
* Modifiez le fichier `index.js` pour adapter le bot à vos besoins

## Contribution

Les contributions sont bienvenues. N’hésitez pas à ouvrir une issue ou une pull request pour proposer des améliorations.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE).
