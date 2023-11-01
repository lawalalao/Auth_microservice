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

### Prérequis

- Node.js
- npm
- MongoDB

### Installation

Clonez le dépôt sur votre machine locale :

```bash
git clone [URL_DU_REPO_GIT]
cd microservice-auth
```

Installation des dépendances

```bash
npm install
```

Configurez vos variables d'environnement dans un fichier .env à la racine du projet :

```bash
MONGO_URI=votre_uri_mongodb
TOKEN_SECRET=votre_clé_secrète_aléatoire
PORT=3000
```

### Utilisation

Pour démarrer le serveur 

```bash
npm start
```


## Endpoints

Inscription

`POST /api/user/signup`

Corps de la requête

```bash
{
  "email": "user@example.com",
  "password": "password123"
}
```

Réponse en cas de succès

```bash
{
  "user": "id_de_l_utilisateur"
}
```

Connexion

`POST /api/user/login`

Corps de la requête

```bash
{
  "email": "user@example.com",
  "password": "password123"
}
```

Réponse en cas de succès

```bash
{
  "auth-token": "votre_token_jwt"
}

```


## Sécurisation des routes 

Pour protéger une route, utilisez le middleware `authMiddleware` :

```bash
const authMiddleware = require('./middlewares/authMiddleware');

app.get('/api/protected-route', authMiddleware, (req, res) => {
  res.send('Vous avez accédé à une route protégée.');
});
```

## Sécurité

Les mots de passe sont hashés en utilisant bcrypt avant d'être stockés dans la base de données. Les tokens JWT sont signés avec une clé secrète.

## Test

pour lancer vos tests

```bash
npm test
```

## Contribution

Les contributions sont les bienvenues. Veuillez ouvrir une issue pour discuter de ce que vous aimeriez changer ou soumettre une Pull Request.
