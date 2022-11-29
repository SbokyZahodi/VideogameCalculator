function armorBlock() {
  document.querySelector("#armorBlock").style.display = "block";
}

document.querySelector(".armor").addEventListener("click", armorBlock);

function containerBlock() {
  document.querySelector("#containerBlock").style.display = "block";
}

document.querySelector(".container").addEventListener("click", containerBlock);

function artBlocks() {
  if (this.parentNode.id == "firstArtSlot") {
    document.querySelector("#firstArt").style.display = "block";
  } else if (this.parentNode.id == "secondArtSlot") {
    document.querySelector("#secondArt").style.display = "block";
  } else if (this.parentNode.id == "thirdArtSlot") {
    document.querySelector("#thirdArt").style.display = "block";
  } else if (this.parentNode.id == "fourArtSlot") {
    document.querySelector("#fourArt").style.display = "block";
  } else if (this.parentNode.id == "fiveArtSlot") {
    document.querySelector("#fiveArt").style.display = "block";
  } else if (this.parentNode.id == "sixArtSlot") {
    document.querySelector("#sixArt").style.display = "block";
  }
}

document
  .querySelectorAll(".art-label .art")
  .forEach((item) => item.addEventListener("click", artBlocks));

function dopBlocks() {
  if (this.parentNode.id == "firstArtSlot") {
    document.querySelector("#firstDopSlot").style.display = "block";
  } else if (this.parentNode.id == "secondArtSlot") {
    document.querySelector("#secondDopSlot").style.display = "block";
  } else if (this.parentNode.id == "thirdArtSlot") {
    document.querySelector("#thirdDopSlot").style.display = "block";
  } else if (this.parentNode.id == "fourArtSlot") {
    document.querySelector("#fourDopSlot").style.display = "block";
  } else if (this.parentNode.id == "fiveArtSlot") {
    document.querySelector("#fiveDopSlot").style.display = "block";
  } else if (this.parentNode.id == "sixArtSlot") {
    document.querySelector("#sixDopSlot").style.display = "block";
  }
}

document
  .querySelectorAll(".art-label .dop")
  .forEach((item) => item.addEventListener("click", dopBlocks));

function hide() {
  element = this.parentNode;
  element.style.display = "none";
}

document.querySelectorAll(".close").forEach((item) => {
  item.addEventListener("click", hide);
});
