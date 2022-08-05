import {
    summAll
} from "./calculate.js";
import {
    resultWithArmor
} from "./calculate.js";




export default function TTK(params) {

    let py = 0;
    let hp = 0;

    if ('Живучесть' in resultWithArmor) {
        py = resultWithArmor['Пулестойкость']
        hp = resultWithArmor['Живучесть']
    } else {
        py = resultWithArmor['Пулестойкость']
    }


    let бронебойность = document.querySelector('[name="бронебойность"]').value
    let урон = document.querySelector('[name="урон"]').value
    let скорострельность = document.querySelector('[name="скорострельность"]').value
    // let модификатор = document.querySelector('[name="модификатор"]').value
    // let снайперка = document.querySelector('[name="снайперка"]').value
    // let заточка = document.querySelector('[name="заточка"]').value
    // let уронВголову = урон * модификатор


    let приведенка = ((100 + py) / 100 * (100 + hp)) 
    let приведенкаСбронебойностью = ( 100 + (py - py/100*бронебойность)) / 100 * (100 + hp)
    let округл = Math.floor(приведенкаСбронебойностью / урон)
    let времяМеждуВыстрелами = 1 / (скорострельность / 60)


    








    if (бронебойность == 0) {
        document.querySelector('privedenkanumber').innerHTML = приведенка.toFixed()
    } else {
        document.querySelector('privedenkanumber').innerHTML = приведенкаСбронебойностью.toFixed()
    }

    
    document.querySelector('.damageToBody').innerHTML = 
    `
    <p>Тело</p>

    <div class="damageToBodylabel">Приведенка в тело = ${приведенкаСбронебойностью.toFixed()}</div>
    <div class="damageToBodylabel">Количество попаданий = ${(приведенкаСбронебойностью / урон).toFixed()}</div>
    <div class="damageToBodylabel">ТТК = ${(округл * времяМеждуВыстрелами).toFixed(1)} сек</div>
    `

    // document.querySelector('.damageToHead').innerHTML = 
    // `
    // <p>Голова</p>

    
    // <div class="damageToBodylabel">Количество попаданий = ${(приведенкаСбронебойностью / уронВголову).toFixed()}</div>
    // <div class="damageToBodylabel">ТТК = ${(округл * времяМеждуВыстрелами).toFixed(1)} сек</div>

    // `











};