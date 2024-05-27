import { LinkPages, NavBar, ImageNavBar, DivLink } from "../Server"

import Img from '../../img/neymar.jpg'
const BarraDeCima = () => {
    return (
        <>
            <NavBar>
                <LinkPages to="/"><ImageNavBar src={Img}/></LinkPages>
                <DivLink>
                <LinkPages to="/">Home</LinkPages>
                <LinkPages to="/sobre"> teams</LinkPages>
                <LinkPages to="/Titulos"> titles</LinkPages>
                <LinkPages to="/Serviços"> Bio</LinkPages>
                <LinkPages to="/Serviços"> Contact</LinkPages>
                </DivLink>
            </NavBar>
        </>
    )
}

export default BarraDeCima