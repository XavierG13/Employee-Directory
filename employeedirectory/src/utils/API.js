import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=15";
// eslint-disable-next-line
export default {
  search: function () {
    return axios.get(BASEURL);
  },
};
