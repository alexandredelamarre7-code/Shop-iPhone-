# DELAMARRE STORE V3

## Où mettre le ZIP ?
Ne mets pas le ZIP directement sur le site final. Décompresse-le d'abord.
Le dossier `delamarre_store_v3` contient le projet.

### Méthode la plus simple pour commencer
1. Crée un compte GitHub.
2. Crée un nouveau dépôt, par exemple `delamarre-store`.
3. Décompresse ce ZIP.
4. Dans GitHub : **Add file → Upload files**.
5. Envoie **le contenu du dossier**, notamment `index.html`, `admin.html`, `config.js`, etc.
6. Ensuite connecte le dépôt à Vercel. Vercel peut aussi déployer directement un dossier via Vercel Drop.

### Administration
La page `/admin.html` est prévue comme panneau de gestion. Dans cette V3 de démonstration, ses modifications sont stockées dans le navigateur : elles ne sont donc PAS encore une base de données publique.

Pour une vraie boutique où les modifications sont visibles par tous les clients, il faut connecter Supabase (base de données + authentification). Le plan gratuit de Supabase existe et inclut une base Postgres, avec des limites d'usage. Ne mets jamais de clé secrète dans `config.js`.

### Paiement PayPal
Le paiement réel nécessite un compte PayPal Business et des identifiants API. Les secrets doivent rester côté serveur. Cette archive prépare la structure mais n'active pas de paiement réel toute seule.

### Important avant de vendre réellement
Ajoute tes vraies informations d'entreprise, CGV, politique de confidentialité, livraison/retours et les informations légales nécessaires. Teste PayPal en sandbox avant tout paiement réel.
