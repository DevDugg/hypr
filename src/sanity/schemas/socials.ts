import { Socials } from "../../../sanity.types";
import { client } from "../lib/client";
import { defineQuery } from "next-sanity";

export const getSocialsData = async (): Promise<Socials> => {
  const SOCIALS_QUERY = defineQuery(`*[_type == 'socials']`);
  const data = await client.fetch(SOCIALS_QUERY, {}, { cache: "no-store" });
  return data[0];
};

const socials = {
  name: "socials",
  type: "document",
  title: "Socials",
  fields: [
    {
      name: "twitter",
      title: "X / Twitter Link",
      type: "string",
    },
    {
      name: "instagram",
      title: "Instagram Link",
      type: "string",
    },
    {
      name: "linkedin",
      title: "LinkedIn Link",
      type: "string",
    },
  ],
};

export default socials;
