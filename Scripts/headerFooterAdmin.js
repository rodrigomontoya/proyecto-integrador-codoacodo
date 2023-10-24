document.addEventListener("DOMContentLoaded", function () {
  // Crear un enlace al archivo CSS
  const cssLink1 = document.createElement('link');
  cssLink1.rel = 'stylesheet';
  cssLink1.href = '../../css/style.css';

  const cssLink2 = document.createElement('link');
  cssLink2.rel = 'stylesheet';
  cssLink2.href = '../../css/header-footer.css';

  // Agregar los enlaces CSS al head del documento
  document.head.appendChild(cssLink1);
  document.head.appendChild(cssLink2);

  // Genera el header
  function generateHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
    <a href="../../index.html">
      <img class="logoMenu" src="../../images/branding/logo_light_horizontal.svg" alt="logo">
    </a>
    <nav class="navHeaderUsuarioAdmin">
      <ul class="menu">
        <li><a class="item-submenu menuHeader-link" href="../../pages/shop.html">VER TIENDA</a></li>
        <li><a class="item-submenu menuHeader-link" href="admin.html">ADMIN</a></li>
        <li><a class="item-submenu menuHeader-link" href="login.html">SALIR</a></li>
      </ul>
    </nav>
    `;
    document.body.prepend(header);
  }

  // Genera el footer
  function generateFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <div class="footerUsuario">
      <div class="navFooter">
        <a href="../../pages/shop.html">SHOP</a>
        <a href="register.html">REGISTRARSE</a>
        <a href="login.html">INGRESAR</a>
        <a href="contact.html">CONTACTO</a>
      </div>
        <div class="logoFooter">
            <img src="../../images/branding/isotype.svg" alt="Logo Funkoshop">
        </div>
    </div>
    <p class="copy">All rights reserved 2023 - Funkoshop &copy;</p>
    `;
    document.body.appendChild(footer); // Cambia 'prepend' a 'appendChild' para ubicarlo al final del body
  }
  generateHeader();
  generateFooter();
});