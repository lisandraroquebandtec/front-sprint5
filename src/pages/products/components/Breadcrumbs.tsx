import { useContext } from "react";
import CategoriesContext from "../../../contexts/CategoriesContext";

interface PropsBreadcrumb {
    link: string;
    label: string;
}

const BreadcrumbItem: React.FC <PropsBreadcrumb> = ({ link, label }) =>{
    return (
        <li className="breadcrumbs__item">
            { link ?
                <>
                    <a className="breadcrumbs__link" href={link}>{label}</a>
                    <span className="breadcrumbs__item  breadcrumbs__separator">/</span>
                </>
                :
                <span className="breadcrumbs__link">{label}</span>
            }
        </li>
    );
}

const Breadcrumbs: React.FC = () => {
    const { categories } = useContext(CategoriesContext);
    return (
        <section className="main__breadcrumbs breadcrumbs">
            <nav>
                <ol className="breadcrumbs__list">
                    {categories.current && categories.current.map((c:any) => <BreadcrumbItem key={c.id} link={c.link} label={c.name} />)}
                </ol>
            </nav>
        </section>
    )
}

export default Breadcrumbs;