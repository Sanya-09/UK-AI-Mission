import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi" | "gu" | "ku" | "ga";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.demo": "Demo",
    "nav.features": "Features",
    "nav.impact": "Impact",
    "nav.rentals": "Rentals",
    "status.online": "Online",
    "status.offline": "Offline",
    
    // Hero
    "hero.badge": "AI Mission Hackathon 2025",
    "hero.title1": "Empowering Uttarakhand",
    "hero.title2": "Tourism with Intelligence",
    "hero.subtitle": "Experience personalized Himalayan journeys powered by AI. Real-time crowd predictions, visual recognition for safety, and smart insights for unforgettable adventures.",
    "hero.cta1": "Explore Demo",
    "hero.cta2": "See How It Works",
    "hero.stat1.value": "50K+",
    "hero.stat1.label": "Tourists Served",
    "hero.stat2.value": "95%",
    "hero.stat2.label": "Accuracy Rate",
    "hero.stat3.value": "24/7",
    "hero.stat3.label": "AI Assistance",
    "hero.stat4.value": "12+",
    "hero.stat4.label": "Languages",
    
    // Features
    "features.title": "AI-Powered Features",
    "features.subtitle": "Intelligent solutions for modern tourism",
    "features.1.title": "Personalized Journeys",
    "features.1.desc": "AI-curated itineraries based on preferences, weather, and crowd density",
    "features.2.title": "Crowd Prediction",
    "features.2.desc": "Real-time tourist flow analysis for popular destinations and pilgrim sites",
    "features.3.title": "Visual Recognition",
    "features.3.desc": "Image-based safety alerts, landmark identification, and wildlife detection",
    "features.4.title": "Multilingual Support",
    "features.4.desc": "NLP-powered assistance in 12+ languages including local dialects",
    "features.5.title": "Offline Mode",
    "features.5.desc": "Essential features work without internet in remote Himalayan areas",
    
    // Dashboard
    "dashboard.title": "Live Analytics Dashboard",
    "dashboard.subtitle": "Real-time insights for better decisions",
    "dashboard.density": "Tourist Density Heatmap",
    "dashboard.prediction": "Crowd Prediction",
    "dashboard.sentiment": "Sentiment Analysis",
    "dashboard.next7days": "Next 7 Days",
    "dashboard.positive": "Positive",
    "dashboard.neutral": "Neutral",
    "dashboard.negative": "Negative",
    
    // Impact
    "impact.title": "Impact Across Uttarakhand",
    "impact.subtitle": "Benefits for everyone",
    "impact.1.title": "For Tourists",
    "impact.1.desc": "Safer, personalized experiences with real-time guidance",
    "impact.2.title": "For Government",
    "impact.2.desc": "Data-driven policy making and resource optimization",
    "impact.3.title": "For Local Business",
    "impact.3.desc": "Increased footfall through smart recommendations",
    "impact.4.title": "For Environment",
    "impact.4.desc": "Sustainable tourism through crowd distribution",
    
    // How It Works
    "howitworks.title": "How It Works",
    "howitworks.subtitle": "Simple, intelligent, effective",
    "howitworks.step1": "Data Collection",
    "howitworks.step1.desc": "Gather tourist data, weather, and social sentiment",
    "howitworks.step2": "AI Analysis",
    "howitworks.step2.desc": "Process using NLP, Computer Vision & Predictive Models",
    "howitworks.step3": "Actionable Insights",
    "howitworks.step3.desc": "Deliver personalized recommendations and alerts",
    "howitworks.tech": "Powered By",
    
    // Rental
    "rental.title": "Vehicle Rentals & Transport",
    "rental.subtitle": "Convenient mobility across Uttarakhand",
    "rental.scooty": "Scooty Rentals",
    "rental.scooty.desc": "Perfect for solo explorers",
    "rental.bike": "Bike Rentals",
    "rental.bike.desc": "Adventure on two wheels",
    "rental.car": "Car Rentals",
    "rental.car.desc": "Comfort for families",
    "rental.taxi": "Taxi Services",
    "rental.taxi.desc": "Door-to-door convenience",
    "rental.special": "Special Services",
    "rental.special1": "Family-friendly vehicles with child seats",
    "rental.special2": "Accessible transport for elderly travelers",
    "rental.special3": "24/7 emergency roadside assistance",
    
    // Footer
    "footer.tagline": "Powered by AI Mission Uttarakhand | SmartTour AI 2025",
    "footer.contact": "Get In Touch",
    "footer.name": "Your Name",
    "footer.email": "Email Address",
    "footer.message": "Your Message",
    "footer.send": "Send Message",
    "footer.links": "Quick Links",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.support": "Support",
  },
  hi: {
    // Header
    "nav.demo": "डेमो",
    "nav.features": "विशेषताएं",
    "nav.impact": "प्रभाव",
    "nav.rentals": "किराया",
    "status.online": "ऑनलाइन",
    "status.offline": "ऑफलाइन",
    
    // Hero
    "hero.badge": "AI मिशन हैकथॉन 2025",
    "hero.title1": "उत्तराखंड को सशक्त बनाना",
    "hero.title2": "बुद्धिमत्ता के साथ पर्यटन",
    "hero.subtitle": "AI द्वारा संचालित व्यक्तिगत हिमालयी यात्राओं का अनुभव करें। रीयल-टाइम भीड़ की भविष्यवाणी, सुरक्षा के लिए दृश्य पहचान, और अविस्मरणीय रोमांच के लिए स्मार्ट जानकारी।",
    "hero.cta1": "डेमो देखें",
    "hero.cta2": "कैसे काम करता है",
    "hero.stat1.value": "50हजार+",
    "hero.stat1.label": "पर्यटकों की सेवा",
    "hero.stat2.value": "95%",
    "hero.stat2.label": "सटीकता दर",
    "hero.stat3.value": "24/7",
    "hero.stat3.label": "AI सहायता",
    "hero.stat4.value": "12+",
    "hero.stat4.label": "भाषाएं",
    
    // Features
    "features.title": "AI-संचालित विशेषताएं",
    "features.subtitle": "आधुनिक पर्यटन के लिए बुद्धिमान समाधान",
    "features.1.title": "व्यक्तिगत यात्राएं",
    "features.1.desc": "प्राथमिकताओं, मौसम और भीड़ घनत्व के आधार पर AI-क्यूरेटेड यात्रा कार्यक्रम",
    "features.2.title": "भीड़ की भविष्यवाणी",
    "features.2.desc": "लोकप्रिय गंतव्यों और तीर्थ स्थलों के लिए रीयल-टाइम पर्यटक प्रवाह विश्लेषण",
    "features.3.title": "दृश्य पहचान",
    "features.3.desc": "छवि-आधारित सुरक्षा अलर्ट, स्थलचिह्न पहचान और वन्यजीव का पता लगाना",
    "features.4.title": "बहुभाषी समर्थन",
    "features.4.desc": "स्थानीय बोलियों सहित 12+ भाषाओं में NLP-संचालित सहायता",
    "features.5.title": "ऑफलाइन मोड",
    "features.5.desc": "दूरदराज के हिमालयी क्षेत्रों में इंटरनेट के बिना आवश्यक सुविधाएं काम करती हैं",
    
    // Dashboard
    "dashboard.title": "लाइव एनालिटिक्स डैशबोर्ड",
    "dashboard.subtitle": "बेहतर निर्णयों के लिए रीयल-टाइम जानकारी",
    "dashboard.density": "पर्यटक घनत्व हीटमैप",
    "dashboard.prediction": "भीड़ की भविष्यवाणी",
    "dashboard.sentiment": "भावना विश्लेषण",
    "dashboard.next7days": "अगले 7 दिन",
    "dashboard.positive": "सकारात्मक",
    "dashboard.neutral": "तटस्थ",
    "dashboard.negative": "नकारात्मक",
    
    // Impact
    "impact.title": "पूरे उत्तराखंड में प्रभाव",
    "impact.subtitle": "सभी के लिए लाभ",
    "impact.1.title": "पर्यटकों के लिए",
    "impact.1.desc": "रीयल-टाइम मार्गदर्शन के साथ सुरक्षित, व्यक्तिगत अनुभव",
    "impact.2.title": "सरकार के लिए",
    "impact.2.desc": "डेटा-संचालित नीति निर्माण और संसाधन अनुकूलन",
    "impact.3.title": "स्थानीय व्यवसाय के लिए",
    "impact.3.desc": "स्मार्ट सिफारिशों के माध्यम से बढ़ा हुआ फुटफॉल",
    "impact.4.title": "पर्यावरण के लिए",
    "impact.4.desc": "भीड़ वितरण के माध्यम से सतत पर्यटन",
    
    // How It Works
    "howitworks.title": "यह कैसे काम करता है",
    "howitworks.subtitle": "सरल, बुद्धिमान, प्रभावी",
    "howitworks.step1": "डेटा संग्रह",
    "howitworks.step1.desc": "पर्यटक डेटा, मौसम और सामाजिक भावना एकत्र करें",
    "howitworks.step2": "AI विश्लेषण",
    "howitworks.step2.desc": "NLP, कंप्यूटर विज़न और भविष्य कहनेवाला मॉडल का उपयोग करके प्रक्रिया",
    "howitworks.step3": "कार्रवाई योग्य जानकारी",
    "howitworks.step3.desc": "व्यक्तिगत अनुशंसाएं और अलर्ट प्रदान करें",
    "howitworks.tech": "द्वारा संचालित",
    
    // Rental
    "rental.title": "वाहन किराया और परिवहन",
    "rental.subtitle": "उत्तराखंड भर में सुविधाजनक गतिशीलता",
    "rental.scooty": "स्कूटी किराया",
    "rental.scooty.desc": "एकल खोजकर्ताओं के लिए बिल्कुल सही",
    "rental.bike": "बाइक किराया",
    "rental.bike.desc": "दो पहियों पर रोमांच",
    "rental.car": "कार किराया",
    "rental.car.desc": "परिवारों के लिए आराम",
    "rental.taxi": "टैक्सी सेवाएं",
    "rental.taxi.desc": "डोर-टू-डोर सुविधा",
    "rental.special": "विशेष सेवाएं",
    "rental.special1": "बाल सीटों के साथ परिवार के अनुकूल वाहन",
    "rental.special2": "बुजुर्ग यात्रियों के लिए सुलभ परिवहन",
    "rental.special3": "24/7 आपातकालीन रोडसाइड सहायता",
    
    // Footer
    "footer.tagline": "AI मिशन उत्तराखंड द्वारा संचालित | स्मार्टटूर AI 2025",
    "footer.contact": "संपर्क करें",
    "footer.name": "आपका नाम",
    "footer.email": "ईमेल पता",
    "footer.message": "आपका संदेश",
    "footer.send": "संदेश भेजें",
    "footer.links": "त्वरित लिंक",
    "footer.privacy": "गोपनीयता नीति",
    "footer.terms": "सेवा की शर्तें",
    "footer.support": "सहायता",
  },
  gu: {
    // Header
    "nav.demo": "ડેમો",
    "nav.features": "સુવિધાઓ",
    "nav.impact": "અસર",
    "nav.rentals": "ભાડા",
    "status.online": "ઓનલાઇન",
    "status.offline": "ઓફલાઇન",
    
    // Hero
    "hero.badge": "AI મિશન હેકાથોન 2025",
    "hero.title1": "ઉત્તરાખંડને સશક્ત બનાવવું",
    "hero.title2": "બુદ્ધિમત્તા સાથે પર્યટન",
    "hero.subtitle": "AI દ્વારા સંચાલિત વ્યક્તિગત હિમાલયન પ્રવાસોનો અનુભવ કરો. રીઅલ-ટાઇમ ભીડની આગાહી, સલામતી માટે દ્રશ્ય ઓળખ અને અવિસ્મરણીય સાહસો માટે સ્માર્ટ આંતરદૃષ્ટિ.",
    "hero.cta1": "ડેમો જુઓ",
    "hero.cta2": "કેવી રીતે કામ કરે છે",
    "hero.stat1.value": "50હજાર+",
    "hero.stat1.label": "પર્યટકોની સેવા",
    "hero.stat2.value": "95%",
    "hero.stat2.label": "ચોકસાઈ દર",
    "hero.stat3.value": "24/7",
    "hero.stat3.label": "AI સહાય",
    "hero.stat4.value": "12+",
    "hero.stat4.label": "ભાષાઓ",
    
    // Features
    "features.title": "AI-સંચાલિત સુવિધાઓ",
    "features.subtitle": "આધુનિક પર્યટન માટે બુદ્ધિશાળી ઉકેલો",
    "features.1.title": "વ્યક્તિગત પ્રવાસો",
    "features.1.desc": "પસંદગીઓ, હવામાન અને ભીડની ઘનતાના આધારે AI-ક્યુરેટેડ પ્રવાસ યોજના",
    "features.2.title": "ભીડની આગાહી",
    "features.2.desc": "લોકપ્રિય સ્થળો અને તીર્થસ્થાનો માટે રીઅલ-ટાઇમ પર્યટક પ્રવાહ વિશ્લેષણ",
    "features.3.title": "દ્રશ્ય ઓળખ",
    "features.3.desc": "છબી-આધારિત સલામતી ચેતવણીઓ, સીમાચિહ્ન ઓળખ અને વન્યજીવન શોધ",
    "features.4.title": "બહુભાષી સમર્થન",
    "features.4.desc": "સ્થાનિક બોલીઓ સહિત 12+ ભાષાઓમાં NLP-સંચાલિત સહાય",
    "features.5.title": "ઓફલાઇન મોડ",
    "features.5.desc": "દૂરના હિમાલયન વિસ્તારોમાં ઇન્ટરનેટ વિના આવશ્યક સુવિધાઓ કામ કરે છે",
    
    // Dashboard
    "dashboard.title": "લાઇવ એનાલિટિક્સ ડેશબોર્ડ",
    "dashboard.subtitle": "વધુ સારા નિર્ણયો માટે રીઅલ-ટાઇમ આંતરદૃષ્ટિ",
    "dashboard.density": "પર્યટક ઘનતા હીટમેપ",
    "dashboard.prediction": "ભીડની આગાહી",
    "dashboard.sentiment": "ભાવના વિશ્લેષણ",
    "dashboard.next7days": "આગામી 7 દિવસ",
    "dashboard.positive": "હકારાત્મક",
    "dashboard.neutral": "તટસ્થ",
    "dashboard.negative": "નકારાત્મક",
    
    // Impact
    "impact.title": "સમગ્ર ઉત્તરાખંડમાં અસર",
    "impact.subtitle": "દરેક માટે ફાયદા",
    "impact.1.title": "પર્યટકો માટે",
    "impact.1.desc": "રીઅલ-ટાઇમ માર્ગદર્શન સાથે સુરક્ષિત, વ્યક્તિગત અનુભવો",
    "impact.2.title": "સરકાર માટે",
    "impact.2.desc": "ડેટા-સંચાલિત નીતિ નિર્માણ અને સંસાધન ઑપ્ટિમાઇઝેશન",
    "impact.3.title": "સ્થાનિક વ્યવસાય માટે",
    "impact.3.desc": "સ્માર્ટ ભલામણો દ્વારા વધારો",
    "impact.4.title": "પર્યાવરણ માટે",
    "impact.4.desc": "ભીડ વિતરણ દ્વારા ટકાઉ પર્યટન",
    
    // How It Works
    "howitworks.title": "તે કેવી રીતે કામ કરે છે",
    "howitworks.subtitle": "સરળ, બુદ્ધિશાળી, અસરકારક",
    "howitworks.step1": "ડેટા સંગ્રહ",
    "howitworks.step1.desc": "પર્યટક ડેટા, હવામાન અને સામાજિક ભાવના એકત્રિત કરો",
    "howitworks.step2": "AI વિશ્લેષણ",
    "howitworks.step2.desc": "NLP, કમ્પ્યુટર વિઝન અને આગાહી મોડેલ્સનો ઉપયોગ કરીને પ્રક્રિયા",
    "howitworks.step3": "કાર્યવાહી યોગ્ય આંતરદૃષ્ટિ",
    "howitworks.step3.desc": "વ્યક્તિગત ભલામણો અને ચેતવણીઓ પ્રદાન કરો",
    "howitworks.tech": "દ્વારા સંચાલિત",
    
    // Rental
    "rental.title": "વાહન ભાડા અને પરિવહન",
    "rental.subtitle": "સમગ્ર ઉત્તરાખંડમાં સુવિધાજનક ગતિશીલતા",
    "rental.scooty": "સ્કૂટી ભાડા",
    "rental.scooty.desc": "એકલા સંશોધકો માટે સંપૂર્ણ",
    "rental.bike": "બાઇક ભાડા",
    "rental.bike.desc": "બે પૈડાં પર સાહસ",
    "rental.car": "કાર ભાડા",
    "rental.car.desc": "પરિવારો માટે આરામ",
    "rental.taxi": "ટેક્સી સેવાઓ",
    "rental.taxi.desc": "ડોર-ટુ-ડોર સુવિધા",
    "rental.special": "વિશેષ સેવાઓ",
    "rental.special1": "બાળ સીટો સાથે પરિવાર-મૈત્રીપૂર્ણ વાહનો",
    "rental.special2": "વૃદ્ધ પ્રવાસીઓ માટે સુલભ પરિવહન",
    "rental.special3": "24/7 કટોકટી રોડસાઇડ સહાય",
    
    // Footer
    "footer.tagline": "AI મિશન ઉત્તરાખંડ દ્વારા સંચાલિત | સ્માર્ટટૂર AI 2025",
    "footer.contact": "સંપર્ક કરો",
    "footer.name": "તમારું નામ",
    "footer.email": "ઇમેઇલ સરનામું",
    "footer.message": "તમારો સંદેશ",
    "footer.send": "સંદેશ મોકલો",
    "footer.links": "ઝડપી લિંક્સ",
    "footer.privacy": "ગોપનીયતા નીતિ",
    "footer.terms": "સેવાની શરતો",
    "footer.support": "સહાય",
  },
  ku: {
    // Header - Kumaoni
    "nav.demo": "डेमो",
    "nav.features": "विशेषताएं",
    "nav.impact": "प्रभाव",
    "nav.rentals": "किराया",
    "status.online": "ऑनलाइन",
    "status.offline": "ऑफलाइन",
    
    // Hero
    "hero.badge": "AI मिशन हैकथॉन 2025",
    "hero.title1": "उत्तराखंड कें सशक्त बणौण",
    "hero.title2": "बुद्धिमत्ता सांग पर्यटन",
    "hero.subtitle": "AI द्वारा संचालित व्यक्तिगत हिमालयी यात्राओं को अनुभव करो। रीयल-टाइम भीड़ की भविष्यवाणी, सुरक्षा खातिर दृश्य पहचान, अर अविस्मरणीय रोमांच खातिर स्मार्ट जानकारी।",
    "hero.cta1": "डेमो देखो",
    "hero.cta2": "कसि काम करलो",
    "hero.stat1.value": "50हजार+",
    "hero.stat1.label": "पर्यटकों की सेवा",
    "hero.stat2.value": "95%",
    "hero.stat2.label": "सटीकता दर",
    "hero.stat3.value": "24/7",
    "hero.stat3.label": "AI सहायता",
    "hero.stat4.value": "12+",
    "hero.stat4.label": "भाषाएं",
    
    // Features
    "features.title": "AI-संचालित विशेषताएं",
    "features.subtitle": "आधुनिक पर्यटन खातिर बुद्धिमान समाधान",
    "features.1.title": "व्यक्तिगत यात्राएं",
    "features.1.desc": "प्राथमिकताओं, मौसम अर भीड़ घनत्व कें आधार प AI-क्यूरेटेड यात्रा कार्यक्रम",
    "features.2.title": "भीड़ की भविष्यवाणी",
    "features.2.desc": "लोकप्रिय गंतव्यों अर तीर्थ स्थलों खातिर रीयल-टाइम पर्यटक प्रवाह विश्लेषण",
    "features.3.title": "दृश्य पहचान",
    "features.3.desc": "छवि-आधारित सुरक्षा अलर्ट, स्थलचिह्न पहचान अर वन्यजीव खोज",
    "features.4.title": "बहुभाषी समर्थन",
    "features.4.desc": "स्थानीय बोलियों सहित 12+ भाषाओं में NLP-संचालित सहायता",
    "features.5.title": "ऑफलाइन मोड",
    "features.5.desc": "दूरदराज कें हिमालयी क्षेत्रों में इंटरनेट बिना जरूरी सुविधाएं काम करलीं",
    
    // Dashboard
    "dashboard.title": "लाइव एनालिटिक्स डैशबोर्ड",
    "dashboard.subtitle": "बढ़िया निर्णयों खातिर रीयल-टाइम जानकारी",
    "dashboard.density": "पर्यटक घनत्व हीटमैप",
    "dashboard.prediction": "भीड़ की भविष्यवाणी",
    "dashboard.sentiment": "भावना विश्लेषण",
    "dashboard.next7days": "अगल 7 दिन",
    "dashboard.positive": "सकारात्मक",
    "dashboard.neutral": "तटस्थ",
    "dashboard.negative": "नकारात्मक",
    
    // Impact
    "impact.title": "पूरे उत्तराखंड में प्रभाव",
    "impact.subtitle": "सबकें खातिर फायदा",
    "impact.1.title": "पर्यटकों खातिर",
    "impact.1.desc": "रीयल-टाइम मार्गदर्शन सांग सुरक्षित, व्यक्तिगत अनुभव",
    "impact.2.title": "सरकार खातिर",
    "impact.2.desc": "डेटा-संचालित नीति निर्माण अर संसाधन अनुकूलन",
    "impact.3.title": "स्थानीय व्यवसाय खातिर",
    "impact.3.desc": "स्मार्ट सिफारिशों द्वारा बढ़्यो फुटफॉल",
    "impact.4.title": "पर्यावरण खातिर",
    "impact.4.desc": "भीड़ वितरण द्वारा स्थायी पर्यटन",
    
    // How It Works
    "howitworks.title": "यो कसि काम करलो",
    "howitworks.subtitle": "सरल, बुद्धिमान, प्रभावी",
    "howitworks.step1": "डेटा संग्रह",
    "howitworks.step1.desc": "पर्यटक डेटा, मौसम अर सामाजिक भावना एकत्र करो",
    "howitworks.step2": "AI विश्लेषण",
    "howitworks.step2.desc": "NLP, कंप्यूटर विज़न अर भविष्य बतौण वाला मॉडल कें उपयोग करि के प्रक्रिया",
    "howitworks.step3": "कार्रवाई योग्य जानकारी",
    "howitworks.step3.desc": "व्यक्तिगत सिफारिशें अर अलर्ट दियो",
    "howitworks.tech": "द्वारा संचालित",
    
    // Rental
    "rental.title": "वाहन किराया अर परिवहन",
    "rental.subtitle": "उत्तराखंड भर में सुविधाजनक गतिशीलता",
    "rental.scooty": "स्कूटी किराया",
    "rental.scooty.desc": "एकल खोजकर्ताओं खातिर बिल्कुल सही",
    "rental.bike": "बाइक किराया",
    "rental.bike.desc": "दुई पहियों प रोमांच",
    "rental.car": "कार किराया",
    "rental.car.desc": "परिवारों खातिर आराम",
    "rental.taxi": "टैक्सी सेवाएं",
    "rental.taxi.desc": "घर ते घर सुविधा",
    "rental.special": "विशेष सेवाएं",
    "rental.special1": "बाल सीटों सांग परिवार कें अनुकूल वाहन",
    "rental.special2": "बुजुर्ग यात्रियों खातिर सुलभ परिवहन",
    "rental.special3": "24/7 आपातकालीन रोडसाइड सहायता",
    
    // Footer
    "footer.tagline": "AI मिशन उत्तराखंड द्वारा संचालित | स्मार्टटूर AI 2025",
    "footer.contact": "संपर्क करो",
    "footer.name": "तुमर नाम",
    "footer.email": "ईमेल पता",
    "footer.message": "तुमर संदेश",
    "footer.send": "संदेश भेजो",
    "footer.links": "त्वरित लिंक",
    "footer.privacy": "गोपनीयता नीति",
    "footer.terms": "सेवा की शर्तें",
    "footer.support": "सहायता",
  },
  ga: {
    // Header - Garhwali
    "nav.demo": "डेमो",
    "nav.features": "विशेषताएं",
    "nav.impact": "प्रभाव",
    "nav.rentals": "किराया",
    "status.online": "ऑनलाइन",
    "status.offline": "ऑफलाइन",
    
    // Hero
    "hero.badge": "AI मिशन हैकथॉन 2025",
    "hero.title1": "उत्तराखण्ड कै सशक्त बणाण",
    "hero.title2": "बुद्धिमत्ता सित पर्यटन",
    "hero.subtitle": "AI द्वारा संचालित व्यक्तिगत हिमालयी यात्राओं कै अनुभव करो। रीयल-टाइम भीड़ की भविष्यवाणी, सुरक्षा लेई दृश्य पहचान, अर अविस्मरणीय रोमांच लेई स्मार्ट जानकारी।",
    "hero.cta1": "डेमो देखो",
    "hero.cta2": "कसि काम करदा",
    "hero.stat1.value": "50हजार+",
    "hero.stat1.label": "पर्यटकों की सेवा",
    "hero.stat2.value": "95%",
    "hero.stat2.label": "सटीकता दर",
    "hero.stat3.value": "24/7",
    "hero.stat3.label": "AI सहायता",
    "hero.stat4.value": "12+",
    "hero.stat4.label": "भाषाएं",
    
    // Features
    "features.title": "AI-संचालित विशेषताएं",
    "features.subtitle": "आधुनिक पर्यटन लेई बुद्धिमान समाधान",
    "features.1.title": "व्यक्तिगत यात्राएं",
    "features.1.desc": "प्राथमिकताओं, मौसम अर भीड़ घनत्व कै आधार प AI-क्यूरेटेड यात्रा कार्यक्रम",
    "features.2.title": "भीड़ की भविष्यवाणी",
    "features.2.desc": "लोकप्रिय गंतव्यों अर तीर्थ स्थलों लेई रीयल-टाइम पर्यटक प्रवाह विश्लेषण",
    "features.3.title": "दृश्य पहचान",
    "features.3.desc": "छवि-आधारित सुरक्षा अलर्ट, स्थलचिह्न पहचान अर वन्यजीव खोज",
    "features.4.title": "बहुभाषी समर्थन",
    "features.4.desc": "स्थानीय बोलियों सहित 12+ भाषाओं में NLP-संचालित सहायता",
    "features.5.title": "ऑफलाइन मोड",
    "features.5.desc": "दूर कै हिमालयी क्षेत्रों में इंटरनेट बिना जरूरी सुविधाएं काम करदीं",
    
    // Dashboard
    "dashboard.title": "लाइव एनालिटिक्स डैशबोर्ड",
    "dashboard.subtitle": "बढ़िया निर्णयों लेई रीयल-टाइम जानकारी",
    "dashboard.density": "पर्यटक घनत्व हीटमैप",
    "dashboard.prediction": "भीड़ की भविष्यवाणी",
    "dashboard.sentiment": "भावना विश्लेषण",
    "dashboard.next7days": "अगल 7 दिन",
    "dashboard.positive": "सकारात्मक",
    "dashboard.neutral": "तटस्थ",
    "dashboard.negative": "नकारात्मक",
    
    // Impact
    "impact.title": "पूरे उत्तराखण्ड में प्रभाव",
    "impact.subtitle": "सबकै लेई फायदा",
    "impact.1.title": "पर्यटकों लेई",
    "impact.1.desc": "रीयल-टाइम मार्गदर्शन सित सुरक्षित, व्यक्तिगत अनुभव",
    "impact.2.title": "सरकार लेई",
    "impact.2.desc": "डेटा-संचालित नीति निर्माण अर संसाधन अनुकूलन",
    "impact.3.title": "स्थानीय व्यवसाय लेई",
    "impact.3.desc": "स्मार्ट सिफारिशों द्वारा बढ़यो फुटफॉल",
    "impact.4.title": "पर्यावरण लेई",
    "impact.4.desc": "भीड़ वितरण द्वारा स्थायी पर्यटन",
    
    // How It Works
    "howitworks.title": "यो कसि काम करदा",
    "howitworks.subtitle": "सरल, बुद्धिमान, प्रभावी",
    "howitworks.step1": "डेटा संग्रह",
    "howitworks.step1.desc": "पर्यटक डेटा, मौसम अर सामाजिक भावना एकत्र करो",
    "howitworks.step2": "AI विश्लेषण",
    "howitworks.step2.desc": "NLP, कंप्यूटर विज़न अर भविष्य बताण वाला मॉडल कै उपयोग करि के प्रक्रिया",
    "howitworks.step3": "कार्रवाई योग्य जानकारी",
    "howitworks.step3.desc": "व्यक्तिगत सिफारिशें अर अलर्ट द्यो",
    "howitworks.tech": "द्वारा संचालित",
    
    // Rental
    "rental.title": "वाहन किराया अर परिवहन",
    "rental.subtitle": "उत्तराखण्ड भर में सुविधाजनक गतिशीलता",
    "rental.scooty": "स्कूटी किराया",
    "rental.scooty.desc": "एकल खोजकर्ताओं लेई बिल्कुल सही",
    "rental.bike": "बाइक किराया",
    "rental.bike.desc": "दुई पहियों प रोमांच",
    "rental.car": "कार किराया",
    "rental.car.desc": "परिवारों लेई आराम",
    "rental.taxi": "टैक्सी सेवाएं",
    "rental.taxi.desc": "घर त घर सुविधा",
    "rental.special": "विशेष सेवाएं",
    "rental.special1": "बाल सीटों सित परिवार कै अनुकूल वाहन",
    "rental.special2": "बुजुर्ग यात्रियों लेई सुलभ परिवहन",
    "rental.special3": "24/7 आपातकालीन रोडसाइड सहायता",
    
    // Footer
    "footer.tagline": "AI मिशन उत्तराखण्ड द्वारा संचालित | स्मार्टटूर AI 2025",
    "footer.contact": "संपर्क करो",
    "footer.name": "त्वार नाम",
    "footer.email": "ईमेल पता",
    "footer.message": "त्वार संदेश",
    "footer.send": "संदेश भेजो",
    "footer.links": "त्वरित लिंक",
    "footer.privacy": "गोपनीयता नीति",
    "footer.terms": "सेवा की शर्तें",
    "footer.support": "सहायता",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
