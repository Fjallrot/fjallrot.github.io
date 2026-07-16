# 07 – Release Checklist

## Fjallróts release-standard

Før en applikation, hjemmeside eller større opdatering frigives til produktion, skal denne tjekliste gennemgås.

En release må kun gennemføres, når kravene er vurderet og godkendt.

Ingen genveje må tages på bekostning af sikkerhed, kvalitet eller brugeroplevelse.

---

# 1. Website & Indhold

- [ ] Alle interne og eksterne links er testet.
- [ ] Ingen døde links eller manglende sider findes.
- [ ] Alle tekster er gennemgået for fejl.
- [ ] Custom 404-side fungerer korrekt.
- [ ] Favicons er konfigureret.
- [ ] PWA-manifest fungerer korrekt.
- [ ] Metadata og branding er opdateret.

---

# 2. Sikkerhed (Security)

- [ ] HTTPS fungerer korrekt.
- [ ] TLS-certifikater er gyldige.
- [ ] HTTP redirecter korrekt til HTTPS.
- [ ] Sikkerhedsheaders er aktive:

Eksempel:

- CSP
- HSTS
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

- [ ] Ingen secrets findes i kildekoden.
- [ ] API-nøgler og credentials er beskyttet.
- [ ] Git repository er kontrolleret for lækkede secrets.
- [ ] Tredjepartsafhængigheder er scannet for kendte sårbarheder.
- [ ] Produktionskonfiguration er gennemgået.

---

# 3. Ydeevne (Performance)

- [ ] Lighthouse-test er gennemført.
- [ ] Performance-score er mindst 95 (mål: 100).
- [ ] Billeder er optimeret.
- [ ] Moderne billedformater bruges:

- WebP
- AVIF

- [ ] HTML, CSS og JavaScript er optimeret.
- [ ] Unødvendige scripts er fjernet.
- [ ] Cache-strategi er kontrolleret.

---

# 4. SEO & Synlighed

- [ ] Alle sider har unik:

```html
<title>
<meta name="description">
```

- [ ] Canonical-links peger på de korrekte offentlige URL'er.
- [ ] `robots.txt` er opdateret og tilgængelig.
- [ ] `sitemap.xml` indeholder alle relevante offentlige sider.
- [ ] Open Graph-metadata er kontrolleret.
- [ ] Delingsbilleder og beskrivelser vises korrekt.
- [ ] Strukturerede data svarer til det synlige indhold, hvor de anvendes.

---

# 5. Tilgængelighed (Accessibility)

- [ ] Siden kan navigeres fuldstændigt med tastatur.
- [ ] Synlig fokusmarkering fungerer på alle interaktive elementer.
- [ ] Kontrastforhold er testet.
- [ ] Meningsbærende billeder har beskrivende `alt`-tekst.
- [ ] Dekorative billeder har tom `alt`-tekst.
- [ ] Formularfelter har korrekte labels og fejlbeskeder.
- [ ] Overskrifter følger et logisk hierarki.
- [ ] ARIA bruges kun, hvor semantisk HTML ikke er tilstrækkeligt.
- [ ] `prefers-reduced-motion` respekteres.

---

# 6. Privatliv (Privacy)

- [ ] Privatlivspolitikken er opdateret og nem at finde.
- [ ] Kun nødvendige data indsamles.
- [ ] Cookies og tracking er dokumenteret og kræver relevant samtykke.
- [ ] Brugerdata er krypteret under transport og ved lagring, hvor nødvendigt.
- [ ] Slette- og eksportfunktioner er testet, hvis produktet opbevarer brugerdata.
- [ ] Tredjepartsdatabehandlere er vurderet og dokumenteret.

---

# 7. Test (Testing)

- [ ] Automatiske enhedstests består.
- [ ] Integrationstests består.
- [ ] Kritiske brugerflows er testet manuelt.
- [ ] Applikationen er testet i relevante browsere.
- [ ] Mobilvisning er testet på relevante skærmstørrelser.
- [ ] Fejltilstande, tomme tilstande og langsomme netværk er testet.
- [ ] JavaScript-konsollen er kontrolleret for fejl.

---

# 8. Backup & Gendannelse

- [ ] Automatiske backups er aktive for relevante data.
- [ ] Backups er krypterede og adgangsbegrænsede.
- [ ] En gendannelse er afprøvet.
- [ ] Recovery Point Objective og Recovery Time Objective er vurderet.
- [ ] Rollback-planen for releasen er dokumenteret og testbar.

---

# 9. Dokumentation

- [ ] README er opdateret med installations- og opsætningsinstruktioner.
- [ ] API'er og konfigurationskrav er dokumenteret.
- [ ] Ændringer, kendte begrænsninger og migrationskrav er dokumenteret.
- [ ] Fjallrót Standard er opdateret med relevante arkitekturbeslutninger.
- [ ] Support- og sikkerhedskontakter er korrekte.

---

# 10. Release & Overvågning (Monitoring)

- [ ] Deployment sker gennem den godkendte CI/CD-proces.
- [ ] Den deployede version kan spores til et commit eller tag.
- [ ] Smoke tests er gennemført i produktion.
- [ ] Overvågning af oppetid, fejl og nødvendige ressourcer er aktiv.
- [ ] Alarmer er testet og har en ansvarlig modtager.
- [ ] Beredskabs- og rollback-ansvar er afklaret.
- [ ] Releasen er dokumenteret med dato, version og godkendelse.

---

# Releasebeslutning

En release godkendes kun, når åbne punkter enten er løst eller dokumenteret og risikovurderet af en ansvarlig person.

Sikkerhedskritiske fejl, risiko for datatab eller væsentlige brud på privatliv og tilgængelighed blokerer releasen.
