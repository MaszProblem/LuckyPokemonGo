# LuckyPokemonGo - Trade & Calendar System

[Polski](#instrukcja-wdrożenia-pl) | [English](#deployment-guide-en)

---

## Instrukcja Wdrożenia (PL)

System do zarządzania wymianami w Pokémon GO, oparty na Google Sheets jako bazie danych, GitHub Pages jako hostingu oraz Discord Webhook dla powiadomień.

### 1. Przygotowanie Arkusza Google
1. **Skopiuj szablon arkusza**: Wybierz `Plik` -> `Utwórz kopię`.
2. **Zakładki**: Arkusz musi zawierać trzy zakładki: `wishlist`, `offer`, `calendar`.
3. **Uzupełnij dane**: Wpisz dane zgodnie z formatem nagłówków.
4. **Opublikuj arkusz**: `Plik` -> `Udostępnij` -> `Opublikuj w internecie` -> `Cały dokument (CSV)`.
5. **Zanotuj ID**: Pobierz `SPREADSHEET_ID` z adresu URL oraz numery `GID` dla każdej zakładki.

### 2. Konfiguracja Google Apps Script
1. W arkuszu wybierz `Rozszerzenia` -> `Apps Script`.
2. Wklej kod skryptu obsługującego `doPost` oraz powiadomienia Discord.
3. Uzupełnij `DISCORD_WEBHOOK_URL` oraz `DISCORD_USER_ID`.
4. **Wdrożenie**: `Wdróż` -> `Nowe wdrożenie` -> `Aplikacja sieciowa`.
5. **Uprawnienia**: `Execute as: Me`, `Who has access: Anyone`.
6. Skopiuj wygenerowany `Web App URL`.

### 3. Konfiguracja plików strony
1. W pliku `index.html` znajdź sekcję `CONFIGURATION`.
2. Wprowadź pobrane dane: `SPREADSHEET_ID`, `WISHLIST_GID`, `OFFER_GID`, `CALENDAR_GID`, `APPS_SCRIPT_URL`.
3. Zaktualizuj `regionalImageMap` dla niestandardowych form regionalnych.

---

## Deployment Guide (EN)

A Pokémon GO trade management system using Google Sheets as a database, GitHub Pages for hosting, and Discord Webhooks for automated notifications.

### 1. Google Sheets Setup
1. **Copy the template**: Select `File` -> `Make a copy`.
2. **Tabs**: Ensure the sheet contains `wishlist`, `offer`, and `calendar`.
3. **Format**: Follow the exact header structure for your data.
4. **Publish**: `File` -> `Share` -> `Publish to web` -> `Entire document (CSV)`.
5. **IDs**: Note your `SPREADSHEET_ID` from the URL and `GID` numbers for each tab.

### 2. Google Apps Script Configuration
1. Go to `Extensions` -> `Apps Script`.
2. Paste the backend script (handling `doPost` and Discord notifications).
3. Enter your `DISCORD_WEBHOOK_URL` and `DISCORD_USER_ID`.
4. **Deployment**: `Deploy` -> `New deployment` -> `Web app`.
5. **Permissions**: `Execute as: Me`, `Who has access: Anyone`.
6. Copy the `Web App URL`.

### 3. Website Configuration
1. Locate the `CONFIGURATION` section in `index.html`.
2. Input: `SPREADSHEET_ID`, `WISHLIST_GID`, `OFFER_GID`, `CALENDAR_GID`, `APPS_SCRIPT_URL`.

---

## Struktura Danych / Data Structure (CSV)

| Zakładka / Tab | Kolumny / Columns |
| :--- | :--- |
| **Offer** | `id, name, displayName, count, type, isShiny, costume, background, localBackground, gigantamax` |
| **Calendar** | `date, nickname, want1, want2, want3, offer1, offer2, offer3, contact, tradeType` |

---

## Technologie / Tech Stack
* **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
* **Backend**: Google Apps Script
* **Database**: Google Sheets
* **Notifications**: Discord Webhook API
