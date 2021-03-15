import { getContext, setContext } from 'svelte'

interface IClientOptions {
  uri: string;
  fetchOptions?: any;
}
export class Client {
  uri: string;
  
  fetchOptions: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };

  constructor({ uri, fetchOptions = {} }: IClientOptions) {
    this.uri = uri;
    Object.assign(this.fetchOptions, fetchOptions)
  }
}

export function setClient(client: Client) {
  setContext('mini-gql', client);
}

export function getClient(): Client {
  const client = getContext('mini-gql');
  if (!client) throw new Error('Client is not defined');
  return client as Client;
}

export async function mutation(m: string, variables?: any) {
  const client = getClient();
  try { 
    await fetch(client.uri, {
      ...client.fetchOptions,
      body: JSON.stringify({
        mutation: m,
        variables,
      })
    })
  } catch(err) {
    throw err;
  }
}

export async function query(q: string, variables: any) {
  const client = getClient();
  try { 
    await fetch(client.uri, {
      ...client.fetchOptions,
      body: JSON.stringify({
        query: q,
        variables,
      })
    })
  } catch(err) {
    throw err;
  }
}