/**
 * BLACK PANTHER CLUB — Language Engine
 * 9 languages: IT, EN, ES, FR, DE, RU, PL, PT, UK
 */

const LANGUAGES = [
  { code: 'it', label: 'Italiano',   flag: '🇮🇹' },
  { code: 'en', label: 'English',    flag: '🇬🇧' },
  { code: 'es', label: 'Español',    flag: '🇪🇸' },
  { code: 'fr', label: 'Français',   flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch',    flag: '🇩🇪' },
  { code: 'ru', label: 'Русский',    flag: '🇷🇺' },
  { code: 'pl', label: 'Polski',     flag: '🇵🇱' },
  { code: 'pt', label: 'Português',  flag: '🇧🇷' },
  { code: 'uk', label: 'Українська', flag: '🇺🇦' },
];

const T = {

  /* ── NAV ── */
  nav_home:       { it:'Home', en:'Home', es:'Inicio', fr:'Accueil', de:'Startseite', ru:'Главная', pl:'Strona główna', pt:'Início', uk:'Головна' },
  nav_calendar:   { it:'Calendario DJ', en:'DJ Calendar', es:'Calendario DJ', fr:'Calendrier DJ', de:'DJ Kalender', ru:'Календарь DJ', pl:'Kalendarz DJ', pt:'Calendário DJ', uk:'Календар DJ' },
  nav_gallery:    { it:'Foto / Gallery', en:'Photo / Gallery', es:'Fotos / Galería', fr:'Photos / Galerie', de:'Fotos / Galerie', ru:'Фото / Галерея', pl:'Zdjęcia / Galeria', pt:'Fotos / Galeria', uk:'Фото / Галерея' },
  nav_djs:        { it:'I Nostri DJ', en:'Our DJs', es:'Nuestros DJs', fr:'Nos DJs', de:'Unsere DJs', ru:'Наши DJ', pl:'Nasi DJs', pt:'Nossos DJs', uk:'Наші DJ' },
  nav_danceteam:  { it:'Dance Team', en:'Dance Team', es:'Equipo de Baile', fr:'Équipe de Danse', de:'Tanzteam', ru:'Танц Команда', pl:'Zespół Taneczny', pt:'Equipe de Dança', uk:'Танцювальна Команда' },
  nav_flayer:     { it:'Flayer', en:'Flyers', es:'Folletos', fr:'Flyers', de:'Flyer', ru:'Флаеры', pl:'Ulotki', pt:'Flyers', uk:'Флаєри' },
  nav_partner:    { it:'Partner', en:'Partners', es:'Socios', fr:'Partenaires', de:'Partner', ru:'Партнёры', pl:'Partnerzy', pt:'Parceiros', uk:'Партнери' },
  nav_contatti:   { it:'Contatti', en:'Contact', es:'Contacto', fr:'Contact', de:'Kontakt', ru:'Контакты', pl:'Kontakt', pt:'Contato', uk:'Контакти' },
  nav_login:      { it:'Register / Login', en:'Register / Login', es:'Registro / Login', fr:'Inscription / Connexion', de:'Registrieren / Login', ru:'Регистрация / Вход', pl:'Rejestracja / Login', pt:'Registro / Login', uk:'Реєстрація / Вхід' },
  nav_events:     { it:'Events', en:'Events', es:'Eventos', fr:'Événements', de:'Events', ru:'События', pl:'Wydarzenia', pt:'Eventos', uk:'Події' },
  nav_about:      { it:'About', en:'About', es:'Sobre Nosotros', fr:'À Propos', de:'Über Uns', ru:'О нас', pl:'O Nas', pt:'Sobre Nós', uk:'Про Нас' },
  nav_admin:      { it:'Admin', en:'Admin', es:'Admin', fr:'Admin', de:'Admin', ru:'Админ', pl:'Admin', pt:'Admin', uk:'Адмін' },

  /* ── INDEX ── */
  hero_label:     { it:'Black Panther Club · 3DX Virtual World', en:'Black Panther Club · 3DX Virtual World', es:'Black Panther Club · Mundo Virtual 3DX', fr:'Black Panther Club · Monde Virtuel 3DX', de:'Black Panther Club · 3DX Virtuelle Welt', ru:'Black Panther Club · Виртуальный мир 3DX', pl:'Black Panther Club · Wirtualny Świat 3DX', pt:'Black Panther Club · Mundo Virtual 3DX', uk:'Black Panther Club · Віртуальний Світ 3DX' },
  hero_title:     { it:'BLACK PANTHER', en:'BLACK PANTHER', es:'BLACK PANTHER', fr:'BLACK PANTHER', de:'BLACK PANTHER', ru:'BLACK PANTHER', pl:'BLACK PANTHER', pt:'BLACK PANTHER', uk:'BLACK PANTHER' },
  hero_sub:       { it:'Il Club Virtuale più esclusivo di 3DX', en:'The most exclusive virtual club in 3DX', es:'El club virtual más exclusivo de 3DX', fr:'Le club virtuel le plus exclusif de 3DX', de:'Der exklusivste virtuelle Club in 3DX', ru:'Самый эксклюзивный виртуальный клуб в 3DX', pl:'Najbardziej ekskluzywny wirtualny klub w 3DX', pt:'O clube virtual mais exclusivo do 3DX', uk:'Найексклюзивніший віртуальний клуб у 3DX' },
  hero_party:     { it:'Ogni Lunedì · 20:00 CET', en:'Every Monday · 8:00 PM CET', es:'Cada Lunes · 20:00 CET', fr:'Chaque Lundi · 20h00 CET', de:'Jeden Montag · 20:00 Uhr MEZ', ru:'Каждый Понедельник · 20:00 CET', pl:'Każdy Poniedziałek · 20:00 CET', pt:'Toda Segunda · 20:00 CET', uk:'Щопонеділка · 20:00 CET' },
  hero_btn1:      { it:'Entra nel Club', en:'Enter the Club', es:'Entra al Club', fr:'Rejoindre le Club', de:'Club betreten', ru:'Войти в клуб', pl:'Wejdź do Klubu', pt:'Entrar no Clube', uk:'Увійти до Клубу' },
  hero_btn2:      { it:'Calendario DJ', en:'DJ Calendar', es:'Calendario DJ', fr:'Calendrier DJ', de:'DJ Kalender', ru:'Календарь DJ', pl:'Kalendarz DJ', pt:'Calendário DJ', uk:'Календар DJ' },
  section_about:  { it:'Chi Siamo', en:'About Us', es:'Quiénes Somos', fr:'Qui Sommes-Nous', de:'Über Uns', ru:'О нас', pl:'O Nas', pt:'Sobre Nós', uk:'Про Нас' },
  about_text:     { it:'Black Panther è il club virtuale più esclusivo di 3DX. Ogni lunedì sera ti aspettiamo per una notte di musica, ballo e divertimento senza confini.', en:'Black Panther is the most exclusive virtual club in 3DX. Every Monday evening we welcome you for a night of music, dance and unlimited fun.', es:'Black Panther es el club virtual más exclusivo de 3DX. Cada lunes por la noche te esperamos para una noche de música, baile y diversión sin límites.', fr:'Black Panther est le club virtuel le plus exclusif de 3DX. Chaque lundi soir, nous vous accueillons pour une nuit de musique, de danse et de plaisir sans limites.', de:'Black Panther ist der exklusivste virtuelle Club in 3DX. Jeden Montagabend heißen wir Sie zu einer Nacht voller Musik, Tanz und grenzenlosem Spaß willkommen.', ru:'Black Panther — самый эксклюзивный виртуальный клуб в 3DX. Каждый понедельник вечером мы ждём вас на ночь музыки, танцев и веселья.', pl:'Black Panther to najbardziej ekskluzywny wirtualny klub w 3DX. Każdego poniedziałku wieczorem zapraszamy na noc muzyki, tańca i nieograniczonej zabawy.', pt:'Black Panther é o clube virtual mais exclusivo do 3DX. Toda segunda-feira à noite te esperamos para uma noite de música, dança e diversão sem limites.', uk:'Black Panther — найексклюзивніший віртуальний клуб у 3DX. Щопонеділка ввечері ми чекаємо на вас на ніч музики, танців та безмежного веселощів.' },

  /* ── CALENDAR ── */
  cal_label:      { it:'Black Panther Club · 2026', en:'Black Panther Club · 2026', es:'Black Panther Club · 2026', fr:'Black Panther Club · 2026', de:'Black Panther Club · 2026', ru:'Black Panther Club · 2026', pl:'Black Panther Club · 2026', pt:'Black Panther Club · 2026', uk:'Black Panther Club · 2026' },
  cal_title:      { it:'Calendario DJ', en:'DJ Calendar', es:'Calendario DJ', fr:'Calendrier DJ', de:'DJ Kalender', ru:'Календарь DJ', pl:'Kalendarz DJ', pt:'Calendário DJ', uk:'Календар DJ' },
  cal_live:       { it:'Live dal NAS', en:'Live from NAS', es:'En vivo desde NAS', fr:'En direct depuis NAS', de:'Live vom NAS', ru:'Прямо с NAS', pl:'Na żywo z NAS', pt:'Ao vivo do NAS', uk:'Наживо з NAS' },
  cal_offline:    { it:'NAS non raggiungibile · Dati in cache', en:'NAS unreachable · Cached data', es:'NAS no disponible · Datos en caché', fr:'NAS inaccessible · Données en cache', de:'NAS nicht erreichbar · Gecachte Daten', ru:'NAS недоступен · Кэшированные данные', pl:'NAS niedostępny · Dane z pamięci podręcznej', pt:'NAS inacessível · Dados em cache', uk:'NAS недоступний · Кешовані дані' },
  cal_refresh:    { it:'Aggiorna', en:'Refresh', es:'Actualizar', fr:'Actualiser', de:'Aktualisieren', ru:'Обновить', pl:'Odśwież', pt:'Atualizar', uk:'Оновити' },
  cal_all:        { it:'Tutti', en:'All', es:'Todos', fr:'Tous', de:'Alle', ru:'Все', pl:'Wszystkie', pt:'Todos', uk:'Всі' },
  cal_free_filter:{ it:'Con Slot Liberi', en:'Free Slots', es:'Con Plazas Libres', fr:'Créneaux Libres', de:'Freie Slots', ru:'Свободные слоты', pl:'Wolne sloty', pt:'Com Vagas Livres', uk:'Вільні слоти' },
  cal_upcoming:   { it:'Prossimi', en:'Upcoming', es:'Próximos', fr:'À venir', de:'Bevorstehend', ru:'Предстоящие', pl:'Nadchodzące', pt:'Próximos', uk:'Майбутні' },
  cal_free:       { it:'Slot Liberi', en:'Free Slots', es:'Plazas Libres', fr:'Créneaux Libres', de:'Freie Slots', ru:'Свободные', pl:'Wolne sloty', pt:'Vagas Livres', uk:'Вільні' },
  cal_booked:     { it:'Slot Occupati', en:'Booked Slots', es:'Plazas Ocupadas', fr:'Créneaux Réservés', de:'Belegte Slots', ru:'Занятые', pl:'Zajęte sloty', pt:'Vagas Ocupadas', uk:'Зайняті' },
  cal_events:     { it:'Eventi', en:'Events', es:'Eventos', fr:'Événements', de:'Events', ru:'События', pl:'Wydarzenia', pt:'Eventos', uk:'Події' },
  cal_slot_free:  { it:'Libero', en:'Free', es:'Libre', fr:'Libre', de:'Frei', ru:'Свободно', pl:'Wolny', pt:'Livre', uk:'Вільний' },
  cal_legend_free:{ it:'Slot Libero', en:'Free Slot', es:'Plaza Libre', fr:'Créneau Libre', de:'Freier Slot', ru:'Свободный слот', pl:'Wolny slot', pt:'Vaga Livre', uk:'Вільний слот' },
  cal_legend_book:{ it:'Slot Occupato', en:'Booked Slot', es:'Plaza Ocupada', fr:'Créneau Réservé', de:'Belegter Slot', ru:'Занятый слот', pl:'Zajęty slot', pt:'Vaga Ocupada', uk:'Зайнятий слот' },

  /* ── DJS ── */
  djs_label:      { it:'Black Panther Club · 3DX Virtual World', en:'Black Panther Club · 3DX Virtual World', es:'Black Panther Club · Mundo Virtual 3DX', fr:'Black Panther Club · Monde Virtuel 3DX', de:'Black Panther Club · 3DX Virtuelle Welt', ru:'Black Panther Club · Виртуальный мир 3DX', pl:'Black Panther Club · Wirtualny Świat 3DX', pt:'Black Panther Club · Mundo Virtual 3DX', uk:'Black Panther Club · Віртуальний Світ 3DX' },
  djs_title:      { it:'I Nostri DJ', en:'Our DJs', es:'Nuestros DJs', fr:'Nos DJs', de:'Unsere DJs', ru:'Наши DJ', pl:'Nasi DJs', pt:'Nossos DJs', uk:'Наші DJ' },
  djs_rock_title: { it:'Band Rock', en:'Rock Bands', es:'Bandas de Rock', fr:'Groupes Rock', de:'Rock Bands', ru:'Рок группы', pl:'Zespoły Rockowe', pt:'Bandas de Rock', uk:'Рок Гурти' },

  /* ── DANCE TEAM ── */
  dance_label:    { it:'Black Panther Club · 3DX Virtual World', en:'Black Panther Club · 3DX Virtual World', es:'Black Panther Club · Mundo Virtual 3DX', fr:'Black Panther Club · Monde Virtuel 3DX', de:'Black Panther Club · 3DX Virtuelle Welt', ru:'Black Panther Club · Виртуальный мир 3DX', pl:'Black Panther Club · Wirtualny Świat 3DX', pt:'Black Panther Club · Mundo Virtual 3DX', uk:'Black Panther Club · Віртуальний Світ 3DX' },
  dance_title:    { it:'Dance Team', en:'Dance Team', es:'Equipo de Baile', fr:'Équipe de Danse', de:'Tanzteam', ru:'Танц Команда', pl:'Zespół Taneczny', pt:'Equipe de Dança', uk:'Танцювальна Команда' },

  /* ── GALLERY ── */
  gallery_label:  { it:'Black Panther Club · 3DX Virtual World', en:'Black Panther Club · 3DX Virtual World', es:'Black Panther Club · Mundo Virtual 3DX', fr:'Black Panther Club · Monde Virtuel 3DX', de:'Black Panther Club · 3DX Virtuelle Welt', ru:'Black Panther Club · Виртуальный мир 3DX', pl:'Black Panther Club · Wirtualny Świat 3DX', pt:'Black Panther Club · Mundo Virtual 3DX', uk:'Black Panther Club · Віртуальний Світ 3DX' },
  gallery_title:  { it:'Foto & Gallery', en:'Photos & Gallery', es:'Fotos y Galería', fr:'Photos & Galerie', de:'Fotos & Galerie', ru:'Фото и Галерея', pl:'Zdjęcia i Galeria', pt:'Fotos e Galeria', uk:'Фото та Галерея' },

  /* ── FLAYER ── */
  flayer_label:   { it:'Black Panther Club · 3DX Virtual World', en:'Black Panther Club · 3DX Virtual World', es:'Black Panther Club · Mundo Virtual 3DX', fr:'Black Panther Club · Monde Virtuel 3DX', de:'Black Panther Club · 3DX Virtuelle Welt', ru:'Black Panther Club · Виртуальный мир 3DX', pl:'Black Panther Club · Wirtualny Świat 3DX', pt:'Black Panther Club · Mundo Virtual 3DX', uk:'Black Panther Club · Віртуальний Світ 3DX' },
  flayer_title:   { it:'Flayer & Locandine', en:'Flyers & Posters', es:'Folletos y Carteles', fr:'Flyers & Affiches', de:'Flyer & Plakate', ru:'Флаеры и Постеры', pl:'Ulotki i Plakaty', pt:'Flyers e Cartazes', uk:'Флаєри та Постери' },

  /* ── PARTNER ── */
  partner_label:  { it:'Black Panther Club · 3DX Virtual World', en:'Black Panther Club · 3DX Virtual World', es:'Black Panther Club · Mundo Virtual 3DX', fr:'Black Panther Club · Monde Virtuel 3DX', de:'Black Panther Club · 3DX Virtuelle Welt', ru:'Black Panther Club · Виртуальный мир 3DX', pl:'Black Panther Club · Wirtualny Świat 3DX', pt:'Black Panther Club · Mundo Virtual 3DX', uk:'Black Panther Club · Віртуальний Світ 3DX' },
  partner_title:  { it:'I Nostri Partner', en:'Our Partners', es:'Nuestros Socios', fr:'Nos Partenaires', de:'Unsere Partner', ru:'Наши Партнёры', pl:'Nasi Partnerzy', pt:'Nossos Parceiros', uk:'Наші Партнери' },
  partner_intro:  { it:'Club, eventi e realtà virtuali con cui collaboriamo nel mondo di 3DX.', en:'Clubs, events and virtual realities we collaborate with in the 3DX world.', es:'Clubes, eventos y realidades virtuales con los que colaboramos en el mundo 3DX.', fr:'Clubs, événements et réalités virtuelles avec lesquels nous collaborons dans le monde 3DX.', de:'Clubs, Events und virtuelle Welten, mit denen wir in der 3DX-Welt zusammenarbeiten.', ru:'Клубы, мероприятия и виртуальные миры, с которыми мы сотрудничаем в 3DX.', pl:'Kluby, wydarzenia i wirtualne rzeczywistości, z którymi współpracujemy w świecie 3DX.', pt:'Clubes, eventos e realidades virtuais com os quais colaboramos no mundo 3DX.', uk:'Клуби, події та віртуальні реальності, з якими ми співпрацюємо у світі 3DX.' },

  /* ── CONTACT ── */
  contact_label:  { it:'Black Panther Club · 3DX Virtual World', en:'Black Panther Club · 3DX Virtual World', es:'Black Panther Club · Mundo Virtual 3DX', fr:'Black Panther Club · Monde Virtuel 3DX', de:'Black Panther Club · 3DX Virtuelle Welt', ru:'Black Panther Club · Виртуальный мир 3DX', pl:'Black Panther Club · Wirtualny Świat 3DX', pt:'Black Panther Club · Mundo Virtual 3DX', uk:'Black Panther Club · Віртуальний Світ 3DX' },
  contact_title:  { it:'Contatti', en:'Contact Us', es:'Contáctanos', fr:'Nous Contacter', de:'Kontakt', ru:'Контакты', pl:'Kontakt', pt:'Contato', uk:'Контакти' },
  contact_discord:{ it:'Unisciti al nostro Discord', en:'Join our Discord', es:'Únete a nuestro Discord', fr:'Rejoignez notre Discord', de:'Tritt unserem Discord bei', ru:'Присоединяйтесь к нашему Discord', pl:'Dołącz do naszego Discorda', pt:'Junte-se ao nosso Discord', uk:'Приєднуйтесь до нашого Discord' },
  contact_btn:    { it:'Entra nel Discord', en:'Join Discord', es:'Entrar al Discord', fr:'Rejoindre Discord', de:'Discord beitreten', ru:'Войти в Discord', pl:'Dołącz do Discord', pt:'Entrar no Discord', uk:'Увійти в Discord' },

  /* ── LOGIN ── */
  login_tab:      { it:'Login', en:'Login', es:'Iniciar Sesión', fr:'Connexion', de:'Anmelden', ru:'Войти', pl:'Logowanie', pt:'Entrar', uk:'Увійти' },
  register_tab:   { it:'Registrati', en:'Register', es:'Registrarse', fr:'S\'inscrire', de:'Registrieren', ru:'Регистрация', pl:'Rejestracja', pt:'Registrar', uk:'Реєстрація' },
  login_email:    { it:'Email', en:'Email', es:'Correo', fr:'Email', de:'E-Mail', ru:'Email', pl:'Email', pt:'Email', uk:'Email' },
  login_pwd:      { it:'Password', en:'Password', es:'Contraseña', fr:'Mot de passe', de:'Passwort', ru:'Пароль', pl:'Hasło', pt:'Senha', uk:'Пароль' },
  login_forgot:   { it:'Password dimenticata?', en:'Forgot password?', es:'¿Olvidaste la contraseña?', fr:'Mot de passe oublié?', de:'Passwort vergessen?', ru:'Забыли пароль?', pl:'Zapomniałeś hasła?', pt:'Esqueceu a senha?', uk:'Забули пароль?' },
  login_btn:      { it:'Accedi', en:'Sign In', es:'Entrar', fr:'Se connecter', de:'Anmelden', ru:'Войти', pl:'Zaloguj', pt:'Entrar', uk:'Увійти' },
  reg_username:   { it:'Username / Nickname', en:'Username / Nickname', es:'Usuario / Apodo', fr:'Nom d\'utilisateur', de:'Benutzername', ru:'Имя пользователя', pl:'Nazwa użytkownika', pt:'Nome de usuário', uk:'Ім\'я користувача' },
  reg_3dx:        { it:'Nome Personaggio 3DX', en:'3DX Character Name', es:'Nombre Personaje 3DX', fr:'Nom Personnage 3DX', de:'3DX Charaktername', ru:'Имя персонажа 3DX', pl:'Nazwa postaci 3DX', pt:'Nome Personagem 3DX', uk:'Ім\'я персонажа 3DX' },
  reg_discord:    { it:'Discord Username', en:'Discord Username', es:'Usuario Discord', fr:'Pseudo Discord', de:'Discord Nutzername', ru:'Никнейм Discord', pl:'Nazwa Discord', pt:'Usuário Discord', uk:'Нікнейм Discord' },
  reg_pwd2:       { it:'Conferma Password', en:'Confirm Password', es:'Confirmar Contraseña', fr:'Confirmer le mot de passe', de:'Passwort bestätigen', ru:'Подтвердите пароль', pl:'Potwierdź hasło', pt:'Confirmar Senha', uk:'Підтвердіть пароль' },
  reg_btn:        { it:'Crea Account', en:'Create Account', es:'Crear Cuenta', fr:'Créer un Compte', de:'Konto erstellen', ru:'Создать аккаунт', pl:'Utwórz konto', pt:'Criar Conta', uk:'Створити акаунт' },

  /* ── FOOTER ── */
  footer_copy:    { it:'Tutti i diritti riservati · 3DX Virtual World', en:'All Rights Reserved · 3DX Virtual World', es:'Todos los derechos reservados · Mundo Virtual 3DX', fr:'Tous droits réservés · Monde Virtuel 3DX', de:'Alle Rechte vorbehalten · 3DX Virtuelle Welt', ru:'Все права защищены · Виртуальный мир 3DX', pl:'Wszelkie prawa zastrzeżone · Wirtualny Świat 3DX', pt:'Todos os direitos reservados · Mundo Virtual 3DX', uk:'Всі права захищені · Віртуальний Світ 3DX' },
};

/* ============================================================
   LANGUAGE ENGINE
   ============================================================ */

function getLang() {
  return localStorage.getItem('bp_lang') ||
    navigator.language?.slice(0,2) || 'en';
}

function setLang(code) {
  localStorage.setItem('bp_lang', code);
  applyLang(code);
  updateLangUI(code);
}

function tr(key, lang) {
  const dict = T[key];
  if (!dict) return key;
  return dict[lang] || dict['en'] || key;
}

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = tr(key, lang);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  document.documentElement.lang = lang;
}

function updateLangUI(lang) {
  const current = LANGUAGES.find(l => l.code === lang) || LANGUAGES[1];
  const btn = document.getElementById('lang-current');
  if (btn) btn.textContent = current.flag + ' ' + current.code.toUpperCase();
  document.querySelectorAll('.lang-option').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
}

function buildLangSwitcher() {
  const lang = getLang();
  const current = LANGUAGES.find(l => l.code === lang) || LANGUAGES[1];

  const wrapper = document.createElement('div');
  wrapper.className = 'lang-switcher';
  wrapper.innerHTML = `
    <button class="lang-btn" id="lang-current" onclick="toggleLangMenu(event)">
      ${current.flag} ${current.code.toUpperCase()}
    </button>
    <div class="lang-menu" id="lang-menu">
      ${LANGUAGES.map(l => `
        <div class="lang-option ${l.code === lang ? 'active' : ''}"
             data-lang="${l.code}"
             onclick="setLang('${l.code}')">
          ${l.flag} ${l.label}
        </div>
      `).join('')}
    </div>
  `;
  return wrapper;
}

function toggleLangMenu(e) {
  e.stopPropagation();
  document.getElementById('lang-menu').classList.toggle('open');
}

document.addEventListener('click', () => {
  const m = document.getElementById('lang-menu');
  if (m) m.classList.remove('open');
});

function initLang() {
  // Insert switcher into nav
  const nav = document.querySelector('nav');
  if (nav) nav.appendChild(buildLangSwitcher());

  const lang = getLang();
  applyLang(lang);
  updateLangUI(lang);
}

// Auto-init when DOM ready
document.addEventListener('DOMContentLoaded', initLang);
