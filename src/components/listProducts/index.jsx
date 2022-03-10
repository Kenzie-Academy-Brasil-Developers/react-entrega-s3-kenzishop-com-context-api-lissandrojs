import { useCart } from "../../providers/cart";
import { Container, ContentList, ContentTotal, TitleCard } from "./styles";
const ListProducts =()=>{
    const {cart} = useCart()

    const allProduct = ()=>{
        return cart.reduce((current,shape)=>current + shape.price,0)
    }
    return(
                <Container>
                   

                    <ContentList>
                            <TitleCard>
                                <p>Produto</p>
                                <p>Preco</p>
                            </TitleCard>
                            {cart.map((shape)=>(<> 
                            
                                    <section>
                                        <img src={shape.image} alt="" />
                                        <p>{shape.name}</p>
                                        <span>{shape.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                                        
                                    </section>
                            </>
                            ))}

                    </ContentList>
                    <ContentTotal>
                        <h2>Resumo dos pedidos</h2>
                        <div>
                            <p>{cart.length} Produtos</p>
                            <span>{allProduct().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        <button>Fazer pedido</button>
                    </ContentTotal>

                </Container>

)}

export default ListProducts