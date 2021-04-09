import React, { Component } from 'react';
// экспортируем декоратор, который принимает компонент, а возвращает класс-обертку с новым функционалом
export const accordionDecorator = (OriginalComponent) => class Accordion extends Component {
    // Задаем state без конструктора 
    state = {
        isOpenId: null,
    }

    // возвращаем исходный компонент с переданным, через props новым функционалом
    render() {
        const { isOpenId } = this.state;
        return (
            <OriginalComponent {...this.props} isOpenId={isOpenId} isOpenHandler={this.isOpenHandler} />
        );
    }
    
    // метод, замыкающий в себе id и позволяющий аккордиону функционировать 
    isOpenHandler = (id) => () => {
        const { isOpenId } = this.state;
        this.setState({
            isOpenId: isOpenId === id ? null: id
        })
    };
};