import React from 'react';
import Footer from '../Components/Footer'; // Ajuste o caminho se necessário
import { MainContainer, NeymarHome } from "../Server";
import Img from "../../img/NeymarHome.png"

const Home = () => {
    return (
        <>
            <MainContainer>
                <NeymarHome src={Img}></NeymarHome>
            </MainContainer>
            <Footer />
        </>
    );
};

export default Home;
