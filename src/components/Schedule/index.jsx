import React, { useContext, useState } from "react";
import { SchedulingContext } from "../../context/SchedulingContext";
import { Button } from "../Button";

export function Schedule() {
  const { schedule, submitSchedule } = useContext(SchedulingContext);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedTime, setSelectedTime] = useState(schedule[0]?.hora);

  const handleSubmit = () => {
    setIsFetching(true);

    const confirmation = window.confirm(
      "Tem certeza que deseja agendar neste dia/horário?"
    );

    if (confirmation) {
      submitSchedule(selectedTime, setIsFetching);
    }
  };

  if (schedule.length === 0) {
    return <p className="info-text">Não há horários disponíveis nesta data</p>;
  }

  return (
    <div>
      <select
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      >
        {schedule.map((time) => (
          <option value={time.hora}>
            {new Date(time.hora).toLocaleTimeString().slice(0, -3)}
          </option>
        ))}
      </select>

      <Button disabled={isFetching} onClick={handleSubmit}>
        Agendar
      </Button>
    </div>
  );
}
