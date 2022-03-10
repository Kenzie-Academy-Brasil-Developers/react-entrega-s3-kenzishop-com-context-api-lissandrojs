import { Container, Content, IconHeader } from "./styles"

import { FiShoppingCart } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useCart } from "../../providers/cart";


const Header = ()=>{
        const history = useHistory()
        const {cart} = useCart()
        console.log(cart.length)
        return(
                <>
                    <Container >
                        <h2 onClick={()=> history.push("/")}>Kenzie Skate Shop</h2>
                        <Content>
                                <IconHeader onClick={()=>history.push("/cart")}>
                                        
                                        <FiShoppingCart/>
                                        <span>{cart.length}</span>
                                        <p>Carinho</p>
                                </IconHeader>
                                <IconHeader>
                                        <FiLogIn/>
                                        <p>Entrar</p>
                                </IconHeader>
                        </Content>
                       
                    </Container>
                </>)
                

}

export default Header