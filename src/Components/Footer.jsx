import React from 'react';
import { FooterContainer, FooterText, FooterNav, FooterLink } from '../Server';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>&copy; 2024 Meu Site de Fãs. Todos os direitos reservados.</FooterText>
            <FooterNav>
                <FooterLink to="/sobre">Sobre</FooterLink>
                <FooterLink to="/contato">Contato</FooterLink>
                <FooterLink to="/privacidade">Privacidade</FooterLink>
            </FooterNav>
        </FooterContainer>
    );
};

export default Footer;
