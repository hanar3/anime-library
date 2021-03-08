declare module "svelte-routing" {
  import { SvelteComponentDev } from "svelte/internal";
  import { SvelteComponent, SvelteComponentTyped } from "svelte";

  interface LinkProps {
    to: string;
    replace?: boolean;
    state?: {
      [k in string | number]: unknown;
    };
    getProps?: (linkParams: GetPropsParams) => Record<string, any>;
  }

  interface GetPropsParams {
    location: RouteLocation;
    href: string;
    isPartiallyCurrent: boolean;
    isCurrent: boolean;
  }

  class Link extends SvelteComponentTyped<
    Omit<
      LinkProps &
        svelte.JSX.HTMLProps<HTMLAnchorElement> &
        svelte.JSX.SapperAnchorProps,
      "href"
    >
  > {}

  export { Link };

  interface ComponentProps extends SvelteComponent {
    $$prop_def: Props;
    $$events_def: any;
    $$slot_def: any;
    constructor(options: {
      target: Element;
      anchor?: Element;
      props?: Props;
      hydrate?: boolean;
      intro?: boolean;
      $$inline?: boolean;
    });
    $capture_state(): void;
    $inject_state(): void;
  }

  interface RouteProps {
    path?: string;
    component?: ComponentProps;

    [additionalProp: string]: unknown;
  }

  interface RouteSlots {
    default: {
      location: RouteLocation;
      params: RouteParams;
    };
  }

  interface RouteLocation {
    pathname: string;
    search: string;
    hash?: string;
    state: {
      [k in string | number]: unknown;
    };
  }

  interface RouteParams {
    [param: string]: string;
  }

  class Route extends SvelteComponentTyped<
    RouteProps,
    Record<string, any>,
    RouteSlots
  > {}

  export { Route, RouteLocation };

  interface RouterProps {
    basepath?: string;
    url?: string;
  }

  class Router extends SvelteComponentTyped<RouterProps> {}

  export { Router };

  const link: (node: Element) => { destroy(): void };
  const links: (node: Element) => { destroy(): void };

  export { link, links };
  const navigate: (
    to: string,
    {
      replace,
      state,
    }?: {
      replace?: boolean;
      state?: {
        [k in string | number]: unknown;
      };
    }
  ) => void;

  export { navigate };
}
