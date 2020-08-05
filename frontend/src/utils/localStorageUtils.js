export const _setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const _getData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const _removeData = (key) => {
  localStorage.removeItem(key);
};
