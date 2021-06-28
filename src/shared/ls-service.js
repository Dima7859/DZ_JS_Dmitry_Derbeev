export const getToken = () => localStorage.getItem('token');

export const setToken = token => localStorage.setItem('token', token);

export const removeToken = () => localStorage.removeItem('token');

export const getUserEmail = () => localStorage.getItem('userEmail');

export const setUserEmail = email => localStorage.setItem('userEmail', email);

export const removeUserEmail = () => localStorage.removeItem('userEmail');

export const getUserName = () => localStorage.getItem('userName');

export const setUserName = userName => localStorage.setItem('userName', userName);

export const removeUserName = () => localStorage.removeItem('userName');
