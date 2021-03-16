import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=15";

export default {
  getEmployee: function () {
    return axios.get(BASEURL);
  },
};
