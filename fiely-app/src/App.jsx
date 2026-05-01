import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Dziękujemy za zgłoszenie! Skontaktujemy się wkrótce.');
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container nav">
          <div className="logo">FIELY<span>.energy</span></div>
          <nav className="nav-links">
            <a href="#oferta">Oferta</a>
            <a href="#proces">Proces</a>
            <a href="#kontakt" className="btn-small">Kontakt</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <h1>Energetyczna Przyszłość Twojego Domu</h1>
          <p>Kompleksowe pomiary elektryczne, przeglądy fotowoltaiki i optymalizacja systemów energetycznych. Wszystko w jednym miejscu.</p>
          <div className="hero-buttons">
            <a href="#kontakt" className="btn">Darmowa Wycena</a>
            <a href="#oferta" className="btn btn-outline">Sprawdź Ofertę</a>
          </div>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <h2>Dlaczego FIELY?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="icon">⚡</span>
              <h3>Szybkie Terminy</h3>
              <p>Reagujemy błyskawicznie na awarie i dotrzymujemy ustalonych godzin.</p>
            </div>
            <div className="feature-card">
              <span className="icon">📜</span>
              <h3>Protokoły z Uprawnieniami</h3>
              <p>Każdy przegląd kończy się oficjalnym protokołem z uprawnieniami SEP.</p>
            </div>
            <div className="feature-card">
              <span className="icon">🔋</span>
              <h3>Optymalizacja Systemów</h3>
              <p>Łączymy fotowoltaikę, banki energii i instalacje w jeden sprawny organizm.</p>
            </div>
            <div className="feature-card">
              <span className="icon">🏠</span>
              <h3>Kompleksowość</h3>
              <p>Od projektu, przez montaż, po serwis i modernizację.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="section">
        <div className="container">
          <h2>Nasza Oferta</h2>
          <div className="offer-grid">
            <div className="offer-card">
              <div className="offer-header">
                <h3>Pomiary i Przeglądy</h3>
              </div>
              <div className="offer-body">
                <ul className="service-list">
                  <li>✓ Przeglądy 5-letnie z protokołem</li>
                  <li>Pomiary rezystancji izolacji</li>
                  <li>Sprawdzanie wyłączników RCD</li>
                  <li>Przeglądy instalacji fotowoltaicznej</li>
                  <li>Protokoły dla ubezpieczyciela</li>
                  <li>Audyt przed zakupem nieruchomości</li>
                </ul>
              </div>
            </div>

            <div className="offer-card">
              <div className="offer-header">
                <h3>Modernizacje i Budowa</h3>
              </div>
              <div className="offer-body">
                <ul className="service-list">
                  <li>✓ Modernizacja instalacji elektrycznych</li>
                  <li>Budowa nowych instalacji</li>
                  <li>Wymiana rozdzielnic i zabezpieczeń</li>
                  <li>Przygotowanie pod pompę ciepła i EV</li>
                  <li>Optymalizacja układów PV</li>
                  <li>Wymiana oświetlenia na LED</li>
                </ul>
              </div>
            </div>

            <div className="offer-card">
              <div className="offer-header">
                <h3>Fotowoltaika i OZE</h3>
              </div>
              <div className="offer-body">
                <ul className="service-list">
                  <li>✓ Projektowanie i sprzedaż PV</li>
                  <li>Montaż paneli fotowoltaicznych</li>
                  <li>Banki energii i magazyny</li>
                  <li>Diagnostyka spadków wydajności</li>
                  <li>Integracja systemu energetycznego</li>
                  <li>Monitoring i serwis online</li>
                </ul>
              </div>
            </div>

            <div className="offer-card">
              <div className="offer-header">
                <h3>Diagnoza i Awaria</h3>
              </div>
              <div className="offer-body">
                <ul className="service-list">
                  <li>✓ Diagnozowanie usterek</li>
                  <li>Usuwanie awarii 24/7</li>
                  <li>Lokalizowanie zwarć i przepięć</li>
                  <li>Naprawa inwerterów PV</li>
                  <li>Pomiary skuteczności ochrony</li>
                  <li>Doradztwo techniczne</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proces" className="section features">
        <div className="container">
          <h2>Jak Pracujemy?</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Kontakt</h3>
              <p>Zadzwoń lub wypełnij formularz</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Wizyta i Wycena</h3>
              <p>Oględziny i konkretna wycena</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Realizacja</h3>
              <p>Wykonanie prac zgodnie z normami</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Protokół</h3>
              <p>Przekazanie dokumentacji</p>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="section">
        <div className="container">
          <h2>Skontaktuj Się</h2>
          <div className="contact-wrapper">
            <div className="contact-info">
              <div>
                <h3>📞 Telefon</h3>
                <p>+48 XXX XXX XXX</p>
              </div>
              <div>
                <h3>✉️ Email</h3>
                <p>kontakt@fiely.pl</p>
              </div>
              <div>
                <h3>📍 Obszar Działania</h3>
                <p>Cały kraj</p>
              </div>
              <div>
                <h3>⏰ Godziny Pracy</h3>
                <p>Pn-Pt: 8:00 - 18:00<br />Awaria: 24/7</p>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Imię i nazwisko" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Telefon" value={formData.phone} onChange={handleChange} required />
              <select name="service" value={formData.service} onChange={handleChange} required>
                <option value="">Wybierz usługę</option>
                <option value="pomiary">Pomiary i przeglądy</option>
                <option value="modernizacja">Modernizacja instalacji</option>
                <option value="fotowoltaika">Fotowoltaika i OZE</option>
                <option value="awaria">Diagnoza i awaria</option>
                <option value="inne">Inne</option>
              </select>
              <textarea name="message" placeholder="Wiadomość" rows="4" value={formData.message} onChange={handleChange}></textarea>
              <button type="submit" className="btn">Wyślij Zgłoszenie</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2024 FIELY. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
