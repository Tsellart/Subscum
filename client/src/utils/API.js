import axios from "axios";

export default {
  getSubs: function() {
    return axios.get("/api/items/");
  },
  getyourSub: function(id) {
    return axios.get("/api/items/" + id);
  },
  deleteSubs: function(id) {
    return axios.delete("/api/items/" + id);
  },
  saveSubs: function(subsData) {
    return axios.post("/api/items/", subsData);
  }
}