export const retrieveTicket = id => {
  return $.ajax({
    url: `api/tickets/${id}`
  });
};
export const retrieveTickets = eventId => {
  return $.ajax({
    url: `api/tickets/`,
    data: { eventId }
  });
};
export const createTicket = ticket => {
  return $.ajax({
    method: "POST",
    url: "api/tickets/",
    data: { ticket }
  });
};
export const updateTicket = ticket => {
  return $.ajax({
    method: "PATCH",
    url: `api/tickets/${ticket.id}`,
    data: { ticket }
  });
};
export const deleteTicket = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/tickets/${id}`
  });
};
export const sellTicket = ticket => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tickets/${ticket.id}/sell`,
    data: {ticket},
  });
};
export const refundTicket = ticket => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tickets/${ticket.id}/refund`,
    data: { ticket },
  });
};
