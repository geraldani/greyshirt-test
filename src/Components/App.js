import React, {Component, Fragment} from 'react';
import Header from "./utilidades/Header";
import FormContainer from "../Containers/FormContainer";

class App extends Component {
    render(){
        return(
            <Fragment>
                <Header />
                <FormContainer />
            </Fragment>
        )
    }
}

export default App;
