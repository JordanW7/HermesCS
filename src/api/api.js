const linkBackEnd = "http://localhost:3000";

const apiBackEnd = async (
  request,
  method,
  bodyObject = false,
  token = false
) => {
  try {
    const response = await fetch(`${linkBackEnd}/${request}`, {
      method: method,
      headers: token
        ? { "Content-Type": "application/json", Authorization: token }
        : { "Content-Type": "application/json" },
      body: bodyObject && JSON.stringify(bodyObject)
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    return "error";
  }
};

export default apiBackEnd;
