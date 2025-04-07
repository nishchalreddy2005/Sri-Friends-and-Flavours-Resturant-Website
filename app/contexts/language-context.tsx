"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// First, update the Language type to include Kannada
type Language = "en" | "te" | "hi" | "ta" | "kn"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: any[]) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// English translations
const enTranslations = {
  // Navigation
  "nav.home": "Home",
  "nav.menu": "Menu",
  "nav.contact": "Contact",
  "nav.about": "About",

  // Home page
  "home.hero.title": "Sri Friends and Flavours",
  "home.hero.subtitle": "Where Flavour Meets Flair",
  "home.hero.button": "View Menu",
  "home.offers.title": "Special Offers",
  "home.story.title": "Our Story",
  "home.story.description1":
    "Sri Friends and Flavours is a new venture that came to life in 2025, founded by four lifelong friends with a shared passion for food and community. Our journey started with a simple idea — to create a place where people can gather, enjoy incredible meals, and celebrate the joys of life together.",
  "home.story.description2":
    "Building on the legacy of locally-sourced ingredients and a commitment to quality, we bring fresh energy and creativity to every dish we serve. With over 20 years of culinary experience among us, we blend our expertise, unique perspectives, and a love for flavors that are as vibrant and diverse as our friendship.",
  "home.story.description3":
    "At Sri Friends and Flavours, our mission is to craft memorable dining experiences that connect people. Every meal is made with care, and every visit is a chance to create new moments with those you cherish. We are so excited to welcome you and share the warmth of our kitchen with you.",
  "home.story.description4":
    "Come for the food, stay for the stories — we can't wait to share this adventure with you.",
  "home.featured.title": "Featured Menu",
  "home.featured.subtitle": "Explore our most popular dishes crafted with passion and the finest ingredients",
  "home.featured.button": "View Full Menu",
  "home.visit.title": "Visit Us",
  "home.visit.description":
    "We're located in the heart of downtown. Come experience our warm atmosphere and exceptional service.",
  "home.visit.address.title": "Address",
  "home.visit.phone.title": "Phone",
  "home.visit.email.title": "Email",
  "home.visit.hours.title": "Hours",
  "home.visit.hours.weekdays": "Mon-Fri: 11am-10pm",
  "home.visit.hours.weekends": "Sat-Sun: 11am-10pm",
  "home.visit.button": "Contact Us",

  // Address
  "address.full": "5-9-7, 1st line Brodipet, Guntur, Andhra Pradesh - 522002",
  "address.phone": "+91 81428 90257",
  "address.email": "friendsandflavoursrestaurant@gmail.com",

  // Menu page
  "menu.hero.title": "Our Menu",
  "menu.hero.subtitle": "Explore our carefully crafted dishes at Sri Friends and Flavours",
  "menu.dietary.title": "Special Dietary Requirements",
  "menu.dietary.description":
    "We're happy to accommodate special dietary needs. Please inform your server of any allergies or restrictions. Vegetarian, vegan, and gluten-free options are available upon request.",
  "menu.dietary.button": "Contact Us for Special Requests",
  "menu.filter.by": "Filter by:",
  "menu.filter.all": "All",
  "menu.filter.veg": "Veg Only",
  "menu.filter.nonveg": "Non-Veg",
  "menu.all.items": "All Items",

  // Contact page
  "contact.hero.title": "Contact Us",
  "contact.hero.subtitle": "Get in touch with us for reservations, inquiries, or feedback",
  "contact.info.title": "Get In Touch",
  "contact.info.description":
    "We'd love to hear from you. Feel free to reach out with any questions, reservation requests, or feedback about your dining experience.",
  "contact.form.title": "Send Us a Message",
  "contact.form.description": "Fill out the form below and we'll get back to you as soon as possible.",
  "contact.form.name": "Name",
  "contact.form.email": "Email",
  "contact.form.phone": "Phone (optional)",
  "contact.form.message": "Message",
  "contact.form.button": "Send Message",
  "contact.form.sending": "Sending...",
  "contact.map.title": "Find Us",

  // Footer
  "footer.tagline": "Bringing authentic flavours to your table since 2025.",
  "footer.links.title": "Quick Links",
  "footer.connect.title": "Connect With Us",
  "footer.connect.description": "Follow us on social media for updates, promotions, and culinary inspiration.",
  "footer.copyright": "© 2024 Sri Friends and Flavours. All rights reserved.",
  "footer.developer": "Designed and developed by G V R Nishchal Reddy",

  // Language switcher
  "language.english": "English",
  "language.telugu": "తెలుగు",
  "language.hindi": "हिंदी",
  "language.tamil": "தமிழ்",
  "language.kannada": "ಕನ್ನಡ",

  // Add menu category translations
  "menu.category.rice": "Rice Bowls",
  "menu.category.chinese": "Chinese",
  "menu.category.continental": "Continental",
  "menu.category.mojitos": "Mojitos",
  "menu.category.juices": "Fresh Juices",
  "menu.category.biryani": "Biryani",
  "menu.category.starters": "Starters",
  "menu.category.combos": "Combos",

  // Price format
  "price.starting.from": "Starting from ₹{0}",

  // Add menu item translations for rice category
  "menu.rice.pappu_avakaya": "Pappu Avakaya Rice",
  "menu.rice.pappu_avakaya.desc": "Traditional rice with pappu (dal) and spicy avakaya pickle",
  "menu.rice.sambar": "Sambar Rice",
  "menu.rice.sambar.desc": "Rice mixed with flavorful sambar",
  "menu.rice.nalla_karam": "Nalla Karam Rice",
  "menu.rice.nalla_karam.desc": "Rice with spicy black pepper seasoning",
  "menu.rice.podeena": "Podeena Rice",
  "menu.rice.podeena.desc": "Mint flavored rice",
  "menu.rice.tomato": "Tomato Rice",
  "menu.rice.tomato.desc": "Rice cooked with tangy tomato base",
  "menu.rice.lemon": "Lemon Rice",
  "menu.rice.lemon.desc": "Tangy lemon flavored rice with peanuts",
  "menu.rice.egg": "Egg Rice",
  "menu.rice.egg.desc": "Rice with scrambled eggs",
  "menu.rice.gongura": "Gongura Rice",
  "menu.rice.gongura.desc": "Rice with tangy gongura leaves",
  "menu.rice.jeera": "Jeera Rice",
  "menu.rice.jeera.desc": "Aromatic cumin flavored rice",
  "menu.rice.manchurian": "Manchurian Rice",
  "menu.rice.manchurian.desc": "Rice with manchurian sauce",
  "menu.rice.chicken": "Chicken Rice",
  "menu.rice.chicken.desc": "Rice with chicken pieces",
  "menu.rice.veg_biryani": "Veg Biryani",
  "menu.rice.veg_biryani.desc": "Vegetable biryani with aromatic spices",
  "menu.rice.curd": "Curd Rice",
  "menu.rice.curd.desc": "Cooling yogurt rice with tempering",
  "menu.rice.mini_meals": "Mini Meals",
  "menu.rice.mini_meals.desc": "Small portion complete meal",
  "menu.rice.paneer": "Paneer Rice",
  "menu.rice.paneer.desc": "Rice with paneer cubes",
  "menu.rice.cashew": "Cashew Nut Rice",
  "menu.rice.cashew.desc": "Rice with cashew nuts",
  "menu.rice.sambar_chicken": "Sambar Rice + Chicken Pakoda",
  "menu.rice.sambar_chicken.desc": "Sambar rice served with crispy chicken pakoda",

  // Chinese menu items
  "menu.chinese.veg_noodles": "Veg Noodles",
  "menu.chinese.veg_noodles.desc": "Stir-fried noodles with mixed vegetables",
  "menu.chinese.veg_fried_rice": "Veg Fried Rice",
  "menu.chinese.veg_fried_rice.desc": "Stir-fried rice with mixed vegetables",
  "menu.chinese.veg_manchurian": "Veg Manchurian",
  "menu.chinese.veg_manchurian.desc": "Vegetable balls in a spicy, sweet and sour sauce",
  "menu.chinese.egg_noodles": "Egg Noodles",
  "menu.chinese.egg_noodles.desc": "Stir-fried noodles with egg",
  "menu.chinese.egg_fried_rice": "Egg Fried Rice",
  "menu.chinese.egg_fried_rice.desc": "Stir-fried rice with egg",
  "menu.chinese.egg_manchurian": "Egg Manchurian",
  "menu.chinese.egg_manchurian.desc": "Egg fritters in manchurian sauce",
  "menu.chinese.double_egg_noodles": "Double Egg Noodles",
  "menu.chinese.double_egg_noodles.desc": "Noodles with double portion of egg",
  "menu.chinese.double_egg_fried_rice": "Double Egg Fried Rice",
  "menu.chinese.double_egg_fried_rice.desc": "Fried rice with double portion of egg",
  "menu.chinese.double_egg_manchurian": "Double Egg Manchurian",
  "menu.chinese.double_egg_manchurian.desc": "Double egg fritters in manchurian sauce",
  "menu.chinese.chicken_noodles": "Chicken Noodles",
  "menu.chinese.chicken_noodles.desc": "Stir-fried noodles with chicken",
  "menu.chinese.chicken_fried_rice": "Chicken Fried Rice",
  "menu.chinese.chicken_fried_rice.desc": "Stir-fried rice with chicken",
  "menu.chinese.chicken_manchurian": "Chicken Manchurian",
  "menu.chinese.chicken_manchurian.desc": "Chicken in manchurian sauce",
  "menu.chinese.double_egg_chicken_fried_rice": "Double Egg Chicken Fried Rice",
  "menu.chinese.double_egg_chicken_fried_rice.desc": "Fried rice with double egg and chicken",
  "menu.chinese.special_chicken_noodles": "Special Chicken Noodles",
  "menu.chinese.special_chicken_noodles.desc": "Special recipe noodles with chicken",
  "menu.chinese.special_chicken_manchurian": "Special Chicken Manchurian",
  "menu.chinese.special_chicken_manchurian.desc": "Special recipe chicken manchurian",
  "menu.chinese.schezwan_chicken_fried_rice": "Schezwan Chicken Fried Rice",
  "menu.chinese.schezwan_chicken_fried_rice.desc": "Spicy schezwan style chicken fried rice",

  // Continental menu items
  "menu.continental.french_fries": "French Fries",
  "menu.continental.french_fries.desc": "Crispy fried potato strips",
  "menu.continental.veg_sandwich": "Veg Sandwich",
  "menu.continental.veg_sandwich.desc": "Sandwich with mixed vegetables",
  "menu.continental.veg_burger": "Veg Burger",
  "menu.continental.veg_burger.desc": "Burger with vegetable patty",
  "menu.continental.potato_spring": "Potato Spring",
  "menu.continental.potato_spring.desc": "Crispy potato spring rolls",
  "menu.continental.paneer_sandwich": "Paneer Sandwich",
  "menu.continental.paneer_sandwich.desc": "Sandwich with paneer filling",
  "menu.continental.chicken_sandwich": "Chicken Sandwich",
  "menu.continental.chicken_sandwich.desc": "Sandwich with chicken filling",
  "menu.continental.chicken_burger": "Chicken Burger",
  "menu.continental.chicken_burger.desc": "Juicy chicken patty burger with fresh vegetables",

  // Mojitos menu items
  "menu.mojitos.classic": "Classic Mojito",
  "menu.mojitos.classic.desc": "Refreshing mint and lime mojito",
  "menu.mojitos.lime_mint": "Lime Mint Mojito",
  "menu.mojitos.lime_mint.desc": "Zesty lime and fresh mint mojito",
  "menu.mojitos.orange": "Orange Mojito",
  "menu.mojitos.orange.desc": "Refreshing orange flavored mojito",
  "menu.mojitos.green_apple": "Green Apple Mojito",
  "menu.mojitos.green_apple.desc": "Sweet and tangy green apple mojito",
  "menu.mojitos.kiwi": "Kiwi Mojito",
  "menu.mojitos.kiwi.desc": "Exotic kiwi flavored mojito",
  "menu.mojitos.black_currant": "Black Currant Mojito",
  "menu.mojitos.black_currant.desc": "Rich black currant flavored mojito",
  "menu.mojitos.strawberry": "Strawberry Mojito",
  "menu.mojitos.strawberry.desc": "Sweet strawberry flavored mojito",

  // Juices menu items
  "menu.juices.banana": "Banana",
  "menu.juices.banana.desc": "Fresh banana juice",
  "menu.juices.watermelon": "Watermelon",
  "menu.juices.watermelon.desc": "Refreshing watermelon juice",
  "menu.juices.musk_melon": "Musk Melon",
  "menu.juices.musk_melon.desc": "Sweet musk melon juice",
  "menu.juices.pineapple": "Pineapple",
  "menu.juices.pineapple.desc": "Tangy pineapple juice",
  "menu.juices.sapota": "Sapota",
  "menu.juices.sapota.desc": "Sapota (chikoo) juice",
  "menu.juices.grape": "Grape",
  "menu.juices.grape.desc": "Fresh grape juice",
  "menu.juices.carrot_milk": "Carrot-Milk",
  "menu.juices.carrot_milk.desc": "Carrot juice with milk",
  "menu.juices.beetroot_milk": "Beetroot-Milk",
  "menu.juices.beetroot_milk.desc": "Beetroot juice with milk",
  "menu.juices.carrot_beetroot_mix": "Carrot & Beetroot Mix (Milk)",
  "menu.juices.carrot_beetroot_mix.desc": "Mixed carrot and beetroot juice with milk",
  "menu.juices.carrot_pure": "Carrot Pure",
  "menu.juices.carrot_pure.desc": "Pure carrot juice",
  "menu.juices.beetroot_pure": "Beetroot Pure",
  "menu.juices.beetroot_pure.desc": "Pure beetroot juice",
  "menu.juices.apple": "Apple",
  "menu.juices.apple.desc": "Fresh apple juice",
  "menu.juices.pomegranate": "Pomegranate",
  "menu.juices.pomegranate.desc": "Fresh pomegranate juice",
  "menu.juices.abc": "ABC Juice",
  "menu.juices.abc.desc": "Apple, Beetroot & Carrot mixed juice",
  "menu.juices.carrot_beetroot_mix_pure": "Carrot & Beetroot Mix Pure",
  "menu.juices.carrot_beetroot_mix_pure.desc": "Pure mixed carrot and beetroot juice",

  // Biryani menu items
  "menu.biryani.veg": "Veg Biryani",
  "menu.biryani.veg.desc": "Aromatic biryani with mixed vegetables and spices",
  "menu.biryani.rice": "Biryani Rice",
  "menu.biryani.rice.desc": "Aromatic biryani rice",
  "menu.biryani.chicken_dum": "Chicken Dum",
  "menu.biryani.chicken_dum.desc": "Traditional slow-cooked chicken biryani",
  "menu.biryani.chicken_fry": "Chicken Fry Biryani",
  "menu.biryani.chicken_fry.desc": "Biryani with fried chicken pieces",
  "menu.biryani.egg": "Egg Biryani",
  "menu.biryani.egg.desc": "Biryani with boiled eggs",
  "menu.biryani.lollipop": "Lollipop Biryani",
  "menu.biryani.lollipop.desc": "Biryani with chicken lollipops",
  "menu.biryani.special_chicken": "Special Chicken Biryani",
  "menu.biryani.special_chicken.desc": "Chef's special chicken biryani",
  "menu.biryani.wings": "Wings Biryani",
  "menu.biryani.wings.desc": "Biryani with chicken wings",

  // Starters menu items
  "menu.starters.chilli_paneer": "Chilli Paneer",
  "menu.starters.chilli_paneer.desc": "Spicy paneer with bell peppers",
  "menu.starters.paneer_65": "Paneer 65",
  "menu.starters.paneer_65.desc": "Spicy, deep-fried paneer",
  "menu.starters.veg_manchuria": "Veg Manchuria",
  "menu.starters.veg_manchuria.desc": "Mixed vegetable manchurian",
  "menu.starters.chicken_555": "Chicken 555",
  "menu.starters.chicken_555.desc": "Special spicy chicken starter",
  "menu.starters.chicken_65": "Chicken 65",
  "menu.starters.chicken_65.desc": "Spicy, deep-fried chicken",
  "menu.starters.chicken_lollipop": "Chicken Lollipop",
  "menu.starters.chicken_lollipop.desc": "Spicy chicken winglets",
  "menu.starters.chicken_fried_wings": "Chicken Fried Wings",
  "menu.starters.chicken_fried_wings.desc": "Crispy fried chicken wings",
  "menu.starters.chicken_manchuria": "Chicken Manchuria",
  "menu.starters.chicken_manchuria.desc": "Chicken in manchurian sauce",
  "menu.starters.chilli_chicken": "Chilli Chicken",
  "menu.starters.chilli_chicken.desc": "Spicy chicken with bell peppers",
  "menu.starters.chicken_majestic": "Chicken Majestic",
  "menu.starters.chicken_majestic.desc": "Special Hyderabadi style chicken starter",

  // Combos menu items
  "menu.combos.veg_classic": "Veg Classic Combo",
  "menu.combos.veg_classic.desc": "Veg Noodles/Rice + Veg Sandwich + French Fries + Mojito",
  "menu.combos.veg_delight": "Veg Delight Combo",
  "menu.combos.veg_delight.desc": "Veg Noodles/Rice + Veg Burger + Veg Manchuria + Mojito",
  "menu.combos.paneer_treat": "Paneer Treat Combo",
  "menu.combos.paneer_treat.desc": "Paneer Rice + Paneer Sandwich + French Fries + Mojito",
  "menu.combos.mr_chicken": "Mr. Chicken Combo",
  "menu.combos.mr_chicken.desc": "Chicken Rice + Chilli Chicken + French Fries + Mojito",
  "menu.combos.spicy_chicken": "Spicy Chicken Combo",
  "menu.combos.spicy_chicken.desc": "Chicken Noodles/Rice + Chicken Wings + French Fries + 2 Mojito",
  "menu.combos.chicken_feast": "Chicken Feast Combo",
  "menu.combos.chicken_feast.desc":
    "Chicken Noodles + Chicken Rice + Chilli Chicken + Chicken Burger + French Fries + 2 Mojito",

  // Add translations for special offers
  "offers.title": "15% Off Fast Food Items",
  "offers.description": "Get 15% off on all fast food items + FREE ThumbsUp with a minimum bill of ₹250!",
  "offers.validUntil": "Valid Till 31 March",

  // Language notification
  "notification.switchLanguage": "Click here to switch language",
  "language.kannada": "ಕನ್ನಡ",
}

// Telugu translations
const teTranslations = {
  // Navigation
  "nav.home": "హోమ్",
  "nav.menu": "మెనూ",
  "nav.contact": "సంప్రదించండి",
  "nav.about": "మా గురించి",

  // Home page
  "home.hero.title": "శ్రీ ఫ్రెండ్స్ అండ్ ఫ్లేవర్స్",
  "home.hero.subtitle": "రుచి మరియు ఆకర్షణ కలిసే చోట",
  "home.hero.button": "మెనూ చూడండి",
  "home.offers.title": "ప్రత్యేక ఆఫర్లు",
  "home.story.title": "మా కథ",
  "home.story.description1":
    "శ్రీ ఫ్రెండ్స్ అండ్ ఫ్లేవర్స్ 2025లో ప్రారంభమైన కొత్త వ్యాపారం, ఆహారం మరియు సమాజం పట్ల ఉమ్మడి ఆసక్తి కలిగిన నలుగురు జీవిత కాల స్నేహితులచే స్థాపించబడింది. మా ప్రయాణం ఒక సాధారణ ఆలోచనతో ప్రారంభమైంది - ప్రజలు సమావేశమై, అద్భుతమైన భోజనాన్ని ఆస్వాదించి, జీవితంలోని ఆనందాలను కలిసి జరుపుకునే ప్రదేశాన్ని సృష్టించడం.",
  "home.story.description2":
    "స్థానికంగా సేకరించిన పదార్థాలు మరియు నాణ్యతకు కట్టుబడి ఉండటం వంటి వారసత్వాన్ని కొనసాగిస్తూ, మేము ప్రతి వంటకానికి తాజా శక్తి మరియు సృజనాత్మకతను తీసుకువస్తాము. మాలో 20 సంవత్సరాలకు పైగా వంట అనుభవంతో, మా నిపుణత, ప్రత్యేక దృక్కోణాలు మరియు మా స్నేహం వలె సజీవమైన మరియు వైవిధ్యమైన రుచుల పట్ల ప్రేమను మేము మిళితం చేస్తాము.",
  "home.story.description3":
    "శ్రీ ఫ్రెండ్స్ అండ్ ఫ్లేవర్స్లో, మా లక్ష్యం ప్రజలను కలిపే గుర్తుండిపోయే భోజన అనుభవాలను రూపొందించడం. ప్రతి భోజనం శ్రద్ధతో తయారు చేయబడుతుంది, మరియు ప్రతి సందర్శన మీరు ప్రేమించే వారితో కొత్త క్షణాలను సృష్టించుకునే అవకాశం. మిమ్మల్ని స్వాగతించడానికి మరియు మా వంటగది వెచ్చదనాన్ని మీతో పంచుకోవడానికి మేము చాలా ఉత్సాహంగా ఉన్నాము.",
  "home.story.description4": "ఆహారం కోసం రండి, కథల కోసం ఉండండి - మీతో ఈ సాహసాన్ని పంచుకోవడానికి మేము ఎదురుచూస్తున్నాము.",
  "home.featured.title": "ఫీచర్డ్ మెనూ",
  "home.featured.subtitle": "ఉత్సాహంతో మరియు అత్యుత్తమ పదార్థాలతో తయారు చేసిన మా అత్యంత ప్రజాదరణ పొందిన వంటకాలను అన్వేషించండి",
  "home.featured.button": "పూర్తి మెనూ చూడండి",
  "home.visit.title": "మమ్మల్ని సందర్శించండి",
  "home.visit.description": "మేము నగర కేంద్రంలో ఉన్నాము. మా వెచ్చని వాతావరణం మరియు అద్భుతమైన సేవను అనుభవించండి.",
  "home.visit.address.title": "చిరునామా",
  "home.visit.phone.title": "ఫోన్",
  "home.visit.email.title": "ఇమెయిల్",
  "home.visit.hours.title": "పని గంటలు",
  "home.visit.hours.weekdays": "సోమ-శుక్ర: ఉ.11-రా.10",
  "home.visit.hours.weekends": "శని-ఆది: ఉ.10-రా.11",
  "home.visit.button": "మమ్మల్ని సంప్రదించండి",

  // Address
  "address.full": "5-9-7, 1వ లైన్ బ్రోడిపేట, గుంటూరు, ఆంధ్రప్రదేశ్ - 522002",
  "address.phone": "+91 81428 90257",
  "address.email": "friendsandflavoursrestaurant@gmail.com",

  // Menu page
  "menu.hero.title": "మా మెనూ",
  "menu.hero.subtitle": "శ్రీ ఫ్రెండ్స్ అండ్ ఫ్లేవర్స్లో జాగ్రత్తగా తయారు చేసిన వంటకాలను అన్వేషించండి",
  "menu.dietary.title": "ప్రత్యేక ఆహార అవసరాలు",
  "menu.dietary.description":
    "మేము ప్రత్యేక ఆహార అవసరాలను సర్దుబాటు చేయడానికి సంతోషిస్తున్నాము. దయచేసి మీ సర్వర్‌కి ఏవైనా అలెర్జీలు లేదా పరిమితుల గురించి తెలియజేయండి. శాఖాహార, వేగన్ మరియు గ్లూటెన్-ఫ్రీ ఎంపికలు అభ్యర్థన మేరకు అందుబాటులో ఉన్నాయి.",
  "menu.dietary.button": "ప్రత్యేక అభ్యర్థనల కోసం మమ్మల్ని సంప్రదించండి",
  "menu.filter.by": "ఫిల్టర్ చేయండి:",
  "menu.filter.all": "అన్నీ",
  "menu.filter.veg": "శాఖాహారం మాత్రమే",
  "menu.filter.nonveg": "మాంసాహారం",
  "menu.all.items": "అన్ని వంటకాలు",

  // Contact page
  "contact.hero.title": "మమ్మల్ని సంప్రదించండి",
  "contact.hero.subtitle": "రిజర్వేషన్లు, విచారణలు లేదా అభిప్రాయం కోసం మమ్మల్ని సంప్రదించండి",
  "contact.info.title": "సంప్రదించండి",
  "contact.info.description":
    "మీ నుండి వినడానికి మేము ఇష్టపడతాము. ఏవైనా ప్రశ్నలు, రిజర్వేషన్ అభ్యర్థనలు లేదా మీ భోజన అనుభవం గురించి అభిప్రాయాన్ని తెలియజేయడానికి సంకోచించకండి.",
  "contact.form.title": "మాకు సందేశం పంపండి",
  "contact.form.description": "దిగువ ఫారమ్‌ను పూరించండి మరియు మేము వీలైనంత త్వరగా మీకు తిరిగి వస్తాము.",
  "contact.form.name": "పేరు",
  "contact.form.email": "ఇమెయిల్",
  "contact.form.phone": "ఫోన్ (ఐచ్ఛికం)",
  "contact.form.message": "సందేశం",
  "contact.form.button": "సందేశం పంపండి",
  "contact.form.sending": "పంపుతోంది...",
  "contact.map.title": "మమ్మల్ని కనుగొనండి",

  // Footer
  "footer.tagline": "2025 నుండి మీ టేబుల్‌కు అసలైన రుచులను అందిస్తున్నాము.",
  "footer.links.title": "త్వరిత లింక్‌లు",
  "footer.connect.title": "మమ్మల్ని కనెక్ట్ చేయండి",
  "footer.connect.description": "అప్‌డేట్‌లు, ప్రమోషన్‌లు మరియు వంట ప్రేరణ కోసం సోషల్ మీడియాలో మమ్మల్ని ఫాలో అవ్వండి.",
  "footer.copyright": "© 2024 శ్రీ ఫ్రెండ్స్ అండ్ ఫ్లేవర్స్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
  "footer.developer": "డిజైన్ మరియు డెవలప్ చేసినది జి వి ఆర్ నిశ్చల్ రెడ్డి",

  // Language switcher
  "language.english": "English",
  "language.telugu": "తెలుగు",
  "language.hindi": "हिंदी",
  "language.tamil": "தமிழ்",
  "language.kannada": "ಕನ್ನಡ",

  // Add menu category translations
  "menu.category.rice": "రైస్ వంటకాలు",
  "menu.category.chinese": "చైనీస్",
  "menu.category.continental": "కాంటినెంటల్",
  "menu.category.mojitos": "మోజిటోలు",
  "menu.category.juices": "తాజా రసాలు",
  "menu.category.biryani": "బిర్యాని",
  "menu.category.starters": "స్టార్టర్స్",
  "menu.category.combos": "కాంబోలు",

  // Price format
  "price.starting.from": "₹{0} నుండి ప్రారంభం",

  // Add menu item translations for rice category
  "menu.rice.pappu_avakaya": "పప్పు ఆవకాయ రైస్",
  "menu.rice.pappu_avakaya.desc": "పప్పు మరియు కారం ఆవకాయతో సాంప్రదాయ రైస్",
  "menu.rice.sambar": "సాంబార్ రైస్",
  "menu.rice.sambar.desc": "రుచికరమైన సాంబార్‌తో కలిపిన రైస్",
  "menu.rice.nalla_karam": "నల్ల కారం రైస్",
  "menu.rice.nalla_karam.desc": "కారం నల్ల మిరియాలతో రైస్",
  "menu.rice.podeena": "పొదీనా రైస్",
  "menu.rice.podeena.desc": "పొదీనా రుచితో రైస్",
  "menu.rice.tomato": "టమాటా రైస్",
  "menu.rice.tomato.desc": "పులుపు టమాటా బేస్‌తో వండిన రైస్",
  "menu.rice.lemon": "నిమ్మకాయ రైస్",
  "menu.rice.lemon.desc": "పులుపు నిమ్మకాయ రుచితో వేరుశనగలతో రైస్",
  "menu.rice.egg": "గుడ్డు రైస్",
  "menu.rice.egg.desc": "గుడ్డుతో రైస్",
  "menu.rice.gongura": "గోంగూర రైస్",
  "menu.rice.gongura.desc": "పులుపు గోంగూర ఆకులతో రైస్",
  "menu.rice.jeera": "జీరా రైస్",
  "menu.rice.jeera.desc": "సువాసన జీలకర్ర రుచితో రైస్",
  "menu.rice.manchurian": "మంచూరియన్ రైస్",
  "menu.rice.manchurian.desc": "మంచూరియన్ సాస్‌తో రైస్",
  "menu.rice.chicken": "చికెన్ రైస్",
  "menu.rice.chicken.desc": "చికెన్ ముక్కలతో రైస్",
  "menu.rice.veg_biryani": "వెజ్ బిర్యాని",
  "menu.rice.veg_biryani.desc": "సువాసన మసాలాలతో కూరగాయల బిర్యాని",
  "menu.rice.curd": "పెరుగు రైస్",
  "menu.rice.curd.desc": "పోపుతో చల్లని పెరుగు రైస్",
  "menu.rice.mini_meals": "మినీ మీల్స్",
  "menu.rice.mini_meals.desc": "చిన్న పోర్షన్ పూర్తి భోజనం",
  "menu.rice.paneer": "పనీర్ రైస్",
  "menu.rice.paneer.desc": "పనీర్ ముక్కలతో రైస్",
  "menu.rice.cashew": "జీడిపప్పు రైస్",
  "menu.rice.cashew.desc": "జీడిపప్పుతో రైస్",
  "menu.rice.sambar_chicken": "సాంబార్ రైస్ + చికెన్ పకోడా",
  "menu.rice.sambar_chicken.desc": "క్రిస్పీ చికెన్ పకోడాతో వడ్డించే సాంబార్ రైస్",

  // Chinese menu items
  "menu.chinese.veg_noodles": "వెజ్ నూడుల్స్",
  "menu.chinese.veg_noodles.desc": "కూరగాయలతో స్టిర్-ఫ్రైడ్ నూడుల్స్",
  "menu.chinese.veg_fried_rice": "వెజ్ ఫ్రైడ్ రైస్",
  "menu.chinese.veg_fried_rice.desc": "కూరగాయలతో స్టిర్-ఫ్రైడ్ రైస్",
  "menu.chinese.veg_manchurian": "వెజ్ మంచూరియన్",
  "menu.chinese.veg_manchurian.desc": "కారం, తీపి మరియు పులుపు సాస్‌లో కూరగాయల బంతులు",
  "menu.chinese.egg_noodles": "గుడ్డు నూడుల్స్",
  "menu.chinese.egg_noodles.desc": "గుడ్డుతో స్టిర్-ఫ్రైడ్ నూడుల్స్",
  "menu.chinese.egg_fried_rice": "గుడ్డు ఫ్రైడ్ రైస్",
  "menu.chinese.egg_fried_rice.desc": "గుడ్డుతో స్టిర్-ఫ్రైడ్ రైస్",
  "menu.chinese.egg_manchurian": "గుడ్డు మంచూరియన్",
  "menu.chinese.egg_manchurian.desc": "మంచూరియన్ సాస్‌లో గుడ్డు ఫ్రిట్టర్స్",
  "menu.chinese.double_egg_noodles": "డబుల్ గుడ్డు నూడుల్స్",
  "menu.chinese.double_egg_noodles.desc": "రెండు గుడ్లతో నూడుల్స్",
  "menu.chinese.double_egg_fried_rice": "డబుల్ గుడ్డు ఫ్రైడ్ రైస్",
  "menu.chinese.double_egg_fried_rice.desc": "రెండు గుడ్లతో ఫ్రైడ్ రైస్",
  "menu.chinese.double_egg_manchurian": "డబుల్ గుడ్డు మంచూరియన్",
  "menu.chinese.double_egg_manchurian.desc": "మంచూరియన్ సాస్‌లో డబుల్ గుడ్డు ఫ్రిట్టర్స్",
  "menu.chinese.chicken_noodles": "చికెన్ నూడుల్స్",
  "menu.chinese.chicken_noodles.desc": "చికెన్‌తో స్టిర్-ఫ్రైడ్ నూడుల్స్",
  "menu.chinese.chicken_fried_rice": "చికెన్ ఫ్రైడ్ రైస్",
  "menu.chinese.chicken_fried_rice.desc": "చికెన్‌తో స్టిర్-ఫ్రైడ్ రైస్",
  "menu.chinese.chicken_manchurian": "చికెన్ మంచూరియన్",
  "menu.chinese.chicken_manchurian.desc": "మంచూరియన్ సాస్‌లో చికెన్",
  "menu.chinese.double_egg_chicken_fried_rice": "డబుల్ గుడ్డు చికెన్ ఫ్రైడ్ రైస్",
  "menu.chinese.double_egg_chicken_fried_rice.desc": "డబుల్ గుడ్డు మరియు చికెన్‌తో ఫ్రైడ్ రైస్",
  "menu.chinese.special_chicken_noodles": "స్పెషల్ చికెన్ నూడుల్స్",
  "menu.chinese.special_chicken_noodles.desc": "ప్రత్యేక రెసిపీ చికెన్ నూడుల్స్",
  "menu.chinese.special_chicken_manchurian": "స్పెషల్ చికెన్ మంచూరియన్",
  "menu.chinese.special_chicken_manchurian.desc": "ప్రత్యేక రెసిపీ చికెన్ మంచూరియన్",
  "menu.chinese.schezwan_chicken_fried_rice": "సెజ్వాన్ చికెన్ ఫ్రైడ్ రైస్",
  "menu.chinese.schezwan_chicken_fried_rice.desc": "కారం సెజ్వాన్ స్టైల్ చికెన్ ఫ్రైడ్ రైస్",

  // Continental menu items
  "menu.continental.french_fries": "ఫ్రెంచ్ ఫ్రైస్",
  "menu.continental.french_fries.desc": "క్రిస్పీ వేయించిన బంగాళాదుంప స్ట్రిప్స్",
  "menu.continental.veg_sandwich": "వెజ్ శాండ్విచ్",
  "menu.continental.veg_sandwich.desc": "కూరగాయలతో శాండ్విచ్",
  "menu.continental.veg_burger": "వెజ్ బర్గర్",
  "menu.continental.veg_burger.desc": "కూరగాయల పేటీతో బర్గర్",
  "menu.continental.potato_spring": "పొటాటో స్ప్రింగ్",
  "menu.continental.potato_spring.desc": "క్రిస్పీ బంగాళాదుంప స్ప్రింగ్ రోల్స్",
  "menu.continental.paneer_sandwich": "పనీర్ శాండ్విచ్",
  "menu.continental.paneer_sandwich.desc": "పనీర్ ఫిల్లింగ్‌తో శాండ్విచ్",
  "menu.continental.chicken_sandwich": "చికెన్ శాండ్విచ్",
  "menu.continental.chicken_sandwich.desc": "చికెన్ ఫిల్లింగ్‌తో శాండ్విచ్",
  "menu.continental.chicken_burger": "చికెన్ బర్గర్",
  "menu.continental.chicken_burger.desc": "తాజా కూరగాయలతో జూసీ చికెన్ పాటీ బర్గర్",

  // Mojitos menu items
  "menu.mojitos.classic": "క్లాసిక్ మోజిటో",
  "menu.mojitos.classic.desc": "రిఫ్రెషింగ్ మింట్ మరియు లైమ్ మోజిటో",
  "menu.mojitos.lime_mint": "లైమ్ మింట్ మోజిటో",
  "menu.mojitos.lime_mint.desc": "జెస్టీ లైమ్ మరియు తాజా మింట్ మోజిటో",
  "menu.mojitos.orange": "ఆరెంజ్ మోజిటో",
  "menu.mojitos.orange.desc": "రిఫ్రెషింగ్ నారింజ రుచి మోజిటో",
  "menu.mojitos.green_apple": "గ్రీన్ యాపిల్ మోజిటో",
  "menu.mojitos.green_apple.desc": "తీపి మరియు పులుపు ఆకుపచ్చ యాపిల్ మోజిటో",
  "menu.mojitos.kiwi": "కివి మోజిటో",
  "menu.mojitos.kiwi.desc": "ఎగ్జాటిక్ కివి రుచి మోజిటో",
  "menu.mojitos.black_currant": "బ్లాక్ కరెంట్ మోజిటో",
  "menu.mojitos.black_currant.desc": "సంపన్న బ్లాక్ కరెంట్ రుచి మోజిటో",
  "menu.mojitos.strawberry": "స్ట్రాబెర్రీ మోజిటో",
  "menu.mojitos.strawberry.desc": "తీపి స్ట్రాబెర్రీ రుచి మోజిటో",

  // Juices menu items
  "menu.juices.banana": "అరటిపండు",
  "menu.juices.banana.desc": "తాజా అరటిపండు రసం",
  "menu.juices.watermelon": "పుచ్చకాయ",
  "menu.juices.watermelon.desc": "రిఫ్రెషింగ్ పుచ్చకాయ రసం",
  "menu.juices.musk_melon": "ఖర్బూజా",
  "menu.juices.musk_melon.desc": "తీపి ఖర్బూజా రసం",
  "menu.juices.pineapple": "అనాస",
  "menu.juices.pineapple.desc": "పులుపు అనాస రసం",
  "menu.juices.sapota": "సపోటా",
  "menu.juices.sapota.desc": "సపోటా (చిక్కూ) రసం",
  "menu.juices.grape": "ద్రాక్ష",
  "menu.juices.grape.desc": "తాజా ద్రాక్ష రసం",
  "menu.juices.carrot_milk": "కారెట్-పాలు",
  "menu.juices.carrot_milk.desc": "పాలతో కారెట్ రసం",
  "menu.juices.beetroot_milk": "బీట్రూట్-పాలు",
  "menu.juices.beetroot_milk.desc": "పాలతో బీట్రూట్ రసం",
  "menu.juices.carrot_beetroot_mix": "కారెట్ & బీట్రూట్ మిక్స్ (పాలు)",
  "menu.juices.carrot_beetroot_mix.desc": "పాలతో మిక్స్ చేసిన కారెట్ మరియు బీట్రూట్ రసం",
  "menu.juices.carrot_pure": "కారెట్ ప్యూర్",
  "menu.juices.carrot_pure.desc": "పూర్తి కారెట్ రసం",
  "menu.juices.beetroot_pure": "బీట్రూట్ ప్యూర్",
  "menu.juices.beetroot_pure.desc": "పూర్తి బీట్రూట్ రసం",
  "menu.juices.apple": "యాపిల్",
  "menu.juices.apple.desc": "తాజా యాపిల్ రసం",
  "menu.juices.pomegranate": "దానిమ్మ",
  "menu.juices.pomegranate.desc": "తాజా దానిమ్మ రసం",
  "menu.juices.abc": "ABC రసం",
  "menu.juices.abc.desc": "యాపిల్, బీట్రూట్ & కారెట్ మిక్స్ రసం",
  "menu.juices.carrot_beetroot_mix_pure": "కారెట్ & బీట్రూట్ మిక్స్ ప్యూర్",
  "menu.juices.carrot_beetroot_mix_pure.desc": "పూర్తి మిక్స్ చేసిన కారెట్ మరియు బీట్రూట్ రసం",

  // Biryani menu items
  "menu.biryani.veg": "వెజ్ బిర్యాని",
  "menu.biryani.veg.desc": "కూరగాయలు మరియు మసాలాలతో సువాసన బిర్యాని",
  "menu.biryani.rice": "బిర్యాని రైస్",
  "menu.biryani.rice.desc": "సువాసన బిర్యాని రైస్",
  "menu.biryani.chicken_dum": "చికెన్ దమ్",
  "menu.biryani.chicken_dum.desc": "సాంప్రదాయ నెమ్మదిగా వండిన చికెన్ బిర్యాని",
  "menu.biryani.chicken_fry": "చికెన్ ఫ్రై బిర్యాని",
  "menu.biryani.chicken_fry.desc": "వేయించిన చికెన్ ముక్కలతో బిర్యాని",
  "menu.biryani.egg": "గుడ్డు బిర్యాని",
  "menu.biryani.egg.desc": "ఉడికించిన గుడ్లతో బిర్యాని",
  "menu.biryani.lollipop": "లాలిపాప్ బిర్యాని",
  "menu.biryani.lollipop.desc": "చికెన్ లాలిపాప్‌లతో బిర్యాని",
  "menu.biryani.special_chicken": "స్పెషల్ చికెన్ బిర్యాని",
  "menu.biryani.special_chicken.desc": "షెఫ్ ప్రత్యేక చికెన్ బిర్యాని",
  "menu.biryani.wings": "వింగ్స్ బిర్యాని",
  "menu.biryani.wings.desc": "చికెన్ వింగ్స్‌తో బిర్యాని",

  // Starters menu items
  "menu.starters.chilli_paneer": "చిల్లీ పనీర్",
  "menu.starters.chilli_paneer.desc": "కారం పనీర్ బెల్ పెప్పర్స్‌తో",
  "menu.starters.paneer_65": "పనీర్ 65",
  "menu.starters.paneer_65.desc": "కారం, డీప్-ఫ్రైడ్ పనీర్",
  "menu.starters.veg_manchuria": "వెజ్ మంచూరియా",
  "menu.starters.veg_manchuria.desc": "మిక్స్డ్ వెజిటబుల్ మంచూరియన్",
  "menu.starters.chicken_555": "చికెన్ 555",
  "menu.starters.chicken_555.desc": "ప్రత్యేక కారం చికెన్ స్టార్టర్",
  "menu.starters.chicken_65": "చికెన్ 65",
  "menu.starters.chicken_65.desc": "కారం, డీప్-ఫ్రైడ్ చికెన్",
  "menu.starters.chicken_lollipop": "చికెన్ లాలిపాప్",
  "menu.starters.chicken_lollipop.desc": "కారం చికెన్ వింగ్లెట్స్",
  "menu.starters.chicken_fried_wings": "చికెన్ ఫ్రైడ్ వింగ్స్",
  "menu.starters.chicken_fried_wings.desc": "క్రిస్పీ వేయించిన చికెన్ వింగ్స్",
  "menu.starters.chicken_manchuria": "చికెన్ మంచూరియా",
  "menu.starters.chicken_manchuria.desc": "మంచూరియన్ సాస్‌లో చికెన్",
  "menu.starters.chilli_chicken": "చిల్లీ చికెన్",
  "menu.starters.chilli_chicken.desc": "కారం చికెన్ బెల్ పెప్పర్స్‌తో",
  "menu.starters.chicken_majestic": "చికెన్ మెజెస్టిక్",
  "menu.starters.chicken_majestic.desc": "ప్రత్యేక హైదరాబాదీ స్టైల్ చికెన్ స్టార్టర్",

  // Combos menu items
  "menu.combos.veg_classic": "వెజ్ క్లాసిక్ కాంబో",
  "menu.combos.veg_classic.desc": "వెజ్ నూడుల్స్/రైస్ + వెజ్ శాండ్విచ్ + ఫ్రెంచ్ ఫ్రైస్ + మోజిటో",
  "menu.combos.veg_delight": "వెజ్ డిలైట్ కాంబో",
  "menu.combos.veg_delight.desc": "వెజ్ నూడుల్స్/రైస్ + వెజ్ బర్గర్ + వెజ్ మంచూరియా + మోజిటో",
  "menu.combos.paneer_treat": "పనీర్ ట్రీట్ కాంబో",
  "menu.combos.paneer_treat.desc": "పనీర్ రైస్ + పనీర్ శాండ్విచ్ + ఫ్రెంచ్ ఫ్రైస్ + మొజిటో",
  "menu.combos.mr_chicken": "మిస్టర్ చికెన్ కాంబో",
  "menu.combos.mr_chicken.desc": "చికెన్ రైస్ + చిల్లి చికెన్ + ఫ్రెంచ్ ఫ్రైస్ + మోజిటో",
  "menu.combos.spicy_chicken": "స్పైసీ చికెన్ కాంబో",
  "menu.combos.spicy_chicken.desc": "చికెన్ నూడుల్స్/రైస్ + చికెన్ వింగ్స్ + ఫ్రెంచ్ ఫ్రైస్ + 2 మోజిటో",
  "menu.combos.chicken_feast": "చికెన్ ఫీస్ట్ కాంబో",
  "menu.combos.chicken_feast.desc": "చికెన్ నూడుల్స్ + చికెన్ రైస్ + చిల్లి చికెన్ + చికెన్ బర్గర్ + ఫ్రెంచ్ ఫ్రైస్ + 2 మోజిటో",

  // Add translations for special offers
  "offers.title": "ఫాస్ట్ ఫుడ్ ఐటమ్స్‌పై 15% తగ్గింపు",
  "offers.description": "కనీస బిల్లు ₹250తో అన్ని ఫాస్ట్ ఫుడ్ ఐటెమ్స్‌పై 15% తగ్గింపు + ఉచిత థంబ్స్‌అప్!",
  "offers.validUntil": "మార్చి 31 వరకు చెల్లుబాటు అవుతుంది",

  // Language notification
  "notification.switchLanguage": "భాష మార్చడానికి ఇక్కడ నొక్కండి",
  "language.kannada": "ಕನ್ನಡ",
}

// Add Hindi translations
const hiTranslations = {
  // Navigation
  "nav.home": "होम",
  "nav.menu": "मेन्यू",
  "nav.contact": "संपर्क करें",
  "nav.about": "हमारे बारे में",

  // Home page
  "home.hero.title": "श्री फ्रेंड्स एंड फ्लेवर्स",
  "home.hero.subtitle": "जहां स्वाद मिलता है सौंदर्य से",
  "home.hero.button": "मेन्यू देखें",
  "home.offers.title": "विशेष ऑफर",
  "home.story.title": "हमारी कहानी",
  "home.story.description1":
    "श्री फ्रेंड्स एंड फ्लेवर्स एक नया उद्यम है जो 2025 में अस्तित्व में आया, जिसकी स्थापना चार आजीवन दोस्तों द्वारा की गई थी जिनके पास भोजन और समुदाय के लिए साझा जुनून था। हमारी यात्रा एक सरल विचार से शुरू हुई - एक ऐसी जगह बनाना जहां लोग इकट्ठा हो सकें, अद्भुत भोजन का आनंद ले सकें, और जीवन की खुशियों को एक साथ मना सकें।",
  "home.story.description2":
    "स्थानीय स्तर पर प्राप्त सामग्री और गुणवत्ता के प्रति प्रतिबद्धता की विरासत पर निर्माण करते हुए, हम हर व्यंजन में ताजा ऊर्जा और रचनात्मकता लाते हैं। हमारे बीच 20 साल से अधिक के पाक अनुभव के साथ, हम अपनी विशेषज्ञता, अद्वितीय दृष्टिकोण और स्वादों के प्रति प्यार को मिलाते हैं जो हमारी दोस्ती की तरह जीवंत और विविध हैं।",
  "home.story.description3":
    "श्री फ्रेंड्स एंड फ्लेवर्स में, हमारा मिशन यादगार डाइनिंग अनुभव बनाना है जो लोगों को जोड़ते हैं। हर भोजन देखभाल के साथ बनाया जाता है, और हर यात्रा उन लोगों के साथ नए पल बनाने का अवसर है जिन्हें आप प्यार करते हैं। हम आपका स्वागत करने और आपके साथ अपने रसोई की गर्मी साझा करने के लिए बहुत उत्साहित हैं।",
  "home.story.description4":
    "भोजन के लिए आएं, कहानियों के लिए रुकें - हम आपके साथ इस साहसिक यात्रा को साझा करने के लिए इंतजार नहीं कर सकते।",
  "home.featured.title": "विशेष मेन्यू",
  "home.featured.subtitle": "जुनून और सबसे अच्छी सामग्री के साथ तैयार किए गए हमारे सबसे लोकप्रिय व्यंजनों का अन्वेषण करें",
  "home.featured.button": "पूरा मेन्यू देखें",
  "home.visit.title": "हमसे मिलें",
  "home.visit.description": "हम शहर के केंद्र में स्थित हैं। हमारे गर्म माहौल और असाधारण सेवा का अनुभव करें।",
  "home.visit.address.title": "पता",
  "home.visit.phone.title": "फोन",
  "home.visit.email.title": "ईमेल",
  "home.visit.hours.title": "समय",
  "home.visit.hours.weekdays": "सोम-शुक्र: सुबह 11 बजे - रात 10 बजे",
  "home.visit.hours.weekends": "शनि-रवि: सुबह 11 बजे - रात 10 बजे",
  "home.visit.button": "संपर्क करें",

  // Address
  "address.full": "5-9-7, पहली लाइन ब्रोडीपेट, गुंटूर, आंध्र प्रदेश - 522002",
  "address.phone": "+91 81428 90257",
  "address.email": "friendsandflavoursrestaurant@gmail.com",

  // Menu page
  "menu.hero.title": "हमारा मेन्यू",
  "menu.hero.subtitle": "श्री फ्रेंड्स एंड फ्लेवर्स में सावधानीपूर्वक तैयार किए गए व्यंजनों का अन्वेषण करें",
  "menu.dietary.title": "विशेष आहार आवश्यकताएं",
  "menu.dietary.description":
    "हम विशेष आहार संबंधी जरूरतों को पूरा करने में खुशी महसूस करते हैं। कृपया अपने सर्वर को किसी भी एलर्जी या प्रतिबंध के बारे में सूचित करें। शाकाहारी, वीगन और ग्लूटेन-फ्री विकल्प अनुरोध पर उपलब्ध हैं।",
  "menu.dietary.button": "विशेष अनुरोधों के लिए हमसे संपर्क करें",
  "menu.filter.by": "फ़िल्टर करें:",
  "menu.filter.all": "सभी",
  "menu.filter.veg": "केवल शाकाहारी",
  "menu.filter.nonveg": "मांसाहारी",
  "menu.all.items": "सभी आइटम",

  // Contact page
  "contact.hero.title": "संपर्क करें",
  "contact.hero.subtitle": "आरक्षण, पूछताछ या प्रतिक्रिया के लिए हमसे संपर्क करें",
  "contact.info.title": "संपर्क में रहें",
  "contact.info.description":
    "हम आपसे सुनना पसंद करेंगे। किसी भी प्रश्न, आरक्षण अनुरोध या अपने भोजन अनुभव के बारे में प्रतिक्रिया के साथ संपर्क करने में संकोच न करें।",
  "contact.form.title": "हमें संदेश भेजें",
  "contact.form.description": "नीचे दिए गए फॉर्म को भरें और हम जल्द से जल्द आपसे संपर्क करेंगे।",
  "contact.form.name": "नाम",
  "contact.form.email": "ईमेल",
  "contact.form.phone": "फोन (वैकल्पिक)",
  "contact.form.message": "संदेश",
  "contact.form.button": "संदेश भेजें",
  "contact.form.sending": "भेज रहा है...",
  "contact.map.title": "हमें खोजें",

  // Footer
  "footer.tagline": "2025 से आपकी मेज पर प्रामाणिक स्वाद लाते हुए।",
  "footer.links.title": "त्वरित लिंक",
  "footer.connect.title": "हमसे जुड़ें",
  "footer.connect.description": "अपडेट, प्रमोशन और पाक प्रेरणा के लिए सोशल मीडिया पर हमें फॉलो करें।",
  "footer.copyright": "© 2024 श्री फ्रेंड्स एंड फ्लेवर्स। सर्वाधिकार सुरक्षित।",
  "footer.developer": "डिज़ाइन और विकसित जी वी आर निश्चल रेड्डी द्वारा",

  // Language switcher
  "language.english": "English",
  "language.telugu": "తెలుగు",
  "language.hindi": "हिंदी",
  "language.tamil": "தமிழ்",
  "language.kannada": "ಕನ್ನಡ",

  // Add menu category translations
  "menu.category.rice": "चावल के व्यंजन",
  "menu.category.chinese": "चाइनीज",
  "menu.category.continental": "कॉन्टिनेंटल",
  "menu.category.mojitos": "मोहितो",
  "menu.category.juices": "ताजे रस",
  "menu.category.biryani": "बिरयानी",
  "menu.category.starters": "स्टार्टर्स",
  "menu.category.combos": "कॉम्बो",

  // Price format
  "price.starting.from": "₹{0} से शुरू",

  // Add menu item translations for rice category
  "menu.rice.pappu_avakaya": "पप्पू अवकाय राइस",
  "menu.rice.pappu_avakaya.desc": "पप्पू (दाल) और मसालेदार अवकाय अचार के साथ पारंपरिक चावल",
  "menu.rice.sambar": "सांभर राइस",
  "menu.rice.sambar.desc": "स्वादिष्ट सांभर के साथ मिश्रित चावल",
  "menu.rice.nalla_karam": "नल्ला करम राइस",
  "menu.rice.nalla_karam.desc": "मसालेदार काली मिर्च के साथ चावल",
  "menu.rice.podeena": "पुदीना राइस",
  "menu.rice.podeena.desc": "पुदीने के स्वाद वाले चावल",
  "menu.rice.tomato": "टमाटर राइस",
  "menu.rice.tomato.desc": "खट्टे टमाटर बेस के साथ पकाए गए चावल",
  "menu.rice.lemon": "नींबू राइस",
  "menu.rice.lemon.desc": "खट्टे नींबू के स्वाद वाले मूंगफली के साथ चावल",
  "menu.rice.egg": "अंडा राइस",
  "menu.rice.egg.desc": "अंडे के साथ चावल",
  "menu.rice.gongura": "गोंगुरा राइस",
  "menu.rice.gongura.desc": "खट्टे गोंगुरा पत्तों के साथ चावल",
  "menu.rice.jeera": "जीरा राइस",
  "menu.rice.jeera.desc": "सुगंधित जीरे के स्वाद वाले चावल",
  "menu.rice.manchurian": "मंचूरियन राइस",
  "menu.rice.manchurian.desc": "मंचूरियन सॉस के साथ चावल",
  "menu.rice.chicken": "चिकन राइस",
  "menu.rice.chicken.desc": "चिकन के टुकड़ों के साथ चावल",
  "menu.rice.veg_biryani": "वेज बिरयानी",
  "menu.rice.veg_biryani.desc": "सुगंधित मसालों के साथ सब्जी बिरयानी",
  "menu.rice.curd": "दही चावल",
  "menu.rice.curd.desc": "तड़के के साथ ठंडा दही चावल",
  "menu.rice.mini_meals": "मिनी मील्स",
  "menu.rice.mini_meals.desc": "छोटे हिस्से का पूरा भोजन",
  "menu.rice.paneer": "पनीर राइस",
  "menu.rice.paneer.desc": "पनीर के टुकड़ों के साथ चावल",
  "menu.rice.cashew": "काजू राइस",
  "menu.rice.cashew.desc": "काजू के साथ चावल",
  "menu.rice.sambar_chicken": "सांभर राइस + चिकन पकोड़ा",
  "menu.rice.sambar_chicken.desc": "क्रिस्पी चिकन पकोड़े के साथ परोसा गया सांभर राइस",

  // Chinese menu items
  "menu.chinese.veg_noodles": "वेज नूडल्स",
  "menu.chinese.veg_noodles.desc": "मिश्रित सब्जियों के साथ स्टिर-फ्राइड नूडल्स",
  "menu.chinese.veg_fried_rice": "वेज फ्राइड राइस",
  "menu.chinese.veg_fried_rice.desc": "मिश्रित सब्जियों के साथ स्टिर-फ्राइड राइस",
  "menu.chinese.veg_manchurian": "वेज मंचूरियन",
  "menu.chinese.veg_manchurian.desc": "मसालेदार, मीठे और खट्टे सॉस में सब्जी के गोले",
  "menu.chinese.egg_noodles": "अंडा नूडल्स",
  "menu.chinese.egg_noodles.desc": "अंडे के साथ स्टिर-फ्राइड नूडल्स",
  "menu.chinese.egg_fried_rice": "अंडा फ्राइड राइस",
  "menu.chinese.egg_fried_rice.desc": "अंडे के साथ स्टिर-फ्राइड राइस",
  "menu.chinese.egg_manchurian": "अंडा मंचूरियन",
  "menu.chinese.egg_manchurian.desc": "मंचूरियन सॉस में अंडे के पकोड़े",
  "menu.chinese.double_egg_noodles": "डबल अंडा नूडल्स",
  "menu.chinese.double_egg_noodles.desc": "दोगुने अंडे के साथ नूडल्स",
  "menu.chinese.double_egg_fried_rice": "डबल अंडा फ्राइड राइस",
  "menu.chinese.double_egg_fried_rice.desc": "दोगुने अंडे के साथ फ्राइड राइस",
  "menu.chinese.double_egg_manchurian": "डबल अंडा मंचूरियन",
  "menu.chinese.double_egg_manchurian.desc": "मंचूरियन सॉस में डबल अंडे के पकोड़े",
  "menu.chinese.chicken_noodles": "चिकन नूडल्स",
  "menu.chinese.chicken_noodles.desc": "चिकन के साथ स्टिर-फ्राइड नूडल्स",
  "menu.chinese.chicken_fried_rice": "Chicken Fried Rice",
  "menu.chinese.chicken_fried_rice.desc": "चिकन के साथ स्टिर-फ्राइड राइस",
  "menu.chinese.chicken_manchurian": "चिकन मंचूरियन",
  "menu.chinese.chicken_manchurian.desc": "मंचूरियन सॉस में चिकन",
  "menu.chinese.double_egg_chicken_fried_rice": "डबल अंडा चिकन फ्राइड राइस",
  "menu.chinese.double_egg_chicken_fried_rice.desc": "डबल अंडे और चिकन के साथ फ्राइड राइस",
  "menu.chinese.special_chicken_noodles": "स्पेशल चिकन नूडल्स",
  "menu.chinese.special_chicken_noodles.desc": "विशेष रेसिपी चिकन नूडल्स",
  "menu.chinese.special_chicken_manchurian": "स्पेशल चिकन मंचूरियन",
  "menu.chinese.special_chicken_manchurian.desc": "विशेष रेसिपी चिकन मंचूरियन",
  "menu.chinese.schezwan_chicken_fried_rice": "सेज़वान चिकन फ्राइड राइस",
  "menu.chinese.schezwan_chicken_fried_rice.desc": "मसालेदार सेज़वान स्टाइल चिकन फ्राइड राइस",

  // Continental menu items
  "menu.continental.french_fries": "फ्रेंच फ्राइज़",
  "menu.continental.french_fries.desc": "क्रिस्पी तले हुए आलू के स्ट्रिप्स",
  "menu.continental.veg_sandwich": "वेज सैंडविच",
  "menu.continental.veg_sandwich.desc": "मिश्रित सब्जियों के साथ सैंडविच",
  "menu.continental.veg_burger": "वेज बर्गर",
  "menu.continental.veg_burger.desc": "सब्जी पैटी के साथ बर्गर",
  "menu.continental.potato_spring": "पोटैटो स्प्रिंग",
  "menu.continental.potato_spring.desc": "क्रिस्पी आलू स्प्रिंग रोल्स",
  "menu.continental.paneer_sandwich": "पनीर सैंडविच",
  "menu.continental.paneer_sandwich.desc": "पनीर फिलिंग के साथ सैंडविच",
  "menu.continental.chicken_sandwich": "चिकन सैंडविच",
  "menu.continental.chicken_sandwich.desc": "चिकन फिलिंग के साथ सैंडविच",
  "menu.continental.chicken_burger": "चिकन बर्गर",
  "menu.continental.chicken_burger.desc": "ताजी सब्जियों के साथ जूसी चिकन पैटी बर्गर",

  // Mojitos menu items
  "menu.mojitos.classic": "क्लासिक मोहितो",
  "menu.mojitos.classic.desc": "ताज़गीदायक पुदीना और नींबू मोहितो",
  "menu.mojitos.lime_mint": "लाइम मिंट मोहितो",
  "menu.mojitos.lime_mint.desc": "तीखा नींबू और ताजा पुदीना मोहितो",
  "menu.mojitos.orange": "ऑरेंज मोहितो",
  "menu.mojitos.orange.desc": "ताज़गीदायक संतरे के स्वाद वाला मोहितो",
  "menu.mojitos.green_apple": "ग्रीन एप्पल मोहितो",
  "menu.mojitos.green_apple.desc": "मीठा और खट्टा हरे सेब का मोहितो",
  "menu.mojitos.kiwi": "कीवी मोहितो",
  "menu.mojitos.kiwi.desc": "एक्जोटिक कीवी स्वाद वाला मोहितो",
  "menu.mojitos.black_currant": "ब्लैक करंट मोहितो",
  "menu.mojitos.black_currant.desc": "समृद्ध ब्लैक करंट स्वाद वाला मोहितो",
  "menu.mojitos.strawberry": "स्ट्रॉबेरी मोहितो",
  "menu.mojitos.strawberry.desc": "मीठे स्ट्रॉबेरी स्वाद वाला मोहितो",

  // Juices menu items
  "menu.juices.banana": "केला",
  "menu.juices.banana.desc": "ताजा केले का रस",
  "menu.juices.watermelon": "तरबूज",
  "menu.juices.watermelon.desc": "ताज़गीदायक तरबूज का रस",
  "menu.juices.musk_melon": "खरबूजा",
  "menu.juices.musk_melon.desc": "मीठा खरबूजे का रस",
  "menu.juices.pineapple": "अनानास",
  "menu.juices.pineapple.desc": "खट्टा अनानास का रस",
  "menu.juices.sapota": "चीकू",
  "menu.juices.sapota.desc": "चीकू का रस",
  "menu.juices.grape": "अंगूर",
  "menu.juices.grape.desc": "ताजा अंगूर का रस",
  "menu.juices.carrot_milk": "गाजर-दूध",
  "menu.juices.carrot_milk.desc": "दूध के साथ गाजर का रस",
  "menu.juices.beetroot_milk": "चुकंदर-दूध",
  "menu.juices.beetroot_milk.desc": "दूध के साथ चुकंदर का रस",
  "menu.juices.carrot_beetroot_mix": "गाजर और चुकंदर मिक्स (दूध)",
  "menu.juices.carrot_beetroot_mix.desc": "दूध के साथ मिश्रित गाजर और चुकंदर का रस",
  "menu.juices.carrot_pure": "गाजर प्योर",
  "menu.juices.carrot_pure.desc": "शुद्ध गाजर का रस",
  "menu.juices.beetroot_pure": "चुकंदर प्योर",
  "menu.juices.beetroot_pure.desc": "शुद्ध चुकंदर का रस",
  "menu.juices.apple": "सेब",
  "menu.juices.apple.desc": "ताजा सेब का रस",
  "menu.juices.pomegranate": "अनार",
  "menu.juices.pomegranate.desc": "ताजा अनार का रस",
  "menu.juices.abc": "ABC जूस",
  "menu.juices.abc.desc": "सेब, चुकंदर और गाजर का मिश्रित रस",
  "menu.juices.carrot_beetroot_mix_pure": "गाजर और चुकंदर मिक्स प्योर",
  "menu.juices.carrot_beetroot_mix_pure.desc": "शुद्ध मिश्रित गाजर और चुकंदर का रस",

  // Biryani menu items
  "menu.biryani.veg": "वेज बिरयानी",
  "menu.biryani.veg.desc": "मिश्रित सब्जियों और मसालों के साथ सुगंधित बिरयानी",
  "menu.biryani.rice": "बिरयानी राइस",
  "menu.biryani.rice.desc": "सुगंधित बिरयानी चावल",
  "menu.biryani.chicken_dum": "चिकन दम",
  "menu.biryani.chicken_dum.desc": "पारंपरिक धीमी आंच पर पकाई गई चिकन बिरयानी",
  "menu.biryani.chicken_fry": "चिकन फ्राई बिरयानी",
  "menu.biryani.chicken_fry.desc": "तले हुए चिकन के टुकड़ों के साथ बिरयानी",
  "menu.biryani.egg": "अंडा बिरयानी",
  "menu.biryani.egg.desc": "उबले हुए अंडे के साथ बिरयानी",
  "menu.biryani.lollipop": "लॉलीपॉप बिरयानी",
  "menu.biryani.lollipop.desc": "चिकन लॉलीपॉप के साथ बिरयानी",
  "menu.biryani.special_chicken": "स्पेशल चिकन बिरयानी",
  "menu.biryani.special_chicken.desc": "शेफ की विशेष चिकन बिरयानी",
  "menu.biryani.wings": "विंग्स बिरयानी",
  "menu.biryani.wings.desc": "चिकन विंग्स के साथ बिरयानी",

  // Starters menu items
  "menu.starters.chilli_paneer": "चिल्ली पनीर",
  "menu.starters.chilli_paneer.desc": "शिमला मिर्च के साथ मसालेदार पनीर",
  "menu.starters.paneer_65": "पनीर 65",
  "menu.starters.paneer_65.desc": "मसालेदार, डीप-फ्राइड पनीर",
  "menu.starters.veg_manchuria": "वेज मंचूरिया",
  "menu.starters.veg_manchuria.desc": "मिश्रित सब्जी मंचूरियन",
  "menu.starters.chicken_555": "चिकन 555",
  "menu.starters.chicken_555.desc": "विशेष मसालेदार चिकन स्टार्टर",
  "menu.starters.chicken_65": "चिकन 65",
  "menu.starters.chicken_65.desc": "मसालेदार, डीप-फ्राइड चिकन",
  "menu.starters.chicken_lollipop": "चिकन लॉलीपॉप",
  "menu.starters.chicken_lollipop.desc": "मसालेदार चिकन विंगलेट्स",
  "menu.starters.chicken_fried_wings": "चिकन फ्राइड विंग्स",
  "menu.starters.chicken_fried_wings.desc": "क्रिस्पी तले हुए चिकन विंग्स",
  "menu.starters.chicken_manchuria": "चिकन मंचूरिया",
  "menu.starters.chicken_manchuria.desc": "मंचूरियन सॉस में चिकन",
  "menu.starters.chilli_chicken": "चिल्ली चिकन",
  "menu.starters.chilli_chicken.desc": "शिमला मिर्च के साथ मसालेदार चिकन",
  "menu.starters.chicken_majestic": "चिकन मजेस्टिक",
  "menu.starters.chicken_majestic.desc": "विशेष हैदराबादी स्टाइल चिकन स्टार्टर",

  // Combos menu items
  "menu.combos.veg_classic": "वेज क्लासिक कॉम्बो",
  "menu.combos.veg_classic.desc": "वेज नूडल्स/राइस + वेज सैंडविच + फ्रेंच फ्राइज़ + मोहितो",
  "menu.combos.veg_delight": "वेज डिलाइट कॉम्बो",
  "menu.combos.veg_delight.desc": "वेज नूडल्स/राइस + वेज बर्गर + वेज मंचूरिया + मोहितो",
  "menu.combos.paneer_treat": "पनीर ट्रीट कॉम्बो",
  "menu.combos.paneer_treat.desc": "पनीर राइस + पनीर सैंडविच + फ्रेंच फ्राइज़ + मोहितो",
  "menu.combos.mr_chicken": "मिस्टर चिकन कॉम्बो",
  "menu.combos.mr_chicken.desc": "चिकन राइस + चिल्ली चिकन + फ्रेंच फ्राइज़ + मोहितो",
  "menu.combos.spicy_chicken": "स्पाइसी चिकन कॉम्बो",
  "menu.combos.spicy_chicken.desc": "चिकन नूडल्स/राइस + चिकन विंग्स + फ्रेंच फ्राइज़ + 2 मोहितो",
  "menu.combos.chicken_feast": "चिकन फीस्ट कॉम्बो",
  "menu.combos.chicken_feast.desc": "चिकन नूडल्स + चिकन राइस + चिल्ली चिकन + चिकन बर्गर + फ्रेंच फ्राइज़ + 2 मोहितो",

  // Add translations for special offers
  "offers.title": "फास्ट फूड आइटम्स पर 15% छूट",
  "offers.description": "न्यूनतम ₹250 के बिल पर सभी फास्ट फूड आइटम्स पर 15% छूट + मुफ्त थम्स अप!",
  "offers.validUntil": "31 मार्च तक मान्य",

  // Language notification
  "notification.switchLanguage": "भाषा बदलने के लिए यहां क्लिक करें",
  "language.kannada": "ಕನ್ನಡ",
}

// Add Tamil translations
const taTranslations = {
  // Navigation
  "nav.home": "முகப்பு",
  "nav.menu": "உணவு பட்டியல்",
  "nav.contact": "தொடர்பு கொள்ள",
  "nav.about": "எங்களைப் பற்றி",

  // Home page
  "home.hero.title": "ஸ்ரீ ஃப்ரெண்ட்ஸ் அண்ட் ஃப்ளேவர்ஸ்",
  "home.hero.subtitle": "சுவையும் சிறப்பும் சந்திக்கும் இடம்",
  "home.hero.button": "உணவு பட்டியலைக் காண",
  "home.offers.title": "சிறப்பு சலுகைகள்",
  "home.story.title": "எங்கள் கதை",
  "home.story.description1":
    "ஸ்ரீ ஃப்ரெண்ட்ஸ் அண்ட் ஃப்ளேவர்ஸ் என்பது 2025ல் உருவாக்கப்பட்ட ஒரு புதிய முயற்சி, உணவு மற்றும் சமூகத்தின் மீது பகிரப்பட்ட ஆர்வம் கொண்ட நான்கு வாழ்நாள் நண்பர்களால் நிறுவப்பட்டது. எங்கள் பயணம் ஒரு எளிய யோசனையுடன் தொடங்கியது - மக்கள் ஒன்று கூடி, அற்புதமான உணவை அனுபவித்து, வாழ்க்கையின் மகிழ்ச்சிகளை ஒன்றாகக் கொண்டாடும் இடத்தை உருவாக்குவது.",
  "home.story.description2":
    "உள்ளூரில் கிடைக்கும் பொருட்கள் மற்றும் தரத்திற்கான உறுதிப்பாட்டின் பாரம்பரியத்தை அடிப்படையாகக் கொண்டு, நாங்கள் வழங்கும் ஒவ்வொரு உணவிற்கும் புதிய ஆற்றல் மற்றும் படைப்பாற்றலைக் கொண்டு வருகிறோம். எங்களிடையே 20 ஆண்டுகளுக்கும் மேலான சமையல் அனுபவத்துடன், எங்கள் நிபுணத்துவம், தனித்துவமான பார்வைகள் மற்றும் எங்கள் நட்பைப் போலவே உயிர்ப்புள்ள மற்றும் பல்வேறு சுவைகள் மீதான அன்பை நாங்கள் இணைக்கிறோம்.",
  "home.story.description3":
    "ஸ்ரீ ஃப்ரெண்ட்ஸ் அண்ட் ஃப்ளேவர்ஸில், எங்கள் நோக்கம் மக்களை இணைக்கும் நினைவில் நிற்கும் உணவு அனுபவங்களை உருவாக்குவதாகும். ஒவ்வொரு உணவும் கவனத்துடன் தயாரிக்கப்படுகிறது, மற்றும் ஒவ்வொரு வருகையும் நீங்கள் நேசிக்கும் நபர்களுடன் புதிய தருணங்களை உருவாக்க ஒரு வாய்ப்பாகும். உங்களை வரவேற்கவும், எங்கள் சமையலறையின் வெப்பத்தை உங்களுடன் பகிர்ந்து கொள்ளவும் நாங்கள் மிகவும் ஆர்வமாக உள்ளோம்.",
  "home.story.description4": "உணவிற்காக வாருங்கள், கதைகளுக்காகத் தங்குங்கள் - இந்த சாகசத்தை உங்களுடன் பகிர்ந்து கொள்ள நாங்கள் காத்திருக்கிறோம்.",
  "home.featured.title": "சிறப்பு உணவு பட்டியல்",
  "home.featured.subtitle": "ஆர்வத்துடனும் சிறந்த பொருட்களுடனும் தயாரிக்கப்பட்ட எங்களின் மிகவும் பிரபலமான உணவுகளை ஆராயுங்கள்",
  "home.featured.button": "முழு உணவு பட்டியலைக் காண",
  "home.visit.title": "எங்களைப் பார்வையிடுங்கள்",
  "home.visit.description": "நாங்கள் நகரத்தின் மையத்தில் அமைந்துள்ளோம். எங்கள் வெப்பமான சூழலையும் சிறந்த சேவையையும் அனுபவியுங்கள்.",
  "home.visit.address.title": "முகவரி",
  "home.visit.phone.title": "தொலைபேசி",
  "home.visit.email.title": "மின்னஞ்சல்",
  "home.visit.hours.title": "நேரம்",
  "home.visit.hours.weekdays": "திங்கள்-வெள்ளி: காலை 11 - இரவு 10",
  "home.visit.hours.weekends": "சனி-ஞாயிறு: காலை 11 - இரவு 10",
  "home.visit.button": "எங்களைத் தொடர்பு கொள்ளுங்கள்",

  // Address
  "address.full": "5-9-7, 1வது வரிசை ப்ரோடிபேட், குண்டூர், ஆந்திரப் பிரதேசம் - 522002",
  "address.phone": "+91 81428 90257",
  "address.email": "friendsandflavoursrestaurant@gmail.com",

  // Menu page
  "menu.hero.title": "எங்கள் உணவு பட்டியல்",
  "menu.hero.subtitle": "ஸ்ரீ ஃப்ரெண்ட்ஸ் அண்ட் ஃப்ளேவர்ஸில் கவனமாக தயாரிக்கப்பட்ட உணவுகளை ஆராயுங்கள்",
  "menu.dietary.title": "சிறப்பு உணவு தேவைகள்",
  "menu.dietary.description":
    "சிறப்பு உணவு தேவைகளை பூர்த்தி செய்ய நாங்கள் மகிழ்ச்சியடைகிறோம். எந்த ஒவ்வாமை அல்லது கட்டுப்பாடுகள் பற்றி உங்கள் சேவையாளருக்குத் தெரிவிக்கவும். சைவ, வேகன் மற்றும் குளூட்டன் இல்லாத விருப்பங்கள் கோரிக்கையின் பேரில் கிடைக்கும்.",
  "menu.dietary.button": "சிறப்பு கோரிக்கைகளுக்கு எங்களைத் தொடர்பு கொள்ளுங்கள்",
  "menu.filter.by": "வடிகட்டு:",
  "menu.filter.all": "அனைத்தும்",
  "menu.filter.veg": "சைவம் மட்டும்",
  "menu.filter.nonveg": "அசைவம்",
  "menu.all.items": "அனைத்து உணவுகள்",

  // Contact page
  "contact.hero.title": "எங்களைத் தொடர்பு கொள்ளுங்கள்",
  "contact.hero.subtitle": "முன்பதிவுகள், விசாரணைகள் அல்லது கருத்துக்களுக்கு எங்களைத் தொடர்பு கொள்ளுங்கள்",
  "contact.info.title": "தொடர்பில் இருங்கள்",
  "contact.info.description":
    "உங்களிடமிருந்து கேட்க நாங்கள் விரும்புகிறோம். எந்த கேள்விகள், முன்பதிவு கோரிக்கைகள் அல்லது உங்கள் உணவு அனுபவம் பற்றிய கருத்துக்களுடன் தொடர்பு கொள்ள தயங்க வேண்டாம்.",
  "contact.form.title": "எங்களுக்கு செய்தி அனுப்புங்கள்",
  "contact.form.description": "கீழே உள்ள படிவத்தை நிரப்புங்கள், நாங்கள் விரைவில் உங்களுக்கு பதிலளிப்போம்.",
  "contact.form.name": "பெயர்",
  "contact.form.email": "மின்னஞ்சல்",
  "contact.form.phone": "தொலைபேசி (விருப்பம்)",
  "contact.form.message": "செய்தி",
  "contact.form.button": "செய்தி அனுப்பு",
  "contact.form.sending": "அனுப்புகிறது...",
  "contact.map.title": "எங்களைக் கண்டுபிடிக்கவும்",

  // Footer
  "footer.tagline": "2025 முதல் உங்கள் மேசைக்கு உண்மையான சுவைகளைக் கொண்டு வருகிறோம்.",
  "footer.links.title": "விரைவு இணைப்புகள்",
  "footer.connect.title": "எங்களுடன் இணையுங்கள்",
  "footer.connect.description": "புதுப்பிப்புகள், விளம்பரங்கள் மற்றும் சமையல் ஊக்கத்திற்காக சமூக ஊடகங்களில் எங்களைப் பின்தொடருங்கள்.",
  "footer.copyright": "© 2024 ஸ்ரீ ஃப்ரெண்ட்ஸ் அண்ட் ஃப்ளேவர்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  "footer.developer": "ஜி வி ஆர் நிஷ்சல் ரெட்டி வடிவமைத்து உருவாக்கியது",

  // Language switcher
  "language.english": "English",
  "language.telugu": "తెలుగు",
  "language.hindi": "हिंदी",
  "language.tamil": "தமிழ்",
  "language.kannada": "ಕನ್ನಡ",

  // Add menu category translations
  "menu.category.rice": "சாத உணவுகள்",
  "menu.category.chinese": "சீன உணவுகள்",
  "menu.category.continental": "காண்டினென்டல்",
  "menu.category.mojitos": "மொஜிட்டோக்கள்",
  "menu.category.juices": "புதிய பழச்சாறுகள்",
  "menu.category.biryani": "பிரியாணி",
  "menu.category.starters": "துவக்க உணவுகள்",
  "menu.category.combos": "காம்போக்கள்",

  // Price format
  "price.starting.from": "₹{0} முதல் தொடங்குகிறது",

  // Add menu item translations for rice category
  "menu.rice.pappu_avakaya": "பப்பு அவகாய சாதம்",
  "menu.rice.pappu_avakaya.desc": "பப்பு (பருப்பு) மற்றும் காரமான அவகாய ஊறுகாயுடன் பாரம்பரிய சாதம்",
  "menu.rice.sambar": "சாம்பார் சாதம்",
  "menu.rice.sambar.desc": "சுவையான சாம்பாருடன் கலந்த சாதம்",
  "menu.rice.nalla_karam": "நல்ல காரம் சாதம்",
  "menu.rice.nalla_karam.desc": "காரமான கருப்பு மிளகுடன் சாதம்",
  "menu.rice.podeena": "புதினா சாதம்",
  "menu.rice.podeena.desc": "புதினா சுவையுடன் சாதம்",
  "menu.rice.tomato": "தக்காளி சாதம்",
  "menu.rice.tomato.desc": "புளிப்பான தக்காளி அடிப்படையில் சமைக்கப்பட்ட சாதம்",
  "menu.rice.lemon": "எலுமிச்சை சாதம்",
  "menu.rice.lemon.desc": "புளிப்பான எலுமிச்சை சுவையுடன் வேர்க்கடலையுடன் சாதம்",
  "menu.rice.egg": "முட்டை சாதம்",
  "menu.rice.egg.desc": "முட்டையுடன் சாதம்",
  "menu.rice.gongura": "கொங்குரா சாதம்",
  "menu.rice.gongura.desc": "புளிப்பான கொங்குரா இலைகளுடன் சாதம்",
  "menu.rice.jeera": "ஜீரா சாதம்",
  "menu.rice.jeera.desc": "மணமுள்ள ஜீரக சுவையுடன் சாதம்",
  "menu.rice.manchurian": "மஞ்சூரியன் சாதம்",
  "menu.rice.manchurian.desc": "மஞ்சூரியன் சாஸுடன் சாதம்",
  "menu.rice.chicken": "சிக்கன் சாதம்",
  "menu.rice.chicken.desc": "சிக்கன் துண்டுகளுடன் சாதம்",
  "menu.rice.veg_biryani": "சைவ பிரியாணி",
  "menu.rice.veg_biryani.desc": "மணமுள்ள மசாலாக்களுடன் காய்கறி பிரியாணி",
  "menu.rice.curd": "தயிர் சாதம்",
  "menu.rice.curd.desc": "குளிர்ந்த தயிர் சாதம் தாளிப்புடன்",
  "menu.rice.mini_meals": "மினி உணவுகள்",
  "menu.rice.mini_meals.desc": "சிறிய அளவு முழு உணவு",
  "menu.rice.paneer": "பனீர் சாதம்",
  "menu.rice.paneer.desc": "பனீர் துண்டுகளுடன் சாதம்",
  "menu.rice.cashew": "முந்திரி சாதம்",
  "menu.rice.cashew.desc": "முந்திரி பருப்புடன் சாதம்",
  "menu.rice.sambar_chicken": "சாம்பார் சாதம் + சிக்கன் பகோடா",
  "menu.rice.sambar_chicken.desc": "கிரிஸ்பி சிக்கன் பகோடாவுடன் பரிமாறப்படும் சாம்பார் சாதம்",

  // Chinese menu items
  "menu.chinese.veg_noodles": "சைவ நூடுல்ஸ்",
  "menu.chinese.veg_noodles.desc": "கலந்த காய்கறிகளுடன் ஸ்டிர்-ஃப்ரைடு நூடுல்ஸ்",
  "menu.chinese.veg_fried_rice": "சைவ ஃப்ரைடு ரைஸ்",
  "menu.chinese.veg_fried_rice.desc": "கலந்த காய்கறிகளுடன் ஸ்டிர்-ஃப்ரைடு ரைஸ்",
  "menu.chinese.veg_manchurian": "சைவ மஞ்சூரியா",
  "menu.chinese.veg_manchurian.desc": "காரமான, இனிப்பு மற்றும் புளிப்பு சாஸில் காய்கறி பந்துகள்",
  "menu.chinese.egg_noodles": "முட்டை நூடுல்ஸ்",
  "menu.chinese.egg_noodles.desc": "முட்டையுடன் ஸ்டிர்-ஃப்ரைடு நூடுல்ஸ்",
  "menu.chinese.egg_fried_rice": "முட்டை ஃப்ரைடு ரைஸ்",
  "menu.chinese.egg_fried_rice.desc": "முட்டையுடன் ஸ்டிர்-ஃப்ரைடு ரைஸ்",
  "menu.chinese.egg_manchurian": "முட்டை மஞ்சூரியன்",
  "menu.chinese.egg_manchurian.desc": "மஞ்சூரியன் சாஸில் முட்டை ஃப்ரிட்டர்ஸ்",
  "menu.chinese.double_egg_noodles": "டபுள் முட்டை நூடுல்ஸ்",
  "menu.chinese.double_egg_noodles.desc": "இரட்டை அளவு முட்டையுடன் நூடுல்ஸ்",
  "menu.chinese.double_egg_fried_rice": "டபுள் முட்டை ஃப்ரைடு ரைஸ்",
  "menu.chinese.double_egg_fried_rice.desc": "இரட்டை அளவு முட்டையுடன் ஃப்ரைடு ரைஸ்",
  "menu.chinese.double_egg_manchurian": "டபுள் முட்டை மஞ்சூரியன்",
  "menu.chinese.double_egg_manchurian.desc": "மஞ்சூரியன் சாஸில் இரட்டை முட்டை ஃப்ரிட்டர்ஸ்",
  "menu.chinese.chicken_noodles": "சிக்கன் நூடுல்ஸ்",
  "menu.chinese.chicken_noodles.desc": "சிக்கனுடன் ஸ்டிர்-ஃப்ரைடு நூடுல்ஸ்",
  "menu.chinese.chicken_fried_rice": "சிக்கன் ஃப்ரைடு ரைஸ்",
  "menu.chinese.chicken_fried_rice.desc": "சிக்கனுடன் ஸ்டிர்-ஃப்ரைடு ரைஸ்",
  "menu.chinese.chicken_manchurian": "சிக்கன் மஞ்சூரியன்",
  "menu.chinese.chicken_manchurian.desc": "மஞ்சூரியன் சாஸில் சிக்கன்",
  "menu.chinese.double_egg_chicken_fried_rice": "டபுள் முட்டை சிக்கன் ஃப்ரைடு ரைஸ்",
  "menu.chinese.double_egg_chicken_fried_rice.desc": "இரட்டை முட்டை மற்றும் சிக்கனுடன் ஃப்ரைடு ரைஸ்",
  "menu.chinese.special_chicken_noodles": "ஸ்பெஷல் சிக்கன் நூடுல்ஸ்",
  "menu.chinese.special_chicken_noodles.desc": "சிறப்பு ரெசிபி சிக்கன் நூடுல்ஸ்",
  "menu.chinese.special_chicken_manchurian": "ஸ்பெஷல் சிக்கன் மஞ்சூரியன்",
  "menu.chinese.special_chicken_manchurian.desc": "சிறப்பு ரெசிபி சிக்கன் மஞ்சூரியன்",
  "menu.chinese.schezwan_chicken_fried_rice": "செஸ்வான் சிக்கன் ஃப்ரைடு ரைஸ்",
  "menu.chinese.schezwan_chicken_fried_rice.desc": "காரமான செஸ்வான் ஸ்டைல் சிக்கன் ஃப்ரைடு ரைஸ்",

  // Continental menu items
  "menu.continental.french_fries": "ஃப்ரெஞ்ச் ஃப்ரைஸ்",
  "menu.continental.french_fries.desc": "கிரிஸ்பி பொரித்த உருளைக்கிழங்கு துண்டுகள்",
  "menu.continental.veg_sandwich": "சைவ சாண்ட்விச்",
  "menu.continental.veg_sandwich.desc": "கலந்த காய்கறிகளுடன் சாண்ட்விச்",
  "menu.continental.veg_burger": "சைவ பர்கர்",
  "menu.continental.veg_burger.desc": "காய்கறி பேட்டியுடன் பர்கர்",
  "menu.continental.potato_spring": "உருளைக்கிழங்கு ஸ்ப்ரிங்",
  "menu.continental.potato_spring.desc": "கிரிஸ்பி உருளைக்கிழங்கு ஸ்ப்ரிங் ரோல்ஸ்",
  "menu.continental.paneer_sandwich": "பனீர் சாண்ட்விச்",
  "menu.continental.paneer_sandwich.desc": "பனீர் நிரப்பப்பட்ட சாண்ட்விச்",
  "menu.continental.chicken_sandwich": "சிக்கன் சாண்ட்விச்",
  "menu.continental.chicken_sandwich.desc": "சிக்கன் நிரப்பப்பட்ட சாண்ட்விச்",
  "menu.continental.chicken_burger": "சிக்கன் பர்கர்",
  "menu.continental.chicken_burger.desc": "புதிய காய்கறிகளுடன் ஜூஸி சிக்கன் பேட்டி பர்கர்",

  // Mojitos menu items
  "menu.mojitos.classic": "கிளாசிக் மொஜிட்டோ",
  "menu.mojitos.classic.desc": "புத்துணர்ச்சியூட்டும் புதினா மற்றும் எலுமிச்சை மொஜிட்டோ",
  "menu.mojitos.lime_mint": "லைம் மிண்ட் மொஜிட்டோ",
  "menu.mojitos.lime_mint.desc": "சுறுசுறுப்பான எலுமிச்சை மற்றும் புதிய புதினா மொஜிட்டோ",
  "menu.mojitos.orange": "ஆரஞ்சு மொஜிட்டோ",
  "menu.mojitos.orange.desc": "புத்துணர்ச்சியூட்டும் ஆரஞ்சு சுவையுள்ள மொஜிட்டோ",
  "menu.mojitos.green_apple": "பச்சை ஆப்பிள் மொஜிட்டோ",
  "menu.mojitos.green_apple.desc": "இனிப்பு மற்றும் புளிப்பான பச்சை ஆப்பிள் மொஜிட்டோ",
  "menu.mojitos.kiwi": "கிவி மொஜிட்டோ",
  "menu.mojitos.kiwi.desc": "அரிய கிவி சுவையுள்ள மொஜிட்டோ",
  "menu.mojitos.black_currant": "பிளாக் கரண்ட் மொஜிட்டோ",
  "menu.mojitos.black_currant.desc": "வளமான பிளாக் கரண்ட் சுவையுள்ள மொஜிட்டோ",
  "menu.mojitos.strawberry": "ஸ்ட்ராபெரி மொஜிட்டோ",
  "menu.mojitos.strawberry.desc": "இனிப்பு ஸ்ட்ராபெரி சுவையுள்ள மொஜிட்டோ",

  // Juices menu items
  "menu.juices.banana": "வாழைப்பழம்",
  "menu.juices.banana.desc": "புதிய வாழைப்பழ ஜூஸ்",
  "menu.juices.watermelon": "தர்பூசணி",
  "menu.juices.watermelon.desc": "புத்துணர்ச்சியூட்டும் தர்பூசணி ஜூஸ்",
  "menu.juices.musk_melon": "முலாம்பழம்",
  "menu.juices.musk_melon.desc": "இனிப்பு முலாம்பழ ஜூஸ்",
  "menu.juices.pineapple": "அன்னாசி",
  "menu.juices.pineapple.desc": "புளிப்பான அன்னாசி ஜூஸ்",
  "menu.juices.sapota": "சப்போட்டா",
  "menu.juices.sapota.desc": "சப்போட்டா (சிக்கூ) ஜூஸ்",
  "menu.juices.grape": "திராட்சை",
  "menu.juices.grape.desc": "புதிய திராட்சை ஜூஸ்",
  "menu.juices.carrot_milk": "கேரட்-பால்",
  "menu.juices.carrot_milk.desc": "பாலுடன் கேரட் ஜூஸ்",
  "menu.juices.beetroot_milk": "பீட்ரூட்-பால்",
  "menu.juices.beetroot_milk.desc": "பாலுடன் பீட்ரூட் ஜூஸ்",
  "menu.juices.carrot_beetroot_mix": "கேரட் & பீட்ரூட் மிக்ஸ் (பால்)",
  "menu.juices.carrot_beetroot_mix.desc": "பாலுடன் கலந்த கேரட் மற்றும் பீட்ரூட் ஜூஸ்",
  "menu.juices.carrot_pure": "கேரட் ப்யூர்",
  "menu.juices.carrot_pure.desc": "சுத்தமான கேரட் ஜூஸ்",
  "menu.juices.beetroot_pure": "பீட்ரூட் ப்யூர்",
  "menu.juices.beetroot_pure.desc": "சுத்தமான பீட்ரூட் ஜூஸ்",
  "menu.juices.apple": "ஆப்பிள்",
  "menu.juices.apple.desc": "புதிய ஆப்பிள் ஜூஸ்",
  "menu.juices.pomegranate": "மாதுளை",
  "menu.juices.pomegranate.desc": "புதிய மாதுளை ஜூஸ்",
  "menu.juices.abc": "ABC ஜூஸ்",
  "menu.juices.abc.desc": "ஆப்பிள், பீட்ரூட் & கேரட் கலந்த ஜூஸ்",
  "menu.juices.carrot_beetroot_mix_pure": "கேரட் & பீட்ரூட் மிக்ஸ் ப்யூர்",
  "menu.juices.carrot_beetroot_mix_pure.desc": "சுத்தமான கலந்த கேரட் மற்றும் பீட்ரூட் ஜூஸ்",

  // Biryani menu items
  "menu.biryani.veg": "சைவ பிரியாணி",
  "menu.biryani.veg.desc": "கலந்த காய்கறிகள் மற்றும் மசாலாக்களுடன் மணமுள்ள பிரியாணி",
  "menu.biryani.rice": "பிரியாணி சாதம்",
  "menu.biryani.rice.desc": "மணமுள்ள பிரியாணி சாதம்",
  "menu.biryani.chicken_dum": "சிக்கன் தம்",
  "menu.biryani.chicken_dum.desc": "பாரம்பரிய மெதுவாக சமைக்கப்பட்ட சிக்கன் பிரியாணி",
  "menu.biryani.chicken_fry": "சிக்கன் ஃப்ரை பிரியாணி",
  "menu.biryani.chicken_fry.desc": "பொரித்த சிக்கன் துண்டுகளுடன் பிரியாணி",
  "menu.biryani.egg": "முட்டை பிரியாணி",
  "menu.biryani.egg.desc": "வேக வைத்த முட்டைகளுடன் பிரியாணி",
  "menu.biryani.lollipop": "லாலிபாப் பிரியாணி",
  "menu.biryani.lollipop.desc": "சிக்கன் லாலிபாப்களுடன் பிரியாணி",
  "menu.biryani.special_chicken": "ஸ்பெஷல் சிக்கன் பிரியாணி",
  "menu.biryani.special_chicken.desc": "சமையல்காரரின் சிறப்பு சிக்கன் பிரியாணி",
  "menu.biryani.wings": "விங்ஸ் பிரியாணி",
  "menu.biryani.wings.desc": "சிக்கன் விங்ஸுடன் பிரியாணி",

  // Starters menu items
  "menu.starters.chilli_paneer": "சில்லி பனீர்",
  "menu.starters.chilli_paneer.desc": "பெல் பெப்பர்களுடன் காரமான பனீர்",
  "menu.starters.paneer_65": "பனீர் 65",
  "menu.starters.paneer_65.desc": "காரமான, ஆழமாக பொரித்த பனீர்",
  "menu.starters.veg_manchuria": "சைவ மஞ்சூரியா",
  "menu.starters.veg_manchuria.desc": "கலந்த காய்கறி மஞ்சூரியன்",
  "menu.starters.chicken_555": "சிக்கன் 555",
  "menu.starters.chicken_555.desc": "சிறப்பு காரமான சிக்கன் ஸ்டார்டர்",
  "menu.starters.chicken_65": "சிக்கன் 65",
  "menu.starters.chicken_65.desc": "காரமான, ஆழமாக பொரித்த சிக்கன்",
  "menu.starters.chicken_lollipop": "சிக்கன் லாலிபாப்",
  "menu.starters.chicken_lollipop.desc": "காரமான சிக்கன் விங்லெட்ஸ்",
  "menu.starters.chicken_fried_wings": "சிக்கன் ஃப்ரைடு விங்ஸ்",
  "menu.starters.chicken_fried_wings.desc": "கிரிஸ்பி பொரித்த சிக்கன் விங்ஸ்",
  "menu.starters.chicken_manchuria": "சிக்கன் மஞ்சூரியா",
  "menu.starters.chicken_manchuria.desc": "மஞ்சூரியன் சாஸில் சிக்கன்",
  "menu.starters.chilli_chicken": "சில்லி சிக்கன்",
  "menu.starters.chilli_chicken.desc": "பெல் பெப்பர்களுடன் காரமான சிக்கன்",
  "menu.starters.chicken_majestic": "சிக்கன் மஜெஸ்டிக்",
  "menu.starters.chicken_majestic.desc": "சிறப்பு ஹைதராபாதி ஸ்டைல் சிக்கன் ஸ்டார்டர்",

  // Combos menu items
  "menu.combos.veg_classic": "சைவ கிளாசிக் காம்போ",
  "menu.combos.veg_classic.desc": "சைவ நூடுல்ஸ்/சாதம் + சைவ சாண்ட்விச் + ஃப்ரெஞ்ச் ஃப்ரைஸ் + மொஜிட்டோ",
  "menu.combos.veg_delight": "சைவ டிலைட் காம்போ",
  "menu.combos.veg_delight.desc": "சைவ நூடுல்ஸ்/சாதம் + சைவ பர்கர் + சைவ மஞ்சூரியா + மொஜிட்டோ",
  "menu.combos.paneer_treat": "பனீர் ட்ரீட் காம்போ",
  "menu.combos.paneer_treat.desc": "பனீர் சாதம் + பனீர் சாண்ட்விச் + ஃப்ரெஞ்ச் ஃப்ரைஸ் + மொஜிட்டோ",
  "menu.combos.mr_chicken": "மிஸ்டர் சிக்கன் காம்போ",
  "menu.combos.mr_chicken.desc": "சிக்கன் சாதம் + சில்லி சிக்கன் + ஃப்ரெஞ்ச் ஃப்ரைஸ் + மொஜிட்டோ",
  "menu.combos.spicy_chicken": "ஸ்பைசி சிக்கன் காம்போ",
  "menu.combos.spicy_chicken.desc": "சிக்கன் நூடுல்ஸ்/சாதம் + சிக்கன் விங்ஸ் + ஃப்ரெஞ்ச் ஃப்ரைஸ் + 2 மொஜிட்டோ",
  "menu.combos.chicken_feast": "சிக்கன் ஃபீஸ்ட் காம்போ",
  "menu.combos.chicken_feast.desc": "சிக்கன் நூடுல்ஸ் + சிக்கன் சாதம் + சில்லி சிக்கன் + சிக்கன் பர்கர் + ஃப்ரெஞ்ச் ஃப்ரைஸ் + 2 மொஜிட்டோ",

  // Add translations for special offers
  "offers.title": "ஃபாஸ்ட் ஃபுட் பொருட்களில் 15% தள்ளுபடி",
  "offers.description": "குறைந்தபட்சம் ₹250 பில்லுடன் அனைத்து ஃபாஸ்ட் ஃபுட் பொருட்களிலும் 15% தள்ளுபடி + இலவச தம்ஸ் அப்!",

  // Language notification
  "notification.switchLanguage": "மொழியை மாற்ற இங்கே கிளிக் செய்யவும்",
  "language.kannada": "ಕನ್ನಡ",
}

// Add Kannada translations
const knTranslations = {
  // Navigation
  "nav.home": "ಮುಖಪುಟ",
  "nav.menu": "ಮೆನು",
  "nav.contact": "ಸಂಪರ್ಕಿಸಿ",
  "nav.about": "ನಮ್ಮ ಬಗ್ಗೆ",

  // Home page
  "home.hero.title": "ಶ್ರೀ ಫ್ರೆಂಡ್ಸ್ ಅಂಡ್ ಫ್ಲೇವರ್ಸ್",
  "home.hero.subtitle": "ರುಚಿ ಮತ್ತು ಸ್ಟೈಲ್ ಭೇಟಿಯಾಗುವ ಸ್ಥಳ",
  "home.hero.button": "ಮೆನು ನೋಡಿ",
  "home.offers.title": "ವಿಶೇಷ ಆಫರ್‌ಗಳು",
  "home.story.title": "ನಮ್ಮ ಕಥೆ",
  "home.story.description1":
    "ಶ್ರೀ ಫ್ರೆಂಡ್ಸ್ ಅಂಡ್ ಫ್ಲೇವರ್ಸ್ 2025 ರಲ್ಲಿ ಜೀವನಕ್ಕೆ ಬಂದ ಹೊಸ ಉದ್ಯಮವಾಗಿದೆ, ಆಹಾರ ಮತ್ತು ಸಮುದಾಯದ ಬಗ್ಗೆ ಹಂಚಿಕೊಂಡ ಉತ್ಸಾಹವನ್ನು ಹೊಂದಿರುವ ನಾಲ್ಕು ಜೀವನಪರ್ಯಂತ ಸ್ನೇಹಿತರಿಂದ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟಿದೆ. ನಮ್ಮ ಪ್ರಯಾಣವು ಸರಳ ಆಲೋಚನೆಯೊಂದಿಗೆ ಪ್ರಾರಂಭವಾಯಿತು - ಜನರು ಒಟ್ಟುಗೂಡಿ, ಅದ್ಭುತವಾದ ಊಟವನ್ನು ಆನಂದಿಸಿ, ಜೀವನದ ಸಂತೋಷಗಳನ್ನು ಒಟ್ಟಿಗೆ ಆಚರಿಸಬಹುದಾದ ಸ್ಥಳವನ್ನು ರಚಿಸುವುದು.",
  "home.story.description2":
    "ಸ್ಥಳೀಯವಾಗಿ ಸಂಗ್ರಹಿಸಿದ ಪದಾರ್ಥಗಳು ಮತ್ತು ಗುಣಮಟ್ಟದ ಬದ್ಧತೆಯ ಪರಂಪರೆಯನ್ನು ಮುಂದುವರಿಸಿಕೊಂಡು, ನಾವು ಸೇವಿಸುವ ಪ್ರತಿ ಆಹಾರಕ್ಕೆ ತಾಜಾ ಶಕ್ತಿ ಮತ್ತು ಸೃಜನಶೀಲತೆಯನ್ನು ತರುತ್ತೇವೆ. ನಮ್ಮಲ್ಲಿ 20 ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚಿನ ಅಡುಗೆ ಅನುಭವದೊಂದಿಗೆ, ನಾವು ನಮ್ಮ ತಜ್ಞತೆ, ವಿಶಿಷ್ಟ ದೃಷ್ಟಿಕೋನಗಳು ಮತ್ತು ನಮ್ಮ ಸ್ನೇಹದಂತೆ ಜೀವಂತ ಮತ್ತು ವೈವಿಧ್ಯಮಯವಾದ ರುಚಿಗಳ ಬಗ್ಗೆ ಪ್ರೀತಿಯನ್ನು ಮಿಶ್ರಣ ಮಾಡುತ್ತೇವೆ.",
  "home.story.description3":
    "ಶ್ರೀ ಫ್ರೆಂಡ್ಸ್ ಅಂಡ್ ಫ್ಲೇವರ್ಸ್‌ನಲ್ಲಿ, ನಮ್ಮ ಮಿಷನ್ ಜನರನ್ನು ಸಂಪರ್ಕಿಸುವ ಅವಿಸ್ಮರಣೀಯ ಊಟದ ಅನುಭವಗಳನ್ನು ರಚಿಸುವುದಾಗಿದೆ. ಪ್ರತಿ ಊಟವನ್ನು ಕಾಳಜಿಯಿಂದ ತಯಾರಿಸಲಾಗುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿ ಭೇಟಿಯು ನೀವು ಪ್ರೀತಿಸುವವರೊಂದಿಗೆ ಹೊಸ ಕ್ಷಣಗಳನ್ನು ಸೃಷ್ಟಿಸಲು ಒಂದು ಅವಕಾಶವಾಗಿದೆ. ನಿಮ್ಮನ್ನು ಸ್ವಾಗತಿಸಲು ಮತ್ತು ನಮ್ಮ ಅಡುಗೆಮನೆಯ ಬೆಚ್ಚಗನ್ನು ನಿಮ್ಮೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಲು ನಾವು ತುಂಬಾ ಉತ್ಸಾಹದಿಂದ ಇದ್ದೇವೆ.",
  "home.story.description4": "ಆಹಾರಕ್ಕಾಗಿ ಬನ್ನಿ, ಕಥೆಗಳಿಗಾಗಿ ಇರಿ - ನಿಮ್ಮೊಂದಿಗೆ ಈ ಸಾಹಸವನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ನಾವು ಕಾಯಲಾರೆವು.",
  "home.featured.title": "ವಿಶೇಷ ಮೆನು",
  "home.featured.subtitle": "ಉತ್ಸಾಹದಿಂದ ಮತ್ತು ಅತ್ಯುತ್ತಮ ಪದಾರ್ಥಗಳೊಂದಿಗೆ ತಯಾರಿಸಿದ ನಮ್ಮ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಆಹಾರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
  "home.featured.button": "ಸಂಪೂರ್ಣ ಮೆನು ನೋಡಿ",
  "home.visit.title": "ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ",
  "home.visit.description": "ನಾವು ನಗರದ ಹೃದಯಭಾಗದಲ್ಲಿದ್ದೇವೆ. ನಮ್ಮ ಬೆಚ್ಚಗಿನ ವಾತಾವರಣ ಮತ್ತು ಅಸಾಧಾರಣ ಸೇವೆಯನ್ನು ಅನುಭವಿಸಿ.",
  "home.visit.address.title": "ವಿಳಾಸ",
  "home.visit.phone.title": "ಫೋನ್",
  "home.visit.email.title": "ಇಮೇಲ್",
  "home.visit.hours.title": "ಸಮಯ",
  "home.visit.hours.weekdays": "ಸೋಮ-ಶುಕ್ರ: ಬೆಳಿಗ್ಗೆ 11-ರಾತ್ರಿ 10",
  "home.visit.hours.weekends": "ಶನಿ-ಭಾನು: ಬೆಳಿಗ್ಗೆ 11-ರಾತ್ರಿ 10",
  "home.visit.button": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",

  // Address
  "address.full": "5-9-7, 1ನೇ ಲೈನ್ ಬ್ರೋಡಿಪೇಟ್, ಗುಂಟೂರು, ಆಂಧ್ರಪ್ರದೇಶ - 522002",
  "address.phone": "+91 81428 90257",
  "address.email": "friendsandflavoursrestaurant@gmail.com",

  // Menu page
  "menu.hero.title": "ನಮ್ಮ ಮೆನು",
  "menu.hero.subtitle": "ಶ್ರೀ ಫ್ರೆಂಡ್ಸ್ ಅಂಡ್ ಫ್ಲೇವರ್ಸ್‌ನಲ್ಲಿ ಎಚ್ಚರಿಕೆಯಿಂದ ತಯಾರಿಸಿದ ಆಹಾರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
  "menu.dietary.title": "ವಿಶೇಷ ಆಹಾರ ಅವಶ್ಯಕತೆಗಳು",
  "menu.dietary.description":
    "ನಾವು ವಿಶೇಷ ಆಹಾರ ಅಗತ್ಯತೆಗಳನ್ನು ಪೂರೈಸಲು ಸಂತೋಷಪಡುತ್ತೇವೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸರ್ವರ್‌ಗೆ ಯಾವುದೇ ಅಲರ್ಜಿಗಳು ಅಥವಾ ನಿರ್ಬಂಧಗಳ ಬಗ್ಗೆ ತಿಳಿಸಿ. ಸಸ್ಯಾಹಾರಿ, ವೀಗನ್ ಮತ್ತು ಗ್ಲೂಟೆನ್-ಮುಕ್ತ ಆಯ್ಕೆಗಳು ವಿನಂತಿಯ ಮೇರೆಗೆ ಲಭ್ಯವಿವೆ.",
  "menu.dietary.button": "ವಿಶೇಷ ವಿನಂತಿಗಳಿಗಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
  "menu.filter.by": "ಫಿಲ್ಟರ್ ಮಾಡಿ:",
  "menu.filter.all": "ಎಲ್ಲಾ",
  "menu.filter.veg": "ಸಸ್ಯಾಹಾರಿ ಮಾತ್ರ",
  "menu.filter.nonveg": "ಮಾಂಸಾಹಾರಿ",
  "menu.all.items": "ಎಲ್ಲಾ ಆಹಾರಗಳು",

  // Contact page
  "contact.hero.title": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
  "contact.hero.subtitle": "ಮೀಸಲಾತಿಗಳು, ವಿಚಾರಣೆಗಳು ಅಥವಾ ಪ್ರತಿಕ್ರಿಯೆಗಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
  "contact.info.title": "ಸಂಪರ್ಕದಲ್ಲಿರಿ",
  "contact.info.description":
    "ನಿಮ್ಮಿಂದ ಕೇಳಲು ನಾವು ಇಷ್ಟಪಡುತ್ತೇವೆ. ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳು, ಮೀಸಲಾತಿ ವಿನಂತಿಗಳು ಅಥವಾ ನಿಮ್ಮ ಊಟದ ಅನುಭವದ ಬಗ್ಗೆ ಪ್ರತಿಕ್ರಿಯೆಯೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಲು ಹಿಂಜರಿಯಬೇಡಿ.",
  "contact.form.title": "ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ",
  "contact.form.description": "ಕೆಳಗಿನ ಫಾರ್ಮ್ ಅನ್ನು ಭರ್ತಿ ಮಾಡಿ ಮತ್ತು ನಾವು ಸಾಧ್ಯವಾದಷ್ಟು ಬೇಗ ನಿಮಗೆ ಮರಳುತ್ತೇವೆ.",
  "contact.form.name": "ಹೆಸರು",
  "contact.form.email": "ಇಮೇಲ್",
  "contact.form.phone": "ಫೋನ್ (ಐಚ್ಛಿಕ)",
  "contact.form.message": "ಸಂದೇಶ",
  "contact.form.button": "ಸಂದೇಶ ಕಳುಹಿಸಿ",
  "contact.form.sending": "ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...",
  "contact.map.title": "ನಮ್ಮನ್ನು ಹುಡುಕಿ",

  // Footer
  "footer.tagline": "2025 ರಿಂದ ನಿಮ್ಮ ಮೇಜಿಗೆ ಸ್ವಾದಿಷ್ಟ ರುಚಿಗಳನ್ನು ತರುತ್ತಿದ್ದೇವೆ.",
  "footer.links.title": "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
  "footer.connect.title": "ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ",
  "footer.connect.description": "ಅಪ್‌ಡೇಟ್‌ಗಳು, ಪ್ರಚಾರಗಳು ಮತ್ತು ಅಡುಗೆ ಸ್ಫೂರ್ತಿಗಾಗಿ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮದಲ್ಲಿ ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ.",
  "footer.copyright": "© 2024 ಶ್ರೀ ಫ್ರೆಂಡ್ಸ್ ಅಂಡ್ ಫ್ಲೇವರ್ಸ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
  "footer.developer": "ಜಿ ವಿ ಆರ್ ನಿಶ್ಚಲ್ ರೆಡ್ಡಿ ಅವರಿಂದ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾಗಿದೆ",

  // Language switcher
  "language.english": "English",
  "language.telugu": "తెలుగు",
  "language.hindi": "हिंदी",
  "language.tamil": "தமிழ்",
  "language.kannada": "ಕನ್ನಡ",

  // Add menu category translations
  "menu.category.rice": "ಅನ್ನದ ಆಹಾರಗಳು",
  "menu.category.chinese": "ಚೈನೀಸ್",
  "menu.category.continental": "ಕಾಂಟಿನೆಂಟಲ್",
  "menu.category.mojitos": "ಮೊಜಿಟೋಸ್",
  "menu.category.juices": "ತಾಜಾ ರಸಗಳು",
  "menu.category.biryani": "ಬಿರಿಯಾನಿ",
  "menu.category.starters": "ಸ್ಟಾರ್ಟರ್‌ಗಳು",
  "menu.category.combos": "ಕಾಂಬೋಗಳು",

  // Price format
  "price.starting.from": "₹{0} ರಿಂದ ಪ್ರಾರಂಭ",

  // Add menu item translations for rice category
  "menu.rice.pappu_avakaya": "ಪಪ್ಪು ಅವಕಾಯ ಅನ್ನ",
  "menu.rice.pappu_avakaya.desc": "ಪಪ್ಪು (ಬೇಳೆ) ಮತ್ತು ಕಾರದ ಅವಕಾಯ ಊರುವ ಉಪ್ಪಿನಕಾಯಿಯೊಂದಿಗೆ ಸಾಂಪ್ರದಾಯಿಕ ಅನ್ನ",
  "menu.rice.sambar": "ಸಾಂಬಾರ್ ಅನ್ನ",
  "menu.rice.sambar.desc": "ರುಚಿಕರವಾದ ಸಾಂಬಾರ್‌ನೊಂದಿಗೆ ಮಿಶ್ರಣ ಮಾಡಿದ ಅನ್ನ",
  "menu.rice.nalla_karam": "ನಲ್ಲ ಕಾರಂ ಅನ್ನ",
  "menu.rice.nalla_karam.desc": "ಕಾರದ ಕಪ್ಪು ಮೆಣಸಿನಕಾಯಿಯೊಂದಿಗೆ ಅನ್ನ",
  "menu.rice.podeena": "ಪುದೀನಾ ಅನ್ನ",
  "menu.rice.podeena.desc": "ಪುದೀನಾ ರುಚಿಯ ಅನ್ನ",
  "menu.rice.tomato": "ಟೊಮೇಟೊ ಅನ್ನ",
  "menu.rice.tomato.desc": "ಹುಳಿಯಾದ ಟೊಮೇಟೊ ಬೇಸ್‌ನೊಂದಿಗೆ ಬೇಯಿಸಿದ ಅನ್ನ",
  "menu.rice.lemon": "ನಿಂಬೆ ಅನ್ನ",
  "menu.rice.lemon.desc": "ಹುಳಿಯಾದ ನಿಂಬೆ ರುಚಿಯ ಕಡಲೆಕಾಯಿಯೊಂದಿಗೆ ಅನ್ನ",
  "menu.rice.egg": "ಮೊಟ್ಟೆ ಅನ್ನ",
  "menu.rice.egg.desc": "ಮೊಟ್ಟೆಯೊಂದಿಗೆ ಅನ್ನ",
  "menu.rice.gongura": "ಗೋಂಗೂರ ಅನ್ನ",
  "menu.rice.gongura.desc": "ಹುಳಿಯಾದ ಗೋಂಗೂರ ಎಲೆಗಳೊಂದಿಗೆ ಅನ್ನ",
  "menu.rice.jeera": "ಜೀರಿಗೆ ಅನ್ನ",
  "menu.rice.jeera.desc": "ಸುಗಂಧಿತ ಜೀರಿಗೆ ರುಚಿಯ ಅನ್ನ",
  "menu.rice.manchurian": "ಮಂಚೂರಿಯನ್ ಅನ್ನ",
  "menu.rice.manchurian.desc": "ಮಂಚೂರಿಯನ್ ಸಾಸ್‌ನೊಂದಿಗೆ ಅನ್ನ",
  "menu.rice.chicken": "ಚಿಕನ್ ಅನ್ನ",
  "menu.rice.chicken.desc": "ಚಿಕನ್ ತುಂಡುಗಳೊಂದಿಗೆ ಅನ್ನ",
  "menu.rice.veg_biryani": "ವೆಜ್ ಬಿರಿಯಾನಿ",
  "menu.rice.veg_biryani.desc": "ಸುಗಂಧಿತ ಮಸಾಲೆಗಳೊಂದಿಗೆ ತರಕಾರಿ ಬಿರಿಯಾನಿ",
  "menu.rice.curd": "ಮೊಸರು ಅನ್ನ",
  "menu.rice.curd.desc": "ಒಗ್ಗರಣೆಯೊಂದಿಗೆ ತಂಪಾದ ಮೊಸರು ಅನ್ನ",
  "menu.rice.mini_meals": "ಮಿನಿ ಊಟಗಳು",
  "menu.rice.mini_meals.desc": "ಸಣ್ಣ ಪ್ರಮಾಣದ ಸಂಪೂರ್ಣ ಊಟ",
  "menu.rice.paneer": "ಪನೀರ್ ಅನ್ನ",
  "menu.rice.paneer.desc": "ಪನೀರ್ ತುಂಡುಗಳೊಂದಿಗೆ ಅನ್ನ",
  "menu.rice.cashew": "ಗೋಡಂಬಿ ಅನ್ನ",
  "menu.rice.cashew.desc": "ಗೋಡಂಬಿಯೊಂದಿಗೆ ಅನ್ನ",
  "menu.rice.sambar_chicken": "ಸಾಂಬಾರ್ ಅನ್ನ + ಚಿಕನ್ ಪಕೋಡಾ",
  "menu.rice.sambar_chicken.desc": "ಕ್ರಿಸ್ಪಿ ಚಿಕನ್ ಪಕೋಡಾದೊಂದಿಗೆ ಬಡಿಸಲಾಗುವ ಸಾಂಬಾರ್ ಅನ್ನ",

  // Chinese menu items
  "menu.chinese.veg_noodles": "ವೆಜ್ ನೂಡಲ್ಸ್",
  "menu.chinese.veg_noodles.desc": "ಮಿಶ್ರ ತರಕಾರಿಗಳೊಂದಿಗೆ ಸ್ಟರ್-ಫ್ರೈಡ್ ನೂಡಲ್ಸ್",
  "menu.chinese.veg_fried_rice": "ವೆಜ್ ಫ್ರೈಡ್ ರೈಸ್",
  "menu.chinese.veg_fried_rice.desc": "ಮಿಶ್ರ ತರಕಾರಿಗಳೊಂದಿಗೆ ಸ್ಟರ್-ಫ್ರೈಡ್ ರೈಸ್",
  "menu.chinese.veg_manchurian": "ವೆಜ್ ಮಂಚೂರಿಯನ್",
  "menu.chinese.veg_manchurian.desc": "ಕಾರದ, ಸಿಹಿ ಮತ್ತು ಹುಳಿಯಾದ ಸಾಸ್‌ನಲ್ಲಿ ತರಕಾರಿ ಉಂಡೆಗಳು",
  "menu.chinese.egg_noodles": "ಮೊಟ್ಟೆ ನೂಡಲ್ಸ್",
  "menu.chinese.egg_noodles.desc": "ಮೊಟ್ಟೆಯೊಂದಿಗೆ ಸ್ಟರ್-ಫ್ರೈಡ್ ನೂಡಲ್ಸ್",
  "menu.chinese.egg_fried_rice": "ಮೊಟ್ಟೆ ಫ್ರೈಡ್ ರೈಸ್",
  "menu.chinese.egg_fried_rice.desc": "ಮೊಟ್ಟೆಯೊಂದಿಗೆ ಸ್ಟರ್-ಫ್ರೈಡ್ ರೈಸ್",
  "menu.chinese.egg_manchurian": "ಮೊಟ್ಟೆ ಮಂಚೂರಿಯನ್",
  "menu.chinese.egg_manchurian.desc": "ಮಂಚೂರಿಯನ್ ಸಾಸ್‌ನಲ್ಲಿ ಮೊಟ್ಟೆ ಫ್ರಿಟರ್ಸ್",
  "menu.chinese.double_egg_noodles": "ಡಬಲ್ ಮೊಟ್ಟೆ ನೂಡಲ್ಸ್",
  "menu.chinese.double_egg_noodles.desc": "ಎರಡು ಮೊಟ್ಟೆಗಳೊಂದಿಗೆ ನೂಡಲ್ಸ್",
  "menu.chinese.double_egg_fried_rice": "ಡಬಲ್ ಮೊಟ್ಟೆ ಫ್ರೈಡ್ ರೈಸ್",
  "menu.chinese.double_egg_fried_rice.desc": "ಎರಡು ಮೊಟ್ಟೆಗಳೊಂದಿಗೆ ಫ್ರೈಡ್ ರೈಸ್",
  "menu.chinese.double_egg_manchurian": "ಡಬಲ್ ಮೊಟ್ಟೆ ಮಂಚೂರಿಯನ್",
  "menu.chinese.double_egg_manchurian.desc": "ಮಂಚೂರಿಯನ್ ಸಾಸ್‌ನಲ್ಲಿ ಡಬಲ್ ಮೊಟ್ಟೆ ಫ್ರಿಟರ್ಸ್",
  "menu.chinese.chicken_noodles": "ಚಿಕನ್ ನೂಡಲ್ಸ್",
  "menu.chinese.chicken_noodles.desc": "ಚಿಕನ್‌ನೊಂದಿಗೆ ಸ್ಟರ್-ಫ್ರೈಡ್ ನೂಡಲ್ಸ್",
  "menu.chinese.chicken_fried_rice": "ಚಿಕನ್ ಫ್ರೈಡ್ ರೈಸ್",
  "menu.chinese.chicken_fried_rice.desc": "ಚಿಕನ್‌ನೊಂದಿಗೆ ಸ್ಟರ್-ಫ್ರೈಡ್ ರೈಸ್",
  "menu.chinese.chicken_manchurian": "ಚಿಕನ್ ಮಂಚೂರಿಯನ್",
  "menu.chinese.chicken_manchurian.desc": "ಚಿಕನ್ ಮಂಚೂರಿಯನ್ ಸಾಸ್‌ನಲ್ಲಿ ಚಿಕನ್",
  "menu.chinese.double_egg_chicken_fried_rice": "ಡಬಲ್ ಮೊಟ್ಟೆ ಚಿಕನ್ ಫ್ರೈಡ್ ರೈಸ್",
  "menu.chinese.double_egg_chicken_fried_rice.desc": "ಡಬಲ್ ಮೊಟ್ಟೆ ಮತ್ತು ಚಿಕನ್‌ನೊಂದಿಗೆ ಫ್ರೈಡ್ ರೈಸ್",
  "menu.chinese.special_chicken_noodles": "ಸ್ಪೆಷಲ್ ಚಿಕನ್ ನೂಡಲ್ಸ್",
  "menu.chinese.special_chicken_noodles.desc": "ವಿಶೇಷ ರೆಸಿಪಿ ಚಿಕನ್ ನೂಡಲ್ಸ್",
  "menu.chinese.special_chicken_manchurian": "ಸ್ಪೆಷಲ್ ಚಿಕನ್ ಮಂಚೂರಿಯನ್",
  "menu.chinese.special_chicken_manchurian.desc": "ವಿಶೇಷ ರೆಸಿಪಿ ಚಿಕನ್ ಮಂಚೂರಿಯನ್",
  "menu.chinese.schezwan_chicken_fried_rice": "ಸೆಜ್ವಾನ್ ಚಿಕನ್ ಫ್ರೈಡ್ ರೈಸ್",
  "menu.chinese.schezwan_chicken_fried_rice.desc": "ಕಾರದ ಸೆಜ್ವಾನ್ ಶೈಲಿಯ ಚಿಕನ್ ಫ್ರೈಡ್ ರೈಸ್",

  // Continental menu items
  "menu.continental.french_fries": "ಫ್ರೆಂಚ್ ಫ್ರೈಸ್",
  "menu.continental.french_fries.desc": "ಕ್ರಿಸ್ಪಿ ಹುರಿದ ಆಲೂಗಡ್ಡೆ ಸ್ಟ್ರಿಪ್ಸ್",
  "menu.continental.veg_sandwich": "ವೆಜ್ ಸ್ಯಾಂಡ್‌ವಿಚ್",
  "menu.continental.veg_sandwich.desc": "ಮಿಶ್ರ ತರಕಾರಿಗಳೊಂದಿಗೆ ಸ್ಯಾಂಡ್‌ವಿಚ್",
  "menu.continental.veg_burger": "ವೆಜ್ ಬರ್ಗರ್",
  "menu.continental.veg_burger.desc": "ತರಕಾರಿ ಪ್ಯಾಟಿಯೊಂದಿಗೆ ಬರ್ಗರ್",
  "menu.continental.potato_spring": "ಆಲೂಗಡ್ಡೆ ಸ್ಪ್ರಿಂಗ್",
  "menu.continental.potato_spring.desc": "ಕ್ರಿಸ್ಪಿ ಆಲೂಗಡ್ಡೆ ಸ್ಪ್ರಿಂಗ್ ರೋಲ್ಸ್",
  "menu.continental.paneer_sandwich": "ಪನೀರ್ ಸ್ಯಾಂಡ್‌ವಿಚ್",
  "menu.continental.paneer_sandwich.desc": "ಪನೀರ್ ತುಂಬಿದ ಸ್ಯಾಂಡ್‌ವಿಚ್",
  "menu.continental.chicken_sandwich": "ಚಿಕನ್ ಸ್ಯಾಂಡ್‌ವಿಚ್",
  "menu.continental.chicken_sandwich.desc": "ಚಿಕನ್ ತುಂಬಿದ ಸ್ಯಾಂಡ್‌ವಿಚ್",
  "menu.continental.chicken_burger": "ಚಿಕನ್ ಬರ್ಗರ್",
  "menu.continental.chicken_burger.desc": "ತಾಜಾ ತರಕಾರಿಗಳೊಂದಿಗೆ ಜೂಸಿ ಚಿಕನ್ ಪ್ಯಾಟಿ ಬರ್ಗರ್",

  // Mojitos menu items
  "menu.mojitos.classic": "ಕ್ಲಾಸಿಕ್ ಮೊಜಿಟೋ",
  "menu.mojitos.classic.desc": "ತಾಜಾಗೊಳಿಸುವ ಪುದೀನಾ ಮತ್ತು ನಿಂಬೆ ಮೊಜಿಟೋ",
  "menu.mojitos.lime_mint": "ಲೈಮ್ ಮಿಂಟ್ ಮೊಜಿಟೋ",
  "menu.mojitos.lime_mint.desc": "ಜೆಸ್ಟಿ ನಿಂಬೆ ಮತ್ತು ತಾಜಾ ಪುದೀನಾ ಮೊಜಿಟೋ",
  "menu.mojitos.orange": "ಆರೆಂಜ್ ಮೊಜಿಟೋ",
  "menu.mojitos.orange.desc": "ತಾಜಾಗೊಳಿಸುವ ಕಿತ್ತಳೆ ರುಚಿಯ ಮೊಜಿಟೋ",
  "menu.mojitos.green_apple": "ಹಸಿರು ಸೇಬು ಮೊಜಿಟೋ",
  "menu.mojitos.green_apple.desc": "ಸಿಹಿ ಮತ್ತು ಹುಳಿಯಾದ ಹಸಿರು ಸೇಬು ಮೊಜಿಟೋ",
  "menu.mojitos.kiwi": "ಕಿವಿ ಮೊಜಿಟೋ",
  "menu.mojitos.kiwi.desc": "ಎಕ್ಸೋಟಿಕ್ ಕಿವಿ ರುಚಿಯ ಮೊಜಿಟೋ",
  "menu.mojitos.black_currant": "ಬ್ಲ್ಯಾಕ್ ಕರಂಟ್ ಮೊಜಿಟೋ",
  "menu.mojitos.black_currant.desc": "ಸಮೃದ್ಧ ಬ್ಲ್ಯಾಕ್ ಕರಂಟ್ ರುಚಿಯ ಮೊಜಿಟೋ",
  "menu.mojitos.strawberry": "ಸ್ಟ್ರಾಬೆರಿ ಮೊಜಿಟೋ",
  "menu.mojitos.strawberry.desc": "ಸಿಹಿಯಾದ ಸ್ಟ್ರಾಬೆರಿ ರುಚಿಯ ಮೊಜಿಟೋ",

  // Juices menu items
  "menu.juices.banana": "ಬಾಳೆಹಣ್ಣು",
  "menu.juices.banana.desc": "ತಾಜಾ ಬಾಳೆಹಣ್ಣಿನ ರಸ",
  "menu.juices.watermelon": "ಕಲ್ಲಂಗಡಿ",
  "menu.juices.watermelon.desc": "ತಾಜಾಗೊಳಿಸುವ ಕಲ್ಲಂಗಡಿ ರಸ",
  "menu.juices.musk_melon": "ಖರ್ಬೂಜ",
  "menu.juices.musk_melon.desc": "ಸಿಹಿಯಾದ ಖರ್ಬೂಜ ರಸ",
  "menu.juices.pineapple": "ಅನಾನಸ್",
  "menu.juices.pineapple.desc": "ಹುಳಿಯಾದ ಅನಾನಸ್ ರಸ",
  "menu.juices.sapota": "ಸಪೋಟ",
  "menu.juices.sapota.desc": "ಸಪೋಟ (ಚಿಕ್ಕು) ರಸ",
  "menu.juices.grape": "ದ್ರಾಕ್ಷಿ",
  "menu.juices.grape.desc": "ತಾಜಾ ದ್ರಾಕ್ಷಿ ರಸ",
  "menu.juices.carrot_milk": "ಕ್ಯಾರೆಟ್-ಹಾಲು",
  "menu.juices.carrot_milk.desc": "ಹಾಲಿನೊಂದಿಗೆ ಕ್ಯಾರೆಟ್ ರಸ",
  "menu.juices.beetroot_milk": "ಬೀಟ್‌ರೂಟ್-ಹಾಲು",
  "menu.juices.beetroot_milk.desc": "ಹಾಲಿನೊಂದಿಗೆ ಬೀಟ್‌ರೂಟ್ ರಸ",
  "menu.juices.carrot_beetroot_mix": "ಕ್ಯಾರೆಟ್ & ಬೀಟ್‌ರೂಟ್ ಮಿಕ್ಸ್ (ಹಾಲು)",
  "menu.juices.carrot_beetroot_mix.desc": "ಹಾಲಿನೊಂದಿಗೆ ಮಿಶ್ರಣ ಮಾಡಿದ ಕ್ಯಾರೆಟ್ ಮತ್ತು ಬೀಟ್‌ರೂಟ್ ರಸ",
  "menu.juices.carrot_pure": "ಕ್ಯಾರೆಟ್ ಪ್ಯೂರ್",
  "menu.juices.carrot_pure.desc": "ಶುದ್ಧ ಕ್ಯಾರೆಟ್ ರಸ",
  "menu.juices.beetroot_pure": "ಬೀಟ್‌ರೂಟ್ ಪ್ಯೂರ್",
  "menu.juices.beetroot_pure.desc": "ಶುದ್ಧ ಬೀಟ್‌ರೂಟ್ ರಸ",
  "menu.juices.apple": "ಸೇಬು",
  "menu.juices.apple.desc": "ತಾಜಾ ಸೇಬಿನ ರಸ",
  "menu.juices.pomegranate": "ದಾಳಿಂಬೆ",
  "menu.juices.pomegranate.desc": "ತಾಜಾ ದಾಳಿಂಬೆ ರಸ",
  "menu.juices.abc": "ABC ರಸ",
  "menu.juices.abc.desc": "ಸೇಬು, ಬೀಟ್‌ರೂಟ್ & ಕ್ಯಾರೆಟ್ ಮಿಶ್ರಣ ರಸ",
  "menu.juices.carrot_beetroot_mix_pure": "ಕ್ಯಾರೆಟ್ & ಬೀಟ್‌ರೂಟ್ ಮಿಕ್ಸ್ ಪ್ಯೂರ್",
  "menu.juices.carrot_beetroot_mix_pure.desc": "ಶುದ್ಧ ಮಿಶ್ರಣ ಮಾಡಿದ ಕ್ಯಾರೆಟ್ ಮತ್ತು ಬೀಟ್‌ರೂಟ್ ರಸ",

  // Biryani menu items
  "menu.biryani.veg": "ವೆಜ್ ಬಿರಿಯಾನಿ",
  "menu.biryani.veg.desc": "ಮಿಶ್ರ ತರಕಾರಿಗಳು ಮತ್ತು ಮಸಾಲೆಗಳೊಂದಿಗೆ ಸುಗಂಧಿತ ಬಿರಿಯಾನಿ",
  "menu.biryani.rice": "ಬಿರಿಯಾನಿ ಅನ್ನ",
  "menu.biryani.rice.desc": "ಸುಗಂಧಿತ ಬಿರಿಯಾನಿ ಅನ್ನ",
  "menu.biryani.chicken_dum": "ಚಿಕನ್ ದಮ್",
  "menu.biryani.chicken_dum.desc": "ಸಾಂಪ್ರದಾಯಿಕ ನಿಧಾನವಾಗಿ ಬೇಯಿಸಿದ ಚಿಕನ್ ಬಿರಿಯಾನಿ",
  "menu.biryani.chicken_fry": "ಚಿಕನ್ ಫ್ರೈ ಬಿರಿಯಾನಿ",
  "menu.biryani.chicken_fry.desc": "ಹುರಿದ ಚಿಕನ್ ತುಂಡುಗಳೊಂದಿಗೆ ಬಿರಿಯಾನಿ",
  "menu.biryani.egg": "ಮೊಟ್ಟೆ ಬಿರಿಯಾನಿ",
  "menu.biryani.egg.desc": "ಬೇಯಿಸಿದ ಮೊಟ್ಟೆಗಳೊಂದಿಗೆ ಬಿರಿಯಾನಿ",
  "menu.biryani.lollipop": "ಲಾಲಿಪಾಪ್ ಬಿರಿಯಾನಿ",
  "menu.biryani.lollipop.desc": "ಚಿಕನ್ ಲಾಲಿಪಾಪ್‌ಗಳೊಂದಿಗೆ ಬಿರಿಯಾನಿ",
  "menu.biryani.special_chicken": "ಸ್ಪೆಷಲ್ ಚಿಕನ್ ಬಿರಿಯಾನಿ",
  "menu.biryani.special_chicken.desc": "ಶೆಫ್‌ನ ವಿಶೇಷ ಚಿಕನ್ ಬಿರಿಯಾನಿ",
  "menu.biryani.wings": "ವಿಂಗ್ಸ್ ಬಿರಿಯಾನಿ",
  "menu.biryani.wings.desc": "ಚಿಕನ್ ವಿಂಗ್ಸ್‌ನೊಂದಿಗೆ ಬಿರಿಯಾನಿ",

  // Starters menu items
  "menu.starters.chilli_paneer": "ಚಿಲ್ಲಿ ಪನೀರ್",
  "menu.starters.chilli_paneer.desc": "ಬೆಲ್ ಪೆಪ್ಪರ್‌ಗಳೊಂದಿಗೆ ಕಾರದ ಪನೀರ್",
  "menu.starters.paneer_65": "ಪನೀರ್ 65",
  "menu.starters.paneer_65.desc": "ಕಾರದ, ಆಳವಾಗಿ ಹುರಿದ ಪನೀರ್",
  "menu.starters.veg_manchuria": "ವೆಜ್ ಮಂಚೂರಿಯಾ",
  "menu.starters.veg_manchuria.desc": "ಮಿಶ್ರ ತರಕಾರಿ ಮಂಚೂರಿಯನ್",
  "menu.starters.chicken_555": "ಚಿಕನ್ 555",
  "menu.starters.chicken_555.desc": "ವಿಶೇಷ ಕಾರದ ಚಿಕನ್ ಸ್ಟಾರ್ಟರ್",
  "menu.starters.chicken_65": "ಚಿಕನ್ 65",
  "menu.starters.chicken_65.desc": "ಕಾರದ, ಆಳವಾಗಿ ಹುರಿದ ಚಿಕನ್",
  "menu.starters.chicken_lollipop": "ಚಿಕನ್ ಲಾಲಿಪಾಪ್",
  "menu.starters.chicken_lollipop.desc": "ಕಾರದ ಚಿಕನ್ ವಿಂಗ್‌ಲೆಟ್ಸ್",
  "menu.starters.chicken_fried_wings": "ಚಿಕನ್ ಫ್ರೈಡ್ ವಿಂಗ್ಸ್",
  "menu.starters.chicken_fried_wings.desc": "ಕ್ರಿಸ್ಪಿ ಹುರಿದ ಚಿಕನ್ ವಿಂಗ್ಸ್",
  "menu.starters.chicken_manchuria": "ಚಿಕನ್ ಮಂಚೂರಿಯಾ",
  "menu.starters.chicken_manchuria.desc": "ಮಂಚೂರಿಯನ್ ಸಾಸ್‌ನಲ್ಲಿ ಚಿಕನ್",
  "menu.starters.chilli_chicken": "ಚಿಲ್ಲಿ ಚಿಕನ್",
  "menu.starters.chilli_chicken.desc": "ಬೆಲ್ ಪೆಪ್ಪರ್‌ಗಳೊಂದಿಗೆ ಕಾರದ ಚಿಕನ್",
  "menu.starters.chicken_majestic": "ಚಿಕನ್ ಮಜೆಸ್ಟಿಕ್",
  "menu.starters.chicken_majestic.desc": "ವಿಶೇಷ ಹೈದರಾಬಾದಿ ಶೈಲಿಯ ಚಿಕನ್ ಸ್ಟಾರ್ಟರ್",

  // Combos menu items
  "menu.combos.veg_classic": "ವೆಜ್ ಕ್ಲಾಸಿಕ್ ಕಾಂಬೋ",
  "menu.combos.veg_classic.desc": "ವೆಜ್ ನೂಡಲ್ಸ್/ರೈಸ್ + ವೆಜ್ ಸ್ಯಾಂಡ್‌ವಿಚ್ + ಫ್ರೆಂಚ್ ಫ್ರೈಸ್ + ಮೊಜಿಟೋ",
  "menu.combos.veg_delight": "ವೆಜ್ ಡಿಲೈಟ್ ಕಾಂಬೋ",
  "menu.combos.veg_delight.desc": "ವೆಜ್ ನೂಡಲ್ಸ್/ರೈಸ್ + ವೆಜ್ ಬರ್ಗರ್ + ವೆಜ್ ಮಂಚೂರಿಯಾ + ಮೊಜಿಟೋ",
  "menu.combos.paneer_treat": "ಪನೀರ್ ಟ್ರೀಟ್ ಕಾಂಬೋ",
  "menu.combos.paneer_treat.desc": "ಪನೀರ್ ರೈಸ್ + ಪನೀರ್ ಸ್ಯಾಂಡ್‌ವಿಚ್ + ಫ್ರೆಂಚ್ ಫ್ರೈಸ್ + ಮೊಜಿಟೋ",
  "menu.combos.mr_chicken": "ಮಿಸ್ಟರ್ ಚಿಕನ್ ಕಾಂಬೋ",
  "menu.combos.mr_chicken.desc": "ಚಿಕನ್ ರೈಸ್ + ಚಿಲ್ಲಿ ಚಿಕನ್ + ಫ್ರೆಂಚ್ ಫ್ರೈಸ್ + ಮೊಜಿಟೋ",
  "menu.combos.spicy_chicken": "ಸ್ಪೈಸಿ ಚಿಕನ್ ಕಾಂಬೋ",
  "menu.combos.spicy_chicken.desc": "ಚಿಕನ್ ನೂಡಲ್ಸ್/ರೈಸ್ + ಚಿಕನ್ ವಿಂಗ್ಸ್ + ಫ್ರೆಂಚ್ ಫ್ರೈಸ್ + 2 ಮೊಜಿಟೋ",
  "menu.combos.chicken_feast": "ಚಿಕನ್ ಫೀಸ್ಟ್ ಕಾಂಬೋ",
  "menu.combos.chicken_feast.desc": "ಚಿಕನ್ ನೂಡಲ್ಸ್ + ಚಿಕನ್ ರೈಸ್ + ಚಿಲ್ಲಿ ಚಿಕನ್ + ಚಿಕನ್ ಬರ್ಗರ್ + ಫ್ರೆಂಚ್ ಫ್ರೈಸ್ + 2 ಮೊಜಿಟೋ",

  // Add translations for special offers
  "offers.title": "ಫಾಸ್ಟ್ ಫುಡ್ ಐಟಂಗಳ ಮೇಲೆ 15% ರಿಯಾಯಿತಿ",
  "offers.description": "ಕನಿಷ್ಠ ₹250 ಬಿಲ್‌ನೊಂದಿಗೆ ಎಲ್ಲಾ ಫಾಸ್ಟ್ ಫುಡ್ ಐಟಂಗಳ ಮೇಲೆ 15% ರಿಯಾಯಿತಿ + ಉಚಿತ ಥಂಬ್ಸ್‌ಅಪ್!",

  // Language notification
  "notification.switchLanguage": "ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ",
  "language.kannada": "ಕನ್ನಡ",
}

// Update the translations object to include Kannada
const translations = {
  en: enTranslations,
  te: teTranslations,
  hi: hiTranslations,
  ta: taTranslations,
  kn: knTranslations,
}

// Update the LanguageProvider to handle Kannada language
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (
      savedLanguage &&
      (savedLanguage === "en" ||
        savedLanguage === "te" ||
        savedLanguage === "hi" ||
        savedLanguage === "ta" ||
        savedLanguage === "kn")
    ) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function with parameter support
  const t = (key: string, params?: any[]): string => {
    const currentTranslations = translations[language]
    if (currentTranslations && currentTranslations[key]) {
      let text = currentTranslations[key]

      // Replace parameters if provided
      if (params && params.length > 0) {
        params.forEach((param, index) => {
          text = text.replace(`{${index}}`, param)
        })
      }

      return text
    }

    // Check if English translation exists as fallback
    if (translations.en && translations.en[key]) {
      let text = translations.en[key]

      // Replace parameters if provided
      if (params && params.length > 0) {
        params.forEach((param, index) => {
          text = text.replace(`{${index}}`, param)
        })
      }

      return text
    }

    return key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Add default export
export default LanguageProvider

