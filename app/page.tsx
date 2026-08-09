"use client";

import { useEffect, useState, type CSSProperties } from "react";

const services = [
  { name: "Detalhamento de motos", short: "Limpeza criteriosa das áreas visíveis e dos pontos que a lavagem comum não alcança." },
  { name: "Vitrificação", short: "Proteção para preservar o acabamento e facilitar os cuidados na rotina." },
  { name: "Polimento técnico", short: "Correção cuidadosa para recuperar brilho, profundidade e presença na pintura." },
  { name: "Detalhamento automotivo", short: "O cuidado da Toque Final também para quem quer ver o carro bem tratado." },
];

const weekdayTimes = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
const sundayTimes = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

const reviews = [
  { name: "Lucas r15", avatar: "/avaliacao-lucas.png", service: "Avaliação nas redes sociais", text: "Fiz o detalhamento e curti muito o resultado. Ficou limpa de verdade, até nos cantinhos que a gente nem lembra." },
  { name: "Carlos Henri", avatar: "/avaliacao-carlos.png", service: "Avaliação nas redes sociais", text: "Os homi é bom, cheguei com a moto só o cardume, saiu só o mel 🍯👏" },
  { name: "Livia santos", avatar: "/avaliacao-livia.png", service: "Avaliação nas redes sociais", text: "A qualidade do serviço deles é surreal, Grata pelo cuidado 🫶" },
  { name: "João ygor", avatar: "/avaliacao-joao-ruan.png", service: "Avaliação nas redes sociais", text: "Os caras manjam muito!" },
  { name: "Ruan carvalho", avatar: "/avaliacao-joao-ruan.png", service: "Avaliação nas redes sociais", text: "Ficou chave demais 🔥" },
  { name: "Yasmin vanscon", avatar: "/avaliacao-yasmin.jpg", service: "Avaliação nas redes sociais", text: "Eu só queria dar uma melhorada e saí de lá apaixonada kkk ficou linda demais." },
  { name: "Pedro luc", avatar: "/avaliacao-pedro.png", service: "Avaliação nas redes sociais", text: "Os caras manjam muito!" },
];

const workResults = [
  { title: "Lavagem detalhada", label: "TRABALHO REAL", description: "Limpeza criteriosa para devolver presença ao conjunto, das áreas abertas aos pontos que a lavagem comum não alcança.", before: "/resultado-lavagem-antes.jpg", after: "/resultado-lavagem-depois.jpg", real: true },
  { title: "Lavagem estágio 1", label: "CUIDADO ESSENCIAL", description: "Uma limpeza bem direcionada para remover a sujeira da rotina e recuperar a leitura limpa do conjunto, sem atalhos no acabamento.", before: "/resultado-estagio1-antes.jpg", after: "/resultado-estagio1-depois.jpg", real: true },
  { title: "Polimento + lavagem detalhada", label: "CORREÇÃO + LIMPEZA", description: "Primeiro, a sujeira sai de onde costuma ficar. Depois, a pintura recebe correção para recuperar uniformidade, profundidade e presença.", before: "/resultado-polimento-detalhada-antes.png", after: "/resultado-polimento-detalhada-depois.png", real: true },
  { title: "Lavagem detalhada", label: "SUJEIRA PESADA", description: "Barro acumulado em carenagens, rodas, motor e cantos difíceis removido com critério, respeitando cada material.", before: "/resultado-lavagem-trilha-antes.jpg", after: "/resultado-lavagem-trilha-depois.jpg", real: true },
  { title: "Vitrificação de pintura", label: "PROTEÇÃO DE PINTURA", description: "Preparação e proteção da pintura para destacar a cor, aprofundar o brilho e facilitar os cuidados da rotina.", before: "/resultado-vitrificacao-antes.jpg", after: "/resultado-vitrificacao-depois.jpg", real: true },
  { title: "Lavagem + polimento", label: "LIMPEZA + CORREÇÃO", description: "Limpeza completa e correção da pintura para devolver contraste, acabamento e presença sem mascarar o estado da moto.", before: "/resultado-lavagem-polimento-antes.jpg", after: "/resultado-lavagem-polimento-depois.jpg", real: true },
];

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return <article className="review-card">
    <div className="review-card-head"><img className="review-avatar" src={review.avatar} alt="" /><div><strong>{review.name}</strong><small>{review.service}</small></div><i aria-hidden="true">“</i></div>
    <div className="review-stars" aria-label="5 de 5 estrelas">★★★★★</div>
    <blockquote>{review.text}</blockquote>
    <footer><span>AVALIAÇÃO</span><b>5.0</b></footer>
  </article>;
}

function BeforeAfterResult({ result, index, slot }: { result: (typeof workResults)[number]; index: number; slot: "current" | "next" | "previous" | "hidden" }) {
  const [position, setPosition] = useState(50);
  const style = { "--compare-position": `${position}%` } as CSSProperties;

  return <article className={`work-result-card ${slot} ${result.real ? "real" : "demo"}`} aria-hidden={slot !== "current"} style={style}>
    <div className="comparison-media">
      <img className="comparison-before" src={result.before} alt="" draggable="false" />
      <div className="comparison-after"><img src={result.after} alt="" draggable="false" /></div>
      <span className="comparison-label comparison-label-before">ANTES</span>
      <span className="comparison-label comparison-label-after">DEPOIS</span>
      <div className="comparison-divider" aria-hidden="true"><i>↔</i></div>
      <input className="comparison-range" type="range" min="0" max="100" value={position} disabled={slot !== "current"} onChange={(event) => setPosition(Number(event.target.value))} aria-label={`Comparar antes e depois de ${result.title}`} />
    </div>
    <span className="work-result-label">{result.label}</span>
    <div className="work-result-copy"><small>0{index + 1} · {result.real ? "RESULTADO REAL" : "DEMONSTRAÇÃO"}</small><h3>{result.title}</h3><p>{result.description}</p></div>
  </article>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [mapConsent, setMapConsent] = useState(false);
  const [reviewPage, setReviewPage] = useState(0);
  const [resultSlide, setResultSlide] = useState(0);
  const [resultsPaused, setResultsPaused] = useState(false);
  const reviewPages = Math.ceil(reviews.length / 2);
  const availableTimes = date && new Date(`${date}T12:00:00`).getDay() === 0 ? sundayTimes : weekdayTimes;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in")), { threshold: 0.12 });
    document.querySelectorAll(".enter").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => setReviewPage((current) => (current + 1) % reviewPages), 5500);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (resultsPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => setResultSlide((current) => (current + 1) % workResults.length), 5200);
    return () => window.clearInterval(interval);
  }, [resultsPaused]);

  const book = (event: React.FormEvent) => {
    event.preventDefault();
    const formattedDate = new Intl.DateTimeFormat("pt-BR", { weekday: "long", day: "numeric", month: "long" }).format(new Date(`${date}T12:00:00`));
    const message = `Olá! Meu nome é ${name}. Quero saber mais sobre ${service.toLowerCase()} para a minha ${vehicle}. Pensei em ${formattedDate}, às ${time}. Podemos avaliar o serviço e confirmar esse horário?`;
    window.location.href = `https://wa.me/5533999522052?text=${encodeURIComponent(message)}`;
  };

  const go = () => document.querySelector("#agenda")?.scrollIntoView({ behavior: "smooth" });

  return <main>
    <header className="header">
      <a href="#inicio" className="logo"><img src="/toque-final-logo.png" alt="Toque Final Estética Automotiva" /></a>
      <nav className={menu ? "nav open" : "nav"}>
        <a href="#sobre" onClick={() => setMenu(false)}>A Toque Final</a><a href="#servicos" onClick={() => setMenu(false)}>Tratamentos</a><a href="#resultados" onClick={() => setMenu(false)}>O cuidado</a><a href="#agenda" onClick={() => setMenu(false)}>Agendar</a>
      </nav>
      <button className="header-btn" onClick={go}>FALAR SOBRE MINHA MOTO ↗</button><button className="hamb" onClick={() => setMenu(!menu)} aria-label="Abrir menu"><i /><i /></button>
    </header>

    <section id="inicio" className="hero"><div className="hero-image" /><div className="grain" /><div className="hero-copy enter">
      <p className="eyebrow">ESTÉTICA ESPECIALIZADA EM MOTOS · MINAS NOVAS</p><h1>SUA MOTO<br />FALA POR VOCÊ.<br /><em>O ACABAMENTO TAMBÉM.</em></h1>
      <p>Não é sobre esconder a sujeira com brilho. É sobre tratar pintura, metais, plásticos e cada área exposta com o cuidado certo — para sua moto voltar a chamar atenção pelos motivos certos.</p>
      <button className="action" onClick={go}>QUERO CUIDAR DA MINHA MOTO <b>→</b></button></div>
      <div className="hero-numbers enter"><b>+200<small>CLIENTES SATISFEITOS</small></b><b>1.914<small>SEGUIDORES NO INSTAGRAM</small></b></div>
    </section>

    <section id="sobre" className="about section"><div className="about-mobile-heading enter"><p className="eyebrow black">POR QUE UMA MOTO EXIGE OUTRO OLHAR</p><h2>NÃO É SÓ LAVAR.<br />É SABER <em>ONDE TOCAR.</em></h2></div><div className="about-photo enter" /><div className="enter">
      <p className="eyebrow black">POR QUE UMA MOTO EXIGE OUTRO OLHAR</p><h2>NÃO É SÓ LAVAR.<br />É SABER <em>ONDE TOCAR.</em></h2>
      <p className="body">Na moto, tudo fica à mostra: motor, rodas, parafusos, pintura, plásticos e cantos difíceis. Um produto errado ou uma execução apressada pode marcar exatamente o que deveria valorizar. Por isso, antes de começar, observamos o estado da moto e definimos o cuidado adequado para cada superfície.</p>
      <div className="values"><div><b>01 · OBSERVAR</b><span>Entender o estado da moto e o resultado que você busca.</span></div><div><b>02 · TRATAR</b><span>Escolher processo e produto de acordo com cada material.</span></div><div><b>03 · FINALIZAR</b><span>Conferir o conjunto até que o cuidado apareça por inteiro.</span></div></div>
    </div></section>

    <section id="servicos" className="services section"><div className="enter"><p className="eyebrow">TRATAMENTOS</p><h2>O QUE A SUA MOTO<br /><em>PRECISA AGORA?</em></h2><p className="services-lead">Nem toda moto precisa do mesmo serviço. O ponto de partida é entender o uso, o estado atual e o acabamento que você espera.</p></div>
      <div className="service-list enter">{services.map((item, index) => <article key={item.name}><b>0{index + 1}</b><h3>{item.name}</h3><p>{item.short}</p><button onClick={() => { setService(item.name); go(); }}>QUERO ENTENDER ↗</button></article>)}</div>
    </section>

    <section id="resultados" className="results section"><div className="results-intro enter"><div><p className="eyebrow black">O RESULTADO COMEÇA ANTES DO BRILHO</p><p className="body">O reflexo chama atenção. O cuidado bem-feito aparece na uniformidade, nos cantos limpos e na forma como cada material recupera presença.</p></div><h2>VOCÊ VÊ O BRILHO.<br /><em>A GENTE VÊ CADA ETAPA.</em></h2></div>
      <div className="result-showcase enter"><div className="result-main"><span>ACABAMENTO</span><div><b>PROTEÇÃO E PRESENÇA</b><small>PINTURA · METAIS · PLÁSTICOS · DETALHES</small></div></div><div className="result-side"><article><i>01</i><strong>CANTOS QUE A LAVAGEM COMUM IGNORA</strong></article><article><i>02</i><strong>ACABAMENTO SEM MAQUIAGEM</strong></article></div></div>
      <div className="result-bar enter"><span>CUIDADO DE PONTA A PONTA</span><span>ATENÇÃO A CADA MATERIAL</span><span>TOQUE FINAL · MINAS NOVAS</span></div>
    </section>

    <section id="galeria-resultados" className="work-results-section" aria-labelledby="work-results-title" onMouseEnter={() => setResultsPaused(true)} onMouseLeave={() => setResultsPaused(false)} onFocusCapture={() => setResultsPaused(true)} onBlurCapture={() => setResultsPaused(false)}>
      <div className="work-results-heading enter"><div><p className="eyebrow">RESULTADOS</p><h2 id="work-results-title">O PROCESSO PASSA.<br /><em>O RESULTADO FICA.</em></h2></div><p>Arraste a divisória e compare o antes e o depois de cada cuidado.<small>6 RESULTADOS REAIS · ANTES E DEPOIS</small></p></div>
      <div className="work-results-stage" aria-live="polite">
        {workResults.map((result, index) => {
          const difference = (index - resultSlide + workResults.length) % workResults.length;
          const slot = difference === 0 ? "current" : difference === 1 ? "next" : difference === workResults.length - 1 ? "previous" : "hidden";
          return <BeforeAfterResult result={result} index={index} slot={slot} key={`${result.title}-${index}`} />;
        })}
      </div>
      <div className="work-results-controls"><button onClick={() => setResultSlide((current) => (current - 1 + workResults.length) % workResults.length)} aria-label="Resultado anterior">←</button><div>{workResults.map((result, index) => <button key={`${result.title}-${index}`} className={resultSlide === index ? "active" : ""} onClick={() => setResultSlide(index)} aria-label={`Mostrar ${result.title}`} aria-current={resultSlide === index ? "true" : undefined} />)}</div><button onClick={() => setResultSlide((current) => (current + 1) % workResults.length)} aria-label="Próximo resultado">→</button></div>
      <div className="work-results-stats enter"><article><strong>+200</strong><p>CLIENTES<br />SATISFEITOS</p></article><article><strong>03</strong><p>TRATAMENTOS<br />PRINCIPAIS</p></article><article><strong>1 A 1</strong><p>CADA MOTO RECEBE<br />UMA LEITURA DIFERENTE</p></article></div>
    </section>

    <section className="feedback section"><div className="enter"><p className="eyebrow">PARA QUEM NÃO ENTREGA A MOTO A QUALQUER UM</p><h2><span>CAPRICHO NÃO É</span><br /><em>EXTRA. É O<br />MÍNIMO.</em></h2><p className="feedback-number">1 A 1<small>CADA MOTO PEDE UMA LEITURA DIFERENTE</small></p></div>
      <div className="testimonials enter"><article><span>01</span><blockquote>Você explica o que incomoda e o resultado que espera.</blockquote><cite>ESCUTA ANTES DE OFERECER UM SERVIÇO</cite></article><article><span>02</span><blockquote>A moto é avaliada antes de definir o melhor caminho.</blockquote><cite>CRITÉRIO ANTES DE PRODUTO</cite></article><article><span>03</span><blockquote>Você recebe uma recomendação coerente com o estado dela.</blockquote><cite>SEM EMPURRAR O QUE A MOTO NÃO PRECISA</cite></article></div>
    </section>

    <section id="avaliacoes" className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-heading enter"><div><p className="eyebrow">AVALIAÇÕES</p><h2 id="reviews-title">QUEM VÊ O RESULTADO,<br /><em>ENTENDE O CUIDADO.</em></h2></div><p>Experiências de quem confiou a moto à Toque Final e viu o cuidado no resultado.<small>RELATOS DAS REDES SOCIAIS</small></p></div>
      <div className="reviews-marquee" aria-label="Avaliações em movimento contínuo">
        <div className="reviews-track">
          {["a", "b"].map((group) => <div className="reviews-group" key={group} aria-hidden={group === "b"}>{reviews.map((review) => <ReviewCard key={`${group}-${review.name}`} review={review} />)}</div>)}
        </div>
      </div>
      <div className="reviews-mobile">
        <div className="reviews-mobile-page" key={reviewPage}>{reviews.slice(reviewPage * 2, reviewPage * 2 + 2).map((review) => <ReviewCard key={review.name} review={review} />)}</div>
        <div className="review-dots" aria-label="Escolher grupo de avaliações">{Array.from({ length: reviewPages }, (_, page) => <button key={page} className={reviewPage === page ? "active" : ""} onClick={() => setReviewPage(page)} aria-label={`Mostrar avaliações a partir de ${page * 2 + 1}`} aria-current={reviewPage === page ? "true" : undefined} />)}</div>
      </div>
    </section>

    <section id="agenda" className="booking section"><div className="booking-title enter"><p className="eyebrow black">VAMOS OLHAR PARA A SUA MOTO?</p><h2><span>CONTE O QUE</span><br /><span>ELA PRECISA.</span><br /><em>A GENTE<br />ORIENTA.</em></h2><p className="body">Escolha o serviço que mais se aproxima do que você procura. A mensagem chega pronta no WhatsApp e, antes de confirmar, conversamos sobre a moto e alinhamos o atendimento.</p><p className="hours">SEG. A SÁB. · 08:00 — 19:00<br />DOMINGO · 08:00 — 16:00</p><a href="https://wa.me/5533999522052?text=Ol%C3%A1!%20Quero%20entender%20qual%20%C3%A9%20o%20melhor%20cuidado%20para%20a%20minha%20moto." target="_blank" rel="noreferrer">PREFIRO CONVERSAR DIRETO ↗</a></div>
      <form className="booking-form enter" onSubmit={book}><label>QUAL CUIDADO VOCÊ PROCURA?<select required value={service} onChange={(event) => setService(event.target.value)}><option value="" disabled>Selecione uma opção</option>{services.map((item) => <option key={item.name}>{item.name}</option>)}</select></label><label>COM QUEM VAMOS FALAR?<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Seu nome" /></label><label>QUAL É A SUA MOTO OU VEÍCULO?<input required value={vehicle} onChange={(event) => setVehicle(event.target.value)} placeholder="Ex.: Honda CG 160 Fan" /></label><div className="date-row"><label>MELHOR DATA<input required type="date" value={date} onChange={(event) => { setDate(event.target.value); setTime(""); }} /></label><label>MELHOR HORÁRIO<select required value={time} onChange={(event) => setTime(event.target.value)} disabled={!date}><option value="" disabled>{date ? "Escolha um horário" : "Escolha a data primeiro"}</option>{availableTimes.map((item) => <option key={item}>{item}</option>)}</select></label></div><label className="check"><input type="checkbox" required /><span>Li e concordo que estas informações serão usadas somente para encaminhar minha solicitação pelo WhatsApp, conforme a <button type="button" onClick={() => setPrivacy(true)}>Política de Privacidade</button>.</span></label><button className="action submit">CONVERSAR SOBRE MINHA MOTO <b>→</b></button></form>
    </section>

    <section className="location"><div className="map">{mapConsent ? <iframe title="Mapa da Toque Final Estética Automotiva" src="https://www.google.com/maps?q=R.+do+Pequi,+25+-+Padre+Emiliano,+Minas+Novas+-+MG,+39650-000&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> : <div className="map-consent"><p className="eyebrow">LOCALIZAÇÃO</p><h3>SUA MOTO<br />CHEGA AQUI.<br /><em>O CUIDADO COMEÇA.</em></h3><p>O mapa só é carregado quando você decide visualizá-lo.</p><button className="map-button" onClick={() => setMapConsent(true)}>VER NO MAPA <b>↗</b></button></div>}</div><div className="location-copy enter"><p className="eyebrow">TOQUE FINAL · MINAS NOVAS</p><h2>TRAGA A MOTO.<br /><em>CONTE O QUE INCOMODA.</em></h2><address>R. do Pequi, 25<br />Padre Emiliano · Minas Novas — MG<br />39650-000</address><div className="location-details"><span>WHATSAPP</span><b>(33) 99952-2052</b><span>ATENDIMENTO</span><b>Seg. a sáb. · 08h às 19h<br />Domingo · 08h às 16h</b></div><a href="https://www.google.com/maps/search/?api=1&query=R.+do+Pequi,+25+-+Padre+Emiliano,+Minas+Novas+-+MG,+39650-000" target="_blank" rel="noreferrer">COMO CHEGAR ↗</a></div></section>

    <footer><img src="/toque-final-logo.png" alt="Toque Final" /><p>Sua moto bem cuidada. Até onde quase ninguém olha.</p><button onClick={() => setPrivacy(true)}>POLÍTICA DE PRIVACIDADE</button></footer>
    {privacy && <div className="modal"><article><button onClick={() => setPrivacy(false)}>×</button><p className="eyebrow black">PRIVACIDADE</p><h2>SEUS DADOS.<br /><em>SEUS DIREITOS.</em></h2><p>Esta página não armazena dados em banco de dados. Nome, serviço, veículo, data e horário são usados apenas para montar a mensagem enviada por você ao WhatsApp da Toque Final.</p><h3>CONTEÚDOS DE TERCEIROS</h3><p>O mapa é carregado somente após sua ação. Ao carregá-lo, dados como o endereço IP podem ser tratados pelo provedor do mapa conforme a política de privacidade dele.</p><h3>SEUS DIREITOS</h3><p>Você pode solicitar confirmação, acesso, correção ou eliminação dos seus dados de atendimento pelo WhatsApp oficial da Toque Final.</p></article></div>}
  </main>;
}
