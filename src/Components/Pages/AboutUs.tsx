import React from 'react'
import Header from '../Header'
import '..//..//assets/css/AboutUs.scss'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div className='about_us'>
      <Header />
      <div className='about_us_container'>
        <div className='container'>
          <div className='row'>
            <div className='about_title'>
              <div className='about_title_company'>
                Про спецпроммаш
              </div>
              <div className='about_title_company_text'>Якість, Доступність, <br /> Розробка та Виробництво</div>
            </div>
            <div className='about_text'>
              <span>Ми пропонуємо розробку продукту, інженерні та виробничі послуги для бізнесу</span>
              <p>
                Спецпроммаш завершив сотні проектів за роки свого існування. Ми пропонуємо відмінну продуктивність, довговічність роботи, простоту у керуванні та гарантійне обслуговування.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs