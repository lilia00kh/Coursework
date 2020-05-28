import React from "react";
import '../sass/index.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function Transport() {
    return(
        <Router>
            <div className="row container trans">
                <div className="row mainPart">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <h3 id="3">Транспорт</h3>
                                <h4>Оренда авто</h4>
                                <div className="row">
                                    <div className="col">
                                        <p>
                                            Ви можете скористатися послугою оренди автомобіля в аеропорту «Харків». Пункт оренди
                                            знаходиться на першому поверсі терміналу А навпроти зони реєстрації.
                                            <br/>
                                            Більш широкий вибір автомобілів доступний при попередньому бронюванні. Для
                                            цього скористайтеся контактами служб з бронювання автомобілів, які вказані
                                            нижче:
                                            аеропорт Львів
                                            <br/>
                                            вул. Ромашкіна, 1, Термінал А.
                                            <br/>
                                            Час роботи: понеділок-п'ятниця 09: 00-18: 00
                                            <br/>
                                            телефони:
                                            <br/>
                                            <a href=""> +38 057 781 00 06</a>
                                            <br/>
                                            <a href="">+38 094 977 30 06</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>

    )
}

export default Transport