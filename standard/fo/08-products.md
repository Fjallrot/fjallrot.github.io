# 08 – Vørur (Products)

## Yvirlit

Hetta kapitlið lýsir Fjallróts forritum, teirra funktiónum og teknisku trygdarkrøvum.

Øll Fjallrót-forrit fylgja Fjallrót-standardinum:

- Privatlív sum grundregla
- Trygd bygd inn frá byrjan
- Dátuminking
- Brúkarastýrd dáta
- Virðing fyri brúkaranum

---

# 🍲 Recipe Vault & Recipe Hub

## Yvirlit

Recipe Vault (Android) og Recipe Hub (Web) eru Fjallróts vørur innan matgerð.

Skipanin er gjørd sum ein trygg talgild goymsla fyri persónligar matuppskriftir, samstundis sum hon gevur møguleika fyri at deila og finna nýggjan íblástur.

---

# Høvuðsfunktiónir

## Global Explore Feed

Brúkarar kunnu finna íblástur frá kokkum og matáhugaðum kring heimin.

Funktiónir:

- Uppskriftar-uppdaging
- Søking eftir heiti, kokki ella rávørum
- Effektiv innlesing við pagination

---

## Focus Mode – Tín hjálparfólk í køkinum

Recipe Vault hjálpir brúkaranum meðan matgerðin fer fram.

### Raddarstýring

Stuðul fyri:

- Føroyskt
- Danskt
- Enskt
- Norskt
- Svenskt

Møguligt mál:

- Lokal raddarviðgerð har tað ber til
- Ongin óneyðug upptøka ella goymsla av rødd

---

## Smart Timer

Appin kann kenna aftur tíðartilvísingar:

Dømi:

> "Kóka í 10 minuttir"

og leggja til uppskot um sjálvvirkandi ur.

---

## "I Cooked It"

Brúkarar kunnu:

- Merkja eina uppskrift sum gjørda
- Deila mynd av úrslitinum
- Byggja persónliga matgerðarsøgu

---

# Offline Vault

Recipe Vault fylgir einum offline-first mynstri.

Funktiónir:

- Lokal goymsla
- Tilgongd uttan internet
- Mappur og skipan

Dømi:

- Fiskur
- Skjótur matur
- Føroyskir rættir

---

# Nearby Share

Lokal deiling av uppskriftum:

- Bluetooth/WiFi
- Móttakari skal góðkenna
- Eingin sjálvvirkandi deiling

---

# Trygdararkitektur

## Firebase Security Rules

Backend skal tryggja:

- Ein brúkari kann ikki senda inn sum annar brúkari
- Eigara-felt kunnu ikki broytast óheimilað
- Admin-rættindi krevja serliga heimild

---

## Storage Trygd

Myndir skulu:

- Vera knýttar til rættan eigara
- Goymast við tryggum slóðum
- Verja móti óheimilaðari broyting og striking

---

## On-Device Trygd

Viðkvæm dáta skulu verjast við:

- EncryptedSharedPreferences
- Android Keystore
- Biometriskari læsing

---

# ⚖️ Rættarvísi

## Yvirlit

Rættarvísi er eitt talgilt føroyskt lógarsavn.

Endamálið er at gera føroyska lóggávu lætta at finna og brúka.

---

# Høvuðsfunktiónir

## Lógardátugrunnur

Skipanin kann innihalda:

- Føroyska lóggávu
- Søgulig skjøl
- Skipaðar lógartilvísingar

---

## Full-Text Search (FTS)

Søkimotorur optimeraður fyri føroyskt mál:

Stuðul fyri:

æ, ø, å, á, í, ú, ý, ð

Funktiónir:

- Beinleiðis leiting
- Uppskot meðan skrivað verður
- Skjótt lokalt indeks

---

## Persónlig amboð

Brúkarin kann:

- Goyma bókamerki
- Skriva privat notat
- Skipað sítt egna arbeiðsumhvørvi

Notat skulu sum standard vera lokal á eindini.

---

# Trygdararkitektur

## Krypterað goymsla

Viðkvæm lokal dáta skulu brúka:

- SQLCipher
- AES-256 kryptering

---

## Android Keystore

Krypteringslyklar skulu verjast við:

- Android Keystore
- Hardware-vernd, tá tøkt

---

## Privacy-first

Skipanin skal ikki óneyðugt senda:

- Leitingar
- Notat
- Persónlig arbeiðsgongd

---

# 🏘️ Vinabýur

## Yvirlit

Vinabýur er eitt talgilt grannalag, sum roynir at endurskapa tryggleikan og hjálpsemið frá smærri samfeløgum í einari nútímans talgildari verð.

---

# Høvuðsfunktiónir

## Lokalt Torv

- Tíðindi
- Smálýsingar
- Borturblivin djór
- Kommunal boð

---

## Grannahjálp

Brúkarar kunnu:

- Biðja um hjálp
- Bjóða hjálp
- Byggja álit gjøgnum gerðir

---

## Samkoyring

Tryggari lokal koyring við:

- Váttaðum brúkarum
- Samfelagsáliti
- Ábyrgdarfullari deiling

---

## Mentan & søgur

Varðveiting av:

- Søgu
- Myndum
- Føroyskum siðum

---

## Senior Mode

Ein einfaldari brúkaraflata við:

- Stórari skrift
- Høgum kontrasti
- Einfaldari navigatión

---

# Trygd 3.0

## Samleikavernd

Skipanin kann brúka:

- Váttaðar kontur
- Eindavernd
- Misnýtslu-vernd

---

## Digital Handshake

Nýggir brúkarar kunnu byrja við avmarkaðum atgongd.

Viðkvæmar funktiónir kunnu krevja:

- Váttan frá øðrum brúkarum
- Uppbygt álit

---

## Geografisk trygd

Staðfesting av øki skal:

- Virða privatlív
- Byggja á samtykki
- Bara brúka neyðugar upplýsingar

---

## Vernd av ungum

Møguligar skipanir:

- Foreldra-knýttar kontur
- Aldursviðkomandi upplivingar
- Tryggari samskifti

Aldursmeting skal gerast við:

- Tydiligum samtykki
- Minst møguligari dátugoymslu

---

# Produkt-reglan

Øll Fjallrót-vørur skulu svara hesum spurningi:

> Verjir hetta brúkaran, loysir hetta ein veruligan trupulleika og styrkir hetta álitið?

Um svarið er nei, hoyrir tað ikki heima í Fjallrót.
