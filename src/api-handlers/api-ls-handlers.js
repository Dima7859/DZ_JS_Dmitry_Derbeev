export const setToken = token => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const setName = token => {
    localStorage.setItem('name', token);
};

export const getName = () => {
    return localStorage.getItem('name');
};
