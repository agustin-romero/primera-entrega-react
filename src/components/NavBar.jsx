import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "yellow"}}><Logo>DARTANAN</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/Dvdo7SfFrKjWzNGxYKiw' style={{textDecoration: "none", color: "blue"}}><MenuItem>Celulares</MenuItem></Link>
                    <Link to='/category/ONdT8pGuW3z5qRiNG5m0' style={{textDecoration: "none", color: "blue"}}><MenuItem>Consolas</MenuItem></Link>
                    <Link to='/category/hbTIiI67WX5vxPMc5rYu' style={{textDecoration: "none", color: "blue"}}><MenuItem>Parlantes</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>REGISTRO</MenuItem>
                    <MenuItem>INICIA SESION</MenuItem>
                    <MenuItem><Link to='/cart'><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;