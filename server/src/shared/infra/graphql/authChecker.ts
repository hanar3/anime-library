import { AuthChecker } from "type-graphql";

interface IContextData {
  root: any;
  args: any;
  context: any;
  info: any;
}

const authChecker: AuthChecker<IContextData> = ({ context }) => {
  if (!context.user) {
    return false;
  }

  return true;
};

export default authChecker;
