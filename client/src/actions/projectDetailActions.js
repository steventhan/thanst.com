import axios from "axios";

export const fetchProjectDetail = slug => ({
  type: "PROJECTDETAIL_FETCH_DETAIL",
  payload: axios.get(`/api/projects/${slug}`)
});
