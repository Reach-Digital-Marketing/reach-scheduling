import React, { useContext, useState } from "react";
import { Calendar as ReactCalendar } from "react-calendar";
import { SchedulingContext } from "../../context/SchedulingContext";

import "react-calendar/dist/Calendar.css";
import { Container } from "./styles";
import { Button } from "../Button";

function getDate(date) {
  return date.toISOString().match(/^\d{4}-\d{2}-\d{2}/)[0];
}

function filterDates(dates) {
  return dates.filter((d) => {
    const now = new Date();
    const givenDate = new Date(d.hora);
    return givenDate.getTime() > now.getTime();
  });
}

export function Calendar() {
  const { dentist, setStep, setSchedule } = useContext(SchedulingContext);
  const [selectedDate, setDate] = useState(new Date());
  const [isFetching, setIsFetching] = useState(false);

  const today = new Date();
  const next2Months = new Date();
  next2Months.setMonth(today.getMonth() + 2);

  const fetchDates = () => {
    setIsFetching(true);

    window.wp.ajax
      .post("get_free_schedule", {
        id_dentista: dentist,
        data_inicial: getDate(selectedDate),
        data_final: getDate(selectedDate),
      })
      .done((response) => {
        const data = JSON.parse(response);
        const filteredSchedule = filterDates(data.horarios);
        setSchedule(filteredSchedule);
        setStep(2);
      })
      .fail((error) => {
        console.log(error);
      })
      .always(() => setIsFetching(false));
  };

  const handleDateChange = (value) => {
    setDate(value);
    setStep(0);
  };

  return (
    <Container>
      <ReactCalendar
        onChange={handleDateChange}
        value={selectedDate}
        formatMonth="MM"
        minDate={today}
        maxDate={next2Months}
        minDetail="month"
        next2Label={null}
        prev2Label={null}
      />

      <Button onClick={fetchDates} disabled={isFetching}>
        Consultar Horários Disponíveis
      </Button>
    </Container>
  );
}
