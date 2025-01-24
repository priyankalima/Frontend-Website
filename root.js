// header element
header.innerHTML = `
  <nav class="nav-bar">
     <logo>LOGO</logo>
     <list>
        <a href="/">Home</a>
        <a href="/about">About</a>
     </list>
  </nav>

`
// footer element
footer.innerHTML = `
copyright@2025

`

// append elments
var title = document.createElement('title');
title.innerHTML = "UIUX-Frontend";
var favIco = document.createElement('link');
favIco.type = "image/x-icon";
favIco.rel = "icon";
favIco.href= "/assets/favicon.png";

document.head.append(title,favIco);