import { H1Erro, Silencioimg, DivErro } from "../Server"
import imagemErro from "../../img/silencio.png"
const Pagina404 = () => {
    return (
        <>
            <DivErro>
                <H1Erro>404: Page not found</H1Erro>
                <Silencioimg src={imagemErro}></Silencioimg>
            </DivErro>
        </>

    )
}

export default Pagina404