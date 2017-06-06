import React, { Component } from 'react'
 

class CKEditor extends Component {
    constructor(props) {
        super(props);
        this.elementName = "editor_" + this.props.id;
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    render() {
        return (
            <textarea name={this.elementName} defaultValue={this.props.value}></textarea>
        )
    }

    componentDidMount() {
        let configuration = {
            toolbar: "Basic"
        };
        window.CKEDITOR.replace(this.elementName, configuration);
        window.CKEDITOR.instances[this.elementName].on("change", function () {
            let data = window.CKEDITOR.instances[this.elementName].getData();
            this.props.onChange(data);
        }.bind(this));
    }
}



export default CKEditor;