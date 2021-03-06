import { AuthChecker } from "type-graphql";

export interface IContextData {
  user?: {
     email: string;
     id: string;
  }
}

const authChecker: AuthChecker<IContextData> = ({ context }) => {
  if (!context.user) {
    return false;
  }

  return true;
};

export default authChecker;
