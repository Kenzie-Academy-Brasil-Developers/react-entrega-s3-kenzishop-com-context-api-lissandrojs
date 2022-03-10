import { useCart } from "../../providers/cart";
import { useProducts } from "../../providers/products";
import { Container, Content } from "./styles";
const Home = ()=>{
    
    const {products} = useProducts()
    const {addToCart} = useCart()
 
    console.log()
    return(
                <Container>
                    {products.map((product,index)=>(<>
                        <Content >
                            
                            <img src={product.image} alt={product.name} />
                            <div >
                                <h3>{product.name}</h3>
                                <span>{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                                <button  onClick={()=> addToCart(product)}>Adicionar no Carrinho</button>
                            </div>
                        </Content>
                    
                    </>))}
                    
                </Container>

)}

export default Home