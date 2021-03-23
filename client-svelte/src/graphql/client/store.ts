import { writable } from 'svelte/store';

export interface QueryState {
  mutation: string;
  loading: boolean; 
  loaded: boolean; 
  failed: boolean; 
  data: any;
}

export const mutationState = writable({} as QueryState);
export const queryState = writable({} as QueryState)