import React from 'react'
import iconMarker from '..//assets/images/icon-map-marker.png'
import iconPhone from '..//assets/images/contact-icon.png'
import '..//assets/css/Footer.scss'
import '..//assets/css/fonts.scss'
import Map from './Common/Map'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <div className='contacts'>
          <div className='footer_container_titles'>
            Контактна інформація
          </div>
          <div>
            <div className='titles_box'>
              <img src={iconMarker} alt="" />
              <h4>Адреса</h4>
            </div>
            <span>вул. Киргизька, 19, корпус 3, Харків, Україна</span>
          </div>
          <div>
            <div className='titles_box'>
              <img src={iconPhone} alt="" />
              <h4>Телефони</h4>
            </div>
            <div>+380 (96) 564-14-39</div>
            <div>Валерій</div>
            <div>+380 (95) 776-54-97</div>
            <div>Тетяна</div>
            <div>+380 (96) 543-71-20
            </div>
            <span>Тетяна</span>
          </div>
        </div>
        <div className='work_hours'>
          <div className='footer_container_titles'>Графік роботи</div>
          <ul className='work_hours_list'>
            <li className='work_hours_list_item'>
              <div>Понеділок</div>
              <div>08:00 - 16:00</div>
            </li>
            <li className='work_hours_list_item'>
              <div>Вівторок</div>
              <div>08:00 - 16:00</div>
            </li>
            <li className='work_hours_list_item'>
              <div>Середа</div>
              <div>08:00 - 16:00</div>
            </li>
            <li className='work_hours_list_item'>
              <div>Четвер</div>
              <div>08:00 - 16:00</div>
            </li>
            <li className='work_hours_list_item'>
              <div>Пʼятниця
              </div>
              <div>08:00 - 16:00</div>
            </li>
            <li className='work_hours_list_item'>
              <div>Субота</div>
              <div>Вихідний</div>
            </li>
            <li className='work_hours_list_item'>
              <div>Неділя</div>
              <div>Вихідний</div>
            </li>
          </ul>
        </div>
        <div className='map'>
          <div className='footer_container_titles'>
          <div>Мапа</div>
            <Map />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer