# 05 – Git Workflow

## Fjallróts udviklingsproces

Dette kapitel beskriver Fjallróts standard for softwareudvikling.

Vi bruger versionsstyring til at sikre:

- Sporbarhed
- Kvalitet
- Gennemgang
- Sikker udvikling
- Stabil produktion

Ingen kodeændring bør nå brugere uden en kontrolleret proces.

---

# Fra idé til produktion

Fjallróts udviklingsflow:

```
Idé → Issue → Feature branch → Udvikling → Review → Main → Deployment → Produktion
```

## 1. Idé

En ny funktion, forbedring eller fejlrettelse beskrives og vurderes i forhold til Fjallróts principper og produktets mål.

## 2. Issue

Der oprettes et issue med:

- En klar problembeskrivelse
- Det ønskede resultat
- Acceptkriterier
- Relevante sikkerheds- og privatlivshensyn

## 3. Feature branch

Udvikling sker på en separat branch.

Anbefalet navngivning:

- `feature/12-add-login`
- `fix/27-navigation-error`
- `docs/31-update-security-standard`

## 4. Udvikling

- Ændringer testes lokalt.
- Commits skal være små, fokuserede og forståelige.
- Commit-beskeder skal forklare ændringens formål.
- Urelaterede ændringer bør ikke blandes i samme commit.

## 5. Review

Der oprettes en pull request mod den relevante beskyttede branch.

Før merge skal:

- Automatiske tests bestå.
- Linting og relevante kvalitetskontroller bestå.
- Sikkerheds- og privatlivskonsekvenser vurderes.
- Koden gennemgås af en anden person, når projektets størrelse gør det muligt.

## 6. Main

Godkendte ændringer merges til `main`.

`main` skal altid være i en stabil og deployerbar tilstand. Direkte commits til `main` bør begrænses gennem branch protection.

## 7. Deployment

En godkendt ændring kan starte en automatisk build- og deploymentproces, eksempelvis via Cloudflare Pages eller Workers.

Deployment skal være reproducerbar og kunne spores tilbage til et bestemt commit.

## 8. Produktion

Efter deployment udføres relevante smoke tests og overvågning. Ved alvorlige fejl skal ændringen kunne rulles tilbage hurtigt og sikkert.

---

# Sikkerhedsregler for Git

## Ingen secrets i Git

Følgende må aldrig committes:

- Adgangskoder
- API-nøgler
- Private SSH- eller kryptografiske nøgler
- Database-credentials
- Produktionskonfiguration med hemmeligheder
- `.env`-filer med følsomme værdier

Hvis en hemmelighed committes, skal den straks tilbagekaldes eller roteres. Det er ikke tilstrækkeligt blot at fjerne den i et senere commit.

## `.gitignore`

Repositoryet skal have en relevant `.gitignore`, som udelukker lokale hemmeligheder, genererede build-filer og unødvendige editorfiler.

`.gitignore` er ikke en sikkerhedsmekanisme i sig selv; filer skal kontrolleres før commit.

## Secret scanning

Automatisk secret scanning bør aktiveres, eksempelvis med GitHub Secret Scanning eller gitleaks.

Fund skal undersøges hurtigt, og eksponerede credentials skal roteres.

## Signerede commits og tags

Udviklere opfordres til at signere commits eller tags med en verificerbar GPG- eller SSH-nøgle, især for releases og sikkerhedskritiske ændringer.

## Afhængigheder

Ændringer i dependencies skal gennemgås. Lockfiler skal committes, og automatiske sikkerhedsscanninger bør bruges til at opdage kendte sårbarheder.

---

# Git-princippet

Historikken skal gøre det muligt at forstå:

- Hvad der blev ændret
- Hvorfor det blev ændret
- Hvem der godkendte ændringen
- Hvilke kontroller der blev gennemført
- Hvilken version der blev sendt i produktion
