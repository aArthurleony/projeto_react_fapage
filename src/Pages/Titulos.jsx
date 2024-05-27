import { H1Campeao, DivCampeao, UCLimg, ContainerTitulos, AnoTitulo, TituloItem, TituloGeral, } from "../Server";
import Img from "../../img/ucl.png";

const Titulos = () => {
    return (
        <>
            <DivCampeao>
                <UCLimg src={Img}/> 
                <H1Campeao><strong>Campeão: Todos os títulos de Neymar Jr</strong></H1Campeao>
                <ContainerTitulos>
                    <TituloGeral><strong>Santos:</strong> 6 títulos</TituloGeral>
                    <TituloGeral><strong>Barcelona:</strong> 13 títulos</TituloGeral>
                    <TituloGeral><strong>PSG:</strong> 13 títulos</TituloGeral>
                    <TituloGeral><strong>Seleção Brasileira:</strong> 6 títulos + 1 título (Seleção Brasileira Sub-20)</TituloGeral>
                    <TituloGeral><strong>Total:</strong> 40 títulos</TituloGeral>

                    <AnoTitulo>2023</AnoTitulo>
                    <TituloItem>Campeão Ligue 1</TituloItem>

                    <AnoTitulo>2022</AnoTitulo>
                    <TituloItem>Campeão Ligue 1</TituloItem>
                    <TituloItem>Supercopa da França</TituloItem>

                    <AnoTitulo>2021</AnoTitulo>
                    <TituloItem>Supercopa da França</TituloItem>
                    <TituloItem>Copa da França</TituloItem>
                    <TituloItem>vice-campeão Ligue 1</TituloItem>
                    <TituloItem>vice-campeão Copa América</TituloItem>

                    <AnoTitulo>2020</AnoTitulo>
                    <TituloItem>Campeão da Ligue 1 Conforama</TituloItem>
                    <TituloItem>Campeão da Copa da França</TituloItem>
                    <TituloItem>Campeão Copa da Liga da França</TituloItem>
                    <TituloItem>vice-campeão Liga dos Campeões</TituloItem>

                    <AnoTitulo>2019</AnoTitulo>
                    <TituloItem>Campeão da Ligue 1 Conforama</TituloItem>
                    <TituloItem>Campeão da Supercopa da França</TituloItem>

                    <AnoTitulo>2018</AnoTitulo>
                    <TituloItem>Campeão Superclássico das Américas</TituloItem>
                    <TituloItem>Campeão Supercopa Francesa</TituloItem>
                    <TituloItem>Campeão Ligue 1 Conforama</TituloItem>
                    <TituloItem>Campeão Coupe de France</TituloItem>
                    <TituloItem>Campeão Coupe de La Ligue</TituloItem>

                    <AnoTitulo>2017</AnoTitulo>
                    <TituloItem>Campeão Copa do Rei</TituloItem>

                    <AnoTitulo>2016</AnoTitulo>
                    <TituloItem>Campeão da Supercopa da Espanha</TituloItem>
                    <TituloItem>Campeão do Troféu Joan Gamper</TituloItem>
                    <TituloItem>Medalha de ouro - Olimpíadas Rio 2016</TituloItem>
                    <TituloItem>Campeão da Copa do Rei</TituloItem>
                    <TituloItem>Campeão da Liga Espanhola</TituloItem>

                    <AnoTitulo>2015</AnoTitulo>
                    <TituloItem>Campeão do Troféu Joan Gamper</TituloItem>
                    <TituloItem>Campeão Mundial Interclubes</TituloItem>
                    <TituloItem>Campeão da Copa do Rei</TituloItem>
                    <TituloItem>Campeão da Liga Espanhola</TituloItem>
                    <TituloItem>Campeão da Champions League</TituloItem>

                    <AnoTitulo>2014</AnoTitulo>
                    <TituloItem>Campeão do Troféu Joan Gamper</TituloItem>
                    <TituloItem>Campeão do Superclássico das Américas pela Seleção Brasileira</TituloItem>
                    <TituloItem>Vice-campeão Espanhol</TituloItem>
                    <TituloItem>Vice-campeão da Copa do Rei</TituloItem>

                    <AnoTitulo>2013</AnoTitulo>
                    <TituloItem>Campeão da Supercopa da Espanha</TituloItem>
                    <TituloItem>Campeão do Troféu Joan Gamper</TituloItem>
                    <TituloItem>Campeão da Copa das Confederações</TituloItem>
                    <TituloItem>Vice-campeão Paulista</TituloItem>
                    <TituloItem>Campeão do Superclássico das Américas pela Seleção Brasileira</TituloItem>

                    <AnoTitulo>2012</AnoTitulo>
                    <TituloItem>Campeão da Recopa Sul-Americana</TituloItem>
                    <TituloItem>Medalha de Prata - Olimpíadas de Londres 2012</TituloItem>
                    <TituloItem>Campeão Paulista</TituloItem>

                    <AnoTitulo>2011</AnoTitulo>
                    <TituloItem>Vice-campeão Mundial de Clubes</TituloItem>
                    <TituloItem>Campeão do Superclássico das Américas pela Seleção Brasileira</TituloItem>
                    <TituloItem>Campeão da Libertadores</TituloItem>
                    <TituloItem>Campeão Paulista</TituloItem>
                    <TituloItem>Campeão Sul-Americano Sub-20 pela Seleção Brasileira</TituloItem>

                    <AnoTitulo>2010</AnoTitulo>
                    <TituloItem>Campeão da Copa do Brasil</TituloItem>
                    <TituloItem>Campeão Paulista</TituloItem>

                    <AnoTitulo>2009</AnoTitulo>
                    <TituloItem>Vice-campeão Paulista</TituloItem>
                </ContainerTitulos>
            </DivCampeao>

        </>
    );
}

export default Titulos;
