import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated()
export class SelectFilter extends Component {
    render() {
        const { articles } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <>
                <Select
                closeMenuOnSelect={false}
                options={options}
                components={animatedComponents}
                isMulti
                />
            </>
        );
    }
};