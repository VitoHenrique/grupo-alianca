/**
 * components.js — Grupo Aliança Consig
 * Injeção de Header e Footer padronizados, modernos e corporativos.
 */

const COMPANY = {
  name:      'GRUPO ALIANÇA CONSIG',
  cnpj:      '50.090.630/0001-72',
  address:   'Rua Gênova, 12, Sala 4',
  bairro:    'Pagani',
  city:      'Palhoça',
  state:     'SC',
  cep:       '88132-153',
  phone:     '(48) 9210-7347',
  phoneHref: 'tel:+554892107347',
  email:     'contato@grupoaliancaconsig.shop',
};

// Ícone SVG Corporativo (Escudo / Proteção Financeira)
const LOGO_SVG = `
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
`;

/* ── HEADER ──────────────────────────────────────────── */
function injectHeader() {
  const page = document.body.dataset.page || '';
  const nav = [
    { href: 'index.html',                   label: 'Início' },
    { href: 'politica-de-privacidade.html', label: 'Privacidade' },
    { href: 'termos-de-uso.html',           label: 'Termos de Uso' },
    { href: 'contato.html',                 label: 'Fale Conosco', isCta: true },
  ];

  const links = nav.map(n => {
    const isActive = page === n.label ? ' active' : '';
    const cls = n.isCta ? 'nav-cta' : '';
    return `<a href="${n.href}" class="${cls}${isActive}">${n.label}</a>`;
  }).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <header class="site-header" id="siteHeader" role="banner">
      <div class="header-inner">
        <a href="index.html" class="logo" aria-label="Grupo Aliança Consig">
          <div class="logo-icon-svg">${LOGO_SVG}</div>
          <div class="logo-text">
            <span class="logo-name">${COMPANY.name}</span>
            <span class="logo-tag">Soluções Financeiras</span>
          </div>
        </a>
        <nav class="site-nav" aria-label="Navegação principal">${links}</nav>
      </div>
    </header>
  `);

  window.addEventListener('scroll', () => {
    const h = document.getElementById('siteHeader');
    if (h) h.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ── FOOTER ──────────────────────────────────────────── */
function injectFooter() {
  const year = new Date().getFullYear();

  document.body.insertAdjacentHTML('beforeend', `
    <footer class="site-footer" role="contentinfo">
      <div class="footer-inner">

        <!-- Coluna 1: Empresa & Dados Oficiais -->
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:10px;">
            <div class="logo-icon-svg" style="width:34px;height:34px;">${LOGO_SVG}</div>
            <span class="f-title">${COMPANY.name}</span>
          </div>
          <p class="f-desc">
            Intermediação e assessoria especializada em crédito consignado.
            Compromisso com conformidade regulatória, integridade nas operações e
            atendimento ético.
          </p>
          <div class="footer-cnpj-badge">
            <span>CNPJ: ${COMPANY.cnpj}</span>
          </div>
        </div>

        <!-- Coluna 2: Navegação Institucional -->
        <div class="footer-col">
          <h4>Institucional</h4>
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="politica-de-privacidade.html">Política de Privacidade</a></li>
            <li><a href="termos-de-uso.html">Termos de Uso</a></li>
            <li><a href="contato.html">Canal de Atendimento</a></li>
          </ul>
        </div>

        <!-- Coluna 3: Informações de Contato Cadastrais -->
        <div class="footer-col">
          <h4>Atendimento & Endereço</h4>
          <div class="footer-contact-list">
            <div class="f-contact-item">
              <span class="f-contact-label">Telefone Comercial</span>
              <span class="f-contact-val">
                <a href="${COMPANY.phoneHref}">${COMPANY.phone}</a>
              </span>
            </div>
            <div class="f-contact-item">
              <span class="f-contact-label">E-mail Corporativo</span>
              <span class="f-contact-val">
                <a href="mailto:${COMPANY.email}">${COMPANY.email}</a>
              </span>
            </div>
            <div class="f-contact-item">
              <span class="f-contact-label">Endereço Registrado</span>
              <span class="f-contact-val">
                ${COMPANY.address} — ${COMPANY.bairro}<br>
                ${COMPANY.city}/${COMPANY.state} — CEP ${COMPANY.cep}
              </span>
            </div>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <span>© ${year} ${COMPANY.name} — CNPJ ${COMPANY.cnpj}. Todos os direitos reservados.</span>
        <div class="footer-bottom-links">
          <a href="politica-de-privacidade.html">Privacidade</a>
          <a href="termos-de-uso.html">Termos</a>
          <a href="contato.html">Contato</a>
        </div>
      </div>
    </footer>
  `);
}

document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
});
