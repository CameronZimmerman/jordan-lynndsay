import request from "superagent";

const addUrl = async (url) => {
  await request.post("http://localhost:9876/api/urls").send({ url });
};

const deleteUrl = async (url) => {
  console.log(url);
  await request.delete(`http://localhost:9876/api/urls/${url}`);
};

const getUrls = async () => {
  const res = await request.get("http://localhost:9876/api/urls");
  return res.body || [];
};

export { addUrl, deleteUrl, getUrls };
