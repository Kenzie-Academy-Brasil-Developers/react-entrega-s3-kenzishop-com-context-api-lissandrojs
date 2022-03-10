import { Route,Switch } from "react-router-dom";
import Cart from "../page/Cart";
import Vitrine from "../page/Vitrine";

const Routes =()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Vitrine/>
            </Route>

            <Route path="/cart">
                <Cart/>
            </Route>
        </Switch>
    )
}
export default Routes