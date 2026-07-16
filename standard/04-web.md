# 04 – Web

## Fjallróts webstandard

Dette kapitel beskriver, hvordan alle Fjallrót-hjemmesider og webapplikationer skal bygges.

Vi prioriterer:

- Hastighed
- Tilgængelighed
- Sikkerhed
- Standardbaseret udvikling
- Langsigtet vedligeholdelse

Websites skal være hurtige, enkle og respektfulde over for brugeren.

---

# Kerne-teknologier

## HTML

HTML skal skrives semantisk og struktureret.

Foretrukne elementer:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Unødvendige containere bør undgås, når et semantisk element beskriver indholdet bedre.

## CSS

Vi bruger standardbaseret CSS.

- CSS-variabler bruges til design tokens.
- Flexbox og Grid bruges til layout.
- Eksterne CSS-frameworks anvendes kun, når fordelene opvejer kompleksiteten og filstørrelsen.
- Layout skal udvikles mobile-first og fungere på tværs af skærmstørrelser.

## JavaScript

Vi skriver moderne JavaScript (ES6+).

JavaScript skal bruges som progressiv forbedring. Grundlæggende indhold og navigation bør så vidt muligt fungere, selvom JavaScript er deaktiveret eller ikke kan indlæses.

---

# Ydeevne (Performance)

- **Indlæsningstid:** Centrale sider skal indlæses hurtigt under realistiske netværksforhold.
- **Billeder:** Brug moderne formater som WebP eller AVIF, når de understøttes og giver en reel besparelse.
- **Layoutstabilitet:** Billeder skal have eksplicitte bredde- og højdeangivelser for at reducere layoutskift (CLS).
- **Lazy loading:** Billeder uden for den første skærm bør bruge `loading="lazy"`.
- **Afhængigheder:** Eksterne scripts, fonte og biblioteker skal begrænses og vurderes for ydeevne, privatliv og sikkerhed.

Lighthouse bruges som et diagnostisk værktøj. Vi tilstræber høje resultater inden for:

- Performance
- Accessibility
- Best Practices
- SEO

Resultater skal vurderes sammen med test på rigtige enheder og netværk.

---

# Tilgængelighed (Accessibility / a11y)

- **WCAG:** Vi tilstræber mindst WCAG 2.2 niveau AA.
- **Kontrast:** Almindelig tekst skal som udgangspunkt have en kontrastratio på mindst 4.5:1.
- **Tastaturnavigation:** Alle interaktive elementer skal kunne nås og aktiveres med tastatur.
- **Fokus:** Interaktive elementer skal have en tydelig `:focus-visible`-stil.
- **ARIA:** ARIA-attributter bruges kun, hvor semantisk HTML ikke er tilstrækkeligt.
- **Bevægelse:** Brugerens `prefers-reduced-motion`-indstilling skal respekteres.
- **Sprog:** Sidens hovedsprog skal angives med `lang` på `<html>`.

---

# Sikkerhed

- Alt indhold skal leveres via HTTPS i produktion.
- Brugerinput skal valideres og output-encodes i den relevante kontekst.
- En passende Content Security Policy bør begrænse uautoriserede scripts og ressourcer.
- Hemmeligheder og API-nøgler må aldrig placeres i klientkode eller commits.
- Tredjepartsressourcer skal vurderes og begrænses.

---

# Søgemaskineoptimering (SEO)

- Hver side skal have en unik og beskrivende `<title>`.
- Hver offentlig side bør have en relevant `<meta name="description">`.
- Overskrifter skal følge et logisk hierarki.
- Canonical-links skal anvendes, hvor flere URL'er kan vise samme indhold.
- `sitemap.xml` og `robots.txt` skal holdes opdaterede.
- Strukturerede data må kun bruges, når de svarer til sidens synlige indhold.

---

# Systemfiler & Standarder

Hver Fjallrót-hjemmeside skal efter behov have følgende filer i roden eller under `.well-known`:

- `robots.txt`: Instruktioner til søgemaskiner.
- `sitemap.xml`: Oversigt over offentligt tilgængelige sider.
- `.well-known/security.txt`: Kontakt og politik for ansvarlig rapportering af sikkerhedsproblemer.
- `llms.txt`: En kort, maskinlæsbar oversigt over sitets indhold og struktur.
- `manifest.webmanifest`: Metadata for websites, der tilbyder PWA-funktionalitet.

Filerne skal pege på eksisterende ressourcer og bruge samme officielle domæne som resten af websitet.
