document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let index = 0;

    function nextSlide() {
        index++;
        if (index >= slider.children.length) {
            index = 0;
        }
        slider.scrollTo({
            left: slider.clientWidth * index,
            behavior: "smooth"
        });
    }

    setInterval(nextSlide, 3000); // Troca de imagem a cada 3 segundos
});
