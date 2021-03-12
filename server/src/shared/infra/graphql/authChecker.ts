import { AuthChecker } from "type-graphql";


interface IContextData {
  root: any;
  args: any;
  context: any;
  info: any;
}


const authChecker: AuthChecker<IContextData> = ({ context, root, args, info }) => {
  // TODO: Check if user is authenticated
  return true;
}

export default authChecker;