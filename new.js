import armor from "./modules/armor.js";
import containers from "./modules/containers.js";
import artefacts from "./modules/artefacts.js";
import change from "./modules/calculate.js";
import sborka from "./modules/calculate.js";

// document.querySelector('body').addEventListener('change', sborka())

function artefactsAppend() {
  for (const iterator of Object.keys(artefacts)) {
    document
      .querySelectorAll('div[name="artefactSearch"] .optiongroup')
      .forEach((item) => {
        let element = document.createElement("div");
        element.setAttribute("class", "option");
        element.innerHTML = `${iterator}`;
        item.append(element);
      });
  }
}

artefactsAppend();

function searchArtefacts() {
  let id = this.parentNode.id;
  let options = document.querySelectorAll(`#${id} .optiongroup .option`);

  for (const iterator of options) {
    if (
      iterator.innerHTML.toUpperCase().indexOf(this.value.toUpperCase()) > -1
    ) {
      iterator.style.display = "";
    } else {
      iterator.style.display = "none";
    }
  }
}

document
  .querySelectorAll('div[name="artefactSearch"] input')
  .forEach((item) => item.addEventListener("input", searchArtefacts));

function searchArmor() {
  let id = this.parentNode.id;
  let options = document.querySelectorAll(`#${id} .optiongroup .option`);

  for (const iterator of options) {
    if (
      iterator.innerHTML.toUpperCase().indexOf(this.value.toUpperCase()) > -1
    ) {
      iterator.style.display = "";
    } else {
      iterator.style.display = "none";
    }
  }
}

document
  .querySelector("#armorBlock input")
  .addEventListener("input", searchArmor);

function searchContainer() {
  let id = this.parentNode.id;
  let options = document.querySelectorAll(`#${id} .optiongroup .option`);

  for (const iterator of options) {
    if (
      iterator.innerHTML.toUpperCase().indexOf(this.value.toUpperCase()) > -1
    ) {
      iterator.style.display = "";
    } else {
      iterator.style.display = "none";
    }
  }
}

document
  .querySelector("#containerBlock input")
  .addEventListener("input", searchContainer);

function artefactValues() {
  let parent = this.parentNode.parentNode;
  parent.setAttribute("value", `${this.innerHTML}`);

  parent.style.display = "none";

  if (parent.id == "armorBlock") {
    document.querySelector(".armor").innerHTML = `${this.innerHTML}`;
  } else if (parent.id == "containerBlock") {
    document.querySelector(".container").innerHTML = `${this.innerHTML}`;
  } else if (parent.id == "firstArt") {
    document.querySelector(
      "#firstArtSlot .art"
    ).innerHTML = `${this.innerHTML}`;
  } else if (parent.id == "secondArt") {
    document.querySelector(
      "#secondArtSlot .art"
    ).innerHTML = `${this.innerHTML}`;
  } else if (parent.id == "thirdArt") {
    document.querySelector(
      "#thirdArtSlot .art"
    ).innerHTML = `${this.innerHTML}`;
  } else if (parent.id == "fourArt") {
    document.querySelector("#fourArtSlot .art").innerHTML = `${this.innerHTML}`;
  } else if (parent.id == "fiveArt") {
    document.querySelector("#fiveArtSlot .art").innerHTML = `${this.innerHTML}`;
  } else if (parent.id == "sixArt") {
    document.querySelector("#sixArtSlot .art").innerHTML = `${this.innerHTML}`;
  }

  dopsShow();
  dopsSelect();
  change();
}

document
  .querySelectorAll(".option")
  .forEach((item) => item.addEventListener("click", artefactValues));

function dopsShow() {
  document.querySelectorAll('div[name="artefactSearch"]').forEach((item) => {
    if (item.hasAttribute("value")) {
      if (item.id == "firstArt") {
        document.querySelector("#firstDopSlot .values").innerHTML = "";
        for (const iterator of Object.keys(
          artefacts[`${item.getAttribute("value")}`]["Доп"]
        )) {
          let element = document.createElement("div");
          element.setAttribute("class", "section");
          element.innerHTML = `${iterator}`;

          document.querySelector("#firstDopSlot .values").append(element);
        }
      } else if (item.id == "secondArt") {
        document.querySelector("#secondDopSlot .values").innerHTML = "";
        for (const iterator of Object.keys(
          artefacts[`${item.getAttribute("value")}`]["Доп"]
        )) {
          let element = document.createElement("div");
          element.setAttribute("class", "section");
          element.innerHTML = `${iterator}`;

          document.querySelector("#secondDopSlot .values").append(element);
        }
      } else if (item.id == "thirdArt") {
        document.querySelector("#thirdDopSlot .values").innerHTML = "";
        for (const iterator of Object.keys(
          artefacts[`${item.getAttribute("value")}`]["Доп"]
        )) {
          let element = document.createElement("div");
          element.setAttribute("class", "section");
          element.innerHTML = `${iterator}`;

          document.querySelector("#thirdDopSlot .values").append(element);
        }
      } else if (item.id == "fourArt") {
        document.querySelector("#fourDopSlot .values").innerHTML = "";
        for (const iterator of Object.keys(
          artefacts[`${item.getAttribute("value")}`]["Доп"]
        )) {
          let element = document.createElement("div");
          element.setAttribute("class", "section");
          element.innerHTML = `${iterator}`;

          document.querySelector("#fourDopSlot .values").append(element);
        }
      } else if (item.id == "fiveArt") {
        document.querySelector("#fiveDopSlot .values").innerHTML = "";
        for (const iterator of Object.keys(
          artefacts[`${item.getAttribute("value")}`]["Доп"]
        )) {
          let element = document.createElement("div");
          element.setAttribute("class", "section");
          element.innerHTML = `${iterator}`;

          document.querySelector("#fiveDopSlot .values").append(element);
        }
      } else if (item.id == "sixArt") {
        document.querySelector("#sixDopSlot .values").innerHTML = "";
        for (const iterator of Object.keys(
          artefacts[`${item.getAttribute("value")}`]["Доп"]
        )) {
          let element = document.createElement("div");
          element.setAttribute("class", "section");
          element.innerHTML = `${iterator}`;

          document.querySelector("#sixDopSlot .values").append(element);
        }
      }
    }
  });
}

function categorySelect() {
  document
    .querySelectorAll(".dops .section")
    .forEach((item) => item.removeAttribute("status"));
  document
    .querySelectorAll(".dops .section")
    .forEach((item) => item.removeAttribute("selected"));
  this.setAttribute("status", "active");
  this.setAttribute("selected", "");
}

document
  .querySelectorAll(".dops .section")
  .forEach((item) => item.addEventListener("click", categorySelect));

function dopsSelect() {
  document.querySelectorAll(".values .section").forEach((item) => {
    item.onclick = () => {
      document
        .querySelectorAll(".values .section")
        .forEach((section) => section.removeAttribute("status"));
      item.setAttribute("status", "active");

      let node = item.parentNode.parentNode.children[0].children;

      for (const iterator of node) {
        let value = iterator.hasAttribute("status");
        if (value) {
          iterator.setAttribute("value", `${item.innerHTML}`);
          iterator.innerHTML = item.innerHTML;
        }
      }
      change();
    };
  });
}

function clear() {
  this.parentNode.childNodes[1].innerHTML = "Выберите артефакт";
  this.parentNode.childNodes[3].value = "";
  this.parentNode.childNodes[5].value = "";

  if (this.parentNode.id == "firstArtSlot") {
    document
      .querySelectorAll("#firstDopSlot .dops .section")
      .forEach((item) => item.removeAttribute("value"));
    document
      .querySelectorAll("#firstDopSlot .dops .section")
      .forEach((item) => item.removeAttribute("status"));
    document
      .querySelectorAll("#firstDopSlot .dops .section")
      .forEach((item) => (item.innerHTML = "Доп"));
    document
      .querySelectorAll("#firstDopSlot .values .section")
      .forEach((item) => item.removeAttribute("status"));
  } else if (this.parentNode.id == "secondArtSlot") {
    document
      .querySelectorAll("#secondDopSlot .dops .section")
      .forEach((item) => item.removeAttribute("value"));
    document
      .querySelectorAll("#secondDopSlot .dops .section")
      .forEach((item) => (item.innerHTML = "Доп"));
    document
      .querySelectorAll("#secondDopSlot .dops .section")
      .forEach((item) => item.removeAttribute("status"));
    document
      .querySelectorAll("#secondDopSlot .values .section")
      .forEach((item) => item.removeAttribute("status"));
  } else if (this.parentNode.id == "thirdArtSlot") {
    document
      .querySelectorAll("#thirdDopSlot .dops .section")
      .forEach((item) => item.removeAttribute("value"));
    document
      .querySelectorAll("#thirdDopSlot .dops .section")
      .forEach((item) => (item.innerHTML = "Доп"));
    document
      .querySelectorAll("#thirdDopSlot .dops .section")
      .forEach((item) => item.removeAttribute("status"));
    document
      .querySelectorAll("#thirdDopSlot .values .section")
      .forEach((item) => item.removeAttribute("status"));
  } else if (this.parentNode.id == "fourArtSlot") {
    document
      .querySelectorAll("#fourDopSlot .dops .section")
      .forEach((item) => item.removeAttribute("value"));
    document
      .querySelectorAll("#fourDopSlot .dops .section")
      .forEach((item) => (item.innerHTML = "Доп"));
    document
      .querySelectorAll("#fourDopSlot .dops .section")
      .forEach((item) => item.removeAttribute("status"));
    document
      .querySelectorAll("#fourDopSlot .values .section")
      .forEach((item) => item.removeAttribute("status"));
  } else if (this.parentNode.id == "fiveArtSlot") {
    document
      .querySelectorAll("#fiveDopSlot .dops .section")
      .forEach((item) => item.removeAttribute("value"));
    document
      .querySelectorAll("#fiveDopSlot .dops .section")
      .forEach((item) => (item.innerHTML = "Доп"));
    document
      .querySelectorAll("#fiveDopSlot .dops .section")
      .forEach((item) => item.removeAttribute("status"));
    document
      .querySelectorAll("#fiveDopSlot .values .section")
      .forEach((item) => item.removeAttribute("status"));
  } else if (this.parentNode.id == "sixArtSlot") {
    document
      .querySelectorAll("#sixDopSlot .dops .section")
      .forEach((item) => item.removeAttribute("value"));
    document
      .querySelectorAll("#sixDopSlot .dops .section")
      .forEach((item) => (item.innerHTML = "Доп"));
    document
      .querySelectorAll("#sixDopSlot .dops .section")
      .forEach((item) => item.removeAttribute("status"));
    document
      .querySelectorAll("#sixDopSlot .values .section")
      .forEach((item) => item.removeAttribute("status"));
  }

  this.parentNode.childNodes[1].style.color = "#8aa4ff";

  sborka();
}

export default function colored() {
  document.querySelectorAll(".art-label").forEach((item) => {
    if (item.childNodes[3].value > 101) {
      if (
        item.childNodes[3].value >= 101 &&
        item.childNodes[3].value <= 109.99999
      )
        item.childNodes[1].style.color = "#47c585";
      if (
        item.childNodes[3].value >= 110 &&
        item.childNodes[3].value <= 119.99999
      )
        item.childNodes[1].style.color = "rgb(57 77 214)";
      if (
        item.childNodes[3].value >= 120 &&
        item.childNodes[3].value <= 129.99999
      )
        item.childNodes[1].style.color = "rgb(136 80 226)";
      if (
        item.childNodes[3].value >= 130 &&
        item.childNodes[3].value <= 139.99999
      )
        item.childNodes[1].style.color = "rgb(193 71 71)";
      if (
        item.childNodes[3].value >= 140 &&
        item.childNodes[3].value <= 149.99999
      )
        item.childNodes[1].style.color = "gold";
      if (item.childNodes[3].value >= 170 && item.childNodes[3].value <= 180)
        item.childNodes[1].style.color = "#ef8395";
    } else {
      item.childNodes[1].style.color = "#8aa4ff";
    }
  });
}

document
  .querySelectorAll(".delete")
  .forEach((item) => item.addEventListener("click", clear));

function remove() {
  if (this.hasAttribute("data-firstremove")) {
    this.parentNode.childNodes[1].removeAttribute("value");
    this.parentNode.childNodes[1].innerHTML = "Доп";
    sborka();
  } else if (this.hasAttribute("data-secondremove")) {
    this.parentNode.childNodes[5].removeAttribute("value");
    this.parentNode.childNodes[5].innerHTML = "Доп";
    sborka();
  } else if (this.hasAttribute("data-thirdremove")) {
    this.parentNode.childNodes[9].removeAttribute("value");
    this.parentNode.childNodes[9].innerHTML = "Доп";
    sborka();
  }
}

document
  .querySelectorAll(".remove")
  .forEach((item) => item.addEventListener("click", remove));

function thanks() {
  Swal.fire(`Спасибо:
    
    Fogas
    Dural
    LesnikZony
    `);
}

document.querySelector(".AD").addEventListener("click", thanks);
