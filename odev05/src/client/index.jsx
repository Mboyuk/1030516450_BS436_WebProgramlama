import React from "react";
import  ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import {Game} from "./game";
import {Home} from "./home";


const notFound=()=>{
    return(
        <div>
            <h2>Sayfa bulunamadı: 404</h2>
            <p>aradığınız sayfa bulunamadı</p>
        </div>
    )
}
class App extends React.Component{
    render() {
        return(
            <HashRouter>
                <Switch>
                    <Route exact path="/game" component={Game}/>
                    <Route exact path="/" component={Home}/>
                    <Route component={notFound} />
                </Switch>
            </HashRouter>

        )
    }


}
ReactDOM.render(<App />, document.getElementById("root"));