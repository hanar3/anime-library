import { getContext, setContext } from "svelte";
import { writable, Writable } from "svelte/store";
import { QueryState } from "./store";

interface IClientOptions {
  uri: string;
  fetchOptions?: any;
}
export class Client {
  uri: string;

  fetchOptions: any = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  constructor({ uri, fetchOptions = {} }: IClientOptions) {
    this.uri = uri;
    Object.assign(this.fetchOptions, fetchOptions);
  }


  setHeader(key: string, value: string) {
    this.fetchOptions = {
      ...this.fetchOptions,
      headers: {
        ...this.fetchOptions.headers,
        [key]: value,
      }
    }
  }
}

export function setClient(client: Client) {
  setContext("mini-gql", client);
}

export function getClient(): Client {
  const client = getContext("mini-gql");
  if (!client) throw new Error("Client is not defined");
  return client as Client;
}

interface MutationReturn {
  mutationState: Writable<QueryState>;
  runMutation: (variables: any) => Promise<any>;
}

export function mutation(m: string): MutationReturn {
  const client = getClient();
  const mutationState = writable({} as QueryState);
  const sync = async (
    client: Client,
    payload: { mutation: string; variables: any }
  ) => {
    try {

      mutationState.update((prevState) => ({
        ...prevState,
        loaded: false,
        loading: true,
      }));

      const response = await fetch(client.uri, {
        ...client.fetchOptions,
        body: JSON.stringify({
          query: payload.mutation,
          variables: payload.variables,
        }),
      });

      const { data } = await response.json();
      mutationState.update((prevState) => ({
        ...prevState,
        loaded: true,
        loading: false,
        data,
      }));

      return data;
    } catch (err) {
      mutationState.update((prevState) => ({
        ...prevState,
        failed: true,
        loaded: false,
        loading: false,
      }));
    }
  };

  return {
    mutationState,
    runMutation: (variables: any) => sync(client, { mutation: m, variables }),
  };
}

interface IQueryReturn {
  queryState: Writable<QueryState>;
  runQuery: (variables: any) => Promise<any>;
}

export function query(q: string): IQueryReturn {
  const client = getClient();
  const queryState = writable({} as QueryState)

  const sync = async (
    client: Client,
    payload: { query: string; variables: any }
  ) => {
    try {
      queryState.update((prevState) => ({
        ...prevState,
        loaded: false,
        loading: true,
        failed: false,
      }));

      const response = await fetch(client.uri, {
        ...client.fetchOptions,
        body: JSON.stringify({
          query: payload.query,
          variables: payload.variables,
        }),
      });

      const { data } = await response.json();

      queryState.update((prevState) => ({
        ...prevState,
        loaded: true,
        loading: false,
        failed: false,
        data,
      }));

      return data;
    } catch (err) {
      queryState.update((prevState) => ({
        ...prevState,
        loaded: true,
        loading: false,
        failed: false,
      }));
    }
  };

  return {
    queryState,
    runQuery: (variables: any) => sync(client, { query: q, variables }),
  };
}
