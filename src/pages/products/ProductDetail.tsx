import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProductsService from "../../services/ProductsService";

interface PropsProduct{
    sku:string;
    image:string;
    name:string;
    price:string;
}

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

const ProductsDetail: React.FC = () => {
    const tamanhos = [4, 6, 8, 10];
    const [product, setProduct] = useState<PropsProduct | any>([]);
    const [tamanho, setTamanho] = useState(tamanhos[0]);

    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);

    const history = useHistory();

    const  {sku}:PropsProduct = useParams();

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
            .then((r:any) => {
                const p: any = r.products.find((p:any) => p.sku + '' === sku);
                if (!p) {
                    throw new Error('Produto não encontrado!');
                }

                setProduct(p);
                // setFilters(r.filters);
            })
            .catch((e:any) => setMessage(e.message))
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