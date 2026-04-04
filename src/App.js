import React, { useState } from 'react';
import './styles.css';

// --- BASE DE DADOS (Simulação para o seu Portfólio) ---
const portfolioData = [
  {
    id: 1,
    date: "05/04/2026",
    city: "Petrópolis - RJ",
    venue: "Caminhos de Itaipava",
    time: "Tarde",
    groomSuit: "Sarto & Co.",
    barberSuit: "Zara",
    photographer: "Joel Victor",
    videomaker: "Jow Maker",
    coverImg: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: ["url_foto1", "url_foto2", "url_foto3"],
    description: "Um dia marcante na serra. Focamos em uma camuflagem leve e um dressing impecável para acompanhar a vista deslumbrante."
  },
  // Adicione seus próximos eventos aqui...
];

const partnersData = [
  { id: 1, name: "Sarto Alfaiataria", logo: "logo_url1" },
  { id: 2, name: "Locanda Eventos", logo: "logo_url2" },
  { id: 3, name: "Joel Victor", logo: "logo_url3" },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Lógica de busca rápida (Exige mínimo de 3 letras)
  const filteredEvents = searchTerm.length >= 3 
    ? portfolioData.filter(e => 
        e.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
        e.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.date.includes(searchTerm)
      )
    : portfolioData;

  const handleWhatsApp = () => window.open('https://wa.me/24993249483', '_blank');
  const handleInstagram = () => window.open('https://instagram.com/david_oliveira.haircut', '_blank');

  return (
    <div className="app-container">
      
      {/* HEADER */}
      <header className="header">
        <div className="logo-container">
          <h1 className="logo-text">DAVID OLIVEIRA</h1>
          <span className="logo-sub">ESPECIALISTA EM NOIVOS</span>
        </div>
        <div className="social-minimal">
          <i className="fab fa-whatsapp" onClick={handleWhatsApp}></i>
          <i className="fab fa-instagram" onClick={handleInstagram}></i>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h2>O Padrão Ouro em<br/>Dia do Noivo</h2>
          <p>Pioneirismo e autoridade na Serra Fluminense. Mais do que estética, a garantia de que você não será um coadjuvante no seu próprio casamento.</p>
          <button className="btn-gold" onClick={handleWhatsApp}>
             Agendar Minha Data
          </button>
        </div>
      </section>

      {/* SEARCH / FILTRO */}
      <section className="search-section">
        <div className="search-box">
          <i className="fas fa-search gold-text"></i>
          <input 
            type="text" 
            placeholder="Busque por data, cidade ou local (ex: Petrópolis)..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {searchTerm.length > 0 && searchTerm.length < 3 && (
          <small className="search-hint">Digite pelo menos 3 letras...</small>
        )}
      </section>

      {/* PORTFÓLIO (CARDS) */}
      <section className="portfolio-section">
        <h3 className="section-title">O Legado <span>.</span></h3>
        <div className="portfolio-grid">
          {filteredEvents.map(evt => (
            <div className="card" key={evt.id} onClick={() => setSelectedEvent(evt)}>
              <div className="card-img" style={{ backgroundImage: `url(${evt.coverImg})` }}></div>
              <div className="card-info">
                <p className="card-date">{evt.date}</p>
                <h4>{evt.venue}</h4>
                <p className="card-city">{evt.city} • {evt.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL DO EVENTO (Quando clica no Card) */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedEvent(null)}>X</button>
            <h2>{selectedEvent.venue}</h2>
            <div className="modal-details">
              <p><strong>Local:</strong> {selectedEvent.city} - {selectedEvent.time}</p>
              <p><strong>Traje Noivo:</strong> {selectedEvent.groomSuit}</p>
              <p><strong>David veste:</strong> {selectedEvent.barberSuit}</p>
              <p><strong>Fotografia:</strong> {selectedEvent.photographer}</p>
              <p><strong>Vídeo:</strong> {selectedEvent.videomaker}</p>
            </div>
            <p className="modal-desc">{selectedEvent.description}</p>
            {/* Aqui você implementaria um componente de Carrossel de fotos simples */}
            <div className="gallery-placeholder">
              <p>+ Ver Galeria Completa</p>
            </div>
          </div>
        </div>
      )}

      {/* VIDEOS SECTION */}
      <section className="videos-section">
        <h3 className="section-title">Cinematografia <span>.</span></h3>
        <div className="video-grid">
          {/* Exemplo de iFrame do YouTube */}
          <div className="video-wrapper">
             <iframe src="https://www.youtube.com/embed/SEU_VIDEO_ID" title="YouTube video" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* CARROSSEL DE PARCEIROS */}
      <section className="partners-section">
        <p className="partners-title">Marcas e Parceiros de Excelência</p>
        <div className="partners-track">
          {partnersData.map(p => (
            <div className="partner-logo" key={p.id}>
               {/* Substituir por tags <img /> com as logos */}
               <span>{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BODY CTA (Botões no meio da página) */}
      <section className="body-cta">
        <button className="btn-outline" onClick={handleInstagram}>
          <i className="fab fa-instagram"></i> Acompanhe os Bastidores
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">DAVID OLIVEIRA</div>
          <p>O primeiro Especialista em Noivos da Serra Fluminense.</p>
          <div className="social-minimal footer-social">
            <i className="fab fa-whatsapp" onClick={handleWhatsApp}></i>
            <i className="fab fa-instagram" onClick={handleInstagram}></i>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 David Oliveira. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}