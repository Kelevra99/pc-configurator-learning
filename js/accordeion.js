const accordeion = () => {
    const contents = document.querySelectorAll(".program-line__content");
    contents.forEach((elem) => {
      const title = elem.querySelector(".program-line__title");
    
      const descr = elem.querySelector(".program-line__descr");
      title.addEventListener("click", () => {
        descr.classList.toggle("active");
        // деактивируем другие описания
        contents.forEach((otherElem) => {
          if (otherElem !== elem) {
            const otherDescr = otherElem.querySelector(".program-line__descr");
            otherDescr.classList.remove("active");
          }
        });
      });
    });

}

accordeion();
