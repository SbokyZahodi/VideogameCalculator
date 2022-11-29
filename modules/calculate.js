import artefacts from "/modules/artefacts.js";
import armor from "/modules/armor.js";
import containers from "/modules/containers.js";
import call from "/modules/value.js";
import colored from "../new.js";

document.querySelector("body").addEventListener("change", sborka);

export default function sborka() {
  let sborkaObject = [
    {
      name: document.querySelector("#firstArtSlot .art").innerHTML,
      value:
        artefacts[`${document.querySelector("#firstArtSlot .art").innerHTML}`],
      lvl: document.querySelector("#firstArtSlot .lvl").value,
      quality: document.querySelector("#firstArtSlot .quality").value,
      firstDop: document
        .querySelector("#firstDopSlot .dops")
        .childNodes[1].getAttribute("value"),
      secondDop: document
        .querySelector("#firstDopSlot .dops")
        .childNodes[5].getAttribute("value"),
      thirdDop: document
        .querySelector("#firstDopSlot .dops")
        .childNodes[9].getAttribute("value"),
    },
    {
      name: document.querySelector("#secondArtSlot .art").innerHTML,
      value:
        artefacts[`${document.querySelector("#secondArtSlot .art").innerHTML}`],
      lvl: document.querySelector("#secondArtSlot .lvl").value,
      quality: document.querySelector("#secondArtSlot .quality").value,
      firstDop: document
        .querySelector("#secondDopSlot .dops")
        .childNodes[1].getAttribute("value"),
      secondDop: document
        .querySelector("#secondDopSlot .dops")
        .childNodes[5].getAttribute("value"),
      thirdDop: document
        .querySelector("#secondDopSlot .dops")
        .childNodes[9].getAttribute("value"),
    },
    {
      name: document.querySelector("#thirdArtSlot .art").innerHTML,
      value:
        artefacts[`${document.querySelector("#thirdArtSlot .art").innerHTML}`],
      lvl: document.querySelector("#thirdArtSlot .lvl").value,
      quality: document.querySelector("#thirdArtSlot .quality").value,
      firstDop: document
        .querySelector("#thirdDopSlot .dops")
        .childNodes[1].getAttribute("value"),
      secondDop: document
        .querySelector("#thirdDopSlot .dops")
        .childNodes[5].getAttribute("value"),
      thirdDop: document
        .querySelector("#thirdDopSlot .dops")
        .childNodes[9].getAttribute("value"),
    },
    {
      name: document.querySelector("#fourArtSlot .art").innerHTML,
      value:
        artefacts[`${document.querySelector("#fourArtSlot .art").innerHTML}`],
      lvl: document.querySelector("#fourArtSlot .lvl").value,
      quality: document.querySelector("#fourArtSlot .quality").value,
      firstDop: document
        .querySelector("#fourDopSlot .dops")
        .childNodes[1].getAttribute("value"),
      secondDop: document
        .querySelector("#fourDopSlot .dops")
        .childNodes[5].getAttribute("value"),
      thirdDop: document
        .querySelector("#fourDopSlot .dops")
        .childNodes[9].getAttribute("value"),
    },
    {
      name: document.querySelector("#fiveArtSlot .art").innerHTML,
      value:
        artefacts[`${document.querySelector("#fiveArtSlot .art").innerHTML}`],
      lvl: document.querySelector("#fiveArtSlot .lvl").value,
      quality: document.querySelector("#fiveArtSlot .quality").value,
      firstDop: document
        .querySelector("#fiveDopSlot .dops")
        .childNodes[1].getAttribute("value"),
      secondDop: document
        .querySelector("#fiveDopSlot .dops")
        .childNodes[5].getAttribute("value"),
      thirdDop: document
        .querySelector("#fiveDopSlot .dops")
        .childNodes[9].getAttribute("value"),
    },
    {
      name: document.querySelector("#sixArtSlot .art").innerHTML,
      value:
        artefacts[`${document.querySelector("#sixArtSlot .art").innerHTML}`],
      lvl: document.querySelector("#sixArtSlot .lvl").value,
      quality: document.querySelector("#sixArtSlot .quality").value,
      firstDop: document
        .querySelector("#sixDopSlot .dops")
        .childNodes[1].getAttribute("value"),
      secondDop: document
        .querySelector("#sixDopSlot .dops")
        .childNodes[5].getAttribute("value"),
      thirdDop: document
        .querySelector("#sixDopSlot .dops")
        .childNodes[9].getAttribute("value"),
    },
  ];

  pushArts(sborkaObject);
  pushDops(sborkaObject);
  call();
  colored();
}

let result = [];
export let summAll = [];
export let resultWithArmor = [];
export let container = [];

function pushArts(sborkaObject) {
  result = [];

  for (const iterator of sborkaObject) {
    let value = iterator.value;
    let name = iterator.name;
    let quality = iterator.quality;
    let lvl = iterator.lvl;

    let rare;
    if (quality >= 100 && quality <= 109.999999) rare = 0;
    else if (quality >= 110 && quality <= 119.9999) rare = 1;
    else if (quality >= 120 && quality <= 129.9999) rare = 2;
    else if (quality >= 130 && quality <= 139.9999) rare = 3;
    else if (quality >= 140 && quality <= 149.9999) rare = 4;

    // result.push({
    //     [key]: max
    // })

    if (name != "Выберите артефакт") {
      for (const key in value) {
        const element = value[key];
        let max = element.max;
        let min = element.min;

        if (key != "Доп") {
          if (quality <= 100) {
            if (lvl > 0) {
              if (max > 0) {
                if (
                  key != "Радиация" &&
                  key != "Пси-излучение" &&
                  key != "Биозаражение" &&
                  key != "Кровотечение" &&
                  key != "Температура"
                ) {
                  result.push({
                    [key]:
                      min +
                      ((max - min) / 100) * quality +
                      ((min + ((max - min) / 100) * quality) / 100) * (lvl * 2),
                  });
                } else {
                  result.push({
                    [key]: min + ((max - min) / 100) * quality,
                  });
                }
              } else {
                if (
                  key != "Радиация" &&
                  key != "Пси-излучение" &&
                  key != "Биозаражение" &&
                  key != "Кровотечение" &&
                  key != "Температура"
                ) {
                  result.push({
                    [key]: min + ((max - min) / 100) * quality,
                  });
                } else {
                  result.push({
                    [key]:
                      min +
                      ((max - min) / 100) * quality +
                      ((min + ((max - min) / 100) * quality) / 100) * (lvl * 2),
                  });
                }
              }
            } else {
              result.push({
                [key]: min + ((max - min) / 100) * quality,
              });
            }
          } else {
            let mind = max * 0.9;
            let buff = max + (max / 100) * (quality - 100);

            if (lvl > 0) {
              if (max > 0) {
                if (
                  key != "Радиация" &&
                  key != "Пси-излучение" &&
                  key != "Биозаражение" &&
                  key != "Кровотечение" &&
                  key != "Температура"
                ) {
                  result.push({
                    [key]: buff + (buff / 100) * (lvl * 2),
                  });
                } else {
                  result.push({
                    [key]:
                      mind +
                      ((max - mind) / 100) *
                        ((quality - (100 + 10 * rare)) * 10),
                  });
                }
              } else {
                if (
                  key != "Радиация" &&
                  key != "Пси-излучение" &&
                  key != "Биозаражение" &&
                  key != "Кровотечение" &&
                  key != "Температура"
                ) {
                  result.push({
                    [key]:
                      mind +
                      ((max - mind) / 100) *
                        ((quality - (100 + 10 * rare)) * 10),
                  });
                } else {
                  result.push({
                    [key]: buff + (buff / 100) * (lvl * 2),
                  });
                }
              }
            } else {
              if (max > 0) {
                if (
                  key != "Радиация" &&
                  key != "Пси-излучение" &&
                  key != "Биозаражение" &&
                  key != "Кровотечение" &&
                  key != "Температура"
                ) {
                  result.push({
                    [key]: max + (max / 100) * (quality - 100),
                  });
                } else {
                  result.push({
                    [key]:
                      mind +
                      ((max - mind) / 100) *
                        ((quality - (100 + 10 * rare)) * 10),
                  });
                }
              } else {
                if (
                  key != "Радиация" &&
                  key != "Пси-излучение" &&
                  key != "Биозаражение" &&
                  key != "Кровотечение" &&
                  key != "Температура"
                ) {
                  result.push({
                    [key]:
                      mind +
                      ((max - mind) / 100) *
                        ((quality - (100 + 10 * rare)) * 10),
                  });
                } else {
                  result.push({
                    [key]: max + (max / 100) * (quality - 100),
                  });
                }
              }
            }
          }
        }
      }
    }
  }

  summall(result);
}

function pushDops(sborkaObject) {
  for (const iterator of sborkaObject) {
    if (iterator.name != "Выберите артефакт") {
      if (iterator.firstDop != null) {
        appendIterator(artefacts[iterator.name]["Доп"], iterator.firstDop);
      }
      if (
        iterator.secondDop != null &&
        iterator.secondDop != iterator.firstDop
      ) {
        appendIterator(artefacts[iterator.name]["Доп"], iterator.secondDop);
      }
      if (
        iterator.thirdDop != null &&
        iterator.thirdDop != iterator.secondDop
      ) {
        appendIterator(artefacts[iterator.name]["Доп"], iterator.thirdDop);
      }
    }

    function appendIterator(dopObject, value) {
      for (const key in dopObject) {
        if (Object.hasOwnProperty.call(dopObject, key)) {
          const element = dopObject[key];
          let mindop = element.min;
          let maxdop = element.max;
          let lvl = iterator.lvl;

          if (key == value) {
            if (iterator.quality <= 100) {
              let buff = mindop + ((maxdop - mindop) / 100) * iterator.quality;
              if (lvl <= 0) {
                result.push({
                  [key]: buff,
                });
              } else {
                result.push({
                  [key]: buff + (buff / 100) * (lvl * 2),
                });
              }
            } else {
              let buff = maxdop + (maxdop / 100) * (iterator.quality - 100);
              if (lvl <= 0) {
                result.push({
                  [key]: buff,
                });
              } else {
                result.push({
                  [key]: buff + (buff / 100) * (lvl * 2),
                });
              }
            }
          }
        }
      }
    }
  }

  summall(result);

  protection(result);
}

function pushArmor() {
  if (document.querySelector(".armor").innerHTML != "Выберите броню") {
    let name = document.querySelector(".armor").innerHTML;
    let lvl = document.querySelector(".label input").value;
    let value;

    if (lvl == 0) {
      value = 0;
    }
    if (lvl == 1) {
      value = 1.83;
    }
    if (lvl == 2) {
      value = 3.65;
    }
    if (lvl == 3) {
      value = 5.49;
    }
    if (lvl == 4) {
      value = 7.31;
    }
    if (lvl == 5) {
      value = 12.8;
    }
    if (lvl == 6) {
      value = 15.54;
    }
    if (lvl == 7) {
      value = 18.29;
    }
    if (lvl == 8) {
      value = 21.03;
    }
    if (lvl == 9) {
      value = 23.78;
    }
    if (lvl == 10) {
      value = 31.83;
    }
    if (lvl == 11) {
      value = 35.85;
    }
    if (lvl == 12) {
      value = 39.88;
    }
    if (lvl == 13) {
      value = 43.9;
    }
    if (lvl == 14) {
      value = 47.92;
    }
    if (lvl == 15) {
      value = 60;
    }

    for (const key in armor[name]) {
      let element = armor[name][key];

      if (
        key == "Защита от разрыва" ||
        key == "Защита от взрыва" ||
        key == "Защита от хим.ожога" ||
        key == "Защита от электричества" ||
        key == "Защита от ожога" ||
        key == "Пулестойкость"
      ) {
        resultWithArmor.push({
          [key]: (element / 100) * (value + 100),
        });
      } else {
        resultWithArmor.push({
          [key]: element,
        });
      }
    }
  }
}

function pushContainer() {
  if (document.querySelector(".container") != "Выберите контейнер") {
    let name = document.querySelector(".container").innerHTML;

    for (const key in containers[name]) {
      if (Object.hasOwnProperty.call(containers[name], key)) {
        const element = containers[name][key];

        if (key != "Внутренняя защита") {
          container.push({
            [key]: element,
          });

          // resultWithArmor.push({
          //     [key]: element
          // })
        }
      }
    }
    containerTranform(container);

    summ(summAll, container);
  }
}

function protection(result) {
  if (document.querySelector(".container").innerHTML != "Выберите контейнер") {
    let name = document.querySelector(".container").innerHTML;
    let protection = containers[name]["Внутренняя защита"];

    for (const key in summAll) {
      if (Object.hasOwnProperty.call(summAll, key)) {
        const element = summAll[key];

        if (
          key == "Радиация" ||
          key == "Температура" ||
          key == "Биозаражение" ||
          key == "Пси-излучение"
        ) {
          if (summAll[key] > 0) {
            summAll[key] = (summAll[key] / 100) * (100 - protection);
          }
        }
      }
    }
  }

  pushArmor();

  pushContainer();

  summAllWithArmor(resultWithArmor);

  summArmor(summAll, resultWithArmor);
}

function summall(object) {
  summAll = [];

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];

      const sumValueByKey = (...rest) =>
        rest.reduce((result, current) => {
          for (let key in current) {
            let value = current[key];

            if (result[key] === undefined) {
              result[key] = +value;
            } else {
              result[key] += +value;
            }
          }

          return result;
        }, summAll);

      sumValueByKey(element);
    }
  }
}

function summAllWithArmor(object) {
  resultWithArmor = [];

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];

      const sumValueByKey = (...rest) =>
        rest.reduce((result, current) => {
          for (let key in current) {
            let value = current[key];

            if (result[key] === undefined) {
              result[key] = +value;
            } else {
              result[key] += +value;
            }
          }

          return result;
        }, resultWithArmor);

      sumValueByKey(element);
    }
  }
}

function summ(firstObject, secondObject) {
  summAll = [];
  container = [];

  const sumValueByKey = (...rest) =>
    rest.reduce((result, current) => {
      for (let key in current) {
        let value = current[key];

        if (result[key] === undefined) {
          result[key] = +value;
        } else {
          result[key] += +value;
        }
      }

      return result;
    }, summAll);

  sumValueByKey(firstObject, secondObject);
}

function summArmor(firstObject, secondObject) {
  resultWithArmor = [];

  const sumValueByKey = (...rest) =>
    rest.reduce((result, current) => {
      for (let key in current) {
        let value = current[key];

        if (result[key] === undefined) {
          result[key] = +value;
        } else {
          result[key] += +value;
        }
      }

      return result;
    }, resultWithArmor);

  sumValueByKey(firstObject, secondObject);
}

function containerTranform(object) {
  container = [];

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];

      const sumValueByKey = (...rest) =>
        rest.reduce((result, current) => {
          for (let key in current) {
            let value = current[key];

            if (result[key] === undefined) {
              result[key] = +value;
            } else {
              result[key] += +value;
            }
          }

          return result;
        }, container);

      sumValueByKey(element);
    }
  }
}
