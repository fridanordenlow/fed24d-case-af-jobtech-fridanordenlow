import type { Ad } from './Ad';

export type APIResponse = {
  total: {
    value: number;
  };
  hits: Ad[];
};

// jobsearch API response
// {
//   "total": {
//     "value": 1437
//   },
//   "positions": 1860,
// ... etc
