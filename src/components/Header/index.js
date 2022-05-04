import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'
import { IconContext } from 'react-icons'
import './style.css'

export function Header() {
    return (
        <header className="header">
            <div className="container">
                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>

                <div className="input_fake">
                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    <input placeholder="pesquisar"/>
                </div>

                <div className="menu_icons" >
                    <IconContext.Provider value={{ size: '26px' }}>
                        <div>
                            <AiFillHome/>
                        </div>
                        
                        <div>
                            <RiMessengerLine/>
                        </div>

                        <div>
                            <BsPlusSquare/>
                        </div>

                        <div>
                            <MdOutlineExplore/>
                        </div>

                        <div>
                            <FiHeart/>
                        </div>

                    </IconContext.Provider>

                    <img className="img-header-post" src="https://avatars.githubusercontent.com/u/100328771?s=400&u=ffd517e67ba5480f639cb2602fd596779bce254d&v=4"/>
                </div>
            </div>
        </header>
    );
}