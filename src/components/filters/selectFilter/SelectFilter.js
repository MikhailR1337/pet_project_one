import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { selectChanged } from '../../../redux/actionCreaters/actionCreaters';

const animatedComponents = makeAnimated()
class SelectFilter extends Component {
    handleChange = (e) => {
        const { selectChanged } = this.props;
        selectChanged(e.map(elem => elem.value));
    }
    render() {
        const { articles } = this.props;
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
                components={animatedComponents}
                isMulti
                />
            </>
        );
    }
};

const mapStateToProps = (state) => ({
    articles: state.articles,
});

export default connect(mapStateToProps, { selectChanged })(SelectFilter);