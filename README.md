# Sudoku Maman

Jeu de Sudoku simple et agréable à jouer, distribué comme add-on Home Assistant.

## Installation sur Home Assistant

1. Dans Home Assistant, aller dans **Paramètres > Modules complémentaires > Boutique des modules complémentaires**.
2. Cliquer sur le menu **⋮** (en haut à droite) puis **Dépôts**.
3. Ajouter l'URL de ce dépôt : `https://github.com/Babahome/Sudoku`
4. Fermer la fenêtre, puis rafraîchir la page si besoin. L'add-on **Sudoku** apparaît dans la liste.
5. Cliquer sur **Sudoku**, puis **Installer**.
6. Une fois installé, cliquer sur **Démarrer**.
7. Ouvrir l'interface via le bouton **OUVRIR L'INTERFACE WEB**, ou directement à `http://<adresse-de-votre-HA>:8099/`.

> Le jeu utilise un port dédié (8099) plutôt que l'ingress Home Assistant, pour avoir une URL stable — nécessaire pour installer l'app en raccourci sur l'écran d'accueil Android/iOS (PWA).

## Ajouter un raccourci sur l'écran d'accueil (PWA)

Une fois l'add-on démarré, ouvrez l'URL `http://<adresse-de-votre-HA>:8099/` dans le navigateur de votre téléphone, puis utilisez l'option **"Ajouter à l'écran d'accueil"** du navigateur.

## Structure du dépôt

- `repository.yaml` — descripteur du dépôt d'add-ons Home Assistant.
- `sudoku/` — l'add-on lui-même (`config.yaml`, `Dockerfile`, `server.js`, `www/` avec l'app).

## Développement local

```bash
cd sudoku
npm install
node server.js
```

L'app est ensuite accessible sur `http://localhost:8099/`.
