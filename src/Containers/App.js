import React, {Component} from 'react';
import Header from "../Components/utilidades/Header";
import FormContainer from "./FormContainer";
import Footer from "../Components/utilidades/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ListContainer from "./ListContainer";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' component={ListContainer}/>
                    <Route exact path='/add' component={FormContainer}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default App;
