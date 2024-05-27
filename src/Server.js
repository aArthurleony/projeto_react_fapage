import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
    width: 100%;
    height: 100px;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 5rem;
    position: absolute;
`;

export const Container = styled.div`
    width: 300px;
    height: 300px;
`;

export const LinkPages = styled(Link)`
    color: black;
    font-weight: 500;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: black;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
    }

    &:hover::before {
        visibility: visible;
        width: 100%;
    }
`;

export const ImageNavBar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

export const DivLink = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
`;

export const H1Erro = styled.h1`
    font-size: 30px;
`;

export const Silencioimg = styled.img`
    width: 800px;
    height: 160px;
`;

export const DivErro = styled.div`
    margin: 200px auto;
    width: max-content;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const H1Campeao = styled.h1`
    margin-top: -80px;
    font-size: 40px;
    color: #2c3e50;
    text-transform: uppercase;
`;

export const DivCampeao = styled.div`
    width: 80%;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    padding: 20px;
`;

export const UCLimg = styled.img`
    margin-top: 3%;
    width: 25%;
    height: 15%;
    -webkit-mask-image: linear-gradient(to top, transparent 50%, black 85%);
    mask-image: linear-gradient(to top, transparent 30%, black 75%);
`;

export const ContainerTitulos = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
`;

export const AnoTitulo = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #2980b9;
    margin-top: 20px;
    margin-bottom: 10px;
    border-left: 4px solid #2980b9;
    padding-left: 10px;
`;

export const TituloItem = styled.p`
    font-size: 16px;
    color: #2c3e50;
    margin-left: 20px;
    margin-bottom: 5px;
`;

export const TituloGeral = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #16a085;
    margin-bottom: 10px;
    margin-top: 10px;
`;
export const FooterContainer = styled.footer`
    width: 100%;
    padding: 20px;
    background-color: #f8f8f8;
    text-align: center;
    border-top: 1px solid #e7e7e7;
    position: fixed;
    bottom: 0;
    left: 0;
    
`;

export const FooterText = styled.p`
    font-size: 14px;
    color: #777;
`;

export const FooterNav = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 20px;
`;

export const FooterLink = styled(Link)`
    color: #2980b9;
    text-decoration: none;
    font-size: 14px;
    position: relative;
    transition: color 0.2s ease-in-out;

    &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: #2980b9;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
    }

    &:hover::before {
        visibility: visible;
        width: 100%;
    }
`;

export const MainContainer = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    
`;
export const NeymarHome = styled.img`
    margin-left: -25%;
    -webkit-mask-image: linear-gradient(to top, transparent 50%, black 85%);
    mask-image: linear-gradient(to top, transparent 40%, black 72%);
`
