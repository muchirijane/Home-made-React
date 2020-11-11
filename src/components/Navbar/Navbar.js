import React, {useState, useEffect} from 'react';
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';
import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuIcon,
    Menu,
    MenuItem,
    MenuLink,
    MenuItemBtn,
    MenuLinkBtn,
} from './Navbar.styles';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth<= 1000){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    
    return (
        <div>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                            Home Made
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>

                        <Menu onClick={handleClick} click={click}>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/">Home</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/about">About</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/recipe">Recipes</MenuLink>
                            </MenuItem>
                            <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/order-now">
                                        <Button primary>Order Now</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/order-now">
                                        <Button primary bigFont onClick={closeMenu}>Order Now</Button>
                                    </MenuLinkBtn>
                                )
                                }
                            </MenuItemBtn>
                        </Menu>

                    </NavbarContainer>

                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;
