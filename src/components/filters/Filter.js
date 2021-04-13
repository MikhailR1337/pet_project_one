import React, { Component } from 'react';
import SelectFilter from './selectFilter/SelectFilter';
import DayPickerFilter from './dayPickerFilter/DayPickerFilter';
import { CSSTransition } from 'react-transition-group';

export class Filter extends Component {

    state = {
        isOpen: false
    }

    isOpenHandler = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen
        })
    }

    render() {
        const { isOpen } = this.state;
        // Меняем классы в зависимости от isOpen (Класс dsblock отвечает за открытие/закрытие)
        this.toggleCollapsibleBody = isOpen ? "collapsible-body dsblock cyan lighten-5": "collapsible-body";
        // Меняем текст Badge в зависимости от isOpen
        this.toggleBadgeCaption = isOpen ? "Закрыть": "Сортировка";
        // Меняем icon в зависимости от isOpen
        this.toggleIconImage = isOpen ? "filter_list": "dehaze";
        return (
            <ul className="collapsible">
                <li>
                    <div className="collapsible-header cyan lighten-4" onClick={this.isOpenHandler}>
                        <i className="material-icons green-text text-darken-4">{this.toggleIconImage}</i>
                        Фильтры
                        <span className="new badge green" data-badge-caption={this.toggleBadgeCaption}></span>
                    </div>
                    <div className={this.toggleCollapsibleBody}>
                        <CSSTransition in={isOpen} timeout={500} classNames="filter">
                            <div className="row">
                                <div className="col s4">
                                    <DayPickerFilter />
                                </div>
                                <div className="col s8">
                                    <SelectFilter />
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </li>
            </ul>
        );
    }
}