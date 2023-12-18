document.getElementById("main-action").onclick = function () {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
};

let buttons = document.getElementsByClassName("car-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
      document.getElementById("price").scrollIntoView({ behavior: "smooth" });

      // Automatically fill the "Автомобіль що вас цікавить" field
      const carTitle = this.closest(".car-item").querySelector(".car-item-title").textContent.trim();
      document.getElementById("car").value = carTitle;
  };
}

document.getElementById("price-action").onclick = function () {
  if (document.getElementById("name").value === "") {
      alert("Заповніть поле ім'я!");
  } else if (document.getElementById("phone").value === "") {
      alert("Заповніть поле телефон!");
  } else if (document.getElementById("car").value === "") {
      alert("Заповніть поле автомобіль!");
  } else {
      alert("Спасибі за заявку. Ми зв'яжемося з Вами незабаром.");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let layer = document.querySelector(".price-image");
  document.addEventListener("mousemove", (event) => {
      layer.style.transform =
          "translate3d(" +
          (event.clientX * 0.02) +
          "px," +
          (event.clientY * 0.02) +
          "px,0px)";
  });

  const elem = document.querySelector(".main");
  document.addEventListener("scroll", () => {
      elem.style.backgroundPositionX =
          "0" + 0.1 * window.pageYOffset + "px";
  });
});
