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
    <div>
      <p>Estamos juntos há:</p>
      <p>
        {years} {yearsText}
      </p>
      <p>
        {months} {monthsText}
      </p>
      <p>
        {days} {daysText}
      </p>
      <p>
        {hours} {hoursText}
      </p>
      <p>
        {minutes} {minutesText}
      </p>
      <p>
        {seconds} {secondsText}
      </p>
    </div>
  );
}
