/* globals CKEDITOR */
import React, { Component } from 'react'


class CKEditor extends Component {
    constructor(props) {
        super(props);
        this.elementName = "editor_" + this.props.id;

        this.componentDidMount = this.componentDidMount.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onChange() {
        const data = CKEDITOR.instances[this.elementName].getData();
        this.props.onChange(data);
    }
    render() {
        return (
            <div contentEditable={true} id={this.elementName} suppressContentEditableWarning={true}>{this.props.children}</div>
        )
    }

    componentDidMount() {
        let configuration = {
            toolbar: 'Basic',
            toolbarLocation:'top'
        };

        CKEDITOR.inline(this.elementName, configuration);
        CKEDITOR.instances[this.elementName].on("change", this.onChange);
    }
}



export default CKEditor;