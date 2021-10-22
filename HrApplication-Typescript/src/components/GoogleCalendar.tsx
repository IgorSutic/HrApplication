//---------------------------------------------

// import 'whatwg-fetch';
// import React from 'react';
// import Scheduler from 'devextreme-react/scheduler';
// import CustomStore from 'devextreme/data/custom_store';

// function getData(_:any, requestOptions:any) {

//   const PUBLIC_KEY = 'AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k',
//     CALENDAR_ID = 'f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com';
//   const dataUrl = [ 'https://www.googleapis.com/calendar/v3/calendars/',
//     CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');

//   return fetch(dataUrl, requestOptions).then(
//     (response) => response.json()
//   ).then((data) => data.items);
// }

// const dataSource = new CustomStore({
//   load: (options) => getData(options, { showDeleted: false })
// });

// const currentDate = new Date();
// const views:any = ['day', 'workWeek', 'month'];

// class GoogleCalendar extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div className="long-title">
//           <h3>QCerris</h3>
//         </div>
//         <Scheduler
//           dataSource={dataSource}
//           views={views}
//           defaultCurrentView="workWeek"
//           defaultCurrentDate={currentDate}
//           height={500}
//           startDayHour={7}
//           editing={false}
//           showAllDayPanel={false}
//           startDateExpr="start.dateTime"
//           endDateExpr="end.dateTime"
//           textExpr="summary"
//           timeZone="Europe/Belgrade" />
//       </React.Fragment>

//     );
//   }
// }

// export default GoogleCalendar;

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { DatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';


// export default function CustomInput() {
//     const [selectedDate, handleDateChange] = React.useState<Date | null | number|any>(new Date());
//     const [selectedDate1, handleDateChange1] = React.useState<Date | null | number|any>(new Date());

//     // const [value1, setValue1] = React.useState<Date | null | number|any>(new Date());

//     function getDifferenceInDays(date1: number | Date | any, date2: number | Date | any) {
//         const diffInMs = Math.abs(date2 - date1);
//         return diffInMs / (1000 * 60 * 60 * 24);
//     }

//     return (
//         <div>
//             <div>
//                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                     <DatePicker value={selectedDate} onChange={handleDateChange} />
//                     <DatePicker value={selectedDate1} onChange={handleDateChange1} />
//                 </MuiPickersUtilsProvider>
//             </div>
//             <br/>
//             <div>
//                 {getDifferenceInDays(selectedDate.getTime(),selectedDate1.getTime()) ?  
//                     <Button variant="contained" color="success" > Submit </Button> 
//                     : 
//                     <Button variant="contained" color="error"> Error </Button>
//                 }
//             </div>
//             <div>
              
//             </div>
//         </div>
//     );
// }

//------------------------------------------------------------------------------------

import React from 'react';
// import './App.css';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
// import 'react-big-calendar/lib/sass/styles';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import addWeeks from 'date-fns/addWeeks';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


//------------------------------------------------------------------

interface Props{
    title?:string,
    start: Date  ,
    end?:Date ,
    allDay?: boolean | null
}

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events : Props[] = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 10, 0),
        end: new Date(2021, 10, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 11, 7),
        end: new Date(2021, 11, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 10, 20),
        end: new Date(2021, 10, 23),
    },
];

// function getWeeksAfter(date: Date | null, amount: number) {
//   return date ? addWeeks(date, amount) : undefined;
// }

//-----------------------------------------------------------------------------

function GoogleCalendar() {
  
    // const startValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 14);
    // const endValue: Date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15);
    // const minDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 8);
    // const maxDate: Date = new Date(new Date().getFullYear(), new Date().getMonth()+1, 20);
  
    const [value, setValue] = React.useState<Date | any>(new Date());
    const [value0, setValue0] = React.useState<Date | any>(new Date());

    // const [value1, setValue1] = React.useState<DateRange<Date>>([null, null]);



    const [newEvent, setNewEvent] = useState({title:"", start:new Date(), end: new Date()})
    const [allEvents, setAllEvents] = useState(events)

    function handleEvent(){
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <div>
        {/* <DateRangePickerComponent placeholder="Enter Date Range"
        startDate={startValue}
        endDate={endValue}
        min={minDate}
        max={maxDate}
        minDays={3}
        maxDays={5}
        format="dd-MMM-yy"
        onChange={(start : Date) => setNewEvent({ ...newEvent, start })}
        //Uncomment below code to show month range picker. Also comment the properties min, max, mindays and maxdays
        // start="Year"
        // depth="Year"
        ></DateRangePickerComponent> */}

        {/* Prvi datepicker: //style={{ marginRight: "10px" }} */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div>
                <DatePicker
                    disablePast
                    label="Start date"
                    value={value}
                    onChange={(value) => {
                        setValue(value)
                        setNewEvent({ ...newEvent, start:value })}} 
                    renderInput={(params) => <TextField {...params} />}
                />
            </div>
            <br/>
            <div>
                <DatePicker
                    disablePast
                    label="End date"
                    value={value0}
                    onChange={(value0) => {
                        setValue0(value0)
                        setNewEvent({ ...newEvent, end:value0 })}} 
                    renderInput={(params) => <TextField {...params} />}
                />
            </div>

             {/* <DateRangePicker
                disablePast
                value={value1}
                maxDate={getWeeksAfter(value[0], 4)}
                onChange={(newValue) => {
                    setValue1(newValue);
                    // setNewEvent({ ...newEvent, newValue })}} 

                }} */}
                {/* renderInput={(startProps, endProps) => (
                <React.Fragment>
                    {/* setNewEvent([ ...newEvent, {startProps, endProps}])  */}
                    {/* <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                </React.Fragment> */}
                
            {/* /> */}

        </LocalizationProvider>
        <br/>
        <div>
            {/* <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} /> */}
            {/* <DatePicker placeholderText="Start Date"  selected={newEvent.start} onChange={(start : Date) => setNewEvent({ ...newEvent, start })} />
            <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end : Date) => setNewEvent({ ...newEvent, end })} /> */}
{/*             
            <button  style={{ marginTop: "10px" }} onClick={handleEvent}>
                Add Event
            </button> */}
            <div>
                <Button variant="contained" size="large" onClick={handleEvent}>
                    Submit
                </Button>
            </div>
        </div>
        <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{height: 500, margin:"50px"}} />
        </div>
    );
}

export default GoogleCalendar;