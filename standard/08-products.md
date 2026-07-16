# 08 – Products

## Produktoversigt

Dette kapitel beskriver Fjallróts applikationer, funktioner og tekniske sikkerhedskrav.

Alle Fjallrót-produkter følger Fjallrót-standarden:

- Privacy by Design
- Security by Design
- Dataminimering
- Brugerkontrol
- Langsigtet kvalitet

---

# 🍲 Recipe Vault & Recipe Hub

## Oversigt

Recipe Vault (Android) og Recipe Hub (Web) er Fjallróts platforme inden for madlavning.

Produkterne er designet som sikre digitale miljøer til at gemme, organisere, opdage og dele opskrifter.

Målet er at kombinere moderne teknologi med værdien i personlige madtraditioner.

---

# Funktioner

## Global Explore Feed

Brugere kan opdage opskrifter og inspiration fra kokke verden over.

Funktioner:

- Global opskriftsopdagelse
- Søgning efter titel, kok eller ingredienser
- Effektiv pagination for hurtig oplevelse

---

# Focus Mode – Køkkenassistent

Recipe Vault hjælper brugeren under madlavning.

## Stemmestyring

Understøttede sprog:

- Dansk
- Færøsk
- Engelsk
- Norsk
- Svensk

Princip:

- Håndfri brug
- Fokus på lokal behandling hvor muligt
- Ingen unødvendig optagelse eller lagring

---

## Automatiske Timere

Appen kan identificere tidsangivelser.

Eksempel:

> "Bag i 10 minutter"

og foreslå oprettelse af timer.

---

## "I Cooked It"

Brugere kan:

- Markere opskrifter som lavet
- Tilføje billeder
- Dele resultatet under opskriften

---

# Offline Vault

Recipe Vault følger et offline-first princip.

Funktioner:

- Lokal database (Room)
- Offline adgang
- Mapper og organisering

Eksempler:

- Fisk
- Hurtig mad
- Færøske specialiteter

---

# Nearby Share

Lokal opskriftsdeling:

- Bluetooth/WiFi
- Modtager skal acceptere
- Ingen automatisk deling

---

# Sikkerhedsarkitektur

## Firebase Security Rules

Backend skal sikre:

- Ingen bruger kan oprette indhold på vegne af en anden bruger.
- Ejerskabsfelter kan ikke ændres efter oprettelse.
- Administrative handlinger kræver særlige rettigheder.

---

## Storage Security

Billeder skal:

- Være knyttet til korrekt bruger
- Beskyttes mod uautoriseret ændring
- Kun kunne slettes af ejeren eller autoriserede administratorer

---

## On-device Security

Følsomme lokale data beskyttes med:

- EncryptedSharedPreferences
- Android Keystore
- Biometrisk låsning

Understøtter:

- Fingeraftryk
- Ansigtsgodkendelse

---

## Privat vs Global

Opskrifter kan være private.

Private opskrifter skal forblive lokale, medmindre brugeren aktivt vælger deling.

---

## Netværkssikkerhed

Kommunikation skal bruge:

- TLS
- App integrity checks
- Sikre API-regler

---

# 🚀 Fremtidspotentiale

Arkitekturen er bygget med:

- Jetpack Compose
- Modulær struktur
- Mulighed for fremtidige funktioner

Muligheder:

- Madplanlægning
- Video-instruktioner
- Smartere køkkenassistance

---

# ⚖️ Rættarvísi

## Oversigt

Rættarvísi er en professionel platform til færøsk lovgivning.

Applikationen fungerer som et digitalt lovbibliotek optimeret til hurtig juridisk research.

---

# Funktioner

## Lovdatabase

Indeholder:

- Færøsk lovgivning
- Historiske dokumenter
- Strukturerede juridiske referencer

---

## Full-Text Search (FTS)

Søgesystem optimeret til færøske tegn:

- æ
- ø
- å
- á
- í
- ú
- ý
- ð

Funktioner:

- Hurtig lokal søgning
- Forslag under skrivning
- Effektiv indeksering

---

## Personlige værktøjer

Brugeren kan:

- Gemme bogmærker
- Skrive private noter
- Organisere juridisk materiale

Noter gemmes lokalt som standard.

---

# Sikkerhedsarkitektur

## Krypteret database

Brugerdata beskyttes med:

- SQLCipher
- AES-256 kryptering

---

## Android Keystore

Krypteringsnøgler beskyttes gennem:

- Android Keystore
- Hardware-baseret sikkerhed hvor tilgængeligt

---

## Local-first Privacy

Følgende forlader ikke enheden uden brugerens handling:

- Søgehistorik
- Noter
- Personlige samlinger

---

## Betaling

Abonnementer håndteres gennem:

- Google Play Billing Library

---

# 🏘️ Vinabýur

## Oversigt

Vinabýur er et digitalt nabolag inspireret af tilliden og hjælpsomheden i mindre lokalsamfund.

Målet er at skabe sikre digitale fællesskaber.

---

# Funktioner

## Lokalt Torv

Indhold:

- Lokale nyheder
- Småannoncer
- Mistede kæledyr
- Kommunale beskeder

---

## Nabohjælp

Brugere kan:

- Anmode om hjælp
- Tilbyde hjælp
- Opbygge tillid gennem handlinger

---

## Samkørsel

Lokal transportdeling med fokus på:

- Verificerede brugere
- Tillid
- Sikker kommunikation

---

## Kultur & Historier

Bevaring af:

- Historiske billeder
- Lokale historier
- Traditionelle opskrifter

---

## Senior Mode

Tilgængelighedsdesign:

- Stor tekst
- Høj kontrast
- Enkel navigation

---

# Security 3.0

## Identitets- og misbrugsbeskyttelse

Systemet kan anvende:

- Kontoverifikation
- Enhedssikkerhed
- Misbrugsforebyggelse

---

## Digitalt Håndtryk (Vouching)

Nye brugere kan starte med begrænset adgang.

Følsomme funktioner kan kræve:

- Tillidsbekræftelser
- Lokal community-godkendelse

---

## Geografisk sikkerhed

Lokationsfunktioner skal:

- Kræve samtykke
- Minimere dataindsamling
- Beskytte mod misbrug

---

## Beskyttelse af unge

Mulige funktioner:

- Forældre-linkede konti
- Alderspassende oplevelse
- Sikkerhedsnotifikationer

Alderskontrol skal:

- Respektere privatliv
- Minimere datalagring
- Ikke gemme biometriske data unødvendigt

---

## App Integrity

Systemet kan anvende:

- Play Integrity API
- Manipulationskontrol
- Anti-abuse mekanismer

Ingen løsning kan garantere fuldstændig blokering af alle bots, men målet er at reducere misbrug markant.

---

# Produktprincip

Alle Fjallrót-produkter skal kunne besvare:

> Beskytter dette brugeren, løser dette et reelt problem og styrker dette tilliden?

Hvis ikke, hører det ikke hjemme i Fjallrót.
