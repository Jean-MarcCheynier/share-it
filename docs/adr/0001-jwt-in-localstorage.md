---
status: accepted
---

# Store the JWT in localStorage rather than an httpOnly cookie

Authentication relies on a JWT (short-lived access token + refresh token), stored client-side in `localStorage` rather than in an httpOnly cookie. An httpOnly cookie would have protected the token from theft via XSS, at the cost of CSRF handling and reduced portability toward a future non-browser client (mobile app). We accept the XSS risk for V0 in exchange for a simpler implementation (no cross-origin cookie configuration, no CSRF protection to build) and an `Authorization: Bearer` model that will translate directly to a future mobile app.

## Consequences

Any XSS vulnerability in the frontend directly exposes authentication tokens. Input sanitization discipline (especially when rendering library names, book titles, etc.) therefore becomes critical and must not be treated as a secondary concern.
