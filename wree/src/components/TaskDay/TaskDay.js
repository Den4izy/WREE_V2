import './TaskDay.css';
import React from 'react';



function TaskDay() {

    let ref = React.createRef;

    function fun1(event) {
        // якща галочка активна...
        // if (this.checked) {
        //     console.log('chek');
        // }
        console.log(ref);

        console.log("okay");

    }

    const getAnimalsContent = taskDay => {

        let content = [];
        for (let i = 0; i < taskDay.length; i++) {
            let name = i;
            const item = taskDay[i];
            content[i] = <li key={name} id={'list' + i} ref={ref}><input type="checkbox" id={'check' + i} onClick={fun1} />  {item}  </li>;

        }
        console.log(ref);
        // let docList = document.getElementById('list1');
        // docList.style.color = 'red';
        // console.log(docList);
        return content;
    };
    return (

        <div className="TaskDay" id="er">

            <ul>{getAnimalsContent(taskDay)}</ul>;

        </div>
    );
}


let docList = document.getElementById('list3');
console.log(docList);
//let docList2 = document.getElementById('list1');
//docList2.style.color = 'red';


// function showTask() {
//     //let list = '';
//     let arr = [''];
//     for (let i = 0; i < taskDay.length; i++) {

//         arr[i] = '<li>' + taskDay[i] + '</li>';
//     }


//     return arr;


// }

let taskDay = [                               // массив завдань на день
    'Підготувати та здати рапорта НЗС ТпТЕС та НЗС ЦЕ',
    'Узгодити стан та склад обладнання та відправити керівництву',
    'Звірити АСКОЕ з план-фактом за попередню добу',
    'По команді НЗС ЦЕ підготувати та завантажити заявку РДН',
    'Підготувати та розіслати звіти РДН. Заповнити файл РДН 2021',
    'Отримати графік виробництва та надіслати його керівництву',
    'Звіт небаланси на наступну добу',
    'Формування та завантаження ставок БР',
    'Роздрукувати графік та бланки для наступної зміни',
    'Перевірити торги РДД на енергетичній біржі',
    'Пояснення небалансів з підписом НЗС ТпТЕС',
    'Відправити план-факт за робочу зміну',
    'Здати зміну'
];

// var taskNight = [                             // массив завдань на ніч
//     'Підготувати та здати рапорта НЗС ТпТЕС та НЗС ЦЕ',
//     'Доповідь БР',
//     'Звіт розвантаження',
//     'План-факт Гаркавому Є.А. та Двірному О.В.',
//     'Звіт небаланси за попередню добу',
//     'Внести дані у план-факт',
//     'Звіт Простій блоків по команді',
//     'Звіт Робота ТЕС та останній графік',
//     'Звіт Звірка АСКОЄ',
//     'План-факт інспекторам',
//     'План-факт Гаркавому Є.А.',
//     'Пояснення небалансів з підписом НЗС ТпТЕС'
// ];




export default TaskDay;