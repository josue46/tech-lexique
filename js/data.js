// Catégories et définitions de termes techniques pour le glossaire.
const CATEGORIES = {
  dev: { label: "Développement général", color: "#4d6fff" },
  front: { label: "Frontend", color: "#f59e0b" },
  back: { label: "Backend", color: "#10b981" },
  cloud: { label: "Cloud & Hébergement", color: "#06b6d4" },
  devops: { label: "DevOps & Outils", color: "#8b5cf6" },
  ia: { label: "IA & Data", color: "#ec4899" },
  securite: { label: "Sécurité", color: "#ef4444" },
  metier: { label: "Culture & Métiers", color: "#64748b" },
};

const TERMS = [
  // Développement général
  {
    term: "API",
    full: "Application Programming Interface",
    cat: "dev",
    def: "Un point de contact qui permet à deux programmes de communiquer entre eux de façon standardisée.",
    detail:
      "Une API définit des règles : quelles requêtes on peut faire, quels formats de réponse on obtient. Une API REST expose des URL HTTP (GET, POST, PUT, DELETE) tandis qu'une API GraphQL laisse le client choisir précisément les données dont il a besoin.",
  },
  {
    term: "SDK",
    full: "Software Development Kit",
    cat: "dev",
    def: "Une boîte à outils fournie pour développer sur une plateforme : bibliothèques, exemples, documentation.",
    detail:
      "Plutôt que d'appeler une API à la main, un SDK encapsule les appels dans des fonctions prêtes à l'emploi, dans votre langage. Exemples : SDK Stripe pour les paiements, SDK Firebase pour le backend mobile.",
  },
  {
    term: "MVP",
    full: "Minimum Viable Product",
    cat: "dev",
    def: "La version la plus simple d'un produit qui permet de valider une idée auprès de vrais utilisateurs.",
    detail:
      "L'objectif est d'apprendre vite : on ne construit que l'essentiel, on mesure l'usage, puis on itère. Un MVP n'est pas un produit bâclé, c'est un produit volontairement restreint.",
  },
  {
    term: "POC",
    full: "Proof of Concept",
    cat: "dev",
    def: "Un prototype technique pour prouver qu'une solution est réalisable avant d'y investir davantage.",
    detail:
      "Contrairement au MVP (centré utilisateur), le POC est centré faisabilité : « peut-on intégrer cette IA à notre outil ? ». Le code d'un POC est jetable par définition.",
  },
  {
    term: "Refactoring",
    full: "Refonte interne du code",
    cat: "dev",
    def: "Restructurer le code sans changer son comportement visible, pour le rendre plus lisible et maintenable.",
    detail:
      "Un bon refactoring se fait par petites étapes, accompagné de tests. Il répond à la dette technique : le code fonctionne, mais est devenu difficile à modifier en toute sécurité.",
  },
  {
    term: "Dette technique",
    full: "Technical Debt",
    cat: "dev",
    def: "Le coût futur des raccourcis pris aujourd'hui dans le code : complexité, choix provisoires, manque de tests.",
    detail:
      "Comme une dette financière, elle « rapporte des intérêts » : chaque nouvelle fonctionnalité devient plus lente et plus risquée à développer. Une dette assumée et suivie est saine ; une dette invisible est dangereuse.",
  },
  {
    term: "Open Source",
    full: "Code source ouvert",
    cat: "dev",
    def: "Un logiciel dont le code source est public, modifiable et redistribuable selon une licence définie.",
    detail:
      "Linux, PostgreSQL, React ou Python sont open source. Attention toutefois aux licences : MIT/Apache (très permissives) ne s'imposent pas comme GPL (copyleft), qui oblige à redistribuer les modifications sous la même licence.",
  },
  {
    term: "IDE",
    full: "Integrated Development Environment",
    cat: "dev",
    def: "Un environnement de développement complet : éditeur de code, débogueur, terminal et outils intégrés.",
    detail:
      "Exemples : VS Code, JetBrains (IntelliJ, PyCharm), Zed. Les IDE modernes intègrent l'IA (copilotage, autocomplétion intelligente) et comprennent la structure du projet pour naviguer et refactorer efficacement.",
  },
  {
    term: "Linter",
    full: "Analyseur statique de code",
    cat: "dev",
    def: "Un outil qui analyse le code sans l'exécuter pour détecter erreurs, mauvaises pratiques et incohérences de style.",
    detail:
      "ESLint pour JavaScript, Ruff pour Python, ou Clippy pour Rust. Intégré à l'IDE et à la CI, il détecte les bugs avant même qu'ils n'arrivent en production et uniformise le style de toute l'équipe.",
  },
  {
    term: "Debugger",
    full: "Débogueur",
    cat: "dev",
    def: "Un outil pour exécuter un programme pas à pas, inspecter les variables et comprendre d'où vient un bug.",
    detail:
      "On pose des points d'arrêt (breakpoints) : le programme s'interrompt à cet endroit et on inspecte l'état. Savoir déboguer vaut mieux que spammer des console.log — le débogueur montre la pile d'appels complète.",
  },

  // Frontend
  {
    term: "SPA",
    full: "Single Page Application",
    cat: "front",
    def: "Une application web qui se charge en une seule page et met à jour le contenu dynamiquement, sans rechargement complet.",
    detail:
      "React, Vue ou Svelte construisent des SPA : le serveur envoie une coquille HTML vide puis un gros fichier JavaScript prend le relais. Fluidité excellente, mais temps de premier affichage parfois long — d'où le SSR.",
  },
  {
    term: "SSR",
    full: "Server-Side Rendering",
    cat: "front",
    def: "Le rendu de la page côté serveur : le HTML complet est envoyé au navigateur, qui l'affiche immédiatement.",
    detail:
      "Avantages : chargement initial rapide et meilleur référencement (SEO), car les moteurs de recherche reçoivent du vrai contenu. Next.js (React) et Nuxt (Vue) popularisent ce modèle hybride.",
  },
  {
    term: "CSR",
    full: "Client-Side Rendering",
    cat: "front",
    def: "Le rendu de la page directement dans le navigateur du visiteur, via JavaScript.",
    detail:
      "C'est le modèle classique des SPA : le serveur sert un fichier quasi vide et le navigateur construit tout. Bon pour les interactions riches, moins bon pour le SEO et les connexions lentes.",
  },
  {
    term: "SSG",
    full: "Static Site Generation",
    cat: "front",
    def: "Générer toutes les pages HTML au moment du build, avant tout visiteur : le site devient un ensemble de fichiers statiques.",
    detail:
      "Ultra rapide et servi gratuitement partout (CDN). Idéal pour blogs, documentation et portfolios. Astro, Hugo et Next.js en mode statique sont des références. Complémentaire à l'ISR.",
  },
  {
    term: "ISR",
    full: "Incremental Static Regeneration",
    cat: "front",
    def: "Régénérer une page statique en arrière-plan à intervalle régulier, sans reconstruire tout le site.",
    detail:
      "Combinaison du meilleur des deux mondes : pages statiques instantanées, mais contenu rafraîchi automatiquement. Un visiteur peut recevoir une version légèrement périmée pendant quelques secondes — acceptable pour un catalogue, pas pour une cotation boursière.",
  },
  {
    term: "Hydratation",
    full: "Hydration",
    cat: "front",
    def: "Phase où le JavaScript prend le contrôle d'une page HTML déjà rendue par le serveur, pour la rendre interactive.",
    detail:
      "C'est souvent la partie coûteuse du SSR : le navigateur télécharge le JS, réexécute le framework et « branche » les événements sur le HTML existant. Les frameworks récents (Astro, Qwik, React Server Components) cherchent à la réduire ou à la supprimer.",
  },
  {
    term: "DOM",
    full: "Document Object Model",
    cat: "front",
    def: "La représentation en mémoire de la page web, sous forme d'arbre d'objets que JavaScript peut lire et modifier.",
    detail:
      "Chaque balise HTML devient un nœud manipulable. Modifier le DOM déclenche un recalcul du rendu — coûteux si fait en masse. D'où le « DOM virtuel » de React : on calcule les différences d'abord, puis on applique uniquement le nécessaire.",
  },
  {
    term: "CSS-in-JS",
    full: "Styles CSS écrits en JavaScript",
    cat: "front",
    def: "Écrire les styles d'un composant directement dans le fichier JavaScript/TypeScript qui le définit.",
    detail:
      "Styled-components ou Tailwind en sont des formes. Le style devient un comportement du composant : portée automatique (plus de conflits de classes), génération dynamique selon les props. Les puristes préfèrent parfois les CSS natifs modernes avec @scope.",
  },
  {
    term: "Responsive Design",
    full: "Design adaptatif",
    cat: "front",
    def: "Une interface qui s'adapte automatiquement à la taille de l'écran : mobile, tablette, desktop.",
    detail:
      "On travaille avec des points de rupture (breakpoints), des unités fluides (%, rem, clamp()) et des grilles flexibles. L'approche « mobile-first » consiste à concevoir d'abord pour petit écran puis enrichir pour les grands.",
  },
  {
    term: "PWA",
    full: "Progressive Web App",
    cat: "front",
    def: "Un site web doté de capacités d'application native : installation, mode hors-ligne, notifications push.",
    detail:
      "Grâce aux Service Workers (scripts qui interceptent les requêtes réseau), une PWA fonctionne sans connexion et se lance depuis l'écran d'accueil. Chrome et Edge la supportent pleinement ; sur iOS, le support reste partiel.",
  },
  {
    term: "Tree Shaking",
    full: "Élimination du code mort",
    cat: "front",
    def: "Technique de build qui supprime automatiquement le code importé mais jamais utilisé dans le bundle final.",
    detail:
      "Importer toute la librairie lodash alors qu'on n'utilise qu'une fonction fait grossir inutilement le JavaScript envoyé au navigateur. Les bundlers (Vite, esbuild, Rollup) analysent les imports et ne gardent que l'utile.",
  },
  {
    term: "Bundling",
    full: "Empaquetage des assets",
    cat: "front",
    def: "Assembler tous les fichiers JS, CSS et assets du projet en quelques fichiers optimisés pour la production.",
    detail:
      "Vite, esbuild et Webpack divisent le code en « chunks » : le navigateur ne télécharge que ce qui est nécessaire au chargement, le reste étant chargé à la demande (code splitting).",
  },

  // Backend
  {
    term: "ORM",
    full: "Object-Relational Mapping",
    cat: "back",
    def: "Une couche qui traduit les objets du code en requêtes de base de données, et inversement.",
    detail:
      "Django ORM, Prisma ou SQLAlchemy permettent d'écrire du Python/JavaScript au lieu du SQL brut : user.save() au lieu d'un INSERT. Gain de productivité énorme, mais il faut comprendre ce que génère l'ORM sous peine de requêtes catastrophiquement lentes (problème du N+1).",
  },
  {
    term: "CRUD",
    full: "Create, Read, Update, Delete",
    cat: "back",
    def: "Les quatre opérations fondamentales de manipulation de données : créer, lire, modifier, supprimer.",
    detail:
      "Toute interface d'administration est un CRUD. En REST, elles correspondent aux verbes HTTP : POST, GET, PUT/PATCH, DELETE. Maîtriser le CRUD, c'est maîtriser 80 % des besoins d'une application classique.",
  },
  {
    term: "REST",
    full: "Representational State Transfer",
    cat: "back",
    def: "Un style d'architecture d'API fondé sur HTTP : chaque ressource a une URL, les verbes HTTP décrivent l'action.",
    detail:
      "GET /users/42 récupère l'utilisateur 42, DELETE /users/42 le supprime. L'API est sans état (stateless) : chaque requête contient tout ce qu'il faut pour être traitée. C'est le standard historique, challengé par GraphQL et gRPC.",
  },
  {
    term: "GraphQL",
    full: "—",
    cat: "back",
    def: "Un langage de requêtes pour API : le client demande exactement les champs voulus, rien de plus.",
    detail:
      "Contrairement à REST où chaque endpoint retourne une structure fixe, une requête GraphQL ressemble à la réponse souhaitée. Idéal pour les apps mobiles (économie de données), mais exige de surveiller la complexité des requêtes et la mise en cache.",
  },
  {
    term: "gRPC",
    full: "gRPC Remote Procedure Calls",
    cat: "back",
    def: "Un framework d'appels de procédures distantes rapide, basé sur des buffers binaires et HTTP/2.",
    detail:
      "Très utilisé en microservices : plus compact que JSON (sérialisation binaire Protocol Buffers), avec streaming bidirectionnel et typage fort généré automatiquement. Moins adapté aux navigateurs (requiert une passerelle : gRPC-Web).",
  },
  {
    term: "WebSocket",
    full: "—",
    cat: "back",
    def: "Une connexion persistante bidirectionnelle entre navigateur et serveur, pour le temps réel.",
    detail:
      "Contrairement à HTTP où le client doit toujours initier, une WebSocket reste ouverte : le serveur peut pousser des données à tout moment (messagerie, notifications, scores live). Les alternatives : Server-Sent Events (plus simple, unidirectionnel) et WebRTC (pair-à-pair).",
  },
  {
    term: "Queue / File de messages",
    full: "Message Queue",
    cat: "back",
    def: "Un intermédiaire qui stocke les tâches à traiter, pour les exécuter de façon asynchrone ou répartie.",
    detail:
      "Celery/Redis en Python, RabbitMQ ou Kafka côté infrastructure : envoyer un e-mail, générer un PDF ou traiter une vidéo ne doit pas bloquer la requête HTTP. Le producteur dépose, un ou plusieurs consommateurs traitent — à leur rythme, avec reprise sur échec.",
  },
  {
    term: "Idempotent",
    full: "Idempotence",
    cat: "back",
    def: "Une opération qui produit le même résultat, qu'on l'exécute une fois ou dix fois.",
    detail:
      "Crucial pour les API et les paiements : si le réseau décroche, le client renvoie la requête — un traitement idempotent (clé d'idempotence, upsert) évite de débiter deux fois. GET et PUT sont idempotents ; POST ne l'est pas par défaut.",
  },
  {
    term: "Multi-tenancy",
    full: "Multitenant",
    cat: "back",
    def: "Une architecture où une seule instance du logiciel sert plusieurs clients (tenants), en isolant leurs données.",
    detail:
      "Trois stratégies : base de données partagée avec colonne tenant_id (simple, économique), schéma par tenant (isolation moyenne), base par tenant (isolation maximale, coût élevé). C'est le modèle des SaaS — et son défi n°1 est de ne jamais fuiter de données d'un client à l'autre.",
  },
  {
    term: "Rate Limiting",
    full: "Limitation de débit",
    cat: "back",
    def: "Restreindre le nombre de requêtes qu'un client peut faire sur une API dans une fenêtre donnée.",
    detail:
      "Protège contre les abus et les pics de charge. Techniques classiques : compteur fixe, fenêtre glissante, ou seau à jetons (token bucket) qui lisse le trafic. La réponse 429 « Too Many Requests » indique que la limite est atteinte.",
  },
  {
    term: "JWT",
    full: "JSON Web Token",
    cat: "back",
    def: "Un jeton signé qui transporte l'identité d'un utilisateur : le serveur peut le vérifier sans état.",
    detail:
      "Format : header.payload.signature, encodé en Base64. Le client l'envoie à chaque requête (Authorization: Bearer …). Attention : le contenu est lisible par tous (jamais de données sensibles dedans), et un JWT volé est utilisable jusqu'à son expiration — d'où les refresh tokens à courte durée.",
  },
  {
    term: "Webhook",
    full: "Callback HTTP",
    cat: "back",
    def: "Une URL que votre service expose pour qu'un tiers appelle automatiquement quand un événement survient.",
    detail:
      "Exemple : Stripe appelle votre webhook /stripe/webhook dès qu'un paiement réussit. Le mécanisme inverse de l'API classique : ici, c'est le fournisseur qui pousse l'information. Toujours vérifier la signature pour prouver que l'appel est authentique.",
  },

  // Cloud
  {
    term: "IaaS / PaaS / SaaS",
    full: "Infrastructure / Platform / Software as a Service",
    cat: "cloud",
    def: "Les trois niveaux de location du cloud : machines virtuelles, plateforme de déploiement, ou logiciel clé en main.",
    detail:
      "IaaS (AWS EC2, OVH) : vous gérez tout sauf le matériel. PaaS (Heroku, Railway, Vercel) : vous poussez le code, la plateforme gère serveur, scaling et SSL. SaaS (Figma, Notion) : vous utilisez, rien d'autre. Plus on monte, moins on contrôle — et plus on va vite.",
  },
  {
    term: "Serverless",
    full: "Sans serveur (à gérer)",
    cat: "cloud",
    def: "Exécuter du code sans provisionner ni administrer de serveur : le cloud scale et facture à l'usage.",
    detail:
      "AWS Lambda, Cloudflare Workers ou Vercel Functions exécutent une fonction par appel. Zéro serveur à patcher, facturation à la milliseconde. Limites : démarrage à froid (cold start), durée d'exécution plafonnée, état à externaliser.",
  },
  {
    term: "CDN",
    full: "Content Delivery Network",
    cat: "cloud",
    def: "Un réseau de serveurs répartis dans le monde qui met en cache vos contenus près des visiteurs.",
    detail:
      "Cloudflare, CloudFront ou Bunny CDN servent images, vidéos et fichiers JS depuis le point de présence le plus proche de l'utilisateur : latence réduite, charge du serveur d'origine allégée, protection contre les pics de trafic.",
  },
  {
    term: "Load Balancer",
    full: "Répartiteur de charge",
    cat: "cloud",
    def: "Un distributeur de trafic qui répartit les requêtes entre plusieurs serveurs pour absorber la charge.",
    detail:
      "Quand un serveur tombe, le load balancer cesse de lui envoyer du trafic : la haute disponibilité. Stratégies classiques : round-robin (à tour de rôle), least-connections (au moins occupé), ou par affinité de session (sticky sessions).",
  },
  {
    term: "Auto-scaling",
    full: "Mise à l'échelle automatique",
    cat: "cloud",
    def: "Ajustement automatique du nombre de serveurs selon la charge réelle : plus de trafic, plus d'instances.",
    detail:
      "Montée en charge (scale out) le jour de lancement d'une campagne, retour à la normale la nuit — on ne paie que ce qu'on utilise. Se prépare à l'avance : l'application doit être stateless pour qu'une instance quelconque traite une requête quelconque.",
  },
  {
    term: "SLA",
    full: "Service Level Agreement",
    cat: "cloud",
    def: "L'eng contractuel de disponibilité d'un service, mesuré en pourcentage de temps de fonctionnement.",
    detail:
      "99,9 % = 8h45 d'indisponibilité/an tolérées ; 99,99 % = 52 min/an. Derrière les chiffres : redondance multi-zones, bascules automatiques et crédits de compensation en cas de non-respect. À lire avant de choisir un hébergeur critique.",
  },
  {
    term: "Cold Start",
    full: "Démarrage à froid",
    cat: "cloud",
    def: "La latence supplémentaire d'une fonction serverless au premier appel, quand l'environnement d'exécution doit être créé.",
    detail:
      "L'hébergeur « met en veille » les fonctions inactives ; le réveil prend des centaines de millisecondes, voire des secondes avec des runtimes lourds (Java). Solutions : keep-alive périodique, runtimes légers (Go, Rust), provisioned concurrency chez AWS.",
  },

  // DevOps
  {
    term: "CI/CD",
    full: "Intégration & Déploiement Continus",
    cat: "devops",
    def: "Automatiser tests et déploiements à chaque modification du code : intégration continue, livraison continue.",
    detail:
      "CI : à chaque push, la pipeline lance lint, tests et build — le code cassé est détecté en minutes. CD : si tout est vert, le déploiement en production se fait automatiquement (ou semi-automatiquement). GitHub Actions, GitLab CI et CircleCI sont les standards.",
  },
  {
    term: "Docker",
    full: "Conteneurisation",
    cat: "devops",
    def: "Emballer une application et toutes ses dépendances dans un conteneur qui tourne pareil partout.",
    detail:
      "« Ça marchait sur ma machine » disparaît : l'image Docker contient le système, les librairies et le code. Léger et portable, le conteneur est devenu l'unité de déploiement moderne. Un Dockerfile décrit la recette, un registre (Docker Hub, GHCR) les stocke.",
  },
  {
    term: "Kubernetes (K8s)",
    full: "Orchestrateur de conteneurs",
    cat: "devops",
    def: "Un système qui pilote automatiquement des flottes de conteneurs : déploiement, scaling, auto-réparation.",
    detail:
      "On décrit l'état souhaité (« 3 répliques de cette API »), K8s le maintient : remplace les conteneurs morts, équilibre la charge, roule les mises à jour sans coupure. Puissant mais complexe — beaucoup d'équipes préfèrent des managés (EKS, GKE) ou de plus simples (Nomad, Dokku).",
  },
  {
    term: "Git",
    full: "Système de contrôle de version",
    cat: "devops",
    def: "L'outil qui enregistre l'historique complet d'un projet : chaque modification est tracée, réversible et partageable.",
    detail:
      "Travail en branches (feature branches), fusions (merge), résolution de conflits. GitHub, GitLab et Bitbucket ajoutent revues de code (pull requests) et intégration CI dessus. commit early, commit often — un commit = un point de restauration.",
  },
  {
    term: "Monorepo",
    full: "Dépôt unique",
    cat: "devops",
    def: "Regrouper plusieurs projets (apps, librairies, outils) dans un seul dépôt Git.",
    detail:
      "Partage de code simplifié, refactors transversaux atomiques, un seul historique. Google l'a popularisé. L'alternative : un dépôt par projet (polyrepo), plus d'autonomie d'équipe. Outillage associé : Nx, Turborepo, pnpm workspaces.",
  },
  {
    term: "Rollback",
    full: "Retour arrière",
    cat: "devops",
    def: "Revenir à une version précédente d'une application après un déploiement défectueux.",
    detail:
      "La capacité de rollback est ce qui rend le déploiement continu sans danger : si la nouvelle version plante, on bascule sur l'ancienne en une minute. Les bases de données compliquent les choses — une migration doit donc être rétro-compatible.",
  },
  {
    term: "Infrastructure as Code",
    full: "IaC",
    cat: "devops",
    def: "Décrire l'infrastructure serveurs, réseaux et bases de données dans des fichiers versionnés, comme du code.",
    detail:
      "Terraform, Pulumi ou CloudFormation : un terraform apply crée l'infrastructure décrite. Bénéfices : reproductibilité (même staging = même prod), revue de code des changements d'infra, retour arrière propre. Adieu les clics manuels dans la console.",
  },
  {
    term: "Observabilité",
    full: "Observability",
    cat: "devops",
    def: "La capacité à comprendre l'état interne d'un système depuis ses signaux externes : logs, métriques, traces.",
    detail:
      "Trois piliers : les logs (les événements), les métriques (les chiffres dans le temps : latence, CPU, requêtes/s) et les traces distribuées (le parcours d'une requête à travers les services). Stack typique : Prometheus + Grafana, ou Datadog. On n'améliore que ce qu'on mesure.",
  },
  {
    term: "Feature Flag",
    full: "Interrupteur de fonctionnalité",
    cat: "devops",
    def: "Un booléen de configuration qui active ou désactive une fonctionnalité sans redéployer.",
    detail:
      "On déploie le code inactif, puis on active le flag pour certains utilisateurs (beta, déploiement progressif, A/B testing). En cas de bug : on coupe le flag, pas le serveur. Outils : LaunchDarkly, Unleash, ou un simple champ en base de données.",
  },
  {
    term: "Chaos Engineering",
    full: "Ingénierie du chaos",
    cat: "devops",
    def: "Détruire volontairement des composants en production pour vérifier que le système résiste.",
    detail:
      "Popularisé par Netflix (outil Chaos Monkey) : on tue des serveurs, on coupe des zones, on ralentit le réseau. Si l'application tient, la confiance est réelle et pas théorique. Prérequis : observabilité solide et plans de secours testés.",
  },

  // IA & Data
  {
    term: "LLM",
    full: "Large Language Model",
    cat: "ia",
    def: "Un modèle de langage entraîné sur d'énormes corpus de texte, capable de comprendre et générer du langage.",
    detail:
      "GPT, Claude, Gemini ou Llama prédisent le mot suivant — à l'échelle de milliards de paramètres. Aptitudes émergentes : résumé, traduction, raisonnement, code. Ils ne « savent » rien : ils reproduisent des patterns statistiques, avec des hallucinations possibles.",
  },
  {
    term: "Prompt Engineering",
    full: "Ingénierie de prompts",
    cat: "ia",
    def: "L'art de formuler les instructions données à un modèle d'IA pour obtenir des résultats fiables et précis.",
    detail:
      "Techniques : rôle et contexte explicites, exemples (few-shot), décomposition en étapes (chain-of-thought), formats de sortie contraints (JSON). Bien prompté, un petit modèle peut surpasser un grand modèle mal guidé.",
  },
  {
    term: "RAG",
    full: "Retrieval-Augmented Generation",
    cat: "ia",
    def: "Brancher un LLM sur vos propres données : le modèle répond en s'appuyant sur des documents récupérés en amont.",
    detail:
      "Pipeline : les documents sont découpés et transformés en vecteurs (embeddings) stockés dans une base vectorielle. À la question, on récupère les passages pertinents et on les injecte dans le prompt. Réduit les hallucinations et les réponses périmées — le modèle cite vos sources au lieu d'inventer.",
  },
  {
    term: "Embeddings",
    full: "Vecteurs sémantiques",
    cat: "ia",
    def: "Des représentations numériques de textes qui capturent leur sens : deux textes proches en sens ont des vecteurs proches.",
    detail:
      "Deux textes proches en sens obtiennent des vecteurs proches : les embeddings de \u00ab chien \u00bb et \u00ab chiot \u00bb seront voisins, contrairement \u00e0 \u00ab chien \u00bb et \u00ab camion \u00bb. C'est ce qui rend possible la recherche sémantique : on compare des distances entre vecteurs plutôt que des mots-clés. Modèles courants : OpenAI text-embedding, sentence-transformers.",
  },
  {
    term: "Fine-tuning",
    full: "Affinage d'un modèle",
    cat: "ia",
    def: "Ré-entraîner un modèle pré-entraîné sur des données spécifiques pour spécialiser son comportement.",
    detail:
      "Distinction clé avec le RAG : le fine-tuning change le comportement du modèle (ton, style, tâche), le RAG lui donne des connaissances. Le fine-tuning coûte cher et s'obsole vite ; on le réserve aux cas où le style importe plus que les faits.",
  },
  {
    term: "Agent IA",
    full: "Agent",
    cat: "ia",
    def: "Un système qui enchaîne automatiquement raisonnement, décisions et actions (appels d'outils) pour atteindre un objectif.",
    detail:
      "Boucle classique : le modèle planifie, appelle une API ou exécute du code, observe le résultat, s'ajuste. Agents de code, agents de recherche, agents support… La fiabilité reste le défi : garde-fails humains et sandboxing sont indispensables en production.",
  },
  {
    term: "Machine Learning",
    full: "Apprentissage automatique",
    cat: "ia",
    def: "Des algorithmes qui apprennent des patterns à partir de données, au lieu d'être programmés règle par règle.",
    detail:
      "On entraîne sur des exemples (dataset), on évalue sur des données jamais vues (jeu de test), on déploie. Sous-domaines : apprentissage supervisé (étiqueté), non supervisé (structures cachées), par renforcement (récompenses). Le deep learning en est une branche utilisant des réseaux de neurones profonds.",
  },
  {
    term: "ETL",
    full: "Extract, Transform, Load",
    cat: "ia",
    def: "Le pipeline classique de la donnée : extraire depuis les sources, transformer, charger dans un entrepôt.",
    detail:
      "Exemple : extraire les ventes de la boutique, nettoyer et uniformiser, charger dans Snowflake/BigQuery pour l'analyse. Variante moderne : l'ELT (charger d'abord, transformer dans l'entrepôt), plus flexible grâce à la puissance du cloud.",
  },
  {
    term: "Big Data",
    full: "Données massives",
    cat: "ia",
    def: "Des volumes de données trop importants pour les outils classiques, traités par calcul distribué.",
    detail:
      "Les « 3 V » : Volume (pétaoctets), Vélocité (flux en continu), Variété (textes, images, capteurs). Stack historique : Hadoop/Spark. Aujourd'hui, les entrepôts cloud (Snowflake, BigQuery, ClickHouse) traitent la plupart des besoins sans infrastructure dédiée.",
  },

  // Sécurité
  {
    term: "OWASP Top 10",
    full: "Top 10 des risques web",
    cat: "securite",
    def: "Le classement de référence des dix vulnérabilités web les plus critiques, mis à jour régulièrement.",
    detail:
      "Injection SQL, XSS, exposition de données sensibles, mauvaise configuration, composants vulnérables… Chaque développeur devrait connaître cette liste : elle structure les audits de sécurité et les revues de code. Le n°1 reste régulièrement l'injection — pourtant simple à prévenir avec requêtes paramétrées.",
  },
  {
    term: "XSS",
    full: "Cross-Site Scripting",
    cat: "securite",
    def: "Injection de script malveillant dans une page web, exécuté dans le navigateur des victimes au nom de votre site.",
    detail:
      "Un commentaire contenant <script> non échappé vole les cookies ou piège l'utilisateur. Défense : échapper/encoder toute donnée affichée, Content Security Policy, sanitisation côté serveur. Le « stored XSS » est le plus dangereux : persistant en base.",
  },
  {
    term: "SQL Injection",
    full: "Injection SQL",
    cat: "securite",
    def: "Faire exécuter du SQL arbitraire par l'attaquant en manipulant les entrées d'un formulaire.",
    detail:
      "Classique : OR 1=1 dans un champ mal filtré donne accès à toute la table. Contre-mesure absolue : requêtes paramétrées / ORM (jamais de concaténation de chaînes). Le scanneur sqlmap détecte ces failles en minutes — pensez-y avant les attaquants.",
  },
  {
    term: "Phishing",
    full: "Hameçonnage",
    cat: "securite",
    def: "Usurper l'identité d'un service de confiance par e-mail ou SMS pour déroger identifiants ou données.",
    detail:
      "Variantes : spear phishing (ciblé, très personnalisé), smishing (SMS), phishing de MFA (relai de code en temps réel). La première ligne de défense n'est pas technique mais humaine : vérifier l'expéditeur réel et ne jamais cliquer sous pression.",
  },
  {
    term: "MFA",
    full: "Multi-Factor Authentication",
    cat: "securite",
    def: "Exiger plusieurs preuves d'identité pour se connecter : mot de passe + code, biométrie ou clé physique.",
    detail:
      "Facteurs : quelque chose que vous savez (mot de passe), que vous avez (TOTP, clé FIDO2), que vous êtes (empreinte). Un mot de passe volé devient inutile sans le second facteur. Préférez les clés de sécurité (passkeys) aux SMS, interceptables.",
  },
  {
    term: "Passkey",
    full: "Clé d'accès",
    cat: "securite",
    def: "Une authentification sans mot de passe : une paire de clés cryptographiques liée à votre appareil et au site.",
    detail:
      "Standard FIDO2/WebAuthn : la clé privée ne quitte jamais l'appareil, le site ne stocke qu'une clé publique — rien à voler côté serveur. Déverrouillage par empreinte ou visage. Apple, Google et Microsoft poussent ce standard comme successeur du mot de passe.",
  },
  {
    term: "Zero Trust",
    full: "Confiance zéro",
    cat: "securite",
    def: "Un modèle de sécurité où aucun accès n'est accordé par défaut : chaque requête est vérifiée, même en interne.",
    detail:
      "« Never trust, always verify » : le réseau interne n'est pas plus fiable que l'Internet. Chaque utilisateur, appareil et requête est authentifié et autorisé en continu. Devient la norme avec le travail à distance et les environnements cloud fragmentés.",
  },

  // Culture & métiers
  {
    term: "SaaS",
    full: "Software as a Service",
    cat: "metier",
    def: "Un logiciel vendu par abonnement et hébergé par son éditeur, accessible depuis un navigateur.",
    detail:
      "Modèle économique dominant : récurrent (MRR/ARR), multi-tenant, livré en continu. Les métriques qui comptent : churn (taux de désabonnement), LTV (valeur vie client), CAC (coût d'acquisition), NRR (revenu net récurrent). Exemples : Slack, Notion, Figma.",
  },
  {
    term: "MRR / ARR",
    full: "Monthly / Annual Recurring Revenue",
    cat: "metier",
    def: "Le revenu récurrent mensuel ou annuel : la mesure vitale de tout SaaS par abonnement.",
    detail:
      "ARR = MRR × 12. On le distingue du chiffre d'affaires brut : seul compte l'abonnement, pas les prestations ponctuelles. Sa croissance, son churn et son expansion (upsell) déterminent la santé — et la valorisation — d'un SaaS.",
  },
  {
    term: "Churn",
    full: "Taux d'attrition",
    cat: "metier",
    def: "Le pourcentage de clients qui résilient leur abonnement sur une période donnée.",
    detail:
      "Un churn mensuel de 5 % signifie qu'un SaaS doit reconquérir 5 % de ses revenus chaque mois rien que pour stagner. Il se combat par l'onboarding, le support et la valeur continue — et se mesure par cohortes pour comprendre quand les clients partent.",
  },
  {
    term: "Agile / Scrum",
    full: "Méthodologies agiles",
    cat: "metier",
    def: "Des méthodes de gestion de projet itératives : livrer par petits incréments, s'adapter au changement plutôt que suivre un plan figé.",
    detail:
      "Scrum organise le travail en sprints (1–4 semaines) avec rôles définis (Product Owner, Scrum Master) et cérémonies (daily, rétro). Le manifeste agile privilégie l'individu, le logiciel fonctionnel et la collaboration client. Attention aux écoles « agile theatre » : des rituels sans principes.",
  },
  {
    term: "Tech Debt vs. Product",
    full: "Équilibre technique / produit",
    cat: "metier",
    def: "La tension permanente entre livrer des fonctionnalités vite et maintenir des fondations saines.",
    detail:
      "100 % de l'un ou de l'autre tue le produit. Les équipes saines consacrent une part fixe de leur capacité (souvent 15–20 %) à la qualité : tests, montées de version, refactors. Ce compromis est une décision produit, pas uniquement technique.",
  },
  {
    term: "Code Review",
    full: "Revue de code",
    cat: "metier",
    def: "Faire relire son code par un pair avant fusion : qualité, partage de connaissances et cohérence d'équipe.",
    detail:
      "La revue n'est pas un examen : c'est une conversation. Bonnes pratiques : petites pull requests (< 400 lignes), commentaires constructifs, CI verte avant relecture. Les bugs détectés en revue coûtent dix fois moins cher que ceux trouvés en production.",
  },
  {
    term: "Legacy Code",
    full: "Code patrimonial",
    cat: "metier",
    def: "Le code existant, souvent ancien, qui fonctionne en production mais dont personne ne veut toucher.",
    detail:
      "Le legacy n'est pas du mauvais code : c'est du code sans tests qui rapporte de l'argent. La stratégie n'est pas la réécriture (mythe des 6 mois qui durent 2 ans) mais le strangler pattern : entourer progressivement le vieux système de nouveau code jusqu'à le remplacer.",
  },
];

/* Tri alphabétique au chargement */
TERMS.sort((a, b) => a.term.localeCompare(b.term, "fr"));
