import axios from "axios";

class Api {
  Get = async (url) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return await axios({
      method: "get",
      url,
      ...config,
    });
  };
  Post = async (url, data) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return await axios({
      method: "post",
      url,
      data,
      ...config,
    });
  };
}
export default new Api();
