import type { DocumentNode } from "graphql";

export default function getGQLString(doc: DocumentNode) {
  return doc.loc ? doc.loc.source.body : "";
}
