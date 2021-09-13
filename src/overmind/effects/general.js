import axios from "axios";

export const endpoint = async () => {
  const ret = await axios({
    url: `${baseUrl}/endpoint?param=1`,
    method: "get",
  });
  return ret.data;
};
