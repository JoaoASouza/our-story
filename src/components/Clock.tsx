"use client";
import { useRelationshipDuration } from "../hooks/date.hook";

export default function Clock() {
  const { duration } = useRelationshipDuration();
  const years = duration.years ?? 0;
  const months = duration.months ?? 0;
  const days = duration.days ?? 0;
  const hours = duration.hours ?? 0;
  const minutes = duration.minutes ?? 0;
  const seconds = duration.seconds ?? 0;

  const yearsText = duration.years === 1 ? "ano" : "anos";
  const monthsText = duration.months === 1 ? "mês" : "meses";
  const daysText = duration.days === 1 ? "dia" : "dias";
  const hoursText = duration.hours === 1 ? "hora" : "horas";
  const minutesText = duration.minutes === 1 ? "minuto" : "minutos";
  const secondsText = duration.seconds === 1 ? "segundo" : "segundos";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
      className="montserrat-100"
    >
      <p>Estamos juntos há:</p>
      <p>
        <span style={{ fontWeight: "bold" }}>{years} </span> {yearsText}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>{months} </span>
        {monthsText}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>{days} </span>
        {daysText}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>{hours} </span>
        {hoursText}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>{minutes} </span>
        {minutesText}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>{seconds} </span>
        {secondsText}
      </p>
    </div>
  );
}
