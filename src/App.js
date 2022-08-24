import React, {useState} from 'react';
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Iphone from "./Components/Iphone/Iphone";
import Mac from "./Components/Mac/Mac";
import AirPods from "./Components/AirPods/AirPods";
import './index.css';
import ItemPage from "./Components/ItemPage/ItemPage";
import Basket from "./Components/Basket/Basket";
import Modal from "./Components/Modal/Modal";

const App = () => {
    const [iphones] = useState([
        {id: 1, title: 'Iphone 11 64 gb black', img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSC_azgywwLJe4mB8ESyXS-G5mJAYb1NgtpPiPU4OBr5VaGRaZcmg4QYEXJN5GkaQt3rqb24sXK9Q&usqp=CAc', color: 'black', memory: 64, price: 22000, bodyText: 'Замість букви R & mdash; горде число 11 в назві. Разом з ним найпопулярніший iPhone в історії отримав новий, ще більш потужний і розумний процесор, а також двухоб\'ектівние тильну і поліпшену фронтальну камеру. Засоби самовираження, раніше доступні тільки для преміум-пристроїв, тепер стали доступні всім.'},
        {id: 2, title: 'Iphone 13 256 gb white', img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWh2zsbb_MwAdPxw0poMpWnl5KvO5cFREaSHfNRq0IBEv1CCvqYazEBZ23Vq6eJ9pbuBCr55aOFw&usqp=CAc', price: 39000, color: 'white', memory: 256, bodyText: 'Неймовірно яскравий дисплей в міцному корпусі. Режим «кіноефектів», який робить з вашого відео справжнє кіно. Супершвидкий чіп. І невтомний акумулятор.'},
        {id: 3, title: 'Iphone 13 Pro Max 256 gb graphite', img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjSi0dGq69SBzxSkKwCNBKgu-G5ozY8MbqOo6l2aaq7-cqfsywoB988JOvO0mZ7N2JyHt1f8Avtw&usqp=CAc', price: 53000, color: 'graphite', memory: 256, bodyText: 'Просто нереально! Значно потужніша система камер. Абсолютно нові відчуття від дисплея. Найшвидший чіп для iPhone. Виняткова міцність. І величезний приріст ресурсу акумулятора.'},
    ]);
    const [macs] = useState([
        {id: 1535, title: 'MacBook Air m1 256gb Space-Grey', img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnqinuXVmmjGcdzeSTnzahPMhejNavSoreLjOOC6FpznMbBI1nnVAvs88U144F1h8bBD3izAL8&usqp=CAc', color: 'space grey', memory: 256, price: 64000, bodyText: 'З новою силою. Новий MacBook Air працює без підзарядки довше, ніж попередні моделі. І зовсім не шумить, тому що у нього немає вентилятора. Потужність ще ніколи не була такою компактною.'},
        {id: 223, title: 'MacBook Pri m1 256 gb Space-Grey', img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrIfVxaiarQfjWovzmI5_dqQELP5yHjhueguoAUiGjoce0mYx30Y4wL-FbzFRGQg&usqp=CAc', price: 66000, color: 'space grey', memory: 256, bodyText: 'Суперсила професіоналів. Cамий потужний MacBook Pro в історії. І це монстр. Супершвидкі M1 Pro і M1 Max - перші чіпи Apple, розроблені спеціально для професіоналів.'},
        {id: 334, title: 'Imac m1 256 gb green', img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQheAh7CZ1gtCwGYKUucLt7ksg_iVllX2id_fp7jR45NtmDN6F5_ODGkXi0NdY5a1LA43xW0pmvgS0&usqp=CAc', price: 76000, color: 'green', memory: 256, bodyText: 'Екран 23.5" (4480x2520) 4.5K / Apple M1 / RAM 8 ГБ / SSD 256 ГБ / Apple M1 Graphics (7 ядер) / без ОД / Wi-Fi / Bluetooth / вебкамера / macOS Big Sur / 4.46 кг / зелений / клавіатура + миша'},
    ]);
    const [airpods] = useState([
        {id: 108, title: 'AirPods with charging case', img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQW_luE9M-fxb9ZtTbo9-HEpYZMLORcjSAtAAcTXg6VMkkVonW1x-0OM9Vu5uv0ME3PqnyjAEwT1w&usqp=CAc', price: 5500, color: 'white', memory: 'none', bodyText: 'Неперевершена простота користування «яблучних» навушників - в нових вакуумних вкладишах AirPods Pro. Вони так само розумні, як і AirPods, а нова функція активного шумозаглушення ізолює вас від зовнішніх звуків. Але якщо потрібно почути, що відбувається навколо вас - просто включите «прозорий» режим, і ви не пропустите нічого важливого.'}
    ])
    const [page, setPage] = useState({});
    const [basketData, setBasketData] = useState([]);

    const [modal, setModal] = useState(false);

    const openPage = item => {
        setPage({
            id: item.id,
            title: item.title,
            img: item.img,
            bodyText: item.bodyText,
            memory: item.memory,
            color: item.color,
            price: item.price
        })
    }

    const addToBasket = (item) => {
        if(!basketData.find(i => i.id === item.id)) {
            setBasketData([...basketData, item]);
        } else {
            setModal(true)
        }
    }

    const removeFromBasket = item => {
        setBasketData(basketData.filter(i => i.id !== item.id));
    }

    return (
        <div>
         <Modal active={modal} setActive={setModal} />
         <Header />
            <div className='wrapper' >
                <Routes>
                    <Route path='/iphone' element={<Iphone
                        data={iphones}
                        open={openPage}
                        add={addToBasket}
                    />} />
                    <Route path='/mac' element={<Mac
                        open={openPage}
                        data={macs}
                        add={addToBasket}
                    />} />
                    <Route path='/airpods' element={<AirPods
                        data={airpods}
                        open={openPage}
                        add={addToBasket}
                    />} />
                    <Route path={'/item' + page.id} element={<ItemPage
                        data={page}
                        add={addToBasket}
                    />} />
                    <Route path='/basket' element={<Basket
                        data={basketData}
                        remove={removeFromBasket}
                    />} />
                </Routes>
            </div>
            <footer style={{height: 20, background: '#c48710', marginTop: 20}}>

            </footer>
        </div>
    );
};

export default App;