import { useContext } from "react";
import styled from "styled-components";
import FilterContext from "../contexts/FilterContext";
import Menu from "./Menu";

const StyledHeader = styled.header`
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;

    @media (max-width: 1200px) {
        .header--floating {
            position: fixed;
            top: 0;
            background-color: #fff;
        }
    }
`;

const HeaderContainer = styled.div`
    margin: auto;
    width: 95%;
    max-width: 1200px;

    
`;

const HeaderMobile = styled.div`
    display: none;
    margin-bottom: 25px;

    @media (max-width: 1200px) {
        display: flex;
        align-items: center;
    }
`;

const HeaderDesktop = styled.div`
    @media (max-width: 1200px) {
        display: none;
    }
`;

// FIXME: --active
const HeaderDrawer = styled.div`
    width: 24px;
    opacity: 54%;
    display: none;
    display: block;
`;

// FIXME: .close__title
const MenuTitle = styled.div`
    text-transform: lowercase;
    font-size: 0.5625rem;
    font-weight: 400;
    line-height: 0;
`;

const HeaderLogo = styled.h1`
    height: 70px;
    line-height: 70px;
    text-align: center;

    @media (max-width: 1200px) {
        flex-grow: 1;
    }
`;

const HeaderImg = styled.img`
    height: 25px;
    transform: translateY(10px);
`;

/*
.header__search {
  position: relative;
}

.header__icon {
  width: 24px;
  opacity: 26%;
  top: 8px;
  position: absolute;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.26);
  line-height: 40px;
}

.header__input {
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding-left: 40px;
}

.header__input:hover {
  border-color: #000;
}

.header__input::placeholder {
  font-size: 0.9375rem;
  font-weight: 600;
  font-family: "Open Sans";
  color: #9b9b9b;
}

@media (max-width: 1200px) {
  .header__menu {
    display: none;
  }
}

.header__menu .menu__list {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
}

.header__menu .menu__link {
  font-size: 0.8125rem;
  font-weight: 600;
  color: #000;
  text-transform: uppercase;
  padding-bottom: 5px;
  vertical-align: baseline;
}

.header__menu .menu__link:hover {
  border-bottom: 2px solid #000;
}
*/

function Header() {

    const { setFilter } = useContext(FilterContext);

    return (
        <StyledHeader>
            <HeaderContainer>
                <HeaderMobile>
                    <HeaderDrawer>
                        <img src="assets/menu.svg" alt="menu" />
                        <MenuTitle>menu</MenuTitle>
                    </HeaderDrawer>
                    {/* <HeaderDrawer>
                        <img src="assets/close.svg" alt="fechar menu" />
                        <MenuTitle>fechar</MenuTitle>
                    </HeaderDrawer> */}
                    <HeaderLogo>
                        <HeaderImg src="assets/rchlo.svg" alt="Logo" />
                    </HeaderLogo>
                </HeaderMobile>
                <HeaderDesktop>
                    <HeaderLogo>
                        <HeaderImg src="assets/riachuelo.svg" alt="Logo" />
                    </HeaderLogo>
                </HeaderDesktop>
                <div className="header__search">
                    <img className="header__icon" src="assets/search.svg" alt="lupa" />
                    <input className="header__input" type="search" placeholder="O que você está procurando?"
                        onChange={(event) => setFilter(event.target.value)}
                    />
                </div>

                <Menu />
            </HeaderContainer>
        </StyledHeader>
    );
}

export default Header;