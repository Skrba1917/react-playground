import axios from "axios";

const KEY = "AIzaSyCr0qsTbPzUkCdAr9eWtyJSAheq0XYpGwA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
