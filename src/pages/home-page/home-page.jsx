import React from 'react';
import { GoodItem } from '../../components/good-item';
import { Banner } from '../../components/banner';
import './home-page.css';


const GOODS = [
    {
        image: '/images/sumka.jpg',
        title: 'Sumka 1',
        price: 2343,
        id: 1,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: '/images/sumka2.jpg',
        title: 'Sumka 2',
        price: 243,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: '/images/sumka3.jpg',
        title: 'Sumka 3',
        price: 3021,
        id: 3,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: '/images/sumka4.jpg',
        title: 'Sumka 4',
        price: 1465,
        id: 4,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: '/images/sumka5.jpg',
        title: 'Sumka 5',
        price: 712,
        id: 5,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: '/images/sumka6.jpg',
        title: 'Sumka 6',
        price: 3652,
        id: 6,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: '/images/kruzhka.jpg',
        title: 'Kruzhka 1',
        price: 789,
        id: 7,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: '/images/kruzhka2.jpg',
        title: 'Kruzhka 2',
        price: 982,
        id: 8,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: '/images/kruzhka3.jpg',
        title: 'Kruzhka 3',
        price: 286,
        id: 9,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
    {
        image: '/images/kruzhka4.jpg',
        title: 'Kruzhka 4',
        price: 40,
        id: 10,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: '/images/kruzhka5.jpg',
        title: 'Kruzhka 5',
        price: 5210,
        id: 11,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: '/images/kruzhka6.jpg',
        title: 'Kruzhka 6',
        price: 632,
        id: 12,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
]


export const HomePage = () => {
  return (
    <div className="main">
        <div className="home-page__banner">
            <Banner/>   
        </div>
        <hr></hr>
        <div className='home-page'>
            { GOODS.map(good => <GoodItem good={good} key = {good.id}/>) } 
        </div>
    </div>
  )
}
