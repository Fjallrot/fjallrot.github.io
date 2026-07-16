# 03 – Security

## Fjallróts sikkerhedsstandard

Sikkerhed er en af Fjallróts kernekompetencer.

Dette kapitel definerer de tekniske og organisatoriske krav til kryptering, adgangskontrol, netværk, overvågning og beredskab.

Sikkerhed skal bygges ind fra begyndelsen og aldrig behandles som en efterfølgende funktion.

---

# Adgangskoder & Autentificering

## Argon2id

Alle adgangskoder skal lagres med en moderne password-hashingsalgoritme.

Krav:

- Argon2id anvendes som standard.
- Adgangskoder gemmes aldrig i klartekst.
- Password-hashes må aldrig kunne bruges som direkte login.

---

## Minimumskrav til adgangskoder

Systemer bør kræve:

- Minimum 12 tegn for almindelige brugerkonti.
- Minimum 16 tegn for administrative konti.

Længde prioriteres højere end komplekse regler.

---

## MFA (Multi-Factor Authentication)

Administrative konti skal beskyttes med MFA.

Eksempler:

- Hardware sikkerhedsnøgler (YubiKey/FIDO2)
- TOTP-applikationer

MFA skal tilbydes til brugere, hvor produktets risikoniveau kræver det.

---

# Kryptering

## Data at Rest

Følsomme brugerdata, backups og hemmeligheder skal krypteres.

Godkendte teknologier:

- AES-256-GCM
- ChaCha20-Poly1305

Krypteringsnøgler skal opbevares sikkert og adskilt fra de krypterede data.

---

## Data in Transit

Al kommunikation skal beskyttes med moderne TLS.

Krav:

- TLS 1.3 anbefales.
- TLS 1.2 accepteres kun med stærke cipher suites, hvor nødvendigt.

Ukrypteret HTTP må ikke anvendes til følsomme tjenester.

---

# HTTP-sikkerhedshoveder

Alle Fjallrót-websites og API'er skal anvende relevante sikkerhedsheaders.

## Content-Security-Policy (CSP)

Formål:

- Begrænse script-kørsel
- Reducere XSS-risiko

Inline scripts bør undgås og kun tillades med sikre nonces eller hashes.

---

## Strict-Transport-Security (HSTS)

Anbefalet konfiguration:

- `max-age=63072000; includeSubDomains; preload`

HSTS skal kun aktiveres med `includeSubDomains` og `preload`, når alle underdomæner understøtter permanent HTTPS.

## Øvrige sikkerhedsheaders

- **X-Content-Type-Options:** `nosniff`
- **Referrer-Policy:** `strict-origin-when-cross-origin` eller `no-referrer`
- **Permissions-Policy:** Deaktiver ubrugte browserfunktioner som kamera, mikrofon og geolocation.

---

# Netværk & Infrastruktur

- **SSH:** Kun adgang via kryptografiske Ed25519-nøgler. Password-login skal deaktiveres (`PasswordAuthentication no`).
- **Tailscale:** Administrativ adgang til servere og tjenester skal ske gennem et lukket VPN-netværk.
- **DNSSEC:** Skal aktiveres på Fjallrót-domæner, hvor infrastrukturen understøtter det.
- **Pi-hole:** Kan bruges i interne udviklingsnetværk til at blokere uønsket sporing og malware på DNS-niveau.

---

# Mailsikkerhed

Alle domæner, der sender e-mail, skal konfigurere relevante beskyttelser:

- **SPF:** Definerer, hvilke servere der må sende e-mail på vores vegne.
- **DKIM:** Signerer udgående e-mails kryptografisk.
- **DMARC:** Skal gradvist håndhæves og som mål anvende `p=reject`, når legitime afsendere er valideret.

---

# Incident Response & Backups

## Backup-strategi

Vi følger 3-2-1-princippet:

- Mindst tre kopier af data
- To forskellige medietyper
- Én krypteret kopi offline eller off-site

Backups skal testes regelmæssigt.

## Beredskabsplan

Hvis et sikkerhedsbrud opdages, skal vi:

1. Isolere det berørte system.
2. Identificere bruddets omfang og årsag.
3. Beskytte berørte brugere og overholde gældende underretningsfrister.
4. Dokumentere hændelsen og forbedre vores beskyttelse.
5. Offentliggøre relevante konklusioner, når det kan ske uden at skabe yderligere risiko.

---

# Responsible Disclosure

Vi byder ekstern hjælp velkommen.

Alle domæner skal have en synlig `/.well-known/security.txt`, som beskriver, hvordan sikkerhedsforskere kan rapportere sårbarheder via `security@fjallrot.com`.

Vi truer ikke med retslige skridt mod forskere, der handler i god tro og følger vores retningslinjer for ansvarlig rapportering.
