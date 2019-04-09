export const retrieveUser = id => {
  return $.ajax({
    url: `/api/users/${id}`
  });
};
