import React, { useState, useEffect, Component } from 'react'
// import { useLocation } from 'react-router-dom'
// import axios from "axios"
import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
// import enFR from "date-fns/locale/en-FR"
// import "react-big-calendar/lib/sass/styles";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker"

export default function Test() {


    const locales = {
        "en-US": require("date-fns/locale/en-US"),
    }
    // const pattern = 'd.M.yyyy HH:mm:ss.SSS \'GMT\' XXX (z)'
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales
    })

    const myEventsList = [
        {
            title: "big meeting",
            start: new Date(2022, 5, 10),
            end: new Date(2022, 5, 10)
        },
         {
             title: "vication",
             start: new Date(2022, 5, 11),
             end: new Date(2022, 5, 11)
         },
          {
             title: "conferance",
             start: new Date(2022, 5, 14),
             end: new Date(2022, 5, 15)
         },
          {
             title: "tsarkil",
             start: new Date(2022, 5, 5),
             end: new Date(2022, 5, 5)
         },
          {
             title: "sport",
             start: new Date(2022, 6, 6),
             end: new Date(2022, 6, 6)
         },
    ]


    // const [datacontract, setDatacontract] = useState({});
    // const location = useLocation()
    // console.log(location)

    // useEffect(() => {
    //         axios.get(`http://localhost:5000/api/v1/companys/${location.state.id}`).then(res => {
    //             console.log(res.data)
    //             setDatacontract(res.data)

    //         }).catch(err => {
    //             console.log(err)
    //         })

    // }, [location.state.id]);




    return (
        <div className='conatianer'>
            <div class="row">
                <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                />
            </div>
        </div>



    )
}
