export const retrieveEvent = id => {
  $.ajax({
    url: `api/events/${id}`,
  });
};
export const retrieveEvents = () => {
  $.ajax({
    url: `api/events/`,
  });
};

export const createEvent = event => {
  $.ajax({
    method: 'POST',
    url: 'api/events/',
    data: { event }
  });
};

export const deleteEvent = id => {
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`,
  });
};

export const updateEvent = event => {
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: { event }
  });
};
