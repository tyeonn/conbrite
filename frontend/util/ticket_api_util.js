export const retrieveTicket = id => {
  return $.ajax({
    url: `api/tickets/${id}`
  });
};
export const retrieveTickets = () => {
  return $.ajax({
    url: `api/tickets/`
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
