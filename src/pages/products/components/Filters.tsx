import { useContext } from "react";
import FilterContext from "../../../contexts/FilterContext";

interface PropsFilter {
    label: string;
    products: any;
}

interface Filter {
    filters: string;
    label: string;
    id: string;
}


const FilterItem: React.FC<PropsFilter> = ({ label, products }) => {

    const { setFilter, typeSelected, setTypeSelected } = useContext(FilterContext);

    function order(label: string) {
        console.log(label);
        switch (label) {
            case 'Preço':
                const productsPrice = products.sort(function (a: any, b: any) {
                    const newA = parseFloat(a.price);
                    const newB = parseFloat(b.price);
                    if (newA > newB) {
                        return 1;
                    }
                    if (newA < newB) {
                        return -1;
                    }
                    return 0;
                });
                setFilter(productsPrice.name);
                break;
            case 'Nome':
                const productsName = products.sort(function (a: any, b: any) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });
                setFilter(productsName.name);
                break;
            case 'Tamanho':
                const productsSize = products.sort(function (a: any, b: any) {
                    if (a.sizes < b.sizes) {
                        return 1;
                    }
                    if (a.sizes > b.sizes) {
                        return -1;
                    }
                    return 0;
                });
                setFilter(productsSize.name);
                break;
            case 'Cor':
                const productsColor = products.sort(function (a: any, b: any) {
                    if (a.color > b.color) {
                        return 1;
                    }
                    if (a.color < b.color) {
                        return -1;
                    }
                    return 0;
                });
                setFilter(productsColor.name);
                break;
        }
        setTypeSelected(label)
    }

    return (
        <>
            <li className="filters__item">
                <span className="filters__label" onClick={() => order(label)}>{label}</span>
                <img className={typeSelected === label ? 'filters__img__selected' : 'filters__img'} src="/assets/filter.svg" alt="filtro" />
            </li>
        </>
    );
}
const Filters: React.FC<Filter | any> = ({ filters, products }) => {
    return (
        <section className="main__filters filters">
            <ul className="filters__list">
                {filters.map((f: Filter) => <FilterItem key={f.id} label={f.label} products={products} />)}
            </ul>
        </section>
    );
}

export default Filters;