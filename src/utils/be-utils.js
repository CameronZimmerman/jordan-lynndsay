import request from "superagent";

const addUrl = async (url) => {
  await request.post(process.env.BE_URL).send({ url });
};

const deleteUrl = async (url) => {
  await request.delete(`${process.env.BE_URL}/${url}`);
};

export { addUrl, deleteUrl };
