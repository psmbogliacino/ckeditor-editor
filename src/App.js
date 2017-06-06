import React, { Component } from 'react';
import CKEditor from './CKEditor/CKEditor'


class App extends Component {

  onChange (editorState) {
      console.log(editorState);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Editor</h2>
        </div>

        <CKEditor id="instance123" value="hola mundo" onChange={this.onChange} />


      </div>
    );
  }
}

export default App;
