import React from 'react';

const Chuy = () => {
    return (
        <div className="card">
            <h4>Чуйская область</h4>
            <h6>Географическая характеристика Чуйская область</h6>
            <p>Чуйская область занимает северную часть Кыргызской Республики. Граничит на севере и западе с Республикой Казахстан, на юго-западе - Таласской, Джалал-Абадской, на юге - Нарынской, на юго-востоке - Иссык-Кульской областями Кыргызской Республики. Общая площадь области составляет 11,4 тыс. кв. км.</p>
            <p>Областной центр – г. Бишкек. Общая площадь области составляет 20,2 тыс. кв. км.</p>
            <h6>Административно-территориальное устройство</h6>
            <ol className="district">
                В состав области входят 8 районов:
                <li>Панфиловский район - город Каинды</li>
                <li>Жайылский район (бывш. Калининский) - город Кара-Балта</li>
                <li>Московский район - село Беловодское</li>
                <li>Сокулукский район - село Сокулук.</li>
                <li>Аламудунский район - село Лебединовка</li>
                <li>Чуйский район - город Токмак</li>
                <li>Ысык-Атинский район - город Кант</li>
                <li>Кеминский район - г. Кемин</li>
            </ol>
        </div>
    );
};

export default Chuy;