import React, {useState} from "react";
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import "react-modern-calendar-datepicker/lib/DatePicker.css"
// import DatePicker from "react-modern-calendar-datepicker";
import { Calendar, DayValue, DayRange, Day, utils} from "react-modern-calendar-datepicker";
import '../App.css';


export default function ModernCalendar()
{
    const {handleSubmit}=useForm<DayRange>();

    const [dayRange, setDayRange] = useState<DayRange>({
        from: null,
        to: null
    });
    
    const submitSickLeave:SubmitHandler<DayRange>=()=>{
        console.log(dayRange.from);
        console.log(dayRange.to);
    }
    return<form onSubmit={handleSubmit(submitSickLeave)}>
        <Calendar
            calendarClassName="App"
            value={dayRange}
            onChange={setDayRange}
            // minimumDate={utils(new Date().toDateString()).getToday()}
            // minimumDate={new Date()}
            colorPrimary="#0FBCF9"
            colorPrimaryLight="rgba(75, 207, 250, 0.4)"
           shouldHighlightWeekends
        />
        <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setDayRange({
                  from: null,
                  to: null
              })
            }}
            style={{
                color: "white",
                borderRadius: '0.5rem',
                padding: '1rem 3rem',
                borderColor: "white",
                backgroundColor: "#425F9C",
                fontSize: 17
              }}
          >
            Reset
        </button>
        <button 
            type="submit"
            style={{
                color: "white",
                borderRadius: '0.5rem',
                padding: '1rem 3rem',
                borderColor: "white",
                backgroundColor: "#425F9C",
                fontSize: 17
              }}
        >
            Confrim Sick Leave
        </button>
    </form>
}

