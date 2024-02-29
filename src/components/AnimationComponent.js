import React, { useEffect } from 'react';

const AnimationComponent = () => {
  useEffect(() => {
    // Obtener elementos del DOM una vez que el componente se monta
    const listItem = document.querySelectorAll(".menu-list li");
    const menuDrop = document.querySelector(".menu-backdrop");
    const menuDropTop = menuDrop.getBoundingClientRect().top;
    const menuDropLeft = menuDrop.getBoundingClientRect().left;

    // Función para actualizar las propiedades del menú desplegable
    function updateMenuDrop(item) {
      menuDrop.style.setProperty("--block-top", `${item.getBoundingClientRect().top - menuDropTop}px`);
      menuDrop.style.setProperty("--block-left", `${item.getBoundingClientRect().left - menuDropLeft}px`);
      menuDrop.style.setProperty("--block-height", `${item.clientHeight}px`);
      menuDrop.style.setProperty("--block-width", `${item.clientWidth}px`);
      menuDrop.style.setProperty("opacity", "1");
      menuDrop.style.setProperty("visibility", "visible");
    }

    // Función para ocultar el menú desplegable
    function hideMenuDrop() {
      menuDrop.style.setProperty("opacity", "0");
      menuDrop.style.setProperty("visibility", "hidden");
    }

    // Manejar eventos de ratón para cada elemento de la lista
    listItem.forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        updateMenuDrop(item);
      });
      item.addEventListener("mouseleave", function () {
        hideMenuDrop();
      });
    });

    // Limpiar eventos al desmontar el componente
    return () => {
      listItem.forEach(function (item) {
        item.removeEventListener("mouseenter", updateMenuDrop);
        item.removeEventListener("mouseleave", hideMenuDrop);
      });
    };
  }, []); // El segundo argumento del useEffect es un array vacío para que se ejecute solo una vez al montar el componente

  return null; // El componente no renderiza nada visible en el DOM
};

export default AnimationComponent;
