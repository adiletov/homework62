import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/Header/Header";
import Chuy from "./Components/Chuy/Chuy";
import IssykKul from "./Components/IssykKuly/IssykKuly";
import Naryn from "./Components/Naryn/Naryn";
import Osh from "./Components/Osh/Osh";
import Batken from "./Components/Batken/Batken";
import Djalalabad from "./Components/DjalalAbad/DjalalAbad";
import Talas from "./Components/Talas/Talas";
import axios from 'axios';


class Content extends Component {
    state={
        country: null
    };
    async getInfo(){
        const response = await axios.get('https://restcountries.eu/rest/v2/name/Kyrgyzstan')
        this.setState({country: response.data})
        console.log(this.state.country)
    }
    componentDidMount() {
        this.getInfo()
    }

    render() {
        return (
            <BrowserRouter>
                <Header/>
                {this.state.country? <div className="infoBlock">
                    <h2>{this.state.country[0].nativeName}</h2>
                    <h4>Столица : {this.state.country[0].capital}</h4>
                    <p>Численность : {this.state.country[0].population}</p>
                    <img src={this.state.country[0].flag} alt=""/>
                </div> : null}

                <div>
                    <Switch>
                        <Route path="/chuy" component={Chuy}/>
                        <Route path="/issykkul" component={IssykKul}/>
                        <Route path="/naryn" component={Naryn}/>
                        <Route path="/osh" component={Osh}/>
                        <Route path='/batken' component={Batken}/>
                        <Route path='/djalalabad' component={Djalalabad} />
                        <Route path="/talas" component={Talas}/>
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }
}

export default Content;