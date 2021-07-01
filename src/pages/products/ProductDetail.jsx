import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProductsService from "../../services/ProductsService";

const Detail = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 10px;
`;

const Price = styled.p`
    color: red;
    font-weight: 900;
    text-align: center;
    line-height: 100px;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

function ProductsDetail() {
    const tamanhos = [4, 6, 8, 10];
    const [product, setProduct] = useState([]);
    const [tamanho, setTamanho] = useState(tamanhos[0]);
    // const [filters, setFilters] = useState([]);

    // const { filter } = useContext(FilterContext);
    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);


    const history = useHistory();

    const { sku } = useParams();

    // eslint-disable-next-line
    useEffect(() => loadProduct(), []);

    function checkout() {
        window.alert("Produto adicionado à sacola!");
        voltar();
    }

    function voltar() {
        history.goBack();
    }

    function loadProduct() {
        addRequest();
        ProductsService.get()
            .then(r => {
                const p = r.products.find(p => p.sku + '' === sku);
                if (!p) {
                    throw new Error('Produto não encontrado!');
                }

                setProduct(p);
                // setFilters(r.filters);
            })
            .catch((e) => setMessage(e.message))
            .finally(() => removeRequest());
    }

    return (
        <>
            <Detail>
                <div>
                    <img src={'/' + product.image} alt="" />
                </div>
                <Description>
                    <p>
                        {product.name}
                    </p>
                    <p>Selecionar Tamanho: {tamanho}</p>
                    <div>
                        {tamanhos.map(t =>
                            <button key={t} onClick={() => setTamanho(t)}>{t}</button>
                        )}
                    </div>
                    <ButtonGroup>
                        <Price>R$ {product.price}</Price>
                        <button onClick={() => checkout()}>Adicionar à Sacola</button>
                        <button onClick={() => voltar()}>Cancelar</button>
                    </ButtonGroup>
                </Description>
            </Detail>
        </>

    );
}

export default ProductsDetail;