import Image from "next/image";

export default function Home() {
  return (
    <main className="page-container">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-content">
          <div className="nav-left">
            <span className="logo-text">Sumnrize</span>
          </div>

          <nav className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#mercado">Mercado-alvo</a>
            <a href="#monetizacao">Monetização</a>
            <a href="#projecao">Projeção</a>
          </nav>

          <a href="#cta" className="btn-primary small-btn">
            Quero testar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-label">Educação assistida por IA</p>

            <h1 className="hero-title">
              Transforme qualquer aula em{" "}
              <span className="highlight">entendimento real</span> com o
              Sumnrize.
            </h1>

            <p className="hero-description">
              O Sumnrize utiliza IA para ouvir vídeo-aulas, resumir PDFs,
              analisar imagens e responder dúvidas em tempo real — tornando o
              estudo mais simples, dinâmico e personalizado.
            </p>

            <div className="hero-buttons">
              <a href="#cta" className="btn-primary">
                Quero usar na minha rotina
              </a>
              <a href="#funcionalidades" className="btn-outline">
                Ver como funciona
              </a>
            </div>

            <p className="hero-note">
              Ideal para estudantes, professores e profissionais.
            </p>
          </div>

          {/* Mockup */}
          <div className="hero-mockup">
            <div className="mockup-card">
              <p className="mockup-title">Em tempo real</p>

              <div className="mockup-block">
                <p className="mockup-label">IA ouvindo a aula...</p>
                <p>“O Kubernetes é um orquestrador de contêineres...”</p>
              </div>

              <div className="mockup-block dark">
                <p className="mockup-label">Pergunta do aluno:</p>
                <p className="mockup-question">
                  “Resuma o que foi explicado até agora.”
                </p>

                <p className="mockup-label">Resposta Sumnrize:</p>
                <p>
                  “O Kubernetes coordena contêineres garantindo escala…”{" "}
                  <span className="highlight">[03:12–03:48]</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section">
        <div className="section-grid">
          <div>
            <h2 className="section-title">Sobre o projeto</h2>
            <p className="section-text">
              O <span className="highlight">Sumnrize</span> é uma plataforma de
              aprendizado inteligente que usa IA para resumir, explicar e
              interagir com conteúdos educacionais em tempo real.
            </p>
          </div>

          <div>
            <h2 className="section-title">Missão</h2>
            <p className="section-text">
              Tornar o aprendizado mais acessível, eficiente e personalizado,
              conectando tecnologia e educação para transformar o estudo.
            </p>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="funcionalidades" className="section dark-section">
        <h2 className="section-title-func">Funcionalidades</h2>
        <p className="section-subtitle">
          Tudo o que você precisa para transformar seus estudos com IA.
        </p>

        <div className="features-wrapper">
          <div className="feature-card2">
            <div className="feature-icon" />
            <h3>Assistente em tempo real</h3>
            <p>
              A IA ouve a aula junto com você e responde dúvidas
              instantaneamente.
            </p>
          </div>

          <div className="feature-card2">
            <div className="feature-icon" />
            <h3>Resumos inteligentes</h3>
            <p>
              Resumo automático de vídeos, PDFs e textos com tópicos e
              explicações claras.
            </p>
          </div>

          <div className="feature-card2">
            <div className="feature-icon" />
            <h3>Quizzes e flashcards</h3>
            <p>
              Criação automática de testes e flashcards para reforço de memória.
            </p>
          </div>

          <div className="feature-card2">
            <div className="feature-icon" />
            <h3>Interpretação de imagens</h3>
            <p>
              Análise de prints e fotos com explicações, resolução de exercícios
              e insights.
            </p>
          </div>

          <div className="feature-card2">
            <div className="feature-icon" />
            <h3>Geração de materiais</h3>
            <p>
              Crie apresentações, resumos finais e materiais de estudo
              automaticamente.
            </p>
          </div>
        </div>
      </section>

      {/* MERCADO */}
      <section id="mercado" className="section">
        <h2 className="section-title-mercado center">Mercado-Alvo</h2>
        <p className="section-subtitle">
          Público que mais se beneficia do Sumnrize.
        </p>

        <div className="market-grid">
          <div className="market-card">
            <h3>Estudantes</h3>
            <p>
              Alunos do ensino médio, superior e concursos que buscam aprender
              de forma mais eficiente.
            </p>
          </div>

          <div className="market-card">
            <h3>Professores</h3>
            <p>
              Educadores que desejam integrar IA para explicar melhor conteúdos
              e criar materiais.
            </p>
          </div>

          <div className="market-card">
            <h3>Profissionais</h3>
            <p>
              Pessoas em capacitação contínua que usam vídeo-aulas, PDFs e
              materiais técnicos.
            </p>
          </div>

          <div className="market-card">
            <h3>Autoaprendizes</h3>
            <p>
              Quem estuda sozinho e quer mais clareza, praticidade e agilidade
              no estudo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta" className="cta">
        <h2 className="cta-title">Pronto para estudar com IA?</h2>
        <p className="cta-text">
          Transforme vídeo-aulas, PDFs e imagens em compreensão real.
        </p>
        <a href="#" className="btn-primary big-btn">
          Quero testar o Sumnrize
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} Sumnrize.</span>
        <span>IA aplicada ao aprendizado.</span>
      </footer>
    </main>
  );
}
