import React from "react"
import {Switch, Route} from "react-router-dom"
//components
import {Home} from "./components/home"
import {NewElement} from "./components/insert_element";


const Routes = (props, {childProps}) => {

    return (
        <Switch>
            <Route path="/new"
                   render={ ()=> <NewElement {...props}  />}
                   props={childProps}/>
            <Route path="/" exact
                   render={() => <Home {...props} />}
                    props={childProps}/>
        </Switch>
    )
};

export default Routes;