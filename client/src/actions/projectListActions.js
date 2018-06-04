import axios from "axios";

export const startWaiting = () => ({ type: "PROJECTLIST_START_WAITING"});

export const sendUpdateSignal = () => ({ type: "PROJECTLIST_SEND_UPDATE_SIGNAL"});

export const fetchProjects = () => ({ 
  type: "PROJECTLIST_FETCH_PROJECTS",
  payload: axios.get("/api/projects")
});
