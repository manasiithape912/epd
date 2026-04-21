const T = {
  en:{
    name:'Enter Your Name',
    profile:'Profile',
    body:'Where does it hurt?',
    pain:'Type of Pain',
    intensity:'Pain Intensity',
    duration:'How long?',
    symptoms:'Symptoms'
  },
  hi:{
    name:'अपना नाम लिखें',
    profile:'प्रोफाइल',
    body:'कहाँ दर्द है?',
    pain:'दर्द का प्रकार',
    intensity:'दर्द की तीव्रता',
    duration:'कितने समय से?',
    symptoms:'लक्षण'
  }
};

function setLang(lang){
  state.lang = lang;
  render();
}