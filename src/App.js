import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    servico: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: 'Galpões e Pavilhões Industriais',
      subtitle: 'Estruturas metálicas de alta resistência para seu negócio',
      image: 'images/modelos-galpao-scaled.jpeg',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 2,
      title: 'Pavilhões Comerciais',
      subtitle: 'Soluções completas para galpões comerciais com excelência e durabilidade',
      image: 'images/pavilhoes.jpeg',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 3,
      title: 'Estruturas Rurais',
      subtitle: 'Galpões agrícolas, armazéns e estruturas para o campo',
      image: 'images/Estruturas.jpeg',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 4,
      title: 'Pré-moldados',
      subtitle: 'Estruturas pré-moldadas com tecnologia e rapidez na execução',
      image: 'images/Pré-moldados.jpg',
      cta: 'Solicitar Orçamento'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleNavClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `Olá Sul Estruturas! Gostaria de solicitar um orçamento.%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*E-mail:* ${formData.email}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Cidade:* ${formData.cidade || 'Não informada'}%0A` +
      `*Tipo de Serviço:* ${formData.servico}%0A` +
      `*Detalhes:* ${formData.mensagem || 'Sem detalhes adicionais'}`;
    
    const whatsappNumber = '54996160278';
    
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      servico: '',
      mensagem: ''
    });
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const solicitarOrcamentoServico = (nomeServico) => {
    const whatsappMessage = `Olá Sul Estruturas! Gostaria de solicitar um orçamento para *${nomeServico}*.%0A%0APoderia me passar mais informações sobre valores e disponibilidade?`;
    const whatsappNumber = '54996160278';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const openWhatsAppHero = () => {
    const whatsappMessage = `Olá Sul Estruturas! Vi o site de vocês e gostaria de mais informações sobre os serviços de estruturas metálicas e galpões. Podem me ajudar?`;
    const whatsappNumber = '54996160278';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const openWhatsAppFlutuante = () => {
    const whatsappMessage = `Olá Sul Estruturas! Gostaria de solicitar um orçamento para estruturas metálicas.`;
    const whatsappNumber = '54996160278';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    handleNavClick();
  };

  const services = [
    {
      id: 1,
      name: 'Galpão Industrial',
      description: 'Estruturas metálicas para indústrias com alta resistência e durabilidade',
      image: 'images/cobertura.jpeg'
    },
    {
      id: 2,
      name: 'Pavilhão Comercial',
      description: 'Galpões comerciais modernos, funcionais e com excelente custo-benefício',
      image: 'images/Pavilhss.jpeg'
    },
    {
      id: 3,
      name: 'Pavilhão Rural',
      description: 'Estruturas para o agronegócio: armazéns, galpões agrícolas e celeiros',
      image: 'images/Rural.jpeg'
    },
    {
      id: 4,
      name: 'Fabricação de Estruturas Metálicas',
      description: 'Projeto e fabricação sob medida de estruturas em aço com alta precisão',
      image: 'images/Metalicas.jpg'
    },
    {
      id: 5,
      name: 'Estruturas Pré-moldadas',
      description: 'Pilares, vigas e lajes pré-moldadas em concreto para construção ágil',
      image: 'images/Pre-moldadas.jpeg'
    },
    {
      id: 6,
      name: 'Mezaninos',
      description: 'Ampliação de espaço com mezaninos metálicos estruturais',
      image: 'images/Mezaninos.jpg'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Grupo Tramontina',
      cidade: 'Carlos Barbosa - RS',
      text: 'A Sul Estruturas entregou nosso galpão industrial antes do prazo. Profissionalismo e qualidade impecáveis!',
      rating: 5
    },
    {
      id: 2,
      name: 'Random Implementos Rodoviários',
      cidade: 'Caxias do Sul - RS',
      text: 'Excelente empresa! Fizeram o pavilhão comercial da nossa empresa com muita competência. Recomendamos a todos!',
      rating: 5
    },
    {
      id: 3,
      name: 'Foca Móbile',
      cidade: 'Caxias do Sul - RS',
      text: 'Contratamos a Sul Estruturas e ficamos impressionados com a qualidade do serviço e atendimento.',
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: '11 Anos de Experiência',
      description: 'Uma trajetória sólida no Sul do Brasil construindo confiança e qualidade'
    },
    {
      id: 2,
      title: '+300 Clientes Atendidos',
      description: 'Mais de 300 empresas e empreendedores confiaram em nosso trabalho nos estados do RS e SC'
    },
    {
      id: 3,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e engenheiros dedicados a cada projeto'
    },
    {
      id: 4,
      title: 'Materiais de Primeira',
      description: 'Utilizamos apenas materiais certificados e de alta durabilidade'
    },
    {
      id: 5,
      title: 'Garantia de Qualidade',
      description: 'Todos os nossos serviços possuem garantia e acompanhamento técnico'
    },
    {
      id: 6,
      title: 'Atendimento Personalizado',
      description: 'Soluções sob medida para cada cliente, respeitando seu negócio e orçamento'
    }
  ];

  return (
    <div className="App">
      <div className="floating-whatsapp">
        <button onClick={openWhatsAppFlutuante} aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        </button>
      </div>
      
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <div className="logo">
              <img 
                src='/images/Logo.jpeg' 
                alt='Logo Sul Estruturas'
                className="logo-image"
              />
            </div>
          </div>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); handleNavClick(); }}>Início</a>
            <a href="#servicos" onClick={handleNavClick}>Serviços</a>
            <a href="#sobre" onClick={handleNavClick}>Sobre Nós</a>
            <a href="#avaliacoes" onClick={handleNavClick}>Avaliações</a>
            <a href="#contato" onClick={handleNavClick} className="nav-cta">Solicitar Orçamento</a>
          </nav>
        </div>
      </header>

      <section className="hero-carousel">
        <div className="carousel-container">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="carousel-overlay"></div>
              <div className="container">
                <div className="carousel-content">
                  <h1 className="carousel-title">{slide.title}</h1>
                  <p className="carousel-subtitle">{slide.subtitle}</p>
                  <div className="carousel-buttons">
                    <a href="#contato" className="btn btn-primary" onClick={handleNavClick}>
                      {slide.cta}
                    </a>
                    <button className="btn btn-secondary" onClick={openWhatsAppHero}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                       WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <button className="carousel-control prev" onClick={prevSlide} aria-label="Anterior">
            ❮
          </button>
          <button className="carousel-control next" onClick={nextSlide} aria-label="Próximo">
            ❯
          </button>
          
          <div className="carousel-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="section servicos">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Soluções completas em estruturas metálicas, pré-moldados e mezaninos</p>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                  <div className="service-overlay">
                    <button 
                      className="btn-service-quick"
                      onClick={() => solicitarOrcamentoServico(service.name)}
                    >
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="section sobre">
        <div className="container">
          <h2 className="section-title">Sobre a Sul Estruturas</h2>
          <div className="sobre-content">
            <div className="sobre-text">
              <p>
                Há <strong>11 anos</strong> no mercado, a <strong>Sul Estruturas</strong> é referência em <strong>estruturas metálicas, pré-moldados e mezaninos</strong> no <strong>Rio Grande do Sul e Santa Catarina</strong>. Já atendemos mais de <strong>300 clientes</strong>, sempre com foco em qualidade, prazo e transparência.
              </p>
              <p>
                Nossa equipe de engenheiros e técnicos especializados entrega soluções sob medida para <strong>galpões industriais, pavilhões comerciais, estruturas rurais e mezaninos</strong>. Do projeto à instalação, garantimos materiais certificados e acabamento impecável.
              </p>
              <p>
                <strong>Segurança, confiança e compromisso</strong> é o que oferecemos em cada obra. Solicite um orçamento gratuito e conheça a diferença de trabalhar com quem tem mais de uma década de experiência na região Sul.
              </p>
              
              <ul className="features">
                <li>11 anos de experiência em RS e SC</li>
                <li>+300 clientes satisfeitos</li>
                <li>Equipe especializada</li>
                <li>Orçamento gratuito e transparente</li>
              </ul>
              
              <div className="sobre-stats">
                <div className="stat-item">
                  <span className="stat-number">11</span>
                  <span className="stat-label">Anos de Mercado</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">300+</span>
                  <span className="stat-label">Clientes</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">RS/SC</span>
                  <span className="stat-label">Atuação</span>
                </div>
              </div>
            </div>
            <div className="sobre-image">
              <img src="/images/Logo2.jpeg" alt="Estrutura metálica Sul Estruturas" />

            </div>
          </div>
        </div>
      </section>

      <section className="section why-choose-us">
        <div className="container">
          <h2 className="section-title">Por que escolher a Sul Estruturas?</h2>
          <p className="section-subtitle">Motivos que nos tornam a melhor escolha para seu projeto</p>
          <div className="why-choose-grid">
            {whyChooseUs.map(item => (
              <div key={item.id} className="why-choose-card">
                <div className="why-choose-icon">
                  <span>✓</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="section testimonials">
        <div className="container">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle">A satisfação dos nossos clientes é nossa maior conquista</p>
          
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span className="testimonial-cidade">{testimonial.cidade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section contato">
        <div className="container">
          <h2 className="section-title">Solicite seu orçamento gratuito</h2>
          <p className="section-subtitle">Preencha o formulário e será direcionado ao WhatsApp - Sem compromisso!</p>
          
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Obrigado pelo seu interesse!</h3>
              <p>Você será redirecionado para o WhatsApp em instantes.</p>
              <p>Caso não tenha sido redirecionado, <a href="https://wa.me/54996160278" target="_blank" rel="noopener noreferrer">clique aqui</a> para falar conosco.</p>
            </div>
          ) : (
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome">Nome Completo *</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone *</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      placeholder="(54) 99616-0278"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cidade">Cidade *</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      required
                      placeholder="Sua cidade"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="servico">Tipo de Serviço *</label>
                    <select 
                      id="servico" 
                      name="servico" 
                      value={formData.servico}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="Galpão Industrial">Galpão Industrial</option>
                      <option value="Pavilhão Comercial">Pavilhão Comercial</option>
                      <option value="Pavilhão Rural">Pavilhão Rural</option>
                      <option value="Fabricação de Estruturas Metálicas">Fabricação de Estruturas Metálicas</option>
                      <option value="Estruturas Pré-moldadas">Estruturas Pré-moldadas</option>
                      <option value="Mezaninos">Mezaninos</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensagem">Descrição do Projeto</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva o que você precisa: dimensões do galpão, tipo de estrutura, etc..."
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-submit">
                  <span><svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg></span> Solicitar orçamento via WhatsApp
                </button>
                
                <p className="form-note">
                  Ao enviar, você será direcionado automaticamente para o WhatsApp da Sul Estruturas.
                  <br />
                  <strong>Orçamento 100% gratuito e sem compromisso!</strong>
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Sul Estruturas</h3>
              <p>Estruturas metálicas, pré-moldados e mezaninos com qualidade e confiança há 11 anos.</p>
              <div className="contact-info">
                <p><strong>📱 WhatsApp:</strong> (54) 99616-0278</p>
                <p><strong>📍 Atuação:</strong> Rio Grande do Sul | Santa Catarina</p>
              </div>
            </div>
            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Início</a>
              <a href="#servicos" onClick={handleNavClick}>Serviços</a>
              <a href="#sobre" onClick={handleNavClick}>Sobre Nós</a>
              <a href="#avaliacoes" onClick={handleNavClick}>Avaliações</a>
              <a href="#contato" onClick={handleNavClick}>Orçamento</a>
            </div>
            <div className="footer-social">
              <h4>Entre em Contato</h4>
              <p>Estamos prontos para realizar seu projeto estrutural</p>
              <div className="social-icons">
                <button className="social-btn whatsapp-btn" onClick={openWhatsAppFlutuante}>
                  💬 WhatsApp
                </button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Sul Estruturas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;