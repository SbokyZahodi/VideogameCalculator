import sborka, {
    summAll
} from "./calculate.js"
import {
    resultWithArmor
} from "./calculate.js"

import TTK from '/modules/timetokill.js'

import armorObject from '/modules/armor.js'


let blockwithvalues = document.querySelector('blockwithvalues')

function showValues() {
    clear()
    blockwithvalues.style.display = 'grid'
    document.querySelector('.TTK').style.display = 'none'

    for (const key in summAll) {
        if (Object.hasOwnProperty.call(summAll, key)) {
            const element = summAll[key];
            let node = document.createElement('div')
            node.setAttribute('class', 'value')

            if (key == 'Биозаражение' || key == 'Температура' || key == 'Радиация' || key == 'Пси-излучение' || key == 'Кровотечение') {
                if (element > 0) {
                    node.innerHTML = `${key + ': ' + element.toFixed(2)}`
                    node.style.color = 'red'
                    document.querySelector('blockwithvalues .debuff').append(node)
                } else {
                    node.style.color = '#26cd26'
                    node.innerHTML = `${key + ': ' + element.toFixed(2)}`
                    document.querySelector('blockwithvalues .buff').append(node)
                }
            } else {
                if (element >= 0) {
                    node.style.color = '#26cd26'
                    node.innerHTML = `${key + ': ' + element.toFixed(2)}`
                    document.querySelector('blockwithvalues .buff').append(node)
                } else {
                    node.style.color = 'red'
                    node.innerHTML = `${key + ': ' + element.toFixed(2)}`
                    document.querySelector('blockwithvalues .debuff').append(node)
                }
            }


        }
    }


}

document.querySelector('[category="first"]').addEventListener('click', showValues)










function showValuesWithArmor() {

    clear()
    document.querySelector('.TTK').style.display = 'none'
    blockwithvalues.style.display = 'grid'


    let p = document.createElement('p')
    p.innerHTML = 'Без брони'
    let pp = document.createElement('p')
    pp.innerHTML = 'C броней'

    document.querySelector('blockwithvalues .buff').append(p)
    document.querySelector('blockwithvalues .debuff').append(pp)



    let armor = document.querySelector('.armor').innerHTML
    for (const key in resultWithArmor) {
        if (Object.hasOwnProperty.call(resultWithArmor, key)) {
            const element = resultWithArmor[key];
            let node = document.createElement('div')
            node.setAttribute('class', 'value')

            node.innerHTML = `${key + ': ' + element.toFixed(1)}`

            if (key == 'Радиация' || key == 'Биозаражение' || key == 'Температура' || key == 'Пси-излучение' || key == 'Кровотечение') {
                if (element > 0) {

                    node.style.color = 'red'
                } else {
                    node.style.color = '#26cd26'
                }
            } else if (key == 'Пулестойкость') {
                node.style.color = 'gold'
            } else {
                if (element > 0) {
                    node.style.color = '#26cd26'
                } else {
                    node.style.color = 'red'
                }
            }





            document.querySelector('blockwithvalues .debuff').append(node)



        }
    }

    for (const key in armorObject[armor]) {
        if (Object.hasOwnProperty.call(armorObject[armor], key)) {
            const element = armorObject[armor][key];
            let node = document.createElement('div')
            node.setAttribute('class', 'value')

            node.innerHTML = `${key + ': ' + element.toFixed(1)}`



            if (key == 'Радиация' || key == 'Биозаражение' || key == 'Температура' || key == 'Пси-излучение' || key == 'Кровотечение') {
                if (element > 0) {
                    node.style.color = 'red'
                } else {
                    node.style.color = '#26cd26'
                }

            } else if (key == 'Пулестойкость') {
                node.style.color = 'gold'
            } else {
                if (element > 0) {
                    node.style.color = '#26cd26'
                } else {
                    node.style.color = 'red'
                }
            }




            document.querySelector('blockwithvalues .buff').append(node)



        }
    }









}

document.querySelector('[category="second"]').addEventListener('click', showValuesWithArmor)




function timeToKill() {

    blockwithvalues.style.display = 'none'
    document.querySelector('.TTK').style.display = 'block'
    TTK()


}

document.querySelector('[category="third"]').addEventListener('click', timeToKill)



















function clear() {
    document.querySelector('.buff').innerHTML = ''
    document.querySelector('.debuff').innerHTML = ''
}





function setCategory() {
    this.parentNode.childNodes[1].removeAttribute('selected')
    this.parentNode.childNodes[3].removeAttribute('selected')
    this.parentNode.childNodes[5].removeAttribute('selected')

    this.setAttribute('selected', '')





}

document.querySelectorAll('.category').forEach((item) => item.addEventListener('click', setCategory))


export default function call() {
    if (document.querySelector('[category="first"]').hasAttribute('selected')) {
        showValues()
    }

    if (document.querySelector('[category="second"]').hasAttribute('selected')) {
        showValuesWithArmor()
    }

    if (document.querySelector('[category="third"]').hasAttribute('selected')) {
        timeToKill()
    }


}