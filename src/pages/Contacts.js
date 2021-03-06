import React from "react";
import '../sass/index.css'

function Contacts() {
    return(
        <div className="wrapper container-fluid">
            <div className="row mainPart">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h3 id="1">Служби аеропорту</h3>
                            <p>
                                Довідка: +38 (032) 229 81 12
                                <br/>Приймальня аеропорту: +38 (032) 229 82 16, info@airport.lviv.ua
                                <br/>Каса аеропорту: +38 (032) 229 80 73, ticket@airport.lviv.ua
                                <br/>Комерційний відділ (маркетинг, оренда, реклама):+38 (032) 229 81 72,vrasyak@lwo.aero
                                <br/>Менеджер з маркетингу: +38 (032) 229 82 37
                                <br/>Менеджер із зв`язків з громадськістю: +38 (032) 229 82 65
                                <br/>Служба авіаційної безпеки: +38 (032) 229 80 55
                                <br/>Вантажні послуги: +38 (032) 229 86 37
                                <br/>Медичний пункт: +38 (032) 229 83 03
                                <br/>Бізнес-зал: +38 (032) 229 80 21, 229 83 58.
                                <br/>Служба розшуку багажу (Lost & Found): +38 (032)229 83 19
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3 id="2">Допоміжні служби</h3>
                            <p>
                                Митний пост «Львів-аеропорт»: +38 (032) 229-82-88, «гаряча лінія»: +38 (044) 247-27-19
                                <br/>Відділ прикордонної служби «Львів-аеропорт»: +38 (032) 229-83-71, «гаряча лінія»: +38 (044) 527-63-63
                                <br/>Пункт ветеринарно-санітарного контролю: +38 (032) 229-83-61
                                <br/>Відділ Санітарної охорони території України в аеропорту: +38 (032) 229-84-95
                                <br/>Центр туристичної інформації: +38 (067) 673-91-94
                                <br/>Лінійне відділення міліції в аеропорту «Львів»: +38(032) 262-19-80
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts