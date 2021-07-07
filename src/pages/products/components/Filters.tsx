interface PropsFilter{
    label: string;
}

interface Filter{
    filters: string;
    label: string;
    id:string;
}


const FilterItem: React.FC<PropsFilter> = ({ label })  =>{
    return (
        <>
        <li className="filters__item">
            <span className="filters__label">{label}</span>
            <img className="filters__img" src="/assets/filter.svg" alt="filtro" />
        </li>
        </>
        );
}
const Filters: React.FC<Filter | any> = ({ filters }) =>{
    return (
        <section className="main__filters filters">
            <ul className="filters__list">
                {filters.map((f: any) => <FilterItem key={f.id} label={f.label} />)}
            </ul>
        </section>
    );
}

export default Filters;