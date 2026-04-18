/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  ChevronRight, 
  Lock, 
  Target, 
  CircleDollarSign,
  Wifi,
  Armchair,
  WashingMachine,
  Snowflake,
  Box,
  Utensils,
  Key,
  VolumeX,
  Sparkles,
  MessageSquare,
  Menu,
  X
} from 'lucide-react';

const BUSINESS_DATA = {
  brand: "Szlakiem Żeromskiego",
  tagline: "NOWOCZESNE POKOJE DLA STUDENTÓW I MŁODYCH PRACUJĄCYCH W CENTRUM ŁODZI",
  company: "Frada Enterprises",
  address: "ul. Żeromskiego 29, 90-737 Łódź",
  phone: "600-259-675",
  email: "Frada.Enterprises@gmail.com",
  hours: "Dostępni do kontaktu o każdej porze"
};

const FEATURE_CARDS = [
  {
    icon: <Lock className="w-8 h-8 text-accent" />,
    title: "BEZPIECZEŃSTWO",
    text: "Jesteśmy profesjonalną firmą. Zawsze masz swój własny klucz — do Twojego pokoju wchodzisz tylko Ty. W mieszkaniach nie mieszka właściciel — czujesz się swobodnie i niezależnie."
  },
  {
    icon: <Target className="w-8 h-8 text-accent" />,
    title: "DOSKONAŁA LOKALIZACJA",
    text: "Nasze mieszkania leżą w centrum Łodzi, przy uczelniach wyższych lub w odległości max. 3 minut spacerem od przystanku autobusowego lub tramwajowego."
  },
  {
    icon: <CircleDollarSign className="w-8 h-8 text-accent" />,
    title: "OKAZYJNA CENA",
    text: "Nowoczesny pokój za cenę zwykłej stancji? U nas tak. Sprawdź sam — nasze pokoje są naprawdę tańsze niż porównywalne oferty na rynku."
  }
];

const OFFER_ITEMS = [
  { icon: <Wifi />, text: "Darmowe Wi-Fi" },
  { icon: <Armchair />, text: "Nowoczesne meble" },
  { icon: <WashingMachine />, text: "Pralka" },
  { icon: <Snowflake />, text: "Lodówka" },
  { icon: <Box />, text: "Mikrofalówka" },
  { icon: <Utensils />, text: "W pełni wyposażona kuchnia" },
  { icon: <Key />, text: "Własny klucz do pokoju" },
  { icon: <VolumeX />, text: "Regulamin zapewniający ciszę i spokój" },
  { icon: <Sparkles />, text: "Czyste, zadbane przestrzenie wspólne" },
  { icon: <MapPin />, text: "Centrum Łodzi — wszystko pod ręką" }
];

const LISTINGS = [
  { name: "Mikro-apartament #1", location: "ul. Żeromskiego 18", status: "DOSTĘPNE", statusColor: "green", desc: "Nowoczesne, w pełni wyposażone studio w centrum Łodzi." },
  { name: "Mikro-apartament #2", location: "ul. Żeromskiego 18", status: "DOSTĘPNE", statusColor: "green" },
  { name: "Mikro-apartament #3", location: "ul. Żeromskiego 18", status: "DOSTĘPNE", statusColor: "green" },
  { name: "Mikro-apartament #4", location: "ul. Żeromskiego 18", status: "ZAREZERWOWANE", statusColor: "orange" },
  { name: "Mikro-apartament #5", location: "ul. Żeromskiego 18", status: "WYNAJĘTE", statusColor: "gray" },
  { name: "Apartament", location: "ul. Żeromskiego 27", status: "DOSTĘPNE", statusColor: "green", desc: "Mieszkanie 1-pokojowe." },
  { name: "Mieszkanie 5-pokojowe", location: "ul. Żeromskiego 27", status: "DOSTĘPNE", statusColor: "green", desc: "Idealne dla grupy studentów." },
  { name: "Mieszkanie 5-pokojowe", location: "ul. Żeromskiego 29", status: "DOSTĘPNE", statusColor: "green" },
  { name: "Mieszkanie ul. Gdańska 98 #1", location: "Gdańska 98", status: "W REALIZACJI", statusColor: "blue" },
  { name: "Mieszkanie ul. Gdańska 98 #2", location: "Gdańska 98", status: "W REALIZACJI", statusColor: "blue" },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Dziękujemy! Odezwiemy się wkrótce.");
  };

  return (
    <div className="min-h-screen font-sans bg-grey-bg text-text-dark overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4' : 'bg-white/90 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="#" className="text-xl font-extrabold tracking-tighter text-primary">
              {BUSINESS_DATA.brand.toUpperCase()}
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8 text-sm font-bold text-text-dark">
              <a href="#oferta" className="hover:text-accent transition-colors">Oferta</a>
              <a href="#pokoje" className="hover:text-accent transition-colors">Pokoje</a>
              <a href="#o-nas" className="hover:text-accent transition-colors">O Nas</a>
              <a href="#kontakt" className="hover:text-accent transition-colors">Kontakt</a>
            </div>
            <div className="flex items-center gap-6">
              <a href={`tel:${BUSINESS_DATA.phone}`} className="font-bold text-primary hover:text-accent transition-colors">
                600-259-675
              </a>
              <a 
                href={`tel:${BUSINESS_DATA.phone}`} 
                className="bg-accent hover:bg-opacity-90 text-white px-5 py-2.5 rounded-md font-bold text-sm transition-all shadow-sm"
              >
                Zadzwoń teraz
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-10 md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-bold text-primary">
              <a href="#oferta" onClick={() => setMobileMenuOpen(false)}>Oferta</a>
              <a href="#pokoje" onClick={() => setMobileMenuOpen(false)}>Pokoje</a>
              <a href="#o-nas" onClick={() => setMobileMenuOpen(false)}>O Nas</a>
              <a href="#kontakt" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-[480px] flex items-center overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
          {/* Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ 
              backgroundImage: 'radial-gradient(white 0.5px, transparent 0.5px)',
              backgroundSize: '20px 20px'
            }}
          />

          <div className="container mx-auto px-10 relative z-10 pt-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Nowoczesne Pokoje w Sercu Łodzi
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-medium mb-8 max-w-xl">
                Dla studentów i młodych pracujących – w pełni wyposażone, bez zbędnych formalności przy ul. Żeromskiego.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="#pokoje" 
                  className="bg-accent hover:bg-opacity-90 text-white px-8 py-3.5 rounded-lg font-bold text-center transition-all shadow-lg"
                >
                  Zobacz Pokoje
                </a>
                <a 
                  href={`tel:${BUSINESS_DATA.phone}`} 
                  className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold text-center hover:bg-white/10 transition-all"
                >
                  Zadzwoń: {BUSINESS_DATA.phone}
                </a>
              </div>

              <div className="flex gap-6 text-xs font-semibold text-white/80">
                <span>✓ Bez kaucji warunkowej</span>
                <span>✓ Umowa na piśmie</span>
                <span>✓ Cisza i komfort</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Bar */}
        <section id="oferta" className="bg-white border-b border-border-subtle py-8 scroll-mt-20">
          <div className="container mx-auto px-10">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="flex items-center gap-4">
                <span className="text-3xl">🔐</span>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase">BEZPIECZEŃSTWO</h4>
                  <p className="text-xs text-gray-500 leading-tight">Własny klucz, brak właściciela w mieszkaniu.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase">LOKALIZACJA</h4>
                  <p className="text-xs text-gray-500 leading-tight">Centrum Łodzi, 3 min do przystanku.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl">💰</span>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase">OKAZYJNA CENA</h4>
                  <p className="text-xs text-gray-500 leading-tight">Nowoczesny standard w cenie stancji.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Listings Section */}
        <section id="pokoje" className="py-16 px-10 scroll-mt-20">
          <div className="container mx-auto">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl font-bold text-primary">Dostępne Pokoje i Mieszkania</h2>
              <span className="text-sm font-bold text-accent hidden md:inline">Sprawdź naszą ofertę</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LISTINGS.map((room, i) => (
                <article key={i} className="bg-white rounded-xl overflow-hidden border border-border-subtle shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex flex-col group">
                  <div className="h-32 bg-gradient-to-br from-slate-700 to-slate-800 relative flex items-center justify-center">
                    <div className="text-white/20 select-none">
                       <MapPin size={48} />
                    </div>
                    
                    <span className={`absolute top-3 right-3 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider ${
                      room.statusColor === 'green' ? 'bg-success text-white' :
                      room.statusColor === 'orange' ? 'bg-accent text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {room.status}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-base font-bold text-primary mb-1">{room.name}</h3>
                    <p className="text-sm text-gray-500 mb-4 flex-grow line-clamp-2">
                      {room.location} | {room.desc || "Komfortowy pokój w centrum Łodzi."}
                    </p>
                    <a 
                      href={`tel:${BUSINESS_DATA.phone}`} 
                      className="block w-full text-center py-2.5 bg-grey-bg text-primary border border-border-subtle rounded-md font-bold text-xs hover:bg-gray-100 transition-all"
                    >
                      Zadzwoń: {BUSINESS_DATA.phone}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="o-nas" className="py-24 bg-white scroll-mt-20 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Kim jesteśmy?</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">Profesjonalny najem <br /> bez stresu</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-primary font-bold">{BUSINESS_DATA.company}</strong> to profesjonalna firma zajmująca się wynajmem pokojów i mieszkań w centrum Łodzi. 
                    Specjalizujemy się w ofercie skierowanej do studentów i młodych pracujących, którzy szukają nowoczesnego, spokojnego i przystępnego cenowo miejsca do życia.
                  </p>
                  <p>
                    Wszystkie nasze nieruchomości są starannie wyremontowane, w pełni wyposażone i regularnie serwisowane. Dbamy o to, żebyś czuł się jak u siebie — bez zbędnych wizyt właściciela i z pełną prywatnością.
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent"><Sparkles /></div>
                    <span className="font-bold text-primary">Twoja prywatność to nasz priorytet.</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                whileInView={{ opacity: 1, x: 0 , scale: 1}}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                {/* Visual Representation (CSS Cityline) */}
                <div className="aspect-square bg-bg-light rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-accent/5 translate-y-1/2 group-hover:translate-y-[45%] transition-transform duration-700" />
                  <div className="relative z-10 flex items-end gap-2 w-full max-w-sm h-64">
                    {[30, 60, 45, 80, 55, 90, 40].map((h, i) => (
                      <div 
                        key={i} 
                        className="bg-primary/20 flex-grow rounded-t-xl transition-all group-hover:bg-primary/30" 
                        style={{ height: `${h}%` }} 
                      />
                    ))}
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 opacity-10">
                    <Sparkles size={120} className="text-primary" />
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-8 -left-8 md:-left-12 bg-accent text-white p-8 rounded-3xl shadow-2xl rotate-[-4deg] max-w-[200px] hover:rotate-0 transition-transform cursor-default">
                  <p className="text-4xl font-black mb-1">100%</p>
                  <p className="text-sm font-bold opacity-90 leading-tight">Satysfakcji naszych najemców</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-24 bg-primary text-white scroll-mt-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-extrabold mb-10">Zapraszamy do kontaktu</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm uppercase tracking-widest font-bold mb-1">Adres</p>
                      <p className="text-xl font-medium">{BUSINESS_DATA.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <a href={`tel:${BUSINESS_DATA.phone}`} className="flex items-start gap-6 no-underline text-white">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                        <Phone size={28} />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm uppercase tracking-widest font-bold mb-1">Telefon</p>
                        <p className="text-2xl font-bold">{BUSINESS_DATA.phone}</p>
                        <p className="text-accent-light text-sm italic">{BUSINESS_DATA.hours}</p>
                      </div>
                    </a>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <a href={`mailto:${BUSINESS_DATA.email}`} className="flex items-start gap-6 no-underline text-white">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                        <Mail size={28} />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm uppercase tracking-widest font-bold mb-1">Email</p>
                        <p className="text-xl font-medium">{BUSINESS_DATA.email}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 text-primary shadow-2xl"
              >
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wide text-gray-500">Imię i Nazwisko</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-gray-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all placeholder:text-gray-400"
                        placeholder="np. Jan Kowalski"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wide text-gray-500">Numer Telefonu</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-gray-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all placeholder:text-gray-400"
                        placeholder="np. 600-000-000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wide text-gray-500">Wiadomość</label>
                    <textarea 
                      rows={4} 
                      className="w-full bg-gray-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all placeholder:text-gray-400 resize-none"
                      placeholder="W czym możemy pomóc?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-accent/20 active:scale-95 text-lg"
                  >
                    Wyślij wiadomość
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bg-light py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-primary mb-2">{BUSINESS_DATA.brand}</h3>
              <p className="text-gray-500 font-medium max-w-sm">{BUSINESS_DATA.tagline}</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 font-bold text-gray-600">
              <a href="#oferta" className="hover:text-accent transition-colors">Oferta</a>
              <a href="#pokoje" className="hover:text-accent transition-colors">Pokoje</a>
              <a href="#o-nas" className="hover:text-accent transition-colors">O Nas</a>
              <a href="#kontakt" className="hover:text-accent transition-colors">Kontakt</a>
            </div>
          </div>
          
          <hr className="border-gray-200 mb-12" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 font-medium italic">
            <p>© 2025 {BUSINESS_DATA.company}. Wszelkie prawa zastrzeżone.</p>
            <p className="flex items-center gap-4">
              <span>{BUSINESS_DATA.address}</span>
              <span className="hidden md:inline">|</span>
              <span>tel. {BUSINESS_DATA.phone}</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.a 
        href={`tel:${BUSINESS_DATA.phone}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-accent/90 transition-all cursor-pointer ring-4 ring-white"
      >
        <Phone size={30} fill="currentColor" />
        <span className="absolute -top-2 -left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white">
          ONLINE
        </span>
      </motion.a>
    </div>
  );
}
