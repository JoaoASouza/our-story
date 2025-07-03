import { RELATIONSHIP_START_DATE } from "@/constants/constants";
import { differenceInMinutes, intervalToDuration } from "date-fns";

export function getRelationshipDuration() {
  return intervalToDuration({
    start: RELATIONSHIP_START_DATE,
    end: new Date(),
  });
}

export function getRelationShipDurationInMinutes() {
  return differenceInMinutes(new Date(), RELATIONSHIP_START_DATE);
}
