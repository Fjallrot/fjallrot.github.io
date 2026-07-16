# 06 – Infrastructure

## Fjallróts tekniske fundament

Dette kapitel beskriver den tekniske infrastruktur, som understøtter Fjallrót.

Vi anvender en kombination af:

- Selv-hostede systemer til interne tjenester
- Sikre cloud-platforme til offentlige tjenester
- Automatiseret deployment
- Sikkerhedsorienteret drift

Målet er at skabe en stabil, gennemsigtig og sikker platform.

---

# Raspberry Pi (Internt)

Fjallrót anvender selv-hostede enheder til interne infrastrukturtjenester.

Eksempler:

- Lokal DNS
- Netværkskontrol
- Udviklingsværktøjer
- Interne services

---

## Pi-hole

Pi-hole kan anvendes i interne netværk til:

- DNS-baseret blokering af kendte tracking-domæner
- Reduktion af reklamer
- Lokal DNS-styring

Pi-hole må ikke bruges som erstatning for sikkerhedssoftware, men som et ekstra kontrol-lag.

---

# Docker Standard

Interne tjenester bør køres isoleret gennem containere.

Fordele:

- Isolation
- Nem opdatering
- Reproducerbare miljøer

---

## Container Security

Alle Docker-containere skal følge disse principper:

## Non-root

Containere skal køre med mindst mulige privilegier.

Root-brug i containere skal undgås, hvor muligt.

## Minimal Base Image

Foretrukne images:

- Alpine
- Distroless

Formål:

- Mindre angrebsflade
- Færre afhængigheder
- Hurtigere opdateringer

Images skal fastlåses til en kontrolleret version eller digest og scannes for kendte sårbarheder.

## Read-only Filesystem

Hvor muligt:

- Container filesystem bør være read-only
- Kun nødvendige mapper må være skrivbare

## Resource Limits

Alle containere skal have begrænsninger for:

- CPU
- RAM

Formål:

- Forhindre ressourcemisbrug
- Beskytte værtsmaskinen

## Secrets

Hemmeligheder må ikke indbygges i images eller placeres i repositoryet. De skal leveres gennem en egnet secret manager eller en beskyttet runtime-konfiguration.

---

# Cloudflare

Cloudflare fungerer som Fjallróts edge-platform for offentlige webtjenester.

## Proxy

Cloudflare Proxy bruges til:

- At skjule origin-servere
- At forbedre performance
- At reducere direkte eksponering

Origin-serveren skal begrænse direkte adgang, så proxyen ikke kan omgås.

## Web Application Firewall (WAF)

WAF bruges til at reducere almindelige angreb:

- SQL injection
- XSS
- Kendte exploit-mønstre

WAF erstatter ikke sikker applikationskode, validering eller opdateringer.

## SSL/TLS

Alle offentlige tjenester skal anvende:

- HTTPS som standard
- TLS 1.3, hvor det understøttes
- Cloudflare SSL/TLS-tilstanden `Full (strict)`
- Et gyldigt certifikat mellem Cloudflare og origin-serveren

Ukrypteret trafik skal omdirigeres til HTTPS. HSTS aktiveres først, når alle relevante underdomæner er klar til permanent HTTPS.

---

# GitHub og CI/CD

GitHub bruges til kodeopbevaring og automatisering.

- `main` skal beskyttes med branch protection.
- Ændringer skal som udgangspunkt gå gennem en pull request.
- Automatiske tests og sikkerhedskontroller skal bestå før merge.
- CI/CD-tokens skal have mindst mulige rettigheder.
- Produktionsmiljøer bør kræve særskilt godkendelse, hvor risikoen kræver det.

---

# Proton (E-mail & Kommunikation)

Proton kan bruges til virksomhedskommunikation og administrative dokumenter.

- Konti skal beskyttes med MFA.
- Recovery-metoder skal opbevares sikkert.
- Følsomme filer og beskeder skal beskyttes med passende kryptering og adgangskontrol.

---

# Domæner & DNS

- Domæner administreres centralt og beskyttes med MFA.
- Registrar lock skal aktiveres, hvor det tilbydes.
- DNSSEC skal aktiveres, hvor hele DNS-kæden understøtter det korrekt.
- DNS-ændringer skal dokumenteres og gennemgås.
- SPF, DKIM og DMARC skal konfigureres for domæner, der sender e-mail.

---

# SSH-politik

- Kun moderne SSH-nøgler, eksempelvis Ed25519, må bruges.
- Password-login skal deaktiveres.
- Root-login skal deaktiveres eller begrænses strengt.
- Administrative porte må kun eksponeres for nødvendige netværk, helst via VPN eller en adgangsproxy.
- Fail2ban eller tilsvarende beskyttelse kan bruges på offentligt eksponerede SSH-tjenester.
- Ændring af standardporten kan reducere logstøj, men betragtes ikke som en sikkerhedskontrol.

---

# Drift, overvågning og backup

- Systemer skal opdateres regelmæssigt efter en risikobaseret proces.
- Logs skal være tilstrækkelige til fejlsøgning og hændelseshåndtering uden unødvendige persondata.
- Kritiske tjenester skal overvåges for tilgængelighed og sikkerhedshændelser.
- Backups skal være krypterede, adgangsbegrænsede og testet gennem gendannelse.
- Infrastrukturændringer skal være dokumenterede og så vidt muligt reproducerbare.
