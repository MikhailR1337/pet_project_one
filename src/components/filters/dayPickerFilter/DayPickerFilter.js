import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { styleForHelmet } from './styleForHelmet';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ru';
import { daypickerChanged } from '../../../redux/actionCreaters/actionCreaters';

class DayPickerFilter extends React.Component {
  static defaultProps = {
    numberOfMonths: 1,
  };

  handleDayClick = (day) => {
    const { daypickerChanged, dateRange } = this.props;
    const range = DateUtils.addDayToRange(day, dateRange);
    daypickerChanged(range);
  }

  handleResetClick = (event) => {
    event.preventDefault();
    const { daypickerChanged } = this.props;
    daypickerChanged({from: undefined, to: undefined});
  }

  render() {
    const { from, to } = this.props.dateRange;
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
};

// достаем нужные нам части из redux
const mapStateToProps = (state) => ({
  dateRange: state.filters.dateRange
})
// прокидываем в props daypickerChanged
export default connect(mapStateToProps, { daypickerChanged })(DayPickerFilter);