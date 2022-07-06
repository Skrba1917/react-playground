import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID ksM1wgioT8AEf3XVnM94DEH8D7boZh7_3I8ezC7qPZc",
  },
});
