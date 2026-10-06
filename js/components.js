/**
 * components.js — Grupo Aliança Consig
 * Header e Footer compartilhados em todas as páginas.
 */

const COMPANY = {
  name:    'GRUPO ALIANÇA CONSIG',
  cnpj:    '50.090.630/0001-72',
  address: 'Rua Gênova, 12, Sala 4',
  bairro:  'Pagani',
  city:    'Palhoça/SC',
  cep:     '88132-153',
  phone:   '(48) 9210-7347',
  phoneHref: 'tel:+554892107347',
  email:   'contato@grupoaliancaconsig.shop',
};

/* ── HEADER ──────────────────────────────────────────── */
function injectHeader() {
  const page = document.body.dataset.page || '';
  const nav = [
    { href: 'index.html',                   label: 'Início' },
    { href: 'contato.html',                 label: 'Contato' },
    { href: 'politica-de-privacidade.html', label: 'Privacidade' },
    { href: 'termos-de-uso.html',           label: 'Termos de Uso' },
  ];

  const links = nav.map(n => {
    const isCta = n.label === 'Contato';
    const isActive = page === n.label ? ' active' : '';
    const cls = isCta ? 'nav-cta' : '';
    return `<a href="${n.href}" class="${cls}${isActive}">${n.label}</a>`;
  }).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <header class="site-header" id="siteHeader" role="banner">
      <div class="header-inner">
        <a href="index.html" class="logo" aria-label="Início">
          <div class="logo-icon">🏦</div>
          <div class="logo-text">
            <span class="logo-name">GRUPO ALIANÇA CONSIG</span>
            <span class="logo-tag">Crédito Consignado</span>
          </div>
        </a>
        <nav class="site-nav" aria-label="Menu principal">${links}</nav>
      </div>
    </header>
  `);

  // Efeito scroll no header
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

        <div class="footer-brand">
          <div class="footer-logo">
            <div class="footer-logo-icon">🏦</div>
            <div class="footer-logo-text">
              <p class="fn">${COMPANY.name}</p>
              <p class="ft">Soluções em Crédito Consignado</p>
            </div>
          </div>
          <p>
            Especialistas em conectar servidores públicos, aposentados
            e pensionistas às melhores condições de crédito consignado,
            com ética, transparência e total conformidade regulatória.
          </p>
          <div class="footer-legal">
            <span class="cnpj-tag">CNPJ ${COMPANY.cnpj}</span>
          </div>
        </div>

        <div class="footer-col">
          <h4>Institucional</h4>
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="politica-de-privacidade.html">Política de Privacidade</a></li>
            <li><a href="termos-de-uso.html">Termos de Uso</a></li>
            <li><a href="contato.html">Fale Conosco</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contato</h4>
          <div class="footer-contact-block">
            <div class="fci">
              <span class="fci-label">Telefone</span>
              <span class="fci-value"><a href="${COMPANY.phoneHref}">${COMPANY.phone}</a></span>
            </div>
            <div class="fci">
              <span class="fci-label">E-mail</span>
              <span class="fci-value"><a href="mailto:${COMPANY.email}">${COMPANY.email}</a></span>
            </div>
            <div class="fci">
              <span class="fci-label">Endereço</span>
              <span class="fci-value">
                ${COMPANY.address}, ${COMPANY.bairro}<br>
                ${COMPANY.city} — CEP ${COMPANY.cep}
              </span>
            </div>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <span class="footer-bottom-copy">
          © ${year} ${COMPANY.name} — CNPJ ${COMPANY.cnpj} — Todos os direitos reservados.
        </span>
        <div class="footer-bottom-links">
          <a href="politica-de-privacidade.html">Privacidade</a>
          <a href="termos-de-uso.html">Termos</a>
          <a href="contato.html">Contato</a>
        </div>
      </div>
    </footer>
  `);
}

/* ── INIT ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
});
