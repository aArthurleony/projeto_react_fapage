import { H1Erro, Silencioimg, DivErro } from "../Server"
import imagemErro from "../../img/silencio.png"
import Footer from '../Components/Footer'; // Ajuste o caminho se necessário

const Pagina404 = () => {
    return (
        <>
            <DivErro>
                <H1Erro>404: Page not found</H1Erro>
                <Silencioimg src={imagemErro}></Silencioimg>
            </DivErro>
            <Footer />

        </>

    )
}

export default Pagina404