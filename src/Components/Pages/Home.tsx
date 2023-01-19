import Header from '../Header'
import QuoteButton from '../Common/QuoteButton'
import sliderImage1 from '..//..//assets/images/v1-1.jpg'
import sliderImage2 from '..//..//assets/images/v1-2.jpg'
import sliderImage3 from '..//..//assets/images/v1-3.jpg'
import Carousel from 'react-material-ui-carousel'
import certificate from '..//..//assets/images/certificate.png'
import individual from '..//..//assets/images/individual.png'
import delivery from '..//..//assets/images/delivery.png'
import Footer from '../Footer'
import '..//..//assets/css/Home.scss'
import '..//..//assets/css/fonts.scss'

type Props = {}

export const Home = (props: Props) => {

  const items = [
    {
      title: ["Високопродуктивні", "Рішення", "Машинобудування"],
      image: sliderImage2
    },
    {
      title: ["Довговічність", "та Простота", "Керування"],
      image: sliderImage1
    },
    {
      title: ["Гарантійне", "Обслуговування"],
      image: sliderImage3
    },
  ]

  return (
    <div className='home'>
      <Header />
      <div className='home_container'>
        <Carousel interval={6000}>
          {items.map((item, i) => <HomeItem key={i} item={item} />)}
        </Carousel>
        <section className='about_area'>
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
            <div className='row_services'>
              <div className='row_services_item'>
                <div className='icon_box'>
                  <img src={certificate} alt="" />
                </div>
                <div className='text_box'>
                  <h3>Якісне Виконання Замовлень</h3>
                  <p>Забезпечимо Вас високотехнологічнім та якісним устаткуванням</p>
                </div>
              </div>
              <div className='row_services_item'>
                <div className='icon_box'>
                  <img src={individual} alt="" />
                </div>
                <div className='text_box'>
                  <h3>Індивідуальний Підхід</h3>
                  <p>Працюємо над виготовленням устаткування для кожного окремого замовника</p>
                </div>
              </div>
              <div className='row_services_item'>
                <div className='icon_box'>
                  <img src={delivery} alt="" />
                </div>
                <div className='text_box'>
                  <h3>Тестування та Доставка Обладнання</h3>
                  <p>Доставка по всій Україні. Здійснюємо монтаж та шефмонтаж обладнання</p>
                </div>
              </div>
            </div>
            <div className='service_items'></div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

type SliderItemType = {
  title: Array<string>,
  image: string
}

type HomeItemProps = {
  item: SliderItemType
}

const HomeItem: React.FC<HomeItemProps> = ({ item }) => {
  return (
    <>
      <div className='home_container_background'>
        <img src={item.image} alt="" />
        <div className='mask_wrap'>
          <div className='mask_caption'>
            <div className='big_title'>
              <div>{item.title[0]}<br />{item.title[1]} <br /> {item?.title[2]}
              </div>
              <div className='big_title_button'>
                <QuoteButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}