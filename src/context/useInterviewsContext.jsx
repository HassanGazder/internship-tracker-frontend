import { useContext } from "react";
import { InterviewContext } from "./InterviewContextObject";

export const useInterviews = () => useContext(InterviewContext);
