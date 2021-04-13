import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { selectChanged } from '../../../redux/actionCreaters/actionCreaters';

const animatedComponents = makeAnimated()
class SelectFilter extends Component {
    handleChange = (e) => {
        const { selectChanged } = this.props;
        selectChanged(e.map(elem => {
            return { label: elem.label, value: elem.value }
        }));
    }
    render() {
        const { articles, selected } = this.props;
        console.log(selected)
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <>
                <Select
                onChange={this.handleChange}
                closeMenuOnSelect={false}
                options={options}
                value={selected}
                components={animatedComponents}
                isMulti
                />
            </>
        );
    }
};

const mapStateToProps = (state) => ({
    selected: state.filters.selected,
    articles: state.articles
    
});

export default connect(mapStateToProps, { selectChanged })(SelectFilter);