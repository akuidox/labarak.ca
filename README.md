# labarak.ca — site statique

Site une page en HTML/CSS pur, sans dépendances ni étape de build. Ce site n'a pas de formulaire : tout mène à l'appel.

## Mise en ligne

1. **Images** : dans `public/assets/img/` (voir `ASSETS.md`).
2. **GitHub** : créez un repo privé (ex. `labarak`) et poussez tout le dossier.
3. **Cloudflare** : Workers & Pages → Créer → Importer un repo → `labarak.ca`.
   - Nom du projet : `labarak`
   - Commande de build : *(vide)*
   - Commande de déploiement : `npx wrangler deploy` (par défaut)
   - La configuration est dans `wrangler.jsonc` : seul le dossier `public/` est publié.
4. **Domaine** : dans le projet → Paramètres → Domaines et routes → ajouter `labarak.ca` et `www.labarak.ca`.

Ensuite, chaque `git push` redéploie le site automatiquement.

## À valider avec la cliente

Le contenu vient de l'ancien site (2017-2018) :
- l'équipe est-elle toujours la même ?
- les prix et les heures sont-ils à jour ?

## Mouvement

- La mèche du bandeau se dessine une seule fois au chargement.
- La bande des services défile en continu.
- Les deux s'arrêtent si le visiteur a activé « réduire les animations » dans son système.

## Fichiers

- `public/` — **le site publié** (tout ce qui est ici est en ligne)
  - `index.html`, `styles.css`, `main.js`, `404.html`
  - `assets/img/` — images
  - `_headers`, `_redirects`, `robots.txt`, `sitemap.xml`
- `wrangler.jsonc` — configuration Cloudflare
- `README.md`, `ASSETS.md` — documentation (non publiée)
