import React, {Component, Fragment} from 'react';
import Header from "./utilidades/Header";
import FormContainer from "../Containers/FormContainer";
import Footer from "./utilidades/Footer";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <FormContainer/>
                <Footer/>
            </Fragment>
        )
    }
}

export default App;
