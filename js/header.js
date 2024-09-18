export function header(currentName) {
  const links = [
    {
      href: "../index.html",
      title: "Main page",
    },
    {
      href: "../snake/index.html",
      title: "Snake",
    },
    {
      href: "../faq/index.html",
      title: "Faq",
    },
    {
      href: "../pop-up/index.html",
      title: "Pop-Up",
    },
    {
      href: "../dog_generator/index.html",
      title: "Dog",
    },
  ];
  let addLinks = "";

  for (const check of links) {
    let classes = "";

    if (currentName === check.title) {
      classes = "button active";
    } else {
      classes = "button";
    }
    addLinks += `<a class="${classes}" href="${check.href}">${check.title}</a>`;
  }

  const headerNav = `<header class="headerMain">
      <img class="image" src="../js/logo.ico" alt="Blur picture">
      <nav class="navigation">${addLinks}</nav>
    </header>`;

  document.body.insertAdjacentHTML("afterbegin", headerNav);
}
