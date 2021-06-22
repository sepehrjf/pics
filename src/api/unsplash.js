import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _N6PmPvQCB0Eg7TzEigMqAcTCAeD0l9HXQinnpmIXY0",
  },
});
