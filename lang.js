const i18n = {
    pl: {
        tab_offer: "OFERTA",
        tab_wishlist: "SZUKAM",
        tab_calendar: "KALENDARZ",
        filter_all: "Wszystkie",
        filter_normal: "Zwykłe",
        filter_shiny: "Shiny",
        filter_costume: "Stroje",
        filter_background: "Tło",
        filter_local_bg: "Lokalne Tło",
        filter_gmax: "Gigantamax",
        filter_regional: "Regionalne",
        form_nickname: "Twój Nick w grze:",
        form_trade_type: "Typ Tradu:",
        form_i_want: "Co chcesz ode mnie (WANT):",
        form_i_offer: "Co Ty oferujesz (OFFER):",
        form_contact: "Kontakt (Discord/Telegram):",
        btn_save: "Zapisz rezerwację",
        legend_remote_free: "Dostępny Remote & Regular",
        legend_regular_free: "Dostępny tylko Regular",
        legend_busy: "Zajęty / Full",
        msg_success: "Rezerwacja wysłana! Pojawi się w kalendarzu za chwilę."
    },
    en: {
        tab_offer: "OFFER",
        tab_wishlist: "WISHLIST",
        tab_calendar: "CALENDAR",
        filter_all: "All",
        filter_normal: "Normal",
        filter_shiny: "Shiny",
        filter_costume: "Costume",
        filter_background: "Background",
        filter_local_bg: "Local Background",
        filter_gmax: "Gigantamax",
        filter_regional: "Regional (GO)",
        form_nickname: "Your In-game Nickname:",
        form_trade_type: "Trade Type:",
        form_i_want: "What you want (WANT):",
        form_i_offer: "What you offer (OFFER):",
        form_contact: "Contact (Discord/Telegram):",
        btn_save: "Save Booking",
        legend_remote_free: "Remote & Regular Available",
        legend_regular_free: "Only Regular Available",
        legend_busy: "Full / Busy",
        msg_success: "Booking submitted! It will appear in the calendar shortly."
    }
};

// 1. Kluczowa funkcja aktualizująca tekst na stronie
function updateInterfaceLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });
}

// 2. Funkcja zmieniająca język
function setLanguage(lang) {
    localStorage.setItem('selectedLang', lang); // Używamy konsekwentnie 'selectedLang'
    updateInterfaceLanguage(lang);
    
    // Wizualna zmiana przycisków PL/EN
    const btnPl = document.getElementById('lang-pl');
    const btnEn = document.getElementById('lang-en');
    
    if(btnPl && btnEn) {
        btnPl.classList.toggle('active', lang === 'pl');
        btnEn.classList.toggle('active', lang === 'en');
    }
}

// 3. Inicjalizacja przy starcie strony
document.addEventListener('DOMContentLoaded', () => {
    // Sprawdzamy ten sam klucz co w setLanguage
    const savedLang = localStorage.getItem('selectedLang') || 'pl';
    setLanguage(savedLang);
});
