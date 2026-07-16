# 08 — Products

## Overview

This chapter contains the product architecture, functional overview, and security principles for Fjallrót applications.

Every Fjallrót product must follow the Fjallrót Standard:

- Privacy by default
- Security by design
- Data minimization
- Transparent user control
- Calm and respectful technology

---

# 🍲 Recipe Vault & Recipe Hub

## Overview

Recipe Vault (Android) and Recipe Hub (Web) are Fjallrót's culinary platforms.

They are designed as secure digital environments for storing, discovering, organizing, and sharing recipes.

The goal is to combine modern technology with the personal value of cooking traditions.

---

# Features

## Global Explore Feed

Users can discover culinary inspiration from around the world.

Features:

- Recipe discovery
- Search by title, chef, or ingredients
- Efficient pagination for fast loading
- Personalized exploration without invasive tracking

---

## Focus Mode — Kitchen Assistant

Recipe Vault provides a hands-free cooking experience.

Features:

### Voice Control

Users can navigate recipes using voice commands.

Supported languages:

- Faroese
- Danish
- English
- Norwegian
- Swedish

Voice processing should prioritize local processing whenever technically possible.

---

### Smart Timers

The application can detect time-based instructions:

Example:

> "Bake for 10 minutes"

The application can suggest creating a timer automatically.

---

### Cooking History

Users can mark recipes as completed:

- "I Cooked It"
- Add optional photos
- Keep personal cooking history

---

# Offline Vault & Organization

Recipe Vault follows an offline-first approach.

Features:

- Local recipe storage
- Offline access
- Personal folders
- Recipe organization

Examples:

- Fish
- Quick Meals
- Faroese Specialties

---

# Nearby Share

Recipes can be shared locally through peer-to-peer communication.

Requirements:

- Bluetooth/WiFi based transfer
- Receiver approval required
- No automatic sharing

---

# Security Architecture

## Database Security

User recipe data must be protected through:

- Encrypted local storage
- Secure authentication
- Access control rules

---

## Firebase Security Rules

The backend must enforce:

- Users cannot submit recipes as another user
- Ownership fields cannot be modified after creation
- Administrative actions require elevated permissions

---

## Storage Security

Recipe images must:

- Be associated with user ownership
- Use protected storage paths
- Prevent unauthorized modification or deletion

---

## Device Security

Sensitive local information should use:

- EncryptedSharedPreferences
- Android Keystore
- Biometric authentication

Supported:

- Fingerprint
- Face authentication

---

## Privacy Principles

Private recipes must remain local and should not leave the device unless the user explicitly chooses to share them.

Voice features should avoid unnecessary cloud recording.

---

# ⚖️ Rættarvísi

## Overview

Rættarvísi is a professional Faroese legal information platform.

The application provides fast access to legislation and legal references with a privacy-focused architecture.

---

# Features

## Legal Database

Includes:

- Faroese legislation
- Historical legal documents
- Structured legal references

Source integration may include official legal repositories.

---

## Full-Text Search

Optimized for Faroese language support:

Characters:

- æ
- ø
- å
- á
- í
- ú
- ý
- ð

Features:

- Instant search
- Suggestions while typing
- Fast local indexing

---

## Smart Filters

Users can filter by:

- Decade
- Year
- Legal category

---

## Personal Tools

Features:

- Bookmarks
- Private notes
- Personal collections

Personal notes remain local unless the user chooses otherwise.

---

## Sharing

Supported features:

- Export bookmarks
- Generate documents
- Share legal references
- Deep links to specific laws

---

# Security Architecture

## Encrypted Database

Local legal data and user information should use encrypted storage.

Example:

- SQLCipher
- AES-256 encryption

---

## Hardware Protected Keys

Encryption keys should use:

- Android Keystore
- Hardware-backed security where available

---

## Offline-First Privacy

The application should minimize external data transfer.

Protected:

- Search history
- Notes
- Personal bookmarks

---

## Advertising Privacy

Rættarvísi does not use advertising identifiers for user tracking.

---

# 🏘️ Vinabýur

## Overview

Vinabýur is a digital community platform inspired by the trust and cooperation found in traditional local communities.

The goal is to create safer digital neighborhoods.

---

# Features

## Local Square

Community information:

- Announcements
- Classifieds
- Lost and found
- Local updates

---

## Neighbor Aid

Users can:

- Request help
- Offer assistance
- Build community reputation

Examples:

- Borrow tools
- Help with physical tasks

---

## Carpooling

Trusted local transportation sharing.

Requirements:

- Verified users
- Controlled access
- Community trust mechanisms

---

## Culture & Stories

Preserving local heritage:

- Historical photos
- Stories
- Traditional recipes

---

## Marketplace

Local exchange:

- Buy
- Sell
- Lend

---

## Senior Mode

Accessibility mode:

- Larger typography
- Higher contrast
- Simplified interface

---

# Security Architecture

## Trusted Identity

Community access should be based on verified identity and responsible participation.

---

## Digital Handshake

New users may enter limited access mode.

Sensitive features can require:

- Community approval
- Trusted references
- Established reputation

---

## Device Security

Protection mechanisms may include:

- Device integrity checks
- Account protection
- Abuse prevention systems

---

## Geographic Safety

Location features should prioritize:

- User consent
- Privacy protection
- Minimal necessary collection

---

## Youth Protection

Features may include:

- Parent-linked accounts
- Age-appropriate experiences
- Safety controls

Age verification systems must respect privacy and avoid unnecessary data retention.

---

# Product Principle

Every Fjallrót product must answer:

> Does this technology protect people, solve a real problem, and strengthen trust?

If not, it does not belong in a Fjallrót product.
