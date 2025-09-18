import type { Ad } from './Ad';

export type APIResponse = {
  total: {
    value: number;
  };
  hits: Ad[];
};
