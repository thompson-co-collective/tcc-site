import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { captureAttributionFromSearch } from "../lib/attribution";

export function AttributionTracker() {
  const { search } = useLocation();

  useEffect(() => {
    captureAttributionFromSearch(search);
  }, [search]);

  return null;
}
