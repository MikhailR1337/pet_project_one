import React, { Component } from 'react';

export const AccordionDecorator = (OriginalComponent) => class Accordion extends Component {
    state = {
        isOpenId: null,
    }

    render() {
        const { isOpenId } = this.state;
        return (
            <OriginalComponent isOpenId={isOpenId} isOpenHandler={this.isOpenHandler} />
        );
    }

    isOpenHandler = (id) => () => {
        const { isOpenId } = this.state;
        if (id === isOpenId) {
            this.setState({ isOpenId: null} );
        } else {
            this.setState({ isOpenId: id });
        }
    };
};