const chooseColor = document.querySelectorAll('.choose-color__btn');
const contentItem = document.querySelectorAll('.content-item');


chooseColor.forEach(function (element) {
    element.addEventListener('click', open)
})
function open(evt) {
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`) ;

    chooseColor.forEach(function (item) {
        item.classList.remove('choose-color__btn--active')
    })

    target.classList.add('choose-color__btn--active')

    contentItem.forEach(function (item) {
        item.classList.remove('content-item__active')
    });
    contentActive.forEach(function (item) {
        item.classList.add('content-item__active')
    });

}
// Button Up

      window.onscroll = function () {
        scrollFunction();
      };

      const upbuttons = document.querySelectorAll(".button-up");

      for (const upbutton of upbuttons) {
        upbutton.addEventListener("click", clickHandler);
      }

      function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        });
      }

      function scrollFunction() {
        if (
          document.body.scrollTop > 500 ||
          document.documentElement.scrollTop > 500
        ) {
          document.getElementById("btnUp").className = "button-up visible";
        } else {
          document.getElementById("btnUp").className = "button-up hidden";
        }
      }
    