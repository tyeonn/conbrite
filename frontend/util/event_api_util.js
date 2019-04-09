export const retrieveEvent = id => {
  return $.ajax({
    url: `api/events/${id}`
  });
};
export const retrieveEvents = () => {
  return $.ajax({
    url: `api/events/`
  });
};

export const createEvent = event => {
  return $.ajax({
    method: "POST",
    url: "api/events/",
    data: { event }
  });
};

export const deleteEvent = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/events/${id}`
  });
};

export const updateEvent = event => {
  return $.ajax({
    method: "PATCH",
    url: `api/events/${event.id}`,
    data: { event }
  });
};
