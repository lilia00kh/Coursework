import React from "react";
import '../sass/index.css'
import VIP from "./VIP";
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import Transport from "./Transport";
import Information from "./Information";

function Services() {
return(
    <Router>
    <div className="row container">
        <div className="row mainPart">
            <div className="col">
                <div className="row">
                    <ul>
                        <li>
                            <Link to={"/services/vip"}>VIP</Link>
                        </li>
                        <li>
                            <Link to={"/services/transport"}>Транспорт</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/services/vip" component = {VIP}/>
                        <Route path="/services/transport" exact component = {Transport}/>
                        <Route path="/services/information" component = {Information}/>
                    </Switch>

                </div>
                <div className="row">
                    <div className="col">
                        <h3 id="1">Сервіс аеропорта</h3>
                        <h4>Авіакаси</h4>
                        <div className="row">
                            <div className="col">
                                <p>
                                    Для зручності пасажирів в терміналі D Міжнародного аеропорту розташовані каси продажу авіаквитків. Будь ласка, купуйте квитки в авіакасах самостійно і не користуйтеся послугами сторонніх осіб!
                                </p>
                            </div>
                        </div>
                        <h4>Банки та банкомати</h4>
                        <div className="row">
                            <div className="col">
                                <p>
                                    На першому поверсі в загальнодоступній зоні терміналу А розташовані банкомати
                                    наступних банків: «Південний», «ПУМБ», «Райффайзен Банк Аваль», а також банкомат
                                    міжнародної мережі Euronet. Зверніть увагу, банкомати в Україні видають гроші тільки
                                    в національній валюті - гривні. У разі, якщо Ваша карта номінована в іншій валюті,
                                    при видачі коштів буде проведена конвертації відповідно до тарифів Вашого банку.
                                    Банкомати працюють в цілодобовому режимі.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 id="2">Їжа і магазини</h3>
                        <h4>Ресторан "Політ"</h4>
                        <div className="row">
                            <div className="col">
                                <p>
                                    Аеропорт розробив вишукане меню, що складається зі страв української та європейської
                                    кухні, щоб порадувати своїх пасажирів і гостей в ресторані «Політ». Він розташований
                                    в будинку-пам'ятці архітектури VIP-терміналу, відкритому в 1955 році. Ми відтворили
                                    унікальний інтер'єр, завдяки чому Ви зможете зануритися в історичну атмосферу 1950-х
                                    років.
                                    <br/>
                                    Ресторан «Політ» працює цілодобово, тому Ви зможете оцінити наші страви
                                    незалежно від часу вильоту літака. У ресторані розміщені інформаційні монітори,
                                    завдяки яким Ви завжди будете в курсі статусу свого рейсу.
                                    <br/>
                                    Нашим гостям ми також надаємо можливість розмістити свій автомобіль
                                    безкоштовно на стоянці VIP-терміналу.
                                </p>
                            </div>
                            <div className="col">
                                <img src={require("../images/rest.jpg")} style={{width: "400px", height: "300px"}}/>
                            </div>
                        </div>
                        <h4>Duty free</h4>
                        <div className="row">
                            <div className="col">
                                <p>
                                    В аеропорту магазин безмитної торгівлі Pavo Duty Free розташований у залі відльоту
                                    міжнародних рейсів в терміналі А. Зробити покупки Ви зможете після проходження
                                    предполітних формальностей. Також можна замовити товари duty free при вильоті з VIP
                                    терміналу.
                                    <br/>
                                    Магазин пропонує широкий асортимент наступних товарів відомих світових і
                                    українських брендів:
                                </p>
                                <ul className="ul">
                                    <li>спиртні напої</li>
                                    <li>продукти харчування,в тому числі ікру, кондитерські вироби, мед</li>
                                    <li>парфумерія і косметика</li>
                                    <li>аксесуари</li>
                                    <li>іграшки</li>
                                </ul>
                            </div>
                            <div className="col">
                                <p>
                                    У магазині Duty Free представлений широкий асортимент продуктів і товарів світових і
                                    українських брендів
                                </p>
                                <img src={require("../images/free.jpg")} style={{width: "400px", height: "300px"}}/>
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

export default Services