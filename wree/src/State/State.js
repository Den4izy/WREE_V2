import './State.css';
import React from 'react';

class State1 extends React.Component {               //Для створення State потрібно створити клас з відповідним спадкуванням

    constructor() {                                 //Створюєм конструктор
        super();                                    //Створюємо state
        this.state = {
            comment: []
        }
        this.ref = React.createRef();               //в конструкторі прописуємо рефи для роботи з обектами
    }

    handler = () => {                               //ф - я собитія
        let val = this.ref.current.value;           //беремо значення з текстового поля
        let comments = this.state.comment;          //присаюємо значення із стейта
        comments.push(val);                         //добавляємо в масів
        this.setState({                             //змінюємо стейт
            comment: comments
        })

        this.ref.current.value = '';                //обнуляєм текстове поле
    }

    render() {                                       //Створюємо render який перемальовує данній компонент
        return (                                     //Всередині нього повинен бути return в якому і малюється компонент
            < div className="state" >
                <h1>State</h1>

                <p>State потрібен для того щоб при зміні данних в компоненті їх автоматично виводило</p>
                <p>Спосіб ООП</p>
                <div>
                    <input type="text" ref={this.ref} />
                </div>
                <div>
                    {<button onClick={this.handler}>Add</button>     /* на кнопу вішаємо со */}
                </div>
                <div>
                    <ul>
                        {this.state.comment.map((item, index) => <li key={index.toString()}>{item}</li>)}
                    </ul>
                </div>
            </div >
        );
    }


}



export default State1;