/**
 * components.js — Grupo Aliança Consig
 * Injeta Header e Footer em todas as páginas institucionais.
 */

const COMPANY = {
  name:    'GRUPO ALIANÇA CONSIG',
  cnpj:    '50.090.630/0001-72',
  address: 'Rua Gênova, 12, Sala 4',
  city:    'Palhoça/SC',
  cep:     '88132-153',
  phone:   '(48) 9210-7347',
  email:   'contato@grupoaliancaconsig.shop',              // ← substituir após receber o e-mail
};

/* ── HEADER ─────────────────────────────────────────── */
function injectHeader() {
  const page = document.body.dataset.page || '';
  const nav = [
    { href: 'contato.html',                  label: 'Contato' },
    { href: 'politica-de-privacidade.html',  label: 'Privacidade' },
    { href: 'termos-de-uso.html',            label: 'Termos de Uso' },
  ];

  const links = nav.map(n =>
    `<a href="${n.href}" ${page === n.label ? 'class="active"' : ''}>${n.label}</a>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <header class="site-header" role="banner">
      <div class="header-inner">
        <a href="#" class="logo" aria-label="Início – Grupo Aliança Consig">
          <span class="logo-name">GRUPO ALIANÇA CONSIG</span>
          <span class="logo-slogan">Soluções em Crédito Consignado</span>
        </a>
        <nav class="site-nav" aria-label="Menu principal">${links}</nav>
      </div>
    </header>
  `);
}

/* ── FOOTER ─────────────────────────────────────────── */
function injectFooter() {
  const year = new Date().getFullYear();

  document.body.insertAdjacentHTML('beforeend', `
    <footer class="site-footer" role="contentinfo">
      <div class="footer-inner">

        <!-- Identidade da empresa -->
        <div class="footer-brand">
          <p class="brand-name">${COMPANY.name}</p>
          <p class="brand-cnpj">CNPJ ${COMPANY.cnpj}</p>
          <p>
            Empresa especializada em soluções de crédito consignado,
            operando com transparência, ética e total conformidade com
            as normas regulatórias vigentes.
          </p>
        </div>

        <!-- Links institucionais -->
        <div class="footer-col">
          <h4>Institucional</h4>
          <ul>
            <li><a href="politica-de-privacidade.html">Política de Privacidade</a></li>
            <li><a href="termos-de-uso.html">Termos de Uso</a></li>
            <li><a href="contato.html">Fale Conosco</a></li>
          </ul>
        </div>

        <!-- Contato -->
        <div class="footer-col">
          <h4>Contato</h4>

          <div class="footer-contact-item">
            <span class="fc-label">Telefone</span>
            <span class="fc-value">
              <a href="tel:+554892107347">${COMPANY.phone}</a>
            </span>
          </div>

          <div class="footer-contact-item">
            <span class="fc-label">E-mail</span>
            <span class="fc-value">
              <a href="mailto:${COMPANY.email}">${COMPANY.email}</a>
            </span>
          </div>

          <div class="footer-contact-item">
            <span class="fc-label">Endereço</span>
            <span class="fc-value">
              ${COMPANY.address}<br>
              ${COMPANY.city} — CEP ${COMPANY.cep}
            </span>
          </div>
        </div>

      </div><!-- /footer-inner -->

      <div class="footer-bottom">
        <span>
          © ${year} ${COMPANY.name} — CNPJ ${COMPANY.cnpj} — Todos os direitos reservados.
        </span>
        <div class="footer-bottom-links">
          <a href="politica-de-privacidade.html">Política de Privacidade</a>
          <a href="termos-de-uso.html">Termos de Uso</a>
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
