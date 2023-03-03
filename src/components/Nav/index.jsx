import "./nav.sass";

export const Nav = () => {
  // const toggleMenu = document.querySelector(".toggle-menu");
  // const menu = document.querySelector("nav ul");
  
  // toggleMenu.addEventListener("click", () => {
  //   toggleMenu.classList.toggle("menu-open");
  //   menu.classList.toggle("menu-open");
  // });

  return (
    <nav>
      {/* <button class="toggle-menu">
        <span class="menu-icon"></span>
      </button> */}
      <ul>
        <li>
          <a href="/">HOME</a>
          <a href="/categorias">CAMISAS</a>
          <a href="/categorias">BLUSAS</a>
          <a href="/categorias">CALÇAS</a>
          <a href="/categorias">ACESSÓRIOS</a>
          <a href="/">
            <span>OUTLET</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
