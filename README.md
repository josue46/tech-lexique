# TechLexique

Le dictionnaire des expressions, abréviations et sigles de la tech moderne.
Interface en français, recherche instantanée, filtres par domaine et favoris locaux.

## Lancer le projet

Aucune installation nécessaire. Ouvrez simplement `index.html` dans un navigateur
après avoir recupéré le projet.

> La connexion internet est requise au premier chargement pour CDN Tailwind CSS
> et les polices Google Fonts. Le reste fonctionne hors-ligne.

## Structure

```
techlexique/
├── index.html          # Structure de la page
├── css/
│   └── styles.css      # Styles complémentaires (animations, scrollbar…)
├── js/
│   ├── data.js         # Toutes les entrées du lexique à modifier ici
│   └── app.js          # Recherche, filtres, favoris, thème
└── README.md
```

## Ajouter un terme

Dans `js/data.js`, copiez un bloc existant dans la liste `TERMS` :

```js
{
    term: "Nouveau",
    full: "Signification complète",
    cat: "dev",
    def: "Une phrase claire et concise.",
    detail: "Un paragraphe de contexte, cas d'usage, pièges à éviter…"
},
```

Catégories disponibles : `dev`, `front`, `back`, `cloud`, `devops`,
`ia`, `securite`, `metier` (ou créez-en une nouvelle dans `CATEGORIES`).

Le tri alphabétique est automatique.
