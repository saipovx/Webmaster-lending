import { Link } from 'react-router-dom'
import f from './footer.module.scss'
import Logo from '../../img/LogoTwo.svg'

export default function footer ({apiUrl}) {
    return (
        
        <>
        
        <footer className={f.section__footer} id='footer'>
            
            <div className='container'>

                <div className={f.footer}>

                    <div className={f.footer__flex}>

                    <div className={f.footer__item}>
                        
                        <img src={Logo} alt="img" className={f.footer__item__logo} />

                        <p className={f.footer__item__title}>
                        <span> ООО "Куплатформ"</span><br/>
                        <span>ИНН: 7730605428</span><br/>
                         <span> ОГРН: 1097746021328</span><br/>
                         <span> support@qrooto.com</span> <br/>
                        <span>+7 (495) 748-89-57</span>
                    </p>

                    </div>

                    <div className={f.footer__links}>

                    <Link to={'https://lk.qrooto.com/documents/policy.pdf'} className={f.footer__links__title}>
                        Политика конфиденциальности
                        </Link>

                        <Link to={'https://lk.qrooto.com/documents/oferta_advertiser.pdf'} className={f.footer__links__title}>
                        Оферта рекламодателя
                        </Link>

                        <Link to={'https://lk.qrooto.com/documents/oferta_webmaster.pdf'} className={f.footer__links__title}>
                        Оферта вебмастера
                        </Link>


                        {/* <Link to={''} className={f.footer__links__title}>
                        Контакты
                        </Link> */}

                    </div>

                    </div>
                    

                    <div className={f.footer__btns}>
                        
                        <Link target='_blank' to={`${apiUrl}/auth/signup?_reg_type=advertiser`} className={f.footer__btns__link}>
                        Регистрация рекламодателя
                        </Link>

                        <Link target='_blank' to={`${apiUrl}/auth/signup?_reg_type=webmaster`} className={f.footer__btns__link}>
                        Регистрация площадки
                        </Link>

                        <Link target='_blank' to={`${apiUrl}/auth/login`} className={f.footer__btns__linkTwo}>
                        Вход
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
        
        </>

    )
}