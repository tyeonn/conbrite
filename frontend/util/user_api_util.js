export const retrieveUser = id => {
  return $.ajax({
    url: `/api/users/${id}`
  });
};

export const addBookmark = (event, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}/addBookmark`,
    data: {event, id}
  });
};

export const removeBookmark = (event, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}/removeBookmark`,
    data: {event, id}
  });
};
