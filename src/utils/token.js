export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const setUser = (user) => {
  if (user === undefined || user === null) {
    localStorage.removeItem("user");
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem("user");

  if (!user || user === "undefined") {
    return null;
  }

  try {
    return JSON.parse(user);
  } catch (error) {
    localStorage.removeItem("user");
    return null;
  }
};

export const removeUser = () => {
  localStorage.removeItem("user");
};