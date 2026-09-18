---
status: accepted
---

# JWT stocké en localStorage plutôt qu'en cookie httpOnly

L'authentification repose sur un JWT (access token courte durée + refresh token), stocké côté client en `localStorage` plutôt que dans un cookie httpOnly. Un cookie httpOnly aurait protégé le token contre le vol par XSS, au prix d'une gestion CSRF et d'une portabilité moindre vers un futur client non-navigateur (app mobile). On accepte le risque XSS pour la V0 en échange d'une implémentation plus simple (pas de config cookie cross-origin, pas de protection CSRF à mettre en place) et d'un modèle `Authorization: Bearer` qui se transposera directement à une éventuelle app mobile.

## Consequences

Toute vulnérabilité XSS dans le frontend expose directement les tokens d'authentification. La discipline de sanitization des entrées utilisateurs (notamment dans l'affichage des noms de bibliothèques, titres de livres, etc.) devient donc critique et ne doit pas être traitée comme un détail secondaire.
