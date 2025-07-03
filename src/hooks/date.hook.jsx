import { RELATIONSHIP_START_DATE } from "@/constants/constants";
import { intervalToDuration } from "date-fns";
import React from "react";

export const useRelationshipDuration = () => {
  const [today, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return {
    duration: intervalToDuration({
      start: RELATIONSHIP_START_DATE,
      end: today,
    }),
  };
};
