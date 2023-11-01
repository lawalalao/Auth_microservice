# Microservice d'Authentification

Ce microservice fournit une solution simple et sécurisée pour l'authentification et la gestion des sessions dans vos applications Node.js utilisant Express. Il utilise JWT (JSON Web Tokens) pour la gestion des sessions et bcrypt pour le hashage des mots de passe.

- Elle est aussi installable sous forme de package via npm dans vos applications.

## Installation

Vous pouvez installer le microservice d'authentification via npm :

```bash
npm install microservice-auth
```

```bash
  const express = require('express');
  const { routes } = require('microservice-auth');

  const app = express();

  app.use('/auth', routes);

  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
```
## Configuration

Créez un fichier authConfig.js dans votre projet avec le contenu suivant :

```bash
module.exports = {
  secret: 'your-secret-key' // Remplacez ceci par votre clé secrète
};
```




## Fonctionnalités

- Inscription d'utilisateurs
- Connexion d'utilisateurs
- Middleware pour la protection des routes

## Comment démarrer sous forme de Microservices/api

