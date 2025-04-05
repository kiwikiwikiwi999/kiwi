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
            "title": "KIWI",
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
            "title": "KIWI",
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
            "title": "KIWI",
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
            "title": "KIWI",
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
    },
    fr: {
        translation: {
            "title": "KIWI",
            "description": "KIWI est un jeton sur le réseau Blum sans objectif, revendications ou promesses. Pour l'instant, vous pouvez acheter et vendre KIWI via Blum. N'oubliez pas de parler de KIWI à vos amis, de créer du contenu à son sujet et de nous suivre sur X !",
            "x_account": "VISITEZ NOTRE COMPTE X !",
            "how_to_buy": "Comment puis-je acheter des jetons KIWI ?",
            "step1": "Démarrez Blum via Telegram.",
            "step2": "Connectez votre portefeuille crypto à Blum.",
            "step3": "Transférez le montant que vous souhaitez acheter sous forme de <span style='color: #0088cc;'>TON</span> vers votre portefeuille crypto.",
            "step4": "Cliquez sur le lien pour accéder à KIWI et commencer à trader.",
            "buy_button": "OBTENEZ LE JETON KIWI !",
            "disclaimer": "Avis de non-responsabilité : KIWI est un actif numérique indépendant et axé sur la communauté. Il n'est affilié à aucune entreprise, marque ou organisation. Ce n'est pas un conseil d'investissement, l'utilisation est entièrement sous la responsabilité de l'utilisateur.",
            "just_kiwi": "Just Kiwi",
            "fullscreen": "Plein Écran",
            "exit_fullscreen": "Quitter",
            "lang_selector": "Langue :"
        }
    },
    it: {
        translation: {
            "title": "KIWI",
            "description": "KIWI è un token sulla rete Blum senza scopo, pretese o promesse. Per ora, puoi comprare e vendere KIWI tramite Blum. Non dimenticare di parlare di KIWI ai tuoi amici, creare contenuti su di esso e seguirci su X!",
            "x_account": "VISITA IL NOSTRO ACCOUNT X!",
            "how_to_buy": "Come posso acquistare il token KIWI?",
            "step1": "Avvia Blum tramite Telegram.",
            "step2": "Collega il tuo portafoglio crypto a Blum.",
            "step3": "Trasferisci l'importo che desideri acquistare come <span style='color: #0088cc;'>TON</span> al tuo portafoglio crypto.",
            "step4": "Clicca sul link per accedere a KIWI e iniziare a fare trading.",
            "buy_button": "OTTIENI IL TOKEN KIWI!",
            "disclaimer": "Disclaimer: KIWI è un asset digitale indipendente e incentrato sulla comunità. Non è affiliato a nessuna azienda, marchio o organizzazione. Questo non è un consiglio di investimento, l'uso è interamente a rischio dell'utente.",
            "just_kiwi": "Just Kiwi",
            "fullscreen": "Schermo Intero",
            "exit_fullscreen": "Esci",
            "lang_selector": "Lingua:"
        }
    },
    pt: {
        translation: {
            "title": "KIWI",
            "description": "KIWI é um token na rede Blum sem propósito, alegações ou promessas. Por enquanto, você pode comprar e vender KIWI através do Blum. Não se esqueça de contar aos seus amigos sobre o KIWI, criar conteúdo sobre ele e nos seguir no X!",
            "x_account": "VISITE NOSSA CONTA NO X!",
            "how_to_buy": "Como posso comprar o token KIWI?",
            "step1": "Inicie o Blum pelo Telegram.",
            "step2": "Conecte sua carteira cripto ao Blum.",
            "step3": "Transfira o valor que deseja comprar como <span style='color: #0088cc;'>TON</span> para sua carteira cripto.",
            "step4": "Clique no link para acessar o KIWI e começar a negociar.",
            "buy_button": "OBTENHA O TOKEN KIWI!",
            "disclaimer": "Aviso legal: KIWI é um ativo digital independente e focado na comunidade. Não está afiliado a nenhuma empresa, marca ou organização. Isso não é um conselho de investimento, o uso é inteiramente por conta e risco do usuário.",
            "just_kiwi": "Just Kiwi",
            "fullscreen": "Tela Cheia",
            "exit_fullscreen": "Sair",
            "lang_selector": "Idioma:"
        }
    },
    ru: {
        translation: {
            "title": "KIWI",
            "description": "KIWI — это токен в сети Blum, не имеющий цели, претензий или обещаний. Пока что вы можете покупать и продавать KIWI через Blum. Не забудьте рассказать своим друзьям о KIWI, создавать контент о нем и подписаться на нас в X!",
            "x_account": "ПОСЕТИТЕ НАШ АККАУНТ В X!",
            "how_to_buy": "Как я могу купить токен KIWI?",
            "step1": "Запустите Blum через Telegram.",
            "step2": "Подключите свой криптокошелек к Blum.",
            "step3": "Переведите сумму, которую хотите купить, в виде <span style='color: #0088cc;'>TON</span> на свой криптокошелек.",
            "step4": "Нажмите на ссылку, чтобы получить доступ к KIWI и начать торговлю.",
            "buy_button": "ПОЛУЧИТЬ ТОКЕН KIWI!",
            "disclaimer": "Отказ от ответственности: KIWI — это независимый цифровой актив, ориентированный на сообщество. Он не связан ни с какой компанией, брендом или организацией. Это не инвестиционный совет, использование полностью на ответственности пользователя.",
            "just_kiwi": "Just Kiwi",
            "fullscreen": "Полный экран",
            "exit_fullscreen": "Выход",
            "lang_selector": "Язык:"
        }
    },
    ja: {
        translation: {
            "title": "KIWI",
            "description": "KIWIは、目的、主張、約束のないBlumネットワーク上のトークンです。現在、Blumを通じてKIWIを売買できます。友達にKIWIについて教えること、それに関するコンテンツを作成すること、そしてXで私たちをフォローすることを忘れないでください！",
            "x_account": "X アカウントにアクセス！",
            "how_to_buy": "KIWIトークンを購入するにはどうすればよいですか？",
            "step1": "Telegramを通じてBlumを起動します。",
            "step2": "暗号ウォレットをBlumに接続します。",
            "step3": "購入したい金額を<span style='color: #0088cc;'>TON</span>として暗号ウォレットに転送します。",
            "step4": "リンクをクリックしてKIWIにアクセスし、取引を開始します。",
            "buy_button": "KIWIトークンを取得！",
            "disclaimer": "免責事項：KIWIは、独立したコミュニティ中心のデジタル資産です。いかなる企業、ブランド、組織とも提携していません。これは投資アドバイスではなく、使用は完全にユーザー自身の責任で行われます。",
            "just_kiwi": "Just Kiwi",
            "fullscreen": "全画面表示",
            "exit_fullscreen": "終了",
            "lang_selector": "言語："
        }
    },
    ko: {
        translation: {
            "title": "KIWI",
            "description": "KIWI는 목적, 주장 또는 약속이 없는 Blum 네트워크의 토큰입니다. 현재 Blum을 통해 KIWI를 사고 팔 수 있습니다. 친구들에게 KIWI에 대해 알리고, 관련 콘텐츠를 만들고, X에서 우리를 팔로우하는 것을 잊지 마세요!",
            "x_account": "X 계정 방문!",
            "how_to_buy": "KIWI 토큰을 어떻게 구매할 수 있나요?",
            "step1": "텔레그램을 통해 Blum을 시작하세요.",
            "step2": "암호화폐 지갑을 Blum에 연결하세요.",
            "step3": "구매하려는 금액을 <span style='color: #0088cc;'>TON</span>으로 암호화폐 지갑에 전송하세요.",
            "step4": "링크를 클릭하여 KIWI에 접근하고 거래를 시작하세요.",
            "buy_button": "KIWI 토큰 받기!",
            "disclaimer": "면책 조항: KIWI는 독립적이고 커뮤니티 중심의 디지털 자산입니다. 어떤 회사, 브랜드 또는 조직과도 제휴하지 않습니다. 이는 투자 조언이 아니며, 사용은 전적으로 사용자 책임하에 있습니다.",
            "just_kiwi": "Just Kiwi",
            "fullscreen": "전체 화면",
            "exit_fullscreen": "나가기",
            "lang_selector": "언어:"
        }
    },
    zh: {
        translation: {
            "title": "KIWI",
            "description": "KIWI 是 Blum 网络上的代币，没有目的、主张或承诺。目前，您可以通过 Blum 买卖 KIWI。别忘了告诉你的朋友关于 KIWI 的信息，创建有关它的内容，并在 X 上关注我们！",
            "x_account": "访问我们的 X 账户！",
            "how_to_buy": "我如何购买 KIWI 代币？",
            "step1": "通过 Telegram 启动 Blum。",
            "step2": "将您的加密钱包连接到 Blum。",
            "step3": "将您想要购买的金额作为 <span style='color: #0088cc;'>TON</span> 转入您的加密钱包。",
            "step4": "点击链接访问 KIWI 并开始交易。",
            "buy_button": "获取 KIWI 代币！",
            "disclaimer": "免责声明：KIWI 是一种独立的、以社区为中心的数字资产。它不隶属于任何公司、品牌或组织。这不是投资建议，使用完全由用户自行负责。",
            "just_kiwi": "Just Kiwi",
            "fullscreen": "全屏",
            "exit_fullscreen": "退出",
            "lang_selector": "语言："
        }
    },
    ar: {
        translation: {
            "title": "KIWI",
            "description": "KIWI هو رمز على شبكة Blum بدون هدف أو مطالبات أو وعود. في الوقت الحالي، يمكنك شراء وبيع KIWI من خلال Blum. لا تنس أن تخبر أصدقائك عن KIWI، وإنشاء محتوى حوله، ومتابعتنا على X!",
            "x_account": "قم بزيارة حسابنا على X!",
            "how_to_buy": "كيف يمكنني شراء رمز KIWI؟",
            "step1": "ابدأ Blum عبر Telegram.",
            "step2": "قم بتوصيل محفظة العملات المشفرة الخاصة بك بـ Blum.",
            "step3": "قم بتحويل المبلغ الذي تريد شراءه كـ <span style='color: #0088cc;'>TON</span> إلى محفظة العملات المشفرة الخاصة بك.",
            "step4": "انقر على الرابط للوصول إلى KIWI وبدء التداول.",
            "buy_button": "احصل على رمز KIWI!",
            "disclaimer": "إخلاء المسؤولية: KIWI هو أصل رقمي مستقل ومركز على المجتمع. وهو غير مرتبط بأي شركة أو علامة تجارية أو منظمة. هذه ليست نصيحة استثمارية، الاستخدام يكون تحت مسؤولية المستخدم بالكامل.",
            "just_kiwi": "Just Kiwi",
            "fullscreen": "ملء الشاشة",
            "exit_fullscreen": "خروج",
            "lang_selector": "اللغة:"
        }
    }
};

function initializeI18n() {
    try {
        // Tarayıcı dilini algıla
        let browserLang = navigator.language.split('-')[0];
        
        // URL'den dil parametresini kontrol et
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        
        // Kayıtlı dil tercihi varsa al, yoksa URL dilini, o da yoksa tarayıcı dilini veya varsayılan olarak Türkçe kullan
        const savedLang = localStorage.getItem('kiwi-language');
        const initialLang = urlLang || savedLang || (resources[browserLang] ? browserLang : 'tr');
        
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
                
                // URL'ye dil parametresi ekle (history API kullanarak, sayfa yenilenmeden)
                if (!urlLang && initialLang !== 'tr') {
                    updateURLWithLanguage(initialLang);
                }
            });
    } catch (error) {
        console.error("Dil sistemi başlatılırken hata oluştu:", error);
        // Hata durumunda yükleme göstergesini kaldır
        const loadingIndicator = document.getElementById('loading-language');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
    }
}

// URL'ye dil parametresi ekle
function updateURLWithLanguage(lang) {
    try {
        if (!lang || lang === 'tr') return; // Varsayılan dil için URL'yi değiştirme
        
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        
        // History API'yi kullanarak URL'yi güncelle (sayfa yenilenmeden)
        window.history.replaceState({}, '', url.toString());
    } catch (error) {
        console.error("URL dil parametresi güncellenirken hata:", error);
    }
}

// Sayfa içeriğini güncelle
function updateContent() {
    // HTML dil özelliğini güncelle
    document.documentElement.lang = i18next.language;
    
    // HTML yönünü ayarla (Arapça için sağdan sola)
    document.documentElement.dir = i18next.language === 'ar' ? 'rtl' : 'ltr';
    
    // Sayfa başlığı
    document.title = i18next.t('title');
    
    // Meta etiketleri güncelle
    const metaTags = [
        document.querySelector('meta[name="description"]'),
        document.querySelector('meta[property="og:description"]'),
        document.querySelector('meta[name="twitter:description"]')
    ];
    
    metaTags.forEach(tag => {
        if (tag) tag.setAttribute('content', i18next.t('description'));
    });
    
    // Ana başlık
    const titleElement = document.querySelector('.kiwi-title');
    if (titleElement) titleElement.textContent = i18next.t('title');
    
    // Açıklama metni
    const descriptionP = document.querySelector('.description p');
    if (descriptionP) {
        // Blum linkini koru
        const blumLink = '<a href="https://www.blum.io/" target="_blank" rel="noopener">Blum</a>';
        descriptionP.innerHTML = i18next.t('description').replace('Blum', blumLink);
    }
    
    // X hesabı butonu
    const xButton = document.querySelector('.buttons .btn');
    if (xButton) xButton.textContent = i18next.t('x_account');
    
    // Nasıl alınır başlığı
    const subtitleElement = document.querySelector('.subtitle');
    if (subtitleElement) subtitleElement.textContent = i18next.t('how_to_buy');
    
    // Adımlar
    const steps = document.querySelectorAll('.steps li');
    if (steps.length >= 4) {
        // 1. adım için Telegram linki
        steps[0].innerHTML = `<a href="https://t.me/blum/app?startapp=ref_BrT6JGaWn" target="_blank" rel="noopener">${i18next.t('step1')}</a>`;
        
        // 2. adım
        steps[1].innerHTML = i18next.t('step2');
        
        // 3. adım için TON linki - dilin varsa kendi sayfasına, yoksa İngilizce'ye yönlendir
        const tonLangMapping = {
            'tr': 'tr',
            'en': 'en',
            'ru': 'ru',
            'zh': 'zh-hans', // Çince için özel yol
            'es': 'es',
            'fr': 'fr',
            'de': 'de',
            'ar': 'ar',
            'it': 'it',
            'pt': 'pt-br',
            'ja': 'ja',
            'ko': 'ko'
        };
        
        const tonLang = tonLangMapping[i18next.language] || 'en';
        steps[2].innerHTML = `<a href="https://ton.org/${tonLang}" target="_blank" rel="noopener" class="ton-link">${i18next.t('step3')}</a>`;
        
        // 4. adım
        steps[3].innerHTML = i18next.t('step4');
    }
    
    // Satın alma butonu
    const buyButton = document.querySelector('.buy-button .btn');
    if (buyButton) buyButton.textContent = i18next.t('buy_button');
    
    // Yasal uyarı
    const disclaimerP = document.querySelector('.disclaimer p');
    if (disclaimerP) {
        disclaimerP.innerHTML = `<strong>${i18next.t('disclaimer')}</strong>`;
    }
    
    // Just Kiwi
    const justKiwi = document.querySelector('.just-kiwi');
    if (justKiwi) justKiwi.textContent = i18next.t('just_kiwi');
    
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
        updateURLWithLanguage(lang);
    });
}

// Dil seçiciyi ekle
function addLanguageSelector() {
    const languageSelector = document.createElement('div');
    languageSelector.
