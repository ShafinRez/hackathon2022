import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar(){

    return (
        <div>
            <FullCalendar
                plugins={[ dayGridPlugin, timeGridPlugin,listPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events='https://fullcalendar.io/demo-events.json?start=2022-01-01&end=2022-12-31'
                customButtons={{
                    Week:{
                        text:'Hours-Week',
                    
                    }
                }}
        
                headerToolbar = {{
                    start: 'prev,today,next',
                    center: 'title',
                    end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                    
                }}
                editable={true}
                selectable={true}
                selectMirror={true}
                
            />

        </div>
        
      
    )
}

export default Calendar;