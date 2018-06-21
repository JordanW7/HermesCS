const linkBackEnd = "http://localhost:3000";

const apiBackEnd = async (request, method, bodyObject = false) => {
  try {
    const sessionToken = window.sessionStorage.getItem("token");
    const rememberToken = window.localStorage.getItem("token");
    const token = rememberToken
      ? rememberToken
      : sessionToken
        ? sessionToken
        : false;
    const response = await fetch(`${linkBackEnd}/${request}`, {
      method: method,
      headers: token
        ? { "Content-Type": "application/json", Authorization: token }
        : { "Content-Type": "application/json" },
      body: bodyObject && JSON.stringify(bodyObject)
    });
    const data = await response.json();
    if (data) {
      return data;
    }
    return "error";
  } catch (err) {
    return "error";
  }
};

export default apiBackEnd;
