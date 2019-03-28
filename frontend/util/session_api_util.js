export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

// export const fetchUser = (email) => {
//   $.ajax({
//     url: `/api/users/${id}`
//   });
// };

export const checkEmailExists = (email) => {
  return $.ajax({
    url: `/api/session/`,
    data: { email: `${email}` }
  });
};