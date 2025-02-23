 // animacion boton menu------------------------------------------------

 const botonMenu = document.querySelector('.botonmenu');
 const botonMenuDesplegable = document.querySelector('.botonmenudesplegable');
 const botonCerrar = document.querySelector('.cerrar');
 const links = botonMenuDesplegable.querySelectorAll('a'); // Seleccionamos todos los enlaces del menú desplegable

 // Al hacer clic en el botón "Menú"
 botonMenu.addEventListener('click', () => {
   // Oculta el botón de menú y muestra el menú desplegable con la animación
   botonMenu.style.display = 'none'; // Ocultar botón de menú
   botonMenuDesplegable.classList.remove('hide');  // Quitar la animación de salida si existe
   botonMenuDesplegable.style.display = 'block';   // Aseguramos que se vea el menú desplegable
   botonMenuDesplegable.classList.add('show');     // Aplica la animación de entrada

   // Muestra el botón de cerrar con la animación
   botonCerrar.classList.remove('hide');
   botonCerrar.style.display = 'block';
   botonCerrar.classList.add('show');
 });

 // Al hacer clic en el botón "Cerrar"
 botonCerrar.addEventListener('click', () => {
   cerrarMenu();
 });

 // Al hacer clic en los enlaces del menú desplegable
 links.forEach(link => {
   link.addEventListener('click', () => {
     cerrarMenu(); // Cierra el menú al hacer clic en cualquier enlace
   });
 });

 // Función para cerrar el menú y el botón de cerrar
 function cerrarMenu() {
   // Aplica la animación de salida al menú desplegable y al botón cerrar
   botonMenuDesplegable.classList.remove('show');
   botonMenuDesplegable.classList.add('hide');  // Desliza fuera el menú

   botonCerrar.classList.remove('show');
   botonCerrar.classList.add('hide');           // Desliza fuera el botón cerrar

   // Espera a que termine la animación para ocultar completamente los elementos
   setTimeout(() => {
     botonMenuDesplegable.style.display = 'none';  // Oculta el div desplegable
     botonCerrar.style.display = 'none';           // Oculta el botón cerrar
     botonMenu.style.display = 'block';            // Vuelve a mostrar el botón de menú
   }, 500);  // Duración de la animación (500 ms)
 }


 // header----------------------------------------------

 const header = document.getElementById("header");
 let previousScrollPosition = window.pageYOffset;

 window.onscroll = function() {
     let currentScrollPosition = window.pageYOffset;

     // Si el usuario baja, ocultar el header parcialmente (top -50px para ocultar la mitad)
     if (previousScrollPosition < currentScrollPosition && currentScrollPosition > 100) {
         header.style.top = "-80px"; // Desliza el header parcialmente hacia arriba
     } 
     // Si el usuario sube, mostrar el header nuevamente
     else {
         header.style.top = "0";
     }

     previousScrollPosition = currentScrollPosition;
 };





document.addEventListener("DOMContentLoaded", function () {
  let navOculto = document.querySelector(".navoculto");
  let body = document.body;
  let overlay = document.createElement("div");

  // Crear una capa oscura sobre todo el contenido excepto el nav
  overlay.classList.add("overlay-filtro");
  document.body.appendChild(overlay);

  navOculto.addEventListener("mouseenter", function () {
      overlay.classList.add("activo");
  });

  navOculto.addEventListener("mouseleave", function () {
      overlay.classList.remove("activo");
  });
});






// Función para mostrar y ocultar galerías con efecto suave
function toggleGallery(divId) {
  const div = document.getElementById(divId);
  const isVisible = div.classList.contains("show");

  // Ocultamos todas las galerías antes de mostrar otra
  hideAllGalleries();

  // Si no estaba visible, lo mostramos
  if (!isVisible) {
    div.classList.add("show");
  }
}

// Ocultar todas las galerías
function hideAllGalleries() {
  const galerias = document.querySelectorAll(".galeriacarrouse");
  galerias.forEach((galeria) => {
    galeria.classList.remove("show");
  });
}

// Función para mostrar el div correspondiente a las tarjetas
function toggleTrabajo(targetId) {
  const desplegables = document.querySelectorAll(".bannertrabajosdesplegable");

  // Ocultar todos los desplegables
  desplegables.forEach((desplegable) => {
    desplegable.classList.remove("show");
  });

  // Mostrar el desplegable correspondiente
  const targetDiv = document.getElementById(`bannertrabajosdesplegable${targetId}`);
  if (targetDiv) {
    targetDiv.classList.add("show");
  }
}

// Asignar eventos a los botones de galería
document.getElementById("botoneditorial1").addEventListener("click", function () {
  toggleGallery("galeriacarrouse1");
});

document.getElementById("botoneditorial2").addEventListener("click", function () {
  toggleGallery("galeriacarrouse2");
});

// Asignar eventos a las tarjetas
document.querySelectorAll(".tarjetastrabajos").forEach((tarjeta) => {
  tarjeta.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    toggleTrabajo(targetId);
  });
});


/*--------------------------------------efecto holografdico 3d---------------------------------------*/

/*--------------------------------------efecto holográfico 3D---------------------------------------*/

document.addEventListener("DOMContentLoaded", function() { 
  const cartas = document.querySelectorAll(".carta");

  function aplicarEfectos(elemento) {
    const circleClasses = (elemento.getAttribute("data-circle") || "circle").split(/[\s,]+/);
    circleClasses.forEach(circleClass => {
      const circle = document.createElement("div");
      circle.classList.add(circleClass);
      elemento.appendChild(circle);
    });

    const fondoRainbow = elemento.querySelector(".fondo-rainbow");
    let lastPositionX = 0;
    let lastPositionY = 0;
    let accumulatedY1 = 0;
    let accumulatedY2 = 0;

    const moverLineas = (e) => {
      const isTouchEvent = e.type.includes("touch");
      const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
      const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;

      const rect = elemento.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const xAxis = (centerX - clientX) / 10;
      const yAxis = -(centerY - clientY) / 10;

      elemento.style.transform = `perspective(800px) rotateX(${yAxis}deg) rotateY(${xAxis}deg) scale(1.5)`;

      // Aplicar box-shadow
      const shadowX = (clientX - rect.left - rect.width / 2) / 8;
      const shadowY = (clientY - rect.top - rect.height / 2) / 25;
      elemento.style.boxShadow = `${shadowX}px ${shadowY}px 5px rgba(0, 0, 0, 0.3)`;

      const circles = elemento.querySelectorAll("div[class^='circle']");
      circles.forEach(circle => {
        circle.style.left = `${clientX - rect.left}px`;
        circle.style.top = `${clientY - rect.top}px`;
      });

      const deltaX = clientX - lastPositionX;
      const deltaY = clientY - lastPositionY;
      lastPositionX = clientX;
      lastPositionY = clientY;

      const totalDelta = deltaX + deltaY;
      accumulatedY1 += totalDelta;
      accumulatedY2 -= totalDelta;

      const hueValue = (clientX + clientY) % 360;
      fondoRainbow.style.filter = `saturate(2) hue-rotate(${hueValue}deg)`;

      const effectContainers = elemento.querySelectorAll('.efectoholograficolineas');
      effectContainers.forEach((container, idx) => {
        const lines1 = container.querySelectorAll('.line-container:first-of-type .line');
        lines1.forEach((line, index) => {
          const offset = (index + 1) * (idx + 2);
          line.style.transform = `translateY(${accumulatedY1 / offset}px)`;
        });

        const lines2 = container.querySelectorAll('.line-container:last-of-type .line');
        lines2.forEach((line, index) => {
          const offset = (index + 1) * (idx + 2);
          line.style.transform = `translateY(${accumulatedY2 / offset}px)`;
        });
      });
    };

    const startInteraction = () => {
      elemento.addEventListener("mousemove", moverLineas);
      elemento.addEventListener("touchmove", moverLineas);
    };

    const stopInteraction = () => {
      elemento.removeEventListener("mousemove", moverLineas);
      elemento.removeEventListener("touchmove", moverLineas);
      elemento.style.transform = "rotateY(0deg) rotateX(0deg)";
      elemento.style.boxShadow = "none";
      fondoRainbow.style.filter = "saturate(10)";
    };

    elemento.addEventListener("mouseenter", startInteraction);
    elemento.addEventListener("touchstart", startInteraction);
    elemento.addEventListener("mouseleave", stopInteraction);
    elemento.addEventListener("touchend", stopInteraction);
  }

  cartas.forEach(aplicarEfectos);
});




/*------------------------------------carrousel de libros-----------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  function setupCarrusel(container) {
    const carrusel = container.querySelector('.carrusel');
    const leftArrow = container.querySelector('.left-arrow');
    const rightArrow = container.querySelector('.right-arrow');
    let currentIndex = 0;

    function updateTransform() {
      carrusel.style.transform = `translateX(-${currentIndex * 10}vw)`;
    }

    function scrollRight() {
      currentIndex = Math.min(currentIndex + 2, carrusel.children.length - 1);
      updateTransform();
    }

    function scrollLeft() {
      currentIndex = Math.max(currentIndex - 2, 0);
      updateTransform();
    }

    leftArrow.addEventListener('click', scrollLeft);
    rightArrow.addEventListener('click', scrollRight);

    document.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
        scrollLeft();
      } else if (event.key === 'ArrowRight') {
        scrollRight();
      }
    });
  }

  function initCarruseles() {
    const carruseles = document.querySelectorAll('.carrusel-container');
    if (window.innerWidth >= 800) {
      carruseles.forEach(container => {
        const carrusel = container.querySelector('.carrusel');
        const leftArrow = container.querySelector('.left-arrow');
        const rightArrow = container.querySelector('.right-arrow');
        if (carrusel) carrusel.style.transform = '';
        if (leftArrow) leftArrow.style.display = '';
        if (rightArrow) rightArrow.style.display = '';
        setupCarrusel(container);
      });
    } else {
      carruseles.forEach(container => {
        const carrusel = container.querySelector('.carrusel');
        const leftArrow = container.querySelector('.left-arrow');
        const rightArrow = container.querySelector('.right-arrow');
        if (carrusel) carrusel.style.transform = 'none';
        if (leftArrow) leftArrow.style.display = 'none';
        if (rightArrow) rightArrow.style.display = 'none';
      });
    }
  }

  initCarruseles();
  window.addEventListener('resize', initCarruseles);
});

/*-----------------------------------------------------------------------------*/

/*--------------------------------INFO DE LIBROS---------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
  var infos = document.querySelectorAll(".info");

  infos.forEach(function(info) {
    var cartacont = info.closest(".carousel-item");

    cartacont.addEventListener("click", function() {
      info.classList.add("mostrar");
    });

    cartacont.addEventListener("mouseleave", function() {
      info.classList.remove("mostrar");
    });
  });
});




/*-------------------------------------ANIMACION DIVS----------------------------------------*/


// animación
function applyAnimations(selector) {
  document.querySelectorAll(selector).forEach((element) => {

    const bgBase = element.getAttribute('data-bg-base');

 
    element.style.backgroundImage = 'none';

   
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const uniqueDelay = Math.random() * 800; 
            setTimeout(() => playAnimation(element, bgBase), uniqueDelay);
          } else {
            
            element.style.backgroundImage = 'none';
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(element);
  });
}

// reproducir la animación
function playAnimation(element, bgBase) {
  element.style.animation = ''; 

  // Duración de la animación
  const totalDuration = 400; // 0.5s
  const stepDuration = totalDuration / 4; 

  // Secuencia
  setTimeout(() => {
    element.style.backgroundImage = `url(./assets/${bgBase}b.webp)`;
  }, stepDuration * 1); // Cambiar al 25% del tiempo total
  setTimeout(() => {
    element.style.backgroundImage = `url(./assets/${bgBase}c.webp)`;
  }, stepDuration * 2); // Cambiar al 50% del tiempo total
  setTimeout(() => {
    element.style.backgroundImage = `url(./assets/${bgBase}d.webp)`;
  }, stepDuration * 3); // Cambiar al 75% del tiempo total
  setTimeout(() => {
    element.style.backgroundImage = `url(./assets/${bgBase}.webp)`; // Fondo final
  }, totalDuration); // Fondo final al terminar la animación
}

// Aplicar animaciones a ambos selectores
applyAnimations('.logoprogramas');
applyAnimations('.programas');
applyAnimations('.bannerfondoanimacion');
applyAnimations('.bannerbotonmenu');
applyAnimations('.sobremilogo');
applyAnimations('.botonredes');
applyAnimations('.logonavbar');
applyAnimations('.opcionbanner');



/*-------------------------------------correo email----------------------------------------*/


function copiarEmail() {
    const email = "ignpk04@gmail.com"; 
    navigator.clipboard.writeText(email)
        .then(() => alert("Correo copiado al portapapeles: " + email))
        .catch(err => console.error("Error al copiar:", err));
}
