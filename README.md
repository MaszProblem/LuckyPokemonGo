[PL]
LuckyPokemonGo - Trade & Calendar System
System do zarządzania wymianami w Pokémon GO, oparty na Google Sheets jako bazie danych, GitHub Pages jako hostingu oraz Discord Webhook dla powiadomień.

Funkcje
Dynamiczna Oferta i Wishlista: Synchronizacja z Google Sheets.

Kalendarz Rezerwacji: System wyboru terminów z podziałem na Remote/Regular Trade.

Autouzupełnianie: Podpowiedzi nazw Pokémonów z rozróżnieniem form Shiny (*).

Powiadomienia: Wysyłka szczegółów rezerwacji na kanał Discord z oznaczeniem użytkownika.

Instrukcja Wdrożenia
1. Przygotowanie Arkusza Google
Skopiuj szablon arkusza (Plik -> Utwórz kopię).

Arkusz musi zawierać zakładki: wishlist, offer, calendar.

Uzupełnij dane w zakładkach zgodnie z formatem nagłówków.

Opublikuj arkusz: Plik -> Udostępnij -> Opublikuj w internecie -> Cały dokument (CSV).

Zanotuj SPREADSHEET_ID (z adresu URL arkusza) oraz numery GID dla każdej zakładki.

2. Konfiguracja Google Apps Script
W arkuszu wybierz Rozszerzenia -> Apps Script.

Wklej kod skryptu obsługującego doPost oraz powiadomienia Discord.

W kodzie uzupełnij DISCORD_WEBHOOK_URL oraz DISCORD_USER_ID.

Wdróż skrypt: Wdróż -> Nowe wdrożenie -> Aplikacja sieciowa.

Ustaw dostęp: Execute as: Me, Who has access: Anyone.

Skopiuj wygenerowany Web App URL.

3. Konfiguracja plików strony
W pliku index.html odszukaj sekcję CONFIGURATION.

Wprowadź pobrane wcześniej dane:

SPREADSHEET_ID

WISHLIST_GID, OFFER_GID, CALENDAR_GID

APPS_SCRIPT_URL

Zaktualizuj regionalImageMap, jeśli posiadasz niestandardowe formy regionalne.

4. Hosting na GitHub Pages
Prześlij pliki (index.html, folder img) do repozytorium GitHub.

Wejdź w Settings -> Pages.

W sekcji Build and deployment wybierz gałąź main i folder /(root).

Strona będzie dostępna pod adresem https://nazwa_użytkownika.github.io/nazwa_repozytorium/.

Struktura Danych (CSV)
Zakładka Offer:
id, name, displayName, count, type, isShiny, costume, background, localBackground, gigantamax

Zakładka Calendar:
date, nickname, want1, want2, want3, offer1, offer2, offer3, contact, tradeType

Technologie
Frontend: HTML5, CSS3, JavaScript (Vanilla).

Backend: Google Apps Script.

Baza danych: Google Sheets.

Powiadomienia: Discord Webhook API.


**Autor:** GlupekzRivii  
**Technologia:** HTML / CSS / JavaScript (GitHub Pages)
**Użyto AI Gemini**



--------------------------------------------------------------------------------

[EN]
Oto techniczna struktura pliku README.md w wersji angielskiej. Została przygotowana w sposób konkretny i zwięzły, zgodnie z Twoją prośbą.

LuckyPokemonGo - Trade & Calendar System
A Pokémon GO trade management system using Google Sheets as a database, GitHub Pages for hosting, and Discord Webhooks for automated notifications.

Features
Dynamic Offer & Wishlist: Real-time synchronization with Google Sheets.

Booking Calendar: Date selection system with Remote and Regular Trade availability tracking.

Autocomplete: Pokémon name suggestions with Shiny (*) form differentiation.

Notifications: Automated reservation details sent to Discord with direct user mentions.

Deployment Guide
1. Google Sheets Setup
Copy the provided spreadsheet template (File -> Make a copy).

Ensure the spreadsheet contains three tabs: wishlist, offer, and calendar.

Fill in your data following the exact header formats.

Publish the sheet: File -> Share -> Publish to web -> Entire document (CSV).

Note your SPREADSHEET_ID (from the URL) and the GID numbers for each tab.

2. Google Apps Script Configuration
In your spreadsheet, go to Extensions -> Apps Script.

Paste the provided backend script (handling doPost and Discord notifications).

Enter your DISCORD_WEBHOOK_URL and DISCORD_USER_ID in the configuration section.

Deploy the script: Deploy -> New deployment -> Web app.

Set permissions: Execute as: Me, Who has access: Anyone.

Copy the generated Web App URL.

3. Website Configuration
Locate the CONFIGURATION section in your index.html file.

Input the following data:

SPREADSHEET_ID

WISHLIST_GID, OFFER_GID, CALENDAR_GID

APPS_SCRIPT_URL

Update the regionalImageMap for any custom regional forms.

4. GitHub Pages Hosting
Upload your files (index.html, img folder) to a GitHub repository.

Navigate to Settings -> Pages.

Under Build and deployment, select the main branch and /(root) folder.

The site will be live at https://your_username.github.io/your_repo_name/.

Data Structure (CSV)
Offer Tab:
id, name, displayName, count, type, isShiny, costume, background, localBackground, gigantamax

Calendar Tab:
date, nickname, want1, want2, want3, offer1, offer2, offer3, contact, tradeType

Tech Stack
Frontend: HTML5, CSS3, JavaScript (Vanilla).

Backend: Google Apps Script.

Database: Google Sheets.

Notifications: Discord Webhook API.
---

**Author:** GlupekzRivii  
**Technology:** HTML / CSS / JavaScript (GitHub Pages)
**AI Gemini**
