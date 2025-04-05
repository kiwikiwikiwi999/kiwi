// i18n.js - Çok dilli destek
document.addEventListener('DOMContentLoaded', function() {
    // i18next kütüphanesini dinamik olarak yükle
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/i18next@21.6.10/i18next.min.js';
    script.onload = initializeI18n;
    document.head.appendChild(script);
    
    // Yükleme göstergesi ekle
    const loadingIndicator = document.createElement('div');
    loadingIndicator.id = 'loading-language';
    loadingIndicator.innerHTML = 'Dil desteği yükleniyor...';
    loadingIndicator.style.cssText = 'position: fixed; top: 10px; right: 10px; background-color: rgba(255,255,255,0.8); padding: 5px 10px; border-radius: 5px; z-index: 1001; font-family: "Inconsolata", monospace; box-shadow: 0 2px 5px rgba(0,0,0,0.1);';
    document.body.appendChild(loadingIndicator);
});

// Dil çevirileri
const resources = {
    tr: {
        translation: {
            "title": "KIWI Token",
            "description": "KIWI, Blum ağında bulunan, amacı, iddiası veya vaatleri olmayan bir tokendir. Şimdilik KIWI'yi Blum üzerinden alıp satabilirsin. Arkadaşlarına KIWI'den bahsetmeyi, hakkında içerikler üretmeyi ve bizi X'te takip etmeyi unutma!",
            "x_account": "X HESABIMIZA ULAŞ!",
            "how_to_buy": "Nasıl KIWI token alabilirim?",
            "step1": "Telegram üzerinden Blum'u başlatın.",
            "step2": "Kripto cüzdanınızı Blum'a bağlayın.",
            "step3": "Satın almak istediğiniz tutarın <span style='color: #0088cc;'>TON</span> olarak kripto cüzdanınıza aktarın.",
            "step4": "Bağlantıya tıklayarak KIWI'ye ulaşın ve alım satımlara başlayın.",
            "buy_button": "KIWI TOKEN'A ULAŞ!",
            "disclaimer": "Yasal Uyarı: KIWI, bağımsız ve topluluk odaklı bir dijital varlıktır. Herhangi bir şirket, marka veya kuruluşla bağlantılı değildir. Yatırım tavsiyesi değildir, kullanım tamamen kullanıcı sorumluluğundadır.",
            "just_kiwi": "Just Kiwi",
            "fullscreen": "Tam Ekran",
            "exit_fullscreen": "Çık",
            "lang_selector": "Dil:"
        }
    },
    en: {
        translation: {
            "title": "KIWI Token",
            "description": "KIWI is a token on the Blum network with no purpose, claims, or promises. For now, you can buy and sell KIWI through Blum. Don't forget to tell your friends about KIWI, create content about it, and follow us on X!",
            "x_account": "VISIT OUR X ACCOUNT!",
            "how_to_buy": "How can I buy KIWI token?",
            "step1": "Start Blum via Telegram.",
            "step2": "Connect your crypto wallet to Blum.",
            "step3": "Transfer the amount you want to buy as <span style='color: #0088cc;'>TON</span> to your crypto wallet.",
            "step4": "Click the link to access KIWI and start trading.",
            "buy_button": "GET KIWI TOKEN!",
            "disclaimer": "Disclaimer: KIWI is an independent and community-focused digital asset. It is not affiliated with any company, brand, or organization. This is not investment advice, use is entirely at user's own risk.",
            "just_kiwi": "Just Kiwi",
            "fullscreen": "Fullscreen",
            "exit_fullscreen": "Exit",
            "lang_selector": "Language:"
        }
    },
    de: {
        translation: {
            "title": "KIWI Token",
            "description": "KIWI ist ein Token im Blum-Netzwerk ohne Zweck, Ansprüche oder Versprechen. Momentan kannst du KIWI über Blum kaufen und verkaufen. Vergiss nicht, deinen Freunden von KIWI zu erzählen, Inhalte darüber zu erstellen und uns auf X zu folgen!",
            "x_account": "BESUCHE UNSEREN X-ACCOUNT!",
            "how_to_buy": "Wie kann ich KIWI-Token kaufen?",
            "step1": "Starte Blum über Telegram.",
            "step2": "Verbinde deine Krypto-Wallet mit Blum.",
            "step3": "Übertrage den Betrag, den du kaufen möchtest, als <span style='color: #0088cc;'>TON</span> in deine Krypto-Wallet.",
            "step4": "Klicke auf den Link, um auf KIWI zuzugreifen und mit dem Handel zu beginnen.",
            "buy_button": "HOLE DIR KIWI TOKEN!",
            "disclaimer": "Haftungsausschluss: KIWI ist ein unabhängiger und gemeinschaftsorientierter digitaler Vermögenswert. Er ist nicht mit einem Unternehmen, einer Marke oder Organisation verbunden. Dies ist keine Anlageberatung, die Nutzung erfolgt ausschließlich auf eigenes Risiko des Nutzers.",
            "just_kiwi": "Just Kiwi",
            "fullscreen": "Vollbild",
            "exit_fullscreen": "Beenden",
            "lang_selector": "Sprache:"
        }
    },
    es: {
        translation: {
            "title": "KIWI Token",
            "description": "KIWI es un token en la red Blum sin propósito, afirmaciones o promesas. Por ahora, puedes comprar y vender KIWI a través de Blum. ¡No olvides contarles a tus amigos sobre KIWI, crear contenido al respecto y seguirnos en X!",
            "x_account": "¡VISITA NUESTRA CUENTA DE X!",
            "how_to_buy": "¿Cómo puedo comprar tokens KIWI?",
            "step1": "Inicia Blum a través de Telegram.",
            "step2": "Conecta tu billetera de criptomonedas a Blum.",
            "step3": "Transfiere la cantidad que deseas comprar como <span style='color: #0088cc;'>TON</span> a tu billetera de criptomonedas.",
            "step4": "Haz clic en el enlace para acceder a KIWI y comenzar a operar.",
            "buy_button": "¡OBTÉN TOKEN KIWI!",
            "disclaimer": "Aviso legal: KIWI es un activo digital independiente y centrado en la comunidad. No está afiliado a ninguna empresa, marca u organización. Esto no es un consejo de inversión, el uso es completamente bajo la responsabilidad del usuario.",
            "just_kiwi": "Just Kiwi",
            "fullscreen": "Pantalla Completa",
            "exit_fullscreen": "Salir",
            "lang_selector": "Idioma:"
        }
    }
};

function initializeI18n() {
    // Tarayıcı dilini algıla
    const browserLang = navigator.language.split('-')[0];
    
    // Kayıtlı dil tercihi varsa al, yoksa tarayıcı dilini veya varsayılan olarak Türkçe kullan
    const savedLang = localStorage.getItem('kiwi-language');
    const initialLang = savedLang || (resources[browserLang] ? browserLang : 'tr');
    
    // i18next'i başlat
    i18next
        .init({
            lng: initialLang,
            fallbackLng: 'tr',
            debug: false,
            resources: resources
        })
        .then(function() {
            // Yükleme göstergesini kaldır
            const loadingIndicator = document.getElementById('loading-language');
            if (loadingIndicator) {
                loadingIndicator.style.display = 'none';
            }
            
            // Sayfa içeriğini güncelle
            updateContent();
            
            // Dil seçici ekle
            addLanguageSelector();
        });
}

// Sayfa içeriğini güncelle
function updateContent() {
    // Sayfa başlığı
    document.title = i18next.t('title');
    
    // Meta etiketleri güncelle
    document.querySelector('meta[name="description"]').setAttribute('content', i18next.t('description'));
    document.querySelector('meta[property="og:description"]').setAttribute('content', i18next.t('description'));
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', i18next.t('description'));
    
    // Ana başlık
    document.querySelector('.kiwi-title').textContent = i18next.t('title');
    
    // Açıklama metni
    const descriptionP = document.querySelector('.description p');
    if (descriptionP) {
        // Blum linkini koru
        const blumLink = '<a href="https://www.blum.io/" target="_blank" rel="noopener">Blum</a>';
        descriptionP.innerHTML = i18next.t('description').replace('Blum', blumLink);
    }
    
    // X hesabı butonu
    document.querySelector('.buttons .btn').textContent = i18next.t('x_account');
    
    // Nasıl alınır başlığı
    document.querySelector('.subtitle').textContent = i18next.t('how_to_buy');
    
    // Adımlar
    const steps = document.querySelectorAll('.steps li');
    if (steps.length >= 4) {
        // 1. adım için Telegram linki
        steps[0].innerHTML = `<a href="https://t.me/blum/app?startapp=ref_BrT6JGaWn" target="_blank" rel="noopener">${i18next.t('step1')}</a>`;
        
        // 2. adım
        steps[1].innerHTML = i18next.t('step2');
        
        // 3. adım için TON linki
        steps[2].innerHTML = `<a href="https://ton.org/${i18next.language === 'tr' ? 'tr' : 'en'}" target="_blank" rel="noopener" class="ton-link">${i18next.t('step3')}</a>`;
        
        // 4. adım
        steps[3].innerHTML = i18next.t('step4');
    }
    
    // Satın alma butonu
    document.querySelector('.buy-button .btn').textContent = i18next.t('buy_button');
    
    // Yasal uyarı
    const disclaimerP = document.querySelector('.disclaimer p');
    if (disclaimerP) {
        disclaimerP.innerHTML = `<strong>${i18next.t('disclaimer')}</strong>`;
    }
    
    // Just Kiwi
    document.querySelector('.just-kiwi').textContent = i18next.t('just_kiwi');
    
    // Tam ekran butonu
    const fullscreenButton = document.getElementById('fullscreen-button');
    if (fullscreenButton) {
        if (document.fullscreenElement || 
            document.mozFullScreenElement || 
            document.webkitFullscreenElement || 
            document.msFullscreenElement) {
            fullscreenButton.textContent = i18next.t('exit_fullscreen');
        } else {
            fullscreenButton.textContent = i18next.t('fullscreen');
        }
    }
}

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    if (!resources[lang]) return;
    
    i18next.changeLanguage(lang).then(() => {
        localStorage.setItem('kiwi-language', lang);
        updateContent();
    });
}

// Dil seçiciyi ekle
function addLanguageSelector() {
    const languageSelector = document.createElement('div');
    languageSelector.className = 'language-selector';
    languageSelector.innerHTML = `
        <label for="lang-select">${i18next.t('lang_selector')}</label>
        <select id="lang-select">
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="es">Español</option>
        </select>
    `;
    
    document.body.appendChild(languageSelector);
    
    // Mevcut dili seç
    document.getElementById('lang-select').value = i18next.language;
    
    // Dil değiştirme olayını ekle
    document.getElementById('lang-select').addEventListener('change', function() {
        changeLanguage(this.value);
    });
    
    // Fullscreen olayını güncelle
    const originalUpdateFullscreenButton = window.updateFullscreenButton || function() {};
    window.updateFullscreenButton = function() {
        originalUpdateFullscreenButton();
        
        const fullscreenButton = document.getElementById('fullscreen-button');
        if (fullscreenButton) {
            if (document.fullscreenElement || 
                document.mozFullScreenElement || 
                document.webkitFullscreenElement || 
                document.msFullscreenElement) {
                fullscreenButton.textContent = i18next.t('exit_fullscreen');
            } else {
                fullscreenButton.textContent = i18next.t('fullscreen');
            }
        }
    };
}

// CSS stilleri
const styleElement = document.createElement('style');
styleElement.textContent = `
.language-selector {
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 8px 12px;
    border-radius: 8px;
    z-index: 1001;
    font-family: 'Inconsolata', monospace;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
}

.language-selector:hover {
    background-color: white;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.language-selector label {
    margin-right: 8px;
    font-weight: bold;
    font-size: 14px;
    color: #464631;
}

.language-selector select {
    padding: 4px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    font-family: 'Inconsolata', monospace;
    font-size: 14px;
    cursor: pointer;
    color: #464631;
    transition: all 0.2s ease;
}

.language-selector select:hover {
    border-color: #97ca3f;
}

.language-selector select:focus {
    outline: none;
    border-color: #97ca3f;
    box-shadow: 0 0 0 2px rgba(151, 202, 63, 0.3);
}

/* Mobil için ayarlar */
@media (max-width: 768px) {
    .language-selector {
        top: 5px;
        right: 5px;
        padding: 5px 8px;
    }
    
    .language-selector label {
        font-size: 12px;
    }
    
    .language-selector select {
        font-size: 12px;
        padding: 3px 6px;
    }
}
`;

document.head.appendChild(styleElement);
