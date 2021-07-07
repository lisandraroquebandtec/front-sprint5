import { useContext } from "react";
import CategoriesContext from "../contexts/CategoriesContext";

const Menu: React.FC = () =>{
    const { categories } = useContext(CategoriesContext);
    
    return (
        <nav className="header__menu menu">
            <ul className="menu__list">
                {categories.all 
                && categories.all.map((m:any) =>
                 <MenuItem key={m.id} label={m.label} />)}
            </ul>
        </nav>
    );
}

const MenuItem: React.FC<any> = ({label}) =>{
    return (
        <li className="menu__item">
            <a className="menu__link" href="#home">
                <span>{label}</span>
            </a>
        </li>
    );
}

export default Menu;