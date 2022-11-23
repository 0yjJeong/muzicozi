export const get = (key: string) => {
  const value = localStorage.getItem(key);
  if (!value) {
    return null;
  }
  return JSON.parse(value);
};

export const set = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
