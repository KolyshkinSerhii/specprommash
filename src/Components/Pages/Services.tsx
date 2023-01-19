import React from 'react'
import Header from '../Header'
import dryer from '..//..//assets/images/dryer.png'
import screw from '..//..//assets/images/screw.png'
import form from '..//..//assets/images/form.png'
import noria from '..//..//assets/images/noria.png'
import generator from '..//..//assets/images/generator.png'
import line from '..//..//assets/images/line.png'
import shredder from '..//..//assets/images/shredder.png'
import separator from '..//..//assets/images/separator.png'
import '..//..//assets/css/Services.scss'
import Footer from '../Footer'

type Props = {}

const Services = (props: Props) => {
  return (
    <div className='services'>
      <Header />
      <div className='services_container'>
        <div className='container'>
          <div className='grid'>
            <div className='grid_item'>
              <div className='grid_item_container'>
                <div className='image_box'>
                  <img src={dryer} alt="" />
                </div>
                <div className='grid_item_container_text'>
                  <h3 className='services_nav'>Зерносашарки</h3>
                  <p>Одним з найважливіших етапів у підготовці аграрних культур є сушка, оскільки саме від цього процесу залежить якість і термін зберігання зерна</p>
                </div>
              </div>
            </div>
            <div className='grid_item'>
              <div className='grid_item_container'>
                <div className='image_box'>
                  <img src={screw} alt="" />
                </div>
                <div className='grid_item_container_text'>
                  <h3 className='services_nav'>Конвеєри</h3>
                  <p>Машини безперервної дії, призначена для транспортування насипних і штучних вантажів</p>
                </div>
              </div>
            </div>
            <div className='grid_item'>
              <div className='grid_item_container'>
                <div className='image_box'>
                  <img src={form} alt="" />
                </div>
                <div className='grid_item_container_text'>
                  <h3 className='services_nav'>Металоформи</h3>
                  <p>Залізобетонні вироби мають дві основні складові: металеве армування і бетон. При цьому кінцевий виріб має високу міцність і стійкість до зовнішніх чинників</p>
                </div>
              </div>
            </div>
            <div className='grid_item'>
              <div className='grid_item_container'>
                <div className='image_box'>
                  <img src={noria} alt="" />
                </div>
                <div className='grid_item_container_text'>
                  <h3 className='services_nav'>Норії</h3>
                  <p>Призначені для вертикального транспортування зерна та продуктів його переробки, а також насіння інших культур на задану висоту</p>
                </div>
              </div>
            </div>
            <div className='grid_item'>
              <div className='grid_item_container'>
                <div className='image_box'>
                  <img src={generator} alt="" />
                </div>
                <div className='grid_item_container_text'>
                  <h3 className='services_nav'>Теплогенератори</h3>
                  <p>Призначені для отримання гарячого повітря без змішування з топковими газами</p>
                </div>
              </div>
            </div>
            <div className='grid_item'>
              <div className='grid_item_container'>
                <div className='image_box'>
                  <img src={line} alt="" />
                </div>
                <div className='grid_item_container_text'>
                  <h3 className='services_nav'>Лінії ПЕТ, ТПВ, Пелет</h3>
                  <p>Лінія призначена для виконання всього комплексу операцій</p>
                </div>
              </div>
            </div>
            <div className='grid_item'>
              <div className='grid_item_container'>
                <div className='image_box'>
                  <img src={shredder} alt="" />
                </div>
                <div className='grid_item_container_text'>
                  <h3 className='services_nav'>Дробарки</h3>
                  <p> Машинии для дроблення та подрібнення грудкової мінеральної сировини та інших твердих матеріалів</p>
                </div>
              </div>
            </div>
            <div className='grid_item'>
              <div className='grid_item_container'>
                <div className='image_box'>
                  <img src={separator} alt="" />
                </div>
                <div className='grid_item_container_text'>
                  <h3 className='services_nav'>Сепаратори</h3>
                  <p>Призначеніні для поділу сипучих матеріалів на фракції за розміром, або для видалення із сировини не переробляються складових</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Services