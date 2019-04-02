import React, {Fragment} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';
import { minusDate } from '../../helper/util/index'
import { Jumbotron, Container, Row} from 'react-bootstrap';

const Calendar = ({from, to, modifiers, handleFromChange, handleToChange}) => (
    <Fragment>
      <div>
      <Jumbotron fluid>
        <Container>
          <Row className="justify-content-sm-center">
          <DayPickerInput
          value={from}
          placeholder="From"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: minusDate() },
            toMonth: to,
            modifiers,
            numberOfMonths: 1,
            onDayClick: () => to.getInput().focus()
          }}
          onDayChange={handleFromChange}
        />
          <DayPickerInput
            ref={el => (to = el)}
            value={to}
            placeholder="To"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: [{ after: new Date()}, { before: from }],
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 1,
            }}
            onDayChange={handleToChange}
          />
          </Row>
        </Container>
      </Jumbotron>
        </div>
    </Fragment>
);

export default Calendar;