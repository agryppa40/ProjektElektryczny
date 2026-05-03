import { useState } from 'react'
import './App.css'

// Ikony SVG
const Icons = {
  Bolt: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  Shield: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
  Chart: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
  Clipboard: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>,
  Wrench: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
  Sun: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>,
};

function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Dziękujemy! Wiadomość została wysłana.')
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
  }
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <img src="/Logo.png" alt="1L3 Logo" onError={(e) => {e.target.style.display='none'}} />
            <span>1L3</span> Elektro-Expert
          </div>
          <nav className="nav">
            <a href="#oferta">Oferta</a>
            <a href="#dlaczego">Dlaczego my</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a href="#kontakt" className="btn btn-primary btn-small">Darmowa wycena</a>
        </div>
      </header>

      {/* Hero Section - Układ: Tekst po lewej, Zdjęcie po prawej */}
      <section className="hero">
        <div className="container hero-wrapper">
          <div className="hero-content">
            <h1>Profesjonalne usługi <span className="highlight">elektryczne</span> i fotowoltaika we Wrocławiu</h1>
            <p>Kompleksowe pomiary, modernizacje i instalacje OZE. Bezpieczeństwo i zgodność z normami to nasz priorytet.</p>
            <div className="hero-buttons">
              <a href="#kontakt" className="btn btn-primary">Skontaktuj się</a>
              <a href="#oferta" className="btn btn-secondary">Zobacz ofertę</a>
            </div>
          </div>
          <div className="hero-image">
            {/* Tutaj wstawiasz swoje zdjęcie z baneru */}
            <img src="/hero-bg.png" alt="Elektryk przy pracy" />
          </div>
        </div>
      </section>

      {/* Dlaczego My */}
      <section id="dlaczego" className="features">
        <div className="container">
          <h2 className="section-title">Dlaczego 1L3?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h3>Szybki termin</h3>
              <p>Reagujemy błyskawicznie. Szanujemy Twój czas i dotrzymujemy ustalonych dat.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🛡️</span>
              <h3>Gwarancja jakości</h3>
              <p>Posiadamy pełne uprawnienia SEP i wystawiamy oficjalne protokoły.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💰</span>
              <h3>Jasna cena</h3>
              <p>Wycena przed rozpoczęciem prac. Zero ukrytych kosztów i niespodzianek.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="services">
        <div className="container">
          <h2 className="section-title">Nasza Oferta</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-wrapper"><Icons.Clipboard /></div>
              <h3>Pomiary i Protokoły</h3>
              <ul>
                <li>Przeglądy 5-letnie budynków</li>
                <li>Pomiary odbiorcze instalacji</li>
                <li>Pomiary instalacji PV</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper"><Icons.Wrench /></div>
              <h3>Modernizacje</h3>
              <ul>
                <li>Wymiana starych instalacji</li>
                <li>Montaż rozdzielnic</li>
                <li>Usuwanie awarii</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper"><Icons.Sun /></div>
              <h3>Fotowoltaika i OZE</h3>
              <ul>
                <li>Projektowanie i montaż PV</li>
                <li>Magazyny energii</li>
                <li>Integracja systemów</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="contact">
        <div className="container">
          <h2 className="section-title">Kontakt</h2>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>1L3 Elektro-Expert</h3>
              <p>Zadzwoń lub napisz. Działamy we Wrocławiu i okolicach.</p>
              <div className="info-item"><strong>Telefon:</strong> +48 000 000 000</div>
              <div className="info-item"><strong>Email:</strong> kontakt@1l3.pl</div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem'}}>
                <input type="text" name="name" placeholder="Imię" onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Telefon" onChange={handleChange} required />
              </div>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              <select name="service" onChange={handleChange} required>
                <option value="">Wybierz usługę</option>
                <option value="pomiary">Pomiary</option>
                <option value="modernizacja">Modernizacja</option>
                <option value="pv">Fotowoltaika</option>
              </select>
              <textarea name="message" placeholder="Wiadomość" rows="4" onChange={handleChange}></textarea>
              <button type="submit" className="btn btn-primary">Wyślij wiadomość</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 1L3 Elektro-Expert. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}

export default App