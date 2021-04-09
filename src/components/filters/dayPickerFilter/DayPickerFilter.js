import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { styleForHelmet } from './styleForHelmet';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ru';

export class DayPickerFilter extends React.Component {
  static defaultProps = {
    numberOfMonths: 1,
  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick = (event) => {
    event.preventDefault();
    this.setState(this.getInitialState());
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample">
        <span className="card-title">
          {!from && !to && 'Выберите первый день.'}
          {from && !to && 'Выберите второй день.'}
          {from &&
            to &&
            `${from.toLocaleDateString()} -
                ${to.toLocaleDateString()}`}{' '}
          {from && to && (
            <a href="/" className="waves-effect waves-light btn-small red mt-1" onClick={this.handleResetClick}>
              <i className="material-icons right">clear</i>
              сбросить
            </a>
          )}
        </span>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          localeUtils={MomentLocaleUtils}
          locale='ru'
        />
        <Helmet>
          <style>{styleForHelmet}</style>
        </Helmet>
      </div>
    );
  }
}