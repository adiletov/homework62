import React from 'react';

const Naryn = () => {
    return (
        <div className="card">
            <h4>Нарынская область</h4>
            <h6>Географическая характеристика Нарынская область</h6>
            <p>Нарынская область (кирг. Нарын облусу) находится в центральной части Кыргызстана.
                Занимает долины и склоны гор Внутреннего Тянь-Шаня и является самым крупным регионом в стране.
                Общая площадь области составляет 45,2 тыс.кв.км.</p>
            <p>Областной центр – г.Нарын.</p>
            <h6>Административно-территориальное устройство</h6>
            <ol className="district">
                Нарынская область состоит из 5 районов, 2 ПГТ и 61 сельского округа.
                <li>Ак-Талинский район — с. Баетово,</li>
                <li>Ат-Башинский район  — с. Ат-Башы,</li>
                <li>Жумгальский район — с. Чаек,</li>
                <li>Кочкорский район — с. Кочкор,</li>
                <li>Нарынский район — г. Нарын.</li>
            </ol>
        </div>
    );
};

export default Naryn;