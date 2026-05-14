[PL]
# 🍀 Lista Wymian Lucky Trade - GlupekzRivii

Strona internetowa służąca do prezentacji listy poszukiwanych Pokémonów w grze Pokémon GO. Narzędzie automatycznie generuje profesjonalne filtry (search strings), które możesz wkleić bezpośrednio w wyszukiwarkę w grze.

---

## 🛠️ Jak edytować listę?

Aktualizacja strony jest bardzo prosta i nie wymaga wiedzy programistycznej. Cała konfiguracja znajduje się w pliku `index.html`.

### Instrukcja krok po kroku:

1.  **Otwórz plik:** Zaloguj się na GitHub, wejdź do swojego repozytorium i kliknij w plik `index.html`.
2.  **Tryb edycji:** Kliknij ikonę ołówka (**Edit this file**) w prawym górnym rogu.
3.  **Znajdź sekcję list:** Zjedź do okolic **155. linii kodu**. Zobaczysz tam sekcję zaczynającą się od:
    `// LISTY POKEMONÓW`.
4.  **Wprowadź zmiany:** 
    - Nazwy Pokémonów wpisuj w nawiasach `[ ]`.
    - Każdą nazwę umieść w cudzysłowie, np. `"pikachu"`.
    - Rozdzielaj nazwy przecinkami.
    - Używaj **angielskich nazw** Pokémonów.
5.  **Zapisz zmiany:** Po zakończeniu edycji zjedź na sam dół strony i kliknij zielony przycisk **Commit changes**. Twoja strona zaktualizuje się automatycznie w ciągu około minuty.

---

## 📝 Zasady wpisywania nazw

Nasz system jest inteligentny i automatycznie dopasowuje obrazki oraz filtry:

*   **Zwykłe Pokémony:** Wpisz po prostu nazwę, np. `"mewtwo"`.
*   **Formy specjalne (Obrazek vs Gra):**
    - Jeśli chcesz, aby wyświetlał się obrazek konkretnej formy (np. Palkia na czterech nogach), wpisz `"palkia-origin"`. 
    - System wyświetli epicki obrazek, ale w polu "Kopiuj" wygeneruje czystą nazwę `"palkia"`, aby gra mogła ją poprawnie wyszukać.
    - Podobnie dla Landorusa: użyj `"landorus-therian"`.
*   **Unowny:** W sekcji Unownów wpisuj tylko literki, np. `"b"`, `"x"`, `"z"`.
*   **Shiny:** W sekcjach oznaczonych jako "Shiny", system automatycznie pobierze błyszczące grafiki – nie musisz dopisywać słowa "shiny" przed nazwą.

---

## ✨ Funkcje strony

*   **Automatyczne Grafiki:** Nie musisz szukać linków do zdjęć. Skrypt sam pobiera je z oficjalnych baz na podstawie wpisanej nazwy.
*   **Inteligentne Filtry:** Każda sekcja generuje unikalny kod do gry (np. dodaje `@special` dla ataków legacy lub `!traded` dla nowych wymian).
*   **Szybkie Kopiowanie:** Przycisk "Kopiuj" natychmiast zapisuje filtr w schowku Twojego telefonu lub komputera.
*   **Responsywność:** Strona wygląda dobrze zarówno na komputerze, jak i na ekranie smartfona podczas gry.

---

**Autor:** GlupekzRivii  
**Technologia:** HTML / CSS / JavaScript (GitHub Pages)
**Użyto AI Gemini**



--------------------------------------------------------------------------------

[EN]
# 🍀 Lucky Trade Wishlist - GlupekzRivii

A web-based tool designed to showcase your wanted Pokémon in Pokémon GO. It automatically generates professional search strings that you can copy and paste directly into the game's search bar.

---

## 🛠️ How to Edit Your List

Updating your page is very simple and doesn't require any programming knowledge. Everything is configured within the `index.html` file.

### Step-by-Step Instructions:

1.  **Open the file:** Log in to GitHub, go to your repository, and click on the `index.html` file.
2.  **Edit mode:** Click the pencil icon (**Edit this file**) in the top right corner.
3.  **Find the list section:** Scroll down to approximately **line 155**. Look for the section starting with:
    `// LISTY POKEMONÓW` (or `// POKEMON LISTS`).
4.  **Make changes:** 
    - Enter Pokémon names inside the brackets `[ ]`.
    - Place each name in quotes, e.g., `"pikachu"`.
    - Separate names with commas.
    - Always use **English Pokémon names**.
5.  **Save changes:** Once finished, scroll to the bottom and click the green **Commit changes** button. Your website will update automatically within about a minute.

---

## 📝 Naming Conventions

The system is smart and automatically handles images and search filters:

*   **Standard Pokémon:** Just enter the name, e.g., `"mewtwo"`.
*   **Special Forms (Image vs. Game Search):**
    - To display a specific form (e.g., Origin Forme Palkia), enter `"palkia-origin"`.
    - The system will show the correct artwork but will generate a clean name (`"palkia"`) in the copy-paste string so the game can find it correctly.
    - Same applies to Landorus: use `"landorus-therian"` for the four-legged form.
*   **Unowns:** In the Unown section, just enter the letters, e.g., `"b"`, `"x"`, `"z"`.
*   **Shiny:** In sections labeled as "Shiny", the system automatically fetches shiny sprites – you don't need to add the word "shiny" before the name.

---

## ✨ Features

*   **Automatic Sprites:** No need to search for image links. The script fetches them automatically based on the name provided.
*   **Smart Search Strings:** Each section generates a unique in-game code (e.g., adding `@special` for legacy moves or `!traded` for new trades).
*   **One-Tap Copy:** The "Copy" button instantly saves the filter to your phone or computer's clipboard.
*   **Fully Responsive:** The page is optimized for both desktop and mobile screens for easy use while playing.

---

**Author:** GlupekzRivii  
**Technology:** HTML / CSS / JavaScript (GitHub Pages)
**AI Gemini**
