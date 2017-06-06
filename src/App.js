import React, { Component } from 'react';
import CKEditor from './CKEditor/CKEditor'
import Article from './components/Article'


class App extends Component {
  constructor(props) {
    super(props);

  }

  onChange(editorState) {
    console.log(editorState);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Editor</h2>
        </div>

        <CKEditor id="instance123" onChange={this.onChange}>
          Lorem ipsum <img alt='' src='https://facebook.github.io/react/img/logo.svg' style={{ height: '150px', width: '150px' }} />

          <Article />
        </CKEditor>


      </div>
    );
  }
}

export default App;
