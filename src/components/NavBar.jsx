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
                    <Link to='/category/9' style={{textDecoration: "none", color: "blue"}}><MenuItem>Celulares</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "blue"}}><MenuItem>Consolas</MenuItem></Link>
                    <Link to='/category/5' style={{textDecoration: "none", color: "blue"}}><MenuItem>Parlantes</MenuItem></Link>                    
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