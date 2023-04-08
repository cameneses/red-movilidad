const cleanArriveTime = (arrival_time) => {
  const arriving_with_no_time = /^\(Llegando\.\)$/i;
  const arriving_with_time = /^\(Menos de (\d{2}) min\.\s\)$/i;
  const arriving_time_range = /^\(Entre (\d{2}) Y (\d{2}) min\.\s\)$/i;
  const arriving_long_time = /^\(Más de (\d{2}) min\.\)$/i;
  const out_of_service = /^\(Fuera de servicio\.\)$/i;

  if (arriving_with_no_time.test(arrival_time)) {
    return [0];
  } else if (arriving_with_time.test(arrival_time)) {
    const match = arriving_with_time.match(arrival_time);
    const time_limit = match[1];
    return [time_limit];
  } else if (arriving_time_range.test(arrival_time)) {
    const match = arrival_time.match(arriving_time_range);
    const low_limit = match[1];
    const upper_limit = match[2];
    return [low_limit, upper_limit];
  } else if (arriving_long_time.test(arrival_time)) {
    const match = arriving_long_time.match(arrival_time);
    const time_limit = match[1];
    return [time_limit];
  } else if (out_of_service.test(arrival_time)) {
    return [];
  } else {
    return arrival_time;
  }
};

module.exports = { cleanArriveTime };
