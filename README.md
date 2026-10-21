# labarak.ca — site statique

Site une page en HTML/CSS pur, sans dépendances ni étape de build. Ce site n'a pas de formulaire : tout mène à l'appel.

## Mise en ligne

1. **Images** : suivez `ASSETS.md`.
2. **GitHub** : créez un repo privé (ex. `labarak`) et poussez tout le dossier.
3. **Cloudflare Pages** : Workers & Pages → Créer → Pages → Connecter à Git → choisir le repo.
   - Framework : *None*
   - Commande de build : *(vide)*
   - Dossier de sortie : `/`
4. **Domaine** : dans le projet Pages → Domaines personnalisés → ajouter `labarak.ca` et `www.labarak.ca`.

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

- `index.html` — la page
- `styles.css` — le style
- `main.js` — année du pied de page
- `404.html` — page introuvable
- `_headers` — en-têtes de sécurité et de cache (Cloudflare Pages)
- `_redirects` — redirige les anciennes URL WordPress
- `robots.txt`, `sitemap.xml` — référencement
