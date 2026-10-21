# Images à récupérer — La Barak

Téléchargez chaque image depuis le site actuel et placez-la dans `assets/img/` avec **exactement** le nom indiqué.

| Fichier à créer | URL d'origine |
|---|---|
| `assets/img/logo.png` | Déjà inclus (logo fourni, fond transparent) |
| `assets/img/coralie.jpg` | https://labarak.ca/wp-content/uploads/2017/10/Coralie.jpg |
| `assets/img/vanessa.jpg` | https://labarak.ca/wp-content/uploads/2017/10/Vanessa.jpg |
| `assets/img/isabelle.jpg` | https://labarak.ca/wp-content/uploads/2017/10/Isabelle.jpg |
| `assets/img/favicon.svg` | Déjà inclus (cercle noir avec une mèche blanche) |

Les portraits s'affichent en noir et blanc dans une arche, et passent en couleur au survol. Des photos verticales (format 3:4) donnent le meilleur résultat.

Les icônes décoratives de l'ancien site (ciseaux, peigne, savon) ne sont plus utilisées.

## Téléchargement en une commande

Depuis le dossier du site :

```bash
mkdir -p assets/img && cd assets/img
B=https://labarak.ca/wp-content/uploads
curl -L -o coralie.jpg  $B/2017/10/Coralie.jpg
curl -L -o vanessa.jpg  $B/2017/10/Vanessa.jpg
curl -L -o isabelle.jpg $B/2017/10/Isabelle.jpg
```

Conseil : passez les photos dans https://squoosh.app (JPEG qualité ~75, largeur max 1200 px).
