import type { Ad } from "./Ad";

export type JobsearchResponse = {
  total: {
    positions: number;
  };
  hits: Ad[];
};
