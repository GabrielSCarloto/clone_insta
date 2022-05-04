import './style.css'
import { Stories } from '../Stories'
import { Publicacao } from '../Publicação'
import { Sugestao } from '../Sugestões'

export function Layout() {
    return (
        <>
            <div className="MainGrid" >
                <div className="first-column" style={{gridArea: "firstColumn"}}>
                    <div className="box">
                        <Stories/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Publicacao/>
                    </div>
                </div>

                <div style={{ gridArea: "secondColumn" }} >
                    <div className="sugestaoBox">
                        <Sugestao/>
                    </div>
                </div>
            </div>
        </>
    );
}