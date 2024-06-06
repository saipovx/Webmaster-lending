import headerCss from './Header.module.scss';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import { useEffect } from 'react';

import Logo from '../../img/Logo.svg'
import { Link } from 'react-router-dom';

const active = ({isActive}) => isActive ? `${headerCss.active}` : ''

function Header ({apiUrl}) {

    const [nav, setNav] = useState(false)
  
    const closeSideBar = () => {
        setNav(false)
    }

    let scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -90; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const [Header , setNavbar] = useState (false)

    const changeBackground = () => {
       

        if (window.scrollY >= 500) {

          setNavbar(true)

        } else {

          setNavbar(false)

        }
    }

    useEffect(() => {

        changeBackground()

        window.addEventListener("scroll", changeBackground)

      })


    return (

       
        <header className={  Header ? [headerCss.header, headerCss.header_active].join(' ') : [headerCss.header] } >
        
            <div className={headerCss.container}>
                
                <nav className={headerCss.nav}>

                <HashLink to='/' className={headerCss.nav__ul_logo} onClick={closeSideBar}>
                        <img src={Logo} width={'160px'} alt="img" /> 
                </HashLink>
                    
    
                    <ul className={nav ? [headerCss.nav__ul, headerCss.nav__ul_active].join(' ') : [headerCss.nav__ul] }>

                        <p className={headerCss.nav__ul_link}  onClick={closeSideBar}>
                        <HashLink className={active} scroll={scrollWithOffset}  to='/#platform' >
                            Платформа 
                            </HashLink>


                        </p>

                        <p className={headerCss.nav__ul_link} onClick={closeSideBar}>
                        <HashLink className={active} scroll={scrollWithOffset} to='/#dyn' >
                            Динамическая реклама
                            </HashLink>


                        </p>

                        <p className={headerCss.nav__ul_link} onClick={closeSideBar}>
                        <HashLink className={active} scroll={scrollWithOffset} to='/#stat'>
                            Статические размещения
                            </HashLink>


                        </p>  


                        <p className={headerCss.nav__ul_link} onClick={closeSideBar}>
                            <HashLink className={active} scroll={scrollWithOffset} to='/#tools'>
                            Инструменты 
                            </HashLink>
                        </p> 

                        <p className={headerCss.nav__ul_link} onClick={closeSideBar}>
                            <HashLink className={active} scroll={scrollWithOffset} to='/#faq'>
                            FAQ 
                            </HashLink>
                        </p>  


                        <p className={headerCss.nav__ul_link} onClick={closeSideBar}>
                            <HashLink className={active} scroll={scrollWithOffset} to='/#footer'>
                            Контакты 
                            </HashLink>
                        </p>

                    </ul>

                    <div className={headerCss.nav__right}>

                    <Link style={{textDecoration: 'none'}} target='_blank' to={`${apiUrl}/auth/login`} className={headerCss.nav__btn}>Войти</Link>

                    <div className ={ nav ? [headerCss.burger , headerCss.burger_active_burger].join(' ') : [headerCss.burger] } onClick={() => setNav(!nav)}>
                        {nav ? false : true }
                        
                        <span></span>
                    </div>

                    </div>



                </nav>
                
            </div>
        </header>

    )
}

export default Header