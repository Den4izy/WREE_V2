import './Events.css';
import React from 'react';

function Events() {

    function f1() {
        console.log('but work');
    }
    function showInput(event) {
        console.log('input work');
        //console.log(this.value);                 do not work
        console.log(event);                      // виводим івент
        console.log(event.target);                  // target це і є наш елемент
        console.log(event.target.value);             // получаєм свойство value
        console.log(ref.current.style.color);
        ref.current.style.color = 'red'

    }
    let ref = React.createRef();                       // Змінна ref дозволяє звертатися до елемента на пряму. Для цього потрібно добавить ref в параметр елемента, потім командою ref.curent. і дальше доступні всі властивості як в DOM (Працює тільки після визова фуекції яка визивається в блоці return) чого так поки що не розибрався.




    return (
        <div className="events">
            <a href="https://www.itgid.info/unit/reactjs?unit=react-event-function" rel='noreferrer'> <h1 ref={ref}>Events</h1></a>
            <p>Змінна ref дозволяє звертатися до елемента на пряму. Для цього потрібно добавить ref в параметр елемента, потім командою ref.curent. і дальше доступні всі властивості як в DOM (Працює тільки після визова фуекції яка визивається в блоці return) чого так поки що не розибрався.</p>
            <button onClick={f1}>OK</button>
            <br />
            <input type="text" onInput={showInput}></input>
        </div>

    );
}

export default Events;