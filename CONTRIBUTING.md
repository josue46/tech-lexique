# Guide de contribution — TechLexique

Merci de t'intéresser au projet ! Que tu sois venu·e corriger une coquille,
ajouter un terme manquant ou améliorer le design, ta contribution est la
bienvenue. Ce guide t'accompagne de A à Z, du clone à la pull request.

## Avant de commencer

- Un compte GitHub
- Git installé sur ta machine
- Un éditeur de code (VS Code fait très bien l'affaire)
- Node.js *(optionnel mais recommandé pour vérifier la syntaxe de `js/data.js`)*

## 1. Forke le projet

Sur la page GitHub du projet, clique sur le bouton **Fork** en haut à droite.
Tu obtiens une copie du dépôt sous ton compte — c'est là-dessus que tu vas
travailler.

## 2. Clone ton fork

```bash
git clone https://github.com/TON-PSEUDO/techlexique.git
cd techlexique
```

## 3. Ajoute le dépôt d'origine en remote

Ça te permettra de garder ton fork à jour :

```bash
git remote add upstream https://github.com/PROPRIETAIRE/techlexique.git
```

## 4. Crée une branche dédiée

Une branche par sujet, jamais de commit direct sur `main` :

```bash
git checkout -b ajout-termes-rbac
# ou : fix/recherche-accents, feat/mode-impression…
```

Convention de nommage : `feat/…` pour une nouveauté, `fix/…` pour une
correction, `docs/…` pour la documentation.

## 5. Fais tes modifications

### Ajouter un terme au lexique

Ouvre `js/data.js` et copie un bloc existant dans la liste `TERMS` :

```js
{ term: "TOTO", full: "Signification complète", cat: "securite",
  def: "Une phrase claire et concise.",
  detail: "Un paragraphe de contexte : à quoi ça sert, cas d'usage, pièges à éviter…" },
```

Règles de rédaction :

- **Définition (`def`)** : une seule phrase, compréhensible par un·e débutant·e.
- **Détails (`detail`)** : 2 à 4 phrases — contexte, exemples, pièges, outils associés.
- **Catégories** : `dev`, `front`, `back`, `cloud`, `devops`, `ia`, `securite`, `metier`. Tu peux en créer une nouvelle dans `CATEGORIES` si vraiment rien ne correspond.
- Le tri alphabétique est automatique, ne t'en occupe pas.
- Ton en français, direct, sans jargon inutile — c'est tout le principe du site !

### Modifier l'interface

Le projet n'a pas de build : HTML + Tailwind (CDN) + JS vanilla. Ouvre
simplement `index.html` dans ton navigateur pour tester, ou lance un petit
serveur local :

```bash
python3 -m http.server 8000
# puis ouvre http://localhost:8000
```

## 6. Vérifie avant de committer

- [ ] Le site s'affiche correctement (clair ET sombre)
- [ ] La recherche trouve ton nouveau terme
- [ ] Les filtres par catégorie fonctionnent toujours
- [ ] Syntaxe JS valide :

```bash
node --check js/data.js
node --check js/app.js
```

- [ ] Pas de terme en double dans `data.js`

## 7. Committe en suivant la convention

Format [Conventional Commits](https://www.conventionalcommits.org/fr/) :

```
feat(lexique): ajout de l'entrée RBAC
fix(recherche): correction des accents sur macOS
docs(readme): mise à jour des catégories
```

Un commit = un sujet. Message en français, impératif, concis.

```bash
git add js/data.js
git commit -m "feat(lexique): ajout de l'entrée RBAC"
```

## 8. Push ta branche

```bash
git push origin ajout-termes-rbac
```

## 9. Ouvre une pull request

Sur GitHub, un bandeau « Compare & pull request » apparaît sur ton fork —
clique dessus. Dans la description :

1. **Ce que fait ta PR** (une ou deux phrases)
2. **Comment tu as testé** (navigateur, Node…)
3. **Une capture d'écran** si tu touches à l'interface

Le titre suit la même convention que les commits : `feat(lexique): …`

## 10. Après la revue

Un·e mainteneur·e relira ta PR et proposera peut-être des ajustements —
c'est normal et c'est ce qui garantit la qualité du contenu. Fais les
modifications sur ta branche, committe et pousse à nouveau : la PR se met à
jour toute seule. Une fois validée, elle est fusionnée. Merci, c'est grâce à
toi que le lexique s'enrichit !

## Bonnes pratiques récap'

| Fais ça | Évite ça |
|---|---|
| Une branche par sujet | Des commits direct sur `main` |
| Un commit = un changement logique | Un commit géant « divers » |
| Définitions testées sur des débutants | Du jargon pour expliquer du jargon |
| `node --check` avant de pousser | Pousser du code jamais ouvert |
| Répondre aux commentaires de revue avec bienveillance | Prendre la revue pour une attaque |

## Une question ?

Ouvre une *issue* — même pour proposer un terme avant de te lancer dans le
code. Mieux vaut discuter d'abord que refaire ensuite.

---

*Ce guide est amené à évoluer avec le projet. Les suggestions d'amélioration
sont elles-mêmes des contributions bienvenues.*
