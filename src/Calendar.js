import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import ProgressBarInCalendar from './ProgressBarInCalendar'



BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


class Calendar extends Component {


  render() {
    return (
      <div>
        <ProgressBarInCalendar/>
      <BigCalendar
        selectable
        events={events}
        defaultView="week"
        scrollToTime={new Date()}
        defaultDate={new Date()}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={slotInfo =>
          alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
          )
        }
      />

      </div>
    )
  }
}

export default Calendar

