// Data Sets for Interactive Phone Mockup
const lawData = {
  almannalogin: {
    title: {
      en: "Almannalógin (Social Act)",
      fo: "Almannalógin"
    },
    text: {
      en: "Act on Social Services and Benefits. Section 1 guarantees that any Faroese citizen who is unable to support themselves due to illness, disability, or social conditions has a right to financial assistance, home care services, and housing support. The law emphasizes maintaining independence and dignity.",
      fo: "Lóg um almannatænastur og veitingar. 1. grein tryggjar, at ein og hvør føroyskur borgari, sum vegna sjúku, brek ella almanna viðurskifti ikki er førur fyri at uppihalda sær sjálvum, hevur rætt til fíggjarliga hjálp, heimatænastu og bústaðarstuðul. Lógin leggur dent á sjálvstøðugt og virðiligt lív."
    }
  },
  styriskipislogin: {
    title: {
      en: "Stýrisskipanarlógin (Constitution)",
      fo: "Stýrisskipanarlógin"
    },
    text: {
      en: "The Constitutional Act of the Faroe Islands. Formulated under the Home Rule system, this defines the legislative authority of the Løgting (Parliament), the executive power of the Landsstýri (Government), and the independent judiciary. Section 12 protects civil rights including freedom of expression, assembly, and religion.",
      fo: "Stýrisskipanarlóg Føroya. Ásetur karmarnar fyri heimastýrislógina, lóggávuvald Løgthingsins, útinnandi vald Landsstýrisins og tað óhefta dómsvaldið. 12. grein verjir borgaralig rættindi, herundir talufrælsi, fundarfrælsi og trúarfrælsi."
    }
  },
  barnalogin: {
    title: {
      en: "Barnalógin (Children's Act)",
      fo: "Barnalógin"
    },
    text: {
      en: "Act on Children's Rights and Custody. In accordance with international standards, the law mandates that the child's best interests must be the primary consideration in all legal decisions. Section 8 details custody guidelines, parent responsibilities, and support systems for joint-parenting.",
      fo: "Barnalóg um foreldramyndugleika og barnavernd. Sambært millumtjóða sáttmálum ásetur lógin, at barnsins besti áhugi skal altíð vera í fremstu røð í øllum avgerðum. 8. grein útgreinar foreldramyndugleika, skyldur foreldranna og stuðulsskipanir."
    }
  }
};

const recipeData = {
  skerpikjot: {
    title: {
      en: "Skerpikjøt (Wind-Dried Mutton)",
      fo: "Skerpikjøt"
    },
    meta: {
      en: "Ready in: 6 - 9 months | Prep: 1 hr",
      fo: "Tíð: 6 - 9 mánaðir | Gjørt: 1 tíma"
    },
    ingredients: {
      en: [
        "1 organic Faroese leg of mutton",
        "Dry wind and cool ambient temperature",
        "Traditional slatted drying house (hjallur)"
      ],
      fo: [
        "1 føroyskt seyðalær",
        "Góður hjallur við nóg mikið av vindi",
        "Rættur luftraki og kuldi"
      ]
    },
    instructions: {
      en: "Hang the mutton leg in the hjallur in late autumn. The ocean air cures the meat. The first stage (visnað) takes 2 weeks, followed by fermentation (ræst) around December, and finally drying (turt) by spring. Slice thinly and serve on rye bread with butter.",
      fo: "Hanga lærini upp í hjallin um heystið. Tann saltaða havgolan konserverar kjøtið. Fyrsta tíðin kallast visnað (uml. 2 vikur), síðani gerst tað ræst (uml. desember), og endiliga turt um várið. Sker í tynnar skivar og et á rugbreyði við smøri."
    }
  },
  "raestur-fiskur": {
    title: {
      en: "Ræstur Fiskur (Fermented Fish)",
      fo: "Ræstur Fiskur"
    },
    meta: {
      en: "Ready in: 2 - 3 weeks | Prep: 30 min",
      fo: "Tíð: 2 - 3 vikur | Gjørt: 30 min"
    },
    ingredients: {
      en: [
        "Freshly caught Faroese cod or coalfish",
        "Cool wind and salt water for washing",
        "A shaded, well-ventilated outdoor spot"
      ],
      fo: [
        "Nýveiddur toskur ella ups",
        "Kaldur vindur til hangigolu",
        "Saltvatn at skola fiskin í"
      ]
    },
    instructions: {
      en: "Clean and gut the fish, wash with cold saltwater. Tie in pairs by the tail and hang them in the hjallur or outside in a shaded spot with plenty of air draft. Let it ferment for 2 to 3 weeks. Boil and serve warm with whale blubber (spikki) and potatoes.",
      fo: "Krufsa fiskin og skola væl í køldum saltvatni. Bind saman í pari um spælið og hong upp í hjallin ella á einum luftigum stað uttan sól. Lat hanga í 2-3 vikur til hann er ræstur. Kóka væl og servera heitt saman við spikki og eplum."
    }
  }
};

// State Variables
let currentLang = 'en';
let currentApp = 'raettarvisi';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Toggle Click Listeners
  const langBtns = document.querySelectorAll('.lang-switch .lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });

  // Close nav menu on link clicks
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  });

  // 3. Scroll Header Styles
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 4. App Card Click Listeners
  const appCards = document.querySelectorAll('.app-card');
  appCards.forEach(card => {
    card.addEventListener('click', () => {
      appCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const appName = card.getAttribute('data-app');
      switchAppSimulator(appName);
    });
  });

  // 5. Setup search functionality in Rættarvísi simulator
  const lawSearchBar = document.querySelector('.search-bar');
  if (lawSearchBar) {
    lawSearchBar.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const lawCards = document.querySelectorAll('#screen-raettarvisi .law-card');
      
      lawCards.forEach(card => {
        const titleText = card.querySelector('h5').innerText.toLowerCase();
        const bodyText = card.querySelector('p').innerText.toLowerCase();
        
        if (titleText.includes(query) || bodyText.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Initialize Language
  setLanguage('en');
});

// Set Language Content Swapping
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Text contents
  const translatableElements = document.querySelectorAll('[data-en]');
  translatableElements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      // Preserve SVG child structure if present (e.g. play badge or features checkmarks)
      const svg = el.querySelector('svg');
      if (svg) {
        // If there's an SVG inside, replace text content after or before it
        const childSpan = el.querySelector('span:last-child') || el.querySelector('span');
        if (childSpan) {
          childSpan.textContent = text;
        } else {
          el.innerHTML = '';
          el.appendChild(svg);
          el.appendChild(document.createTextNode(' ' + text));
        }
      } else {
        el.textContent = text;
      }
    }
  });

  // Placeholders
  const placeholders = document.querySelectorAll('[data-en-placeholder]');
  placeholders.forEach(el => {
    const placeholder = el.getAttribute(`data-${lang}-placeholder`);
    if (placeholder) {
      el.placeholder = placeholder;
    }
  });

  // Reload detail views in simulator to match language
  const lawDetail = document.getElementById('law-detail-view');
  if (lawDetail && lawDetail.classList.contains('active')) {
    const activeLawId = lawDetail.getAttribute('data-law-id');
    if (activeLawId) openLawDetail(activeLawId);
  }

  const recipeDetail = document.getElementById('recipe-detail-view');
  if (recipeDetail && recipeDetail.classList.contains('active')) {
    const activeRecipeId = recipeDetail.getAttribute('data-recipe-id');
    if (activeRecipeId) openRecipeDetail(activeRecipeId);
  }
}

// Switch simulator screen content
function switchAppSimulator(appName) {
  currentApp = appName;
  const screens = document.querySelectorAll('.screen-content');
  screens.forEach(s => s.classList.remove('active'));
  
  const targetScreen = document.getElementById(`screen-${appName}`);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  // Reset detail modals
  closeLawDetail();
  closeRecipeDetail();
}

// Interactive simulator detail views - Rættarvísi
function openLawDetail(lawId) {
  const law = lawData[lawId];
  if (!law) return;

  const detailView = document.getElementById('law-detail-view');
  const title = document.getElementById('law-detail-title');
  const text = document.getElementById('law-detail-text');

  detailView.setAttribute('data-law-id', lawId);
  title.textContent = law.title[currentLang];
  text.textContent = law.text[currentLang];
  detailView.classList.add('active');
}

function closeLawDetail() {
  const detailView = document.getElementById('law-detail-view');
  if (detailView) {
    detailView.classList.remove('active');
    detailView.removeAttribute('data-law-id');
  }
}

// Interactive simulator detail views - Recipes
function openRecipeDetail(recipeId) {
  const recipe = recipeData[recipeId];
  if (!recipe) return;

  const detailView = document.getElementById('recipe-detail-view');
  const title = document.getElementById('recipe-detail-title');
  const meta = document.getElementById('recipe-detail-meta');
  const ingredientsList = document.getElementById('recipe-detail-ingredients');
  const instructionsText = document.getElementById('recipe-detail-instructions');

  detailView.setAttribute('data-recipe-id', recipeId);
  title.textContent = recipe.title[currentLang];
  meta.textContent = recipe.meta[currentLang];
  
  // Setup ingredients
  ingredientsList.innerHTML = '';
  recipe.ingredients[currentLang].forEach(ing => {
    const li = document.createElement('li');
    li.textContent = ing;
    ingredientsList.appendChild(li);
  });

  // Setup instructions
  instructionsText.textContent = recipe.instructions[currentLang];
  detailView.classList.add('active');
}

function closeRecipeDetail() {
  const detailView = document.getElementById('recipe-detail-view');
  if (detailView) {
    detailView.classList.remove('active');
    detailView.removeAttribute('data-recipe-id');
  }
}

// Filter Recipe Cards in Simulator
function filterRecipes(category, element) {
  const tabs = document.querySelectorAll('.recipe-categories .recipe-tab');
  tabs.forEach(t => t.classList.remove('active'));
  
  if (element) {
    element.classList.add('active');
  } else {
    // Fallback find by category
    tabs.forEach(t => {
      if (t.getAttribute('onclick').includes(category)) {
        t.classList.add('active');
      }
    });
  }

  const cards = document.querySelectorAll('#recipe-list .recipe-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  closeRecipeDetail();
}
