document.addEventListener("DOMContentLoaded", function () {
  // Crear un enlace al archivo CSS
  const cssLink1 = document.createElement('link');
  cssLink1.rel = 'stylesheet';
  cssLink1.href = './css/style.css';

  // Agregar los enlaces CSS al head del documento
  document.head.appendChild(cssLink1);

  // Genera el header
  function generateHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
    <article class="logo">
          <a href="index.html">
      <picture>
        <img
          src="images/branding/logo_light_horizontal.svg"
          alt="Logo de Empresa"
        />
      </picture>
      </a>
      </article>
      <article class="barra_navegacion">
        <nav>
          <ul class="menu">
            <li>
              <a class="item-submenu" href="shop.html">SHOP <img src="images/icons/Vector 1 (Stroke).svg" alt="Descripción de la imagen"></a>
              <ul class="submenu">
                <li><a class="item-submenu" href="shop.html">FUNKOS</a></li>
                <li><a class="item-submenu" href="shop.html">REMERAS</a></li>
                <li><a class="item-submenu"href="shop.html">LLAVEROS</a></li>
              </ul>
            </li>
            <li><a class="item-submenu" href="contact.html">CONTACTO</a></li>
            <li><a class="item-submenu" href="pages/admin/login.html">LOGIN</a></li>
            <li><a href="cart.html"><img src="images/icons/cart-icon.svg" alt="Icono Cart"/></a></li>
          </ul>
        </nav>
      </article>
    `;
    document.body.prepend(header);
  }

  // Genera el footer
  function generateFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <nav>
        <ul>
          <li class="li__a"><a href="shop.html">SHOP</a></li>
          <li class="li__a"><a href="pages/admin/register.html">REGISTRARSE</a></li>
          <li class="li__a"><a href="pages/admin/login.html">LOGIN</a></li>
          <li class="li__a"><a href="contact.html">CONTACTO</a></li>
        </ul>
      </nav>
      <section class="copyright">
        <p>All rights reserved 2023 - Funkoshop &copy;</p>
      </section>
      <picture class="footer-logo">
        <img src="images/branding/isotype.svg" alt="Isotipo de la marca de FunkoShop">
      </picture>
    `;
    document.body.appendChild(footer); // Cambia 'prepend' a 'appendChild' para ubicarlo al final del body
  }
  generateHeader();
  generateFooter();
});