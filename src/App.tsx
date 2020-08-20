import React from 'react';
import ReactDOM from 'react-dom';
import {Typography} from "@material-ui/core";

const App = (): JSX.Element => {
  return (
      <div className="App">
        <Typography variant={'h3'}>
            It works!
        </Typography>
      </div>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"))
