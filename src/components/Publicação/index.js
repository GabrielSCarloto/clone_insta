import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Publicacao() {
    return (
        <>
            <header className="header-post">
                <div className="infos-post">
                    <img className="img-header-post" src="https://avatars.githubusercontent.com/u/100328771?v=4"/>

                    <p>gabrielcarlotoo</p>
                </div>

                    <FiMoreHorizontal/>
            </header>

            <div className="img-post">
                <img src="https://raw.githubusercontent.com/GabrielSCarloto/imgs/main/IMG_20211222_160646_162.jpg"/>
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{size: "30px"}}>
                    <section className="engagement-post">
                        <div className="icons-1">
                            <div className="icon"><IoMdHeartEmpty/></div>
                            <div className="icon"><BsChat/></div>
                            <div className="icon"><FiSend/></div>
                        </div>
                        
                        <div className="icon"><BsBookmark/></div>
                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>44 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <span>gabrielcarlotoo</span> Criando realidades que me levem mais longe.
                    </p>
                </div>

                <div className="time-post">
                    <time>22 DE DEZEMBRO 2021</time>
                </div>

                <div className="comment">
                    <div className="fake-comment">
                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile/>
                            </div>

                        </IconContext.Provider>
                        <input placeholder="Adicione um comentário..."/>
                    </div>

                    <button>Publicar</button>
                </div>
            </div>

            <header className="header-post">
                <div className="infos-post">
                    <img className="img-header-post" src="https://github.com/GabrielSCarloto/imgs/blob/main/170030691_288936099310556_2723383641353895940_n.jpg?raw=true"/>

                    <p>macaquisses</p>
                </div>

                    <FiMoreHorizontal/>
            </header>

            <div className="img-post">
                <img src="https://raw.githubusercontent.com/GabrielSCarloto/imgs/main/279702986_563843121966894_8014135491407760348_n.webp"/>
            </div>
            
            <div className="footer-post">
                <IconContext.Provider value={{size: "30px"}}>
                    <section className="engagement-post">
                        <div className="icons-1">
                            <div className="icon"><IoMdHeartEmpty/></div>
                            <div className="icon"><BsChat/></div>
                            <div className="icon"><FiSend/></div>
                        </div>
                        
                        <div className="icon"><BsBookmark/></div>
                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>44 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <span>gabrielcarlotoo</span> Criando realidades que me levem mais longe.
                    </p>
                </div>

                <div className="time-post">
                    <time>22 DE DEZEMBRO 2021</time>
                </div>

                <div className="comment">
                    <div className="fake-comment">
                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile/>
                            </div>

                        </IconContext.Provider>
                        <input placeholder="Adicione um comentário..."/>
                    </div>

                    <button>Publicar</button>
                </div>
            </div>

            <header className="header-post">
                <div className="infos-post">
                    <img className="img-header-post" src="https://github.com/GabrielSCarloto/imgs/blob/main/272097290_1035803126998190_2067279594777017444_n.jpg?raw=true"/>

                    <p>boliviazika</p>
                </div>

                    <FiMoreHorizontal/>
            </header>

            <div className="img-post">
                <img src="https://github.com/GabrielSCarloto/imgs/blob/main/279938312_875147887215686_5616664607545539950_n.jpg?raw=true"/>
            </div>
            
            <div className="footer-post">
                <IconContext.Provider value={{size: "30px"}}>
                    <section className="engagement-post">
                        <div className="icons-1">
                            <div className="icon"><IoMdHeartEmpty/></div>
                            <div className="icon"><BsChat/></div>
                            <div className="icon"><FiSend/></div>
                        </div>
                        
                        <div className="icon"><BsBookmark/></div>
                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>10.574 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <span>boliviazika</span> Será que vinga?
                    </p>
                </div>

                <div className="time-post">
                    <time>04 DE MAIO 2022</time>
                </div>

                <div className="comment">
                    <div className="fake-comment">
                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile/>
                            </div>

                        </IconContext.Provider>
                        <input placeholder="Adicione um comentário..."/>
                    </div>

                    <button>Publicar</button>
                </div>
            </div>
        </>
    );
}