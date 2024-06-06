import { Link, Navigate, useNavigate } from 'react-router-dom'
import m from './Main.module.scss'

import person from '../../img/main-person.svg'
import fonSlice from '../../img/fon-slice.svg'
import iconTools from '../../img/icon_tools.svg'
import plus from '../../img/plus.svg'
import minus from '../../img/minus.svg'

import { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../footer/footer'

export default function Main ({apiUrl}) {

    // cpm item

    const cpmData = [
        
        {
            id: 1 ,
            text: 'Заполните информацию о сайте',
        },

        {
            id: 2 ,
            text: 'Добавьте рекламное место и установите код на сайт',
        },

        {
            id: 3 ,
            text: 'Подключите рекламные кампании',
        },

        {
            id: 4 ,
            text: 'Отслеживайте заработок в прозрачной статистике',
        }
    ]

    // cpm info 

    const cpmInfo = [
        
        {
            id: 1 ,
            text: 'Зарабатывайте больше, чем на других платформах',
        },

        {
            id: 2 ,
            text: 'Берём минимальную комиссию, вам отдаём больше',
        },

        {
            id: 3 ,
            text: 'Прозрачная статистика по всем партнёрам, размещающим рекламу у вас на сайте',
        },

        {
            id: 4 ,
            text: 'Автоматическая регистрация рекламы в ОРД',
        },

        {
            id: 5 ,
            text: 'Удобный вывод денежных средств',
        }
    ]

    const sliceInfo = [

        {
            id: 2 ,
            text: 'Продажа рекламных мест или постов за фикс',
        },

        {
            id: 3 ,
            text: 'Возможность работы с ведущими рекламодателями рунета',
        },

        {
            id: 4 ,
            text: 'Минимальная комиссия платформы',
        },

        {
            id: 5 ,
            text: 'Вы получаете только оплаченные заявки и не общаетесь без пользы',
        },

        {
            id: 6 ,
            text: 'Удобный чат с партнёром прямо в ЛК',
        },

        {
            id: 7 ,
            text: '  Автоматическая регистрация рекламы в ОРД',
        },
    ]

    const sliceData = [
        
        {
            id: 1 ,
            text: 'Добавьте рекламное размещение и укажите его цену',
        },

        {
            id: 2 ,
            text: 'Отслеживайте заявки от рекламодателей',
        },

        {
            id: 3 ,
            text: 'Обсудите детали размещения с партнёром в удобном чате',
        },

        {
            id: 4 ,
            text: 'Проведите размещение и получите свой заработок',
        }
    ]

    const toolsData = [
        
        {
            id: 1 ,
            title: 'Топовые рекламодатели',
            text: 'А значит доступ к высоким бюджетам',
        },

        {
            id: 2,
            title: 'Удобный вывод средств',
            text: 'Множество возможностей как для физических, так и для юридических лиц.',
        },

        {
            id: 3,
            title: 'Маркируем рекламу',
            text: 'Следим за трендами и маркируем рекламу строго в соответствии с текущими положениями законов.',
        },

        {
            id: 4,
            title: 'Уникальная техподдержка',
            text: 'Быстро, экспертно, с конкретным решением.',
        },

    ]

    const questions = [

        {
          title: 'Как работает платформа?',
          content: 'Qrooto - место, где любой может продать и купить рекламу на выбранном ресурсе непосредственно в личном кабинете. На платформе есть два режима работы: размещение динамической рекламы и статической.',
        },

        {
            title: 'Что такое динамическая реклама?',
            content: 'Динамическая реклама подразумевает под собой списание средств за каждый клик. Рекламодатель создаёт рекламную кампанию (далее РК), в рамках которой он планирует размещать баннеры на сайтах вебмастеров по модели СРС. Он сам выбирает бюджет РК и её длительность. Также рекламодатель может выбрать дневные лимиты и множество настроек по аудиторным сценариям. Далее рекламодатель может выбрать площадки, на которых будет размещаться его РК. После оплаты РК запускается и её показатели можно отслеживать прямо в личном кабинете.',
          },

          
          {
            title: 'Что такое статическая реклама?',
            content: 'В этом режиме оплачивается статическое размещение, например, размещение баннера на выбранном сайте вебмастера на заранее определенный срок с фиксированной стоимостью за весь период размещения. Помимо баннерной рекламы в этом формате работы может быть любой тип рекламного сотрудничества, например, рассылка или пост в канале Telegram. Характерным отличием данного типа рекламы является фиксированная стоимость размещения, которую рекламодатель выплачивает вебмастеру.',
          },

          
          {
            title: 'Кто такие рекламодатели и вебмастера в рамках вашей платформы?',
            content: 'Рекламодатель - организация или частное лицо, заказывающее и оплачивающее разработку, изготовление и размещение рекламы на платформе Qrooto. Вебмастер - владелец площадки/площадок, размещающий рекламу на своём ресурсе через платформу Qrooto с целью монетизации аудитории своей площадки.',
          },

          
          {
            title: 'А чем отличаетесь от партнёрских сетей?',
            content: 'Мы не работаем по CPA и не осуществляем трекинг внутренних событий после перехода по ссылкам. Поэтому в статической рекламе вы можете отдавать вебмастерам свои внутренние ссылки для трекинга, это удобно!',
          },

          
          {
            title: 'А могу я быть одновременно и рекламодателем, и продавать рекламу у себя на сайте / в социальной сети?',
            content: 'Да, вы можете быть одновременно и тем, и другим, переключаясь между сущностями прямо в личном кабинете. Просто заведите сайт/площадку, пройдите онбординг, заполнив все данные о ресурсе, и начните покупать/продавать рекламу.',
          },

          
          {
            title: 'Платформа Qrooto берёт какую-то комиссию?',
            content: 'Да, размер нашей комиссии зависит от многих показателей площадки и рекламодателя, варьируясь в диапазоне 10-30%, но в среднем он составляет 15-20%. Также у нас есть специальные предложения для новых рекламодателей и площадок.',
          },

          {
            title: 'Что будет происходить после регистрации?',
            content: 'Сразу после регистрации и рекламодатель, и вебмастер должны пройти онбординг, состоящий из нескольких шагов, которые помогут нам сформировать карточку рекламодателя/вебмастера для отображения в каталоге. Обычно этот процесс занимает несколько минут. Без заполнения всех шагов онбординга мы не сможем промодерировать ваш личный кабинет и активировать все возможности системы.',
          },


          {
            title: 'Как мне понять с каким партнёром лучше всего работать? ',
            content: 'Наша платформа интегрирована с несколькими сервисами, которые имеют доступ ко всем сайтам и ресурсам, поэтому мы подбираем партнёров, исходя из принципов совпадения аудитории. Вы сможете видеть все параметры совпадений аудитории с потенциальным партнёром и принять решение о работе с ним.',
          },

          {
            title: 'Будет ли к моему личному кабинету прикреплён персональный менеджер?',
            content: 'На данном этапе мы не выдаём каждому партнёру личного менеджера, как это реализовано в привычных партнёрских сетях. Однако платформа располагает продвинутой системой техподдержки, в рамках которой с каждым партнёром работает не более 2 разных специалистов техподдержки. Это позволяет менеджеру владеть историей ситуаций по каждому партнёру и с учётом разных особенностей каждого партнёра быстрее понимать суть запроса, а значит и решать проблему наиболее эффективно. Также стоит заметить, что все специалисты техподдержки - высококвалифицированные менеджеры, основная цель которых не просто побыстрее закрыть тикет, а проработать его так, чтобы вы поставили 6 из 5 баллов.',
          },

          {
            title: 'Как маркируется моя реклама?',
            content: 'Автоматически при создании рекламной кампании или статического размещения.',
          },

          {
            title: 'Мне потребуется что-то подписывать?',
            content: 'У нас на платформе действует оферта партнёра.',
          },
  


      ];
    

    const [openIndex, setOpenIndex] = useState(null);

    const [openClose, setOpenClose] = useState(Array(questions.length).fill(false));

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      
        // Создайте новый массив с копией предыдущего состояния
        setOpenClose((prevOpenClose) => {
          const newOpenClose = [...prevOpenClose];
          newOpenClose[index] = !newOpenClose[index];
          return newOpenClose;
        });
      };

      const signup = () => {
        window.open(`${apiUrl}/auth/signup`, '_blank')
      }

      const advertiser = () => {
        window.open(`${apiUrl}/auth/signup?_reg_type=advertiser`, '_blank')
      }

      const webmaster = () => {
        window.open(`${apiUrl}/auth/signup?_reg_type=webmaster`, '_blank')
      }
      


    return (

        <>

       <Header apiUrl={apiUrl}/>

        <section className={m.section__main} id='platform'>

            <div className='container'>
                    
                <div className={m.main}>
                    
                    <p className={m.main__title}>
                    Монетизируй свою аудиторию
                    </p>

                    <p className={m.main__subtitle}>
                    Выгодная цена по CPM или за фиксированную стоимость
                    </p>

                    <div className={m.main__buttons}>
                        
                        <Link target='_blank' to={`${apiUrl}/auth/signup?_reg_type=webmaster`} className={m.main__buttons__btn}>
                        Зарегистрироваться
                        </Link>

                        <Link target='_blank' to={`${apiUrl}/auth/login`} className={m.main__buttons__btn_White}>
                        Войти
                        </Link>

                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" className={m.main__fon} fill="none">
  <g filter="url(#filter0_f_5635_33290)">
    <circle cx="500" cy="352" r="100" fill="#968DFF"/>
  </g>
  <defs>
    <filter id="filter0_f_5635_33290" x="0" y="-148" width="1000" height="1000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_5635_33290"/>
    </filter>
  </defs>
                    </svg>

                </div>

            </div>
            
            <img src={person} alt="person" className={m.main__person} />

        </section>
        
        <section className={m.section__cpm} id='dyn'>
            <div className="container">
                
                <div className={m.cpm}>
                    
                    <div className={m.cpm__item}>

                        <div className={m.cpm_flextext}>

                        <p className={m.cpm__item__text}>
                        Как это работает ?
                        </p>

                        </div>

                        <div className={m.cpm__item__flex}>
                            
                            {cpmData.map((item , key) => (
                               
                               <div className={m.cpm__item__flex__item} key={item.id}>
                                
                                <div className={m.cpm__item__flex__item__sum}>
                                    {item.id}
                                </div>

                                <p className={m.cpm__item__flex__item__text}>
                                    {item.text}
                                </p>

                               </div>
                               
                            ) )}

                        </div>

                    </div>

                    <div className={m.cpm__info}>
                        
                        <p className={m.cpm__info__title}>
                        Продавайте по CPM
                        </p>

                        <ul className={m.cpm__info__ul}>
                        
                        {cpmInfo.map((item , key) => (

                            <li className={m.cpm__info__ul__li} key={item.id}>
                                {item.text}
                            </li>

                         ) )}

                        </ul>

                        <button onClick={advertiser} className={m.cpm__info__btn}>
                        Запустить рекламу
                        </button>
                        
                    </div>

                </div>

            </div>
        </section>

        <section className={m.section__slice} id='stat'>
            
            <img src={fonSlice} className={m.cpmTwo__fon} alt="" />

            <div className={m.cpmTwo__blur}></div>

            <div className="container">
                
                <div className={m.cpmTwo}>

                <div className={m.cpm__info}>
                        
                        <p className={m.cpm__info__titleTwo}>
                        Революционный маркетплейс
                        </p>

                        <p className={m.cpm__info__subtitle}>
                        Продавайте рекламу за фиксированную стоимость
                        </p>

                        <ul className={m.cpm__info__ul}>
                        
                        {sliceInfo.map((item , key) => (

                            <li className={m.cpm__info__ul__li} key={item.id}>
                                {item.text}
                            </li>

                         ) )}

                        </ul>

                        <button onClick={webmaster} className={m.cpm__info__btn}>
                        Продать рекламу
                        </button>
                        
                    </div>
                    
                    <div className={m.cpm__item}>

                        <div className={m.cpm_flextext}>
                            
                        <p className={m.cpm__item__text}>
                        Как это работает?
                        </p>

                        </div>

                        <div className={m.cpm__item__flex}>
                            
                            {sliceData.map((item , key) => (
                               
                               <div className={m.cpm__item__flex__item} key={item.id}>
                                
                                <div className={m.cpm__item__flex__item__sum}>
                                    {item.id}
                                </div>

                                <p className={m.cpm__item__flex__item__text}>
                                    {item.text}
                                </p>

                               </div>
                               
                            ) )}

                        </div>

                    </div>

                </div>

            </div>
        </section>

        <section className={m.section__Tools} id='tools'>
            <div className="container">

                <p className={m.tools__title}>
                Инструменты
                </p>
                
                <div className={m.tools}>

                    {toolsData.map((item , key) => (

                     <div className={m.tools__item}>

                        <img src={iconTools} className={m.tools__item__img} alt="img" />
                        
                        <p className={m.tools__item__title}>
                        {item.title}
                        </p>

                        <p className={m.tools__item__subtitle}>
                        {item.text}
                        </p>
                        
                    </div>
                    ))}

                </div>

                <button onClick={webmaster} className={m.tools__item__btn}>
                Зарегистрироваться
                </button>

            </div>
        </section>

        <section className={m.section__top}>
            
            <div className={m.top__fon}></div>

            <div className="container">
                
                <p className={m.top__title}>
                ТОП-3 заработка за прошлую неделю
                </p>

                <div className={m.top}>
                    
                    <div className={m.top__item}>

                        <p className={m.top__item__title}>
                        345 600 ₽
                        </p>

                        <p className={m.top__item__subtitle}>
                        CPC
                        </p>

                    </div>

                    <div className={m.top__item}>

                        <p className={m.top__item__title}>
                        150 000 ₽
                        </p>

                        <p className={[m.top__item__subtitle , m.top__item__subtitle_two].join(' ') }>
                        Фикс
                        </p>

                    </div>

                    <div className={m.top__item}>

                        <p className={m.top__item__title}>
                        129 920 ₽
                        </p>

                        <p className={m.top__item__subtitle}>
                        CPC
                        </p>

                    </div>

                </div>

            </div>
        </section>

        <section className={m.section__question} id='faq'>
            <div className="container">

                <p className={m.question__title}>
                Частые вопросы
                </p>
                
                <div className={m.question}>
                    
        {questions.map((q, index) => (

            <div key={index} className={m.question__item}>

              <div
                className={m.question__header}
                onClick={() => handleToggle(index)}
              >

                <p className={m.question__header__title}>{q.title}</p>

                <div className={m.question__header__box} width=''>
                    <img src={openClose[index] ? minus : plus} className={q.question__svg} alt="img" />
                </div>

              </div>

              {openIndex === index && (

                <div className={m.question__content}>
                  {q.content}
                </div>

              )}

            </div>
        ))}

                </div>

            </div>
        </section>

        <Footer apiUrl={apiUrl} />

        </>



    )
}