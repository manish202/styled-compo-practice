import {NavLink} from "react-router-dom";
import styled from "styled-components";
const StyledHeader = styled.header`
    padding: 10px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    .logo a{
        color: ${({theme}) => theme.colors.text};
        display: inline-block;
        letter-spacing: 2px;
    }
`;
const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    li a{
        display:block;
        color: ${({theme}) => theme.colors.text};
        font-size: 22px;
        margin: 10px;
        letter-spacing: 1px;
        &:hover,&.active{
            color: ${({theme}) => theme.colors.main};
        }
    }
`;
const Header = () => {
    return(
        <StyledHeader>
            <div className="logo">
                <NavLink to="/"><h1>Manish</h1></NavLink>
            </div>
            <Menu>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </Menu>
        </StyledHeader>
    )
}
export default Header;