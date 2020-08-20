import React from 'react';
import ReactDOM from 'react-dom';
import {Typography} from "@material-ui/core";
import { Provider } from 'react-redux';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

interface AppState {

}

class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
    }
    render(): React.ReactElement {
        if (true/* state logged in */) {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/webui'}>
                            <div className="App">
                                <Typography variant={'h3'}>
                                    It works!
                                </Typography>
                                <Link to={'a'}>asd</Link>
                            </div>
                        </Route>
                        <Route path={'/webui/'}>
                            <h1>A</h1>
                        </Route>
                    </Switch>
                </BrowserRouter>
            )
        } else {
            /* return ( Login Page

            )*/
        }
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"))
