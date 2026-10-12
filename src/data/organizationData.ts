export interface DivineInspiration {
  id: string;
  name: string;
  title: string;
  shastra: string;
  prernaTagline: string;
  coreValues: string[];
  description: string;
  quote: string;
  image: string;
}

export const DIVINE_INSPIRATIONS: DivineInspiration[] = [
  {
    id: "parashuram",
    name: "भगवान परशुराम",
    title: "धर्म-रक्षक एवं अदम्य शौर्य के प्रतीक",
    shastra: "दिव्य परशु (कुठार) एवं धनुष",
    prernaTagline: "शौर्य, तपस्या और अधर्म का समूल नाश",
    coreValues: ["धर्म की निर्भीक रक्षा", "अन्याय का प्रतिकार", "शस्त्र व शास्त्र का समन्वय"],
    description: "भगवान परशुराम सिखाते हैं कि जब समाज में अधर्म और अत्याचार बढ़ जाए, तब धर्म और निर्दोषों की रक्षा हेतु शस्त्र उठाना ही परम कर्तव्य है।",
    quote: "॥ अग्रतः चतुरो वेदाः पृष्ठतः सशरं धनुः ॥",
    image: "/src/assets/images/prerna_bhagwan_parashuram_1791567825389.jpg"
  },
  {
    id: "shri_ram",
    name: "भगवान श्री राम",
    title: "मर्यादा पुरुषोत्तम",
    shastra: "कोदंड धनुष एवं अमोघ बाण",
    prernaTagline: "मर्यादा, साहस और कर्तव्य",
    coreValues: ["मर्यादा का सर्वोच्च पालन", "सत्य एवं वचन निष्ठा", "दुर्बलों का अभयदान"],
    description: "प्रभु श्री राम का जीवन संदेश देता है कि शक्ति सदैव मर्यादा, विनम्रता और लोक-कल्याण के अधीन रहनी चाहिए। शस्त्र का प्रयोग केवल अंतिम उपाय के रूप में धर्म हेतु हो।",
    quote: "॥ धर्मो रक्षति रक्षितः ॥",
    image: "/src/assets/images/prerna_shri_ram_1791567837154.jpg"
  },
  {
    id: "shri_krishna",
    name: "भगवान श्री कृष्ण",
    title: "योगेश्वर एवं गीता के प्रणेता",
    shastra: "सुदर्शन चक्र एवं दिव्य ज्ञान",
    prernaTagline: "ज्ञान, विवेक और सही निर्णय",
    coreValues: ["निष्काम कर्मयोग", "विवेकपूर्ण रणनीतिक निर्णय", "अधर्म पर विजय"],
    description: "भगवान श्री कृष्ण ने कुरुक्षेत्र में अर्जुन को ज्ञान और विवेक का मार्ग दिखाया। कठिन परिस्थितियों में सही निर्णय लेना और सत्य का साथ देना ही सच्चा पुरुषार्थ है।",
    quote: "॥ यतो धर्मस्ततो जयः ॥",
    image: "/src/assets/images/prerna_shri_krishna_1791567887395.jpg"
  },
  {
    id: "balaram",
    name: "भगवान बलराम",
    title: "हलधर एवं प्रचंड शक्ति के स्वामी",
    shastra: "पवित्र हल (हलधर) एवं गदा",
    prernaTagline: "अथाह बल, न्याय और कर्मठता",
    coreValues: ["परिश्रम एवं कृषि सम्मान", "अखंड निष्पक्ष न्याय", "अपार रक्षक शक्ति"],
    description: "भगवान बलराम श्रम, कृषि और न्यायप्रियता के दिव्य अधिष्ठाता हैं। उनका हल उत्पादन और गदा रक्षा का प्रतीक है, जो संतुलित और स्वावलंबी समाज की नींव है।",
    quote: "॥ नमो बलभद्राय हलधराय ॥",
    image: "/src/assets/images/prerna_bhagwan_balaram_1791567851307.jpg"
  }
];

export interface Guest {
  name: string;
  role: string;
  description: string;
  category: 'chief' | 'special' | 'artist' | 'influencer';
}

export interface Pillar {
  id: string;
  title: string;
  slogan: string;
  description: string;
  points: string[];
  icon: string;
}

export const EVENT_DETAILS = {
  title: "सनातन समाज सामूहिक शस्त्र पूजन समारोह",
  subtitle: "अच्छाई की बुराई पर विजय का पावन उत्सव",
  dateText: "20 अक्टूबर 2026",
  targetDate: "2026-10-20T16:00:00",
  timeText: "सायं 4:00 बजे से",
  venue: "फतेहाबाद रोड, आगरा (उत्तर प्रदेश)",
  estimatedAttendees: "2,000+",
  contactPhone: "8279865919",
  contactEmails: ["official@monkmediamarketing.in", "info@monkmediamarketing.in"],
  tagline: "धर्मो रक्षति रक्षितः",
  motto: "सेवा • सुरक्षा • संरक्षण",
  management: "Monk Media Marketing",
};

export const PILLARS: Pillar[] = [
  {
    id: "seva",
    title: "सेवा",
    slogan: "गौसेवा एवं दीन-दुखियों का सहयोग",
    description: "समाज के जरूरतमंदों का सहयोग, गौशालाओं का संवर्धन और निष्काम भाव से स्वयंसेवा।",
    points: [
      "गौसेवा एवं गौशालाओं का संवर्धन",
      "जरूरतमंदों का सामाजिक सहयोग",
      "निःस्वार्थ स्वयंसेवा भाव"
    ],
    icon: "HeartHandshake"
  },
  {
    id: "suraksha",
    title: "सुरक्षा",
    slogan: "नारी गरिमा, मर्यादा एवं सुरक्षित समाज",
    description: "प्रत्येक व्यक्ति की गरिमा, महिला सम्मान और सुरक्षित सामाजिक सहभागिता का वातावरण।",
    points: [
      "व्यक्ति की गरिमा एवं सम्मान",
      "महिला सम्मान और सुरक्षा",
      "सुरक्षित सामाजिक सहभागिता"
    ],
    icon: "ShieldCheck"
  },
  {
    id: "sanrakshan",
    title: "संरक्षण",
    slogan: "संस्कृति, परंपरा एवं ऐतिहासिक धरोहर",
    description: "सनातन संस्कृति, वैदिक परंपराओं और सांस्कृतिक विरासत को आगे की पीढ़ियों तक पहुँचाना।",
    points: [
      "सनातन संस्कृति की रक्षा",
      "वैदिक परंपराओं का जागरण",
      "विरासत को नई पीढ़ी तक पहुँचाना"
    ],
    icon: "Flame"
  }
];

export const GUESTS: Guest[] = [
  {
    name: "श्री देवेंद्र सिंह तोमर",
    role: "मुख्य अतिथि",
    description: "प्रमुख सामाजिक एवं जनसेवी व्यक्तित्व, सनातन संस्कृति के प्रखर मार्गदर्शक",
    category: "chief"
  },
  {
    name: "श्री गोपेश्वर कृष्ण दास जी",
    role: "विशेष अतिथि",
    description: "पूज्य संत एवं आध्यात्मिक मार्गदर्शक",
    category: "special"
  },
  {
    name: "श्री मृदुलकांत शास्त्री जी",
    role: "विशेष अतिथि",
    description: "विख्यात कथावाचक एवं विद्वान",
    category: "special"
  },
  {
    name: "डीके ठाकुर एवं विपिन पटाडिया",
    role: "संगीत प्रस्तुति (कलाकार)",
    description: "सुप्रसिद्ध भजन एवं राष्ट्रभक्ति संगीतकार",
    category: "artist"
  },
  {
    name: "मनीष जैन (JJ Communication)",
    role: "प्रारंभिक इन्फ्लुएंसर",
    description: "डिजिटल संचार एवं मीडिया व्यक्तित्व",
    category: "influencer"
  },
  {
    name: "श्वेता चौहान",
    role: "सांस्कृतिक इन्फ्लुएंसर",
    description: "सनातन जीवनशैली एवं सामाजिक संवाहक",
    category: "influencer"
  },
  {
    name: "विनय शर्मा (Fitness with Dhoti)",
    role: "युवा प्रेरक एवं इन्फ्लुएंसर",
    description: "भारतीय पारम्परिक फिटनेस एवं धोती संस्कृति के प्रसारक",
    category: "influencer"
  }
];

export const LEADERSHIP = [
  {
    name: "अमित दंदोतिया",
    role: "संस्थापक",
    organization: "सनातन सेना संगठन",
    description: "सनातन एकता, सांस्कृतिक पुनर्जागरण और समाज के सशक्तिकरण के लिए समर्पित नेतृत्व।"
  },
  {
    name: "रॉबिन दंदोतिया",
    role: "जनसंपर्क अधिकारी (PRO)",
    organization: "संगठन एवं कार्यक्रम",
    description: "संगठनात्मक समन्वय, जनसंवाद और समारोह के सफल संचालन का प्रबंधन।"
  },
  {
    name: "Monk Media Marketing",
    role: "कार्यक्रम प्रबंधन, जनसंपर्क एवं संचार",
    organization: "आधिकारिक प्रबंधन एजेंसी",
    description: "आउटडोर प्रचार, मीडिया संवाद, डिजिटल उपस्थिति और व्यापक जनसहभागिता का संचालन।"
  }
];

export const OUTREACH_STATS = [
  { count: "80-100", label: "होर्डिंग एवं बैनर", sub: "आगरा के प्रमुख मार्गों व बाजारों में" },
  { count: "100+", label: "डिजिटल पोर्टल्स", sub: "समाचार एवं ऑनलाइन कवरेज" },
  { count: "10+", label: "डिजिटल न्यूज़ चैनल्स", sub: "लाइव प्रसारण व साक्षात्कार" },
  { count: "4-5+", label: "सैटेलाइट न्यूज़ चैनल्स", sub: "विशेष बुलेटिन व रिपोर्ट" },
  { count: "20+", label: "प्रमुख इन्फ्लुएंसर्स", sub: "सोशल मीडिया पर व्यापक प्रचार" },
  { count: "2,000+", label: "अनुमानित सहभागिता", sub: "आगरा एवं निकटवर्ती क्षेत्रों से" }
];
