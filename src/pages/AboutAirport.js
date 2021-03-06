import React from "react";
import '../sass/index.css'
//import {Link} from "react-router-dom";
import HorizontalLabelPositionBelowStepper from "../Todo/HorizontalLabelPositionBelowStepper";
import { HashLink as Link } from 'react-router-hash-link';

function AboutAirport(props) {
    return(
        <div>
            <div className="row" >
                <div className="col">
                    <h3 id="1" >Загальна інформація</h3>
                    <p>
                        Міжнародний аеропорт «Львів» імені Данила Галицького — найбільше летовище у Західній Україні за
                        пасажиропотоком та маршрутною мережею, розташоване на відстані 6 км від центру міста на південь.
                        Маршрутна мережа Аеропорту складається з 50 напрямків (47 міжнародних та 3 внутрішні).
                        Новий аеровокзальний комплекс
                        До чемпіонату Євро-2012 на території аеропорту було зведено з використанням останніх досягнень
                        авіаційної галузі новий аеровокзальний комплекс, який відповідає сучасним технологіям
                        обслуговування пасажирів та багажу, а також міжнародним архітектурним та технічним стандартам і
                        вимогам ICAO (Міжнародна організація цивільної авіації) та IATA (Міжнародна Асоціація
                        повітряного транспорту).
                        Новий аеровокзальний комплекс було введено в експлуатацію 12 квітня 2012 року. Новий термінал
                        «А» загальною площею 39 тис. кв.м містить 9 виходів на посадку, з них 4 - телетрапи, 28 стійок
                        реєстрації, 18 пунктів проходження паспортного контролю та 12 пунктів проходження на авіаційну
                        безпеку.

                        Новий аеровокзал було збудовано з урахуванням потреб людей з обмеженими фізичними можливостями.
                        Відтак усі зони та приміщення терміналу обладнані таким чином, щоб забезпечити комфортне
                        пересування та обслуговування неповносправних пасажирів.

                        В новому терміналі передбачені VIP-зали для пасажирів внутрішніх та міжнародних рейсів, а також
                        сучасний Duty Free.

                        Прилегла до нового аеровокзалу територія містить два паркінги, які розраховані на 623
                        паркомісця.
                    </p>
                </div>
            </div>
            <div className="row" style={{padding:'10px'}}>
                    <h3 id="2"> Як добратися</h3>
                    <p>Міжнародний аеропорт «Львів» ім. Данила Галицького знаходиться у південно-західній частині міста
                        та має зручне розташування щодо основних інфраструктурних об’єктів:
                        <ul>
                            <li>Центр міста – 15 км, приблизно 17 хв. на автомобілі;</li>
                            <li>Головний Залізничний вокзал – 5,6 км, приблизно 12 хв. на автомобілі;</li>
                            <li>Автовокзал «Львів» (вул. Стрийська, 109) – 5,5 км, приблизно 10 хв. на автомобілі.</li>
                        </ul>
                    </p>
                    <h3 id="3">Карта</h3>
                    <br/>
                    <img src={require('../images/map.png')} style={{ width:800,height:400,margin:20}}>
                    </img>
            </div>
        </div>
    )
}

export default AboutAirport