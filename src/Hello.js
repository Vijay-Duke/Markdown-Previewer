/*
import React from 'react';
import * as marked from 'react-marked'
import { MarkdownPreview } from 'react-marked-markdown';


class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue ? props.defaultValue : '',
        };
    }
    handleTextChange(e) {
        this.setState({ value: e.target.value });
        if (this.props.onTextChange) {
            this.props.onTextChange(e.target.value);
        }
    }
    clear() {
        this.setState({ value: '' });
    }
    render() {
        const {
            placeholder,
            className,
            inputClassName,
            previewClassName,
        } = this.props;
        const { value } = this.state;
        return (
            <section className={ className }>
                <MarkdownInput
                    placeholder={ placeholder }
                    onChange={ this.handleTextChange.bind(this) }
                    value={ value }
                    className={ inputClassName }
                />

                <MarkdownPreview
                    value={ value }
                    className={ previewClassName }
                />
            </section>
        );
    }
}
export default Hello;*/
