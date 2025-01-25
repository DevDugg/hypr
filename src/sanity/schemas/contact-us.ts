import { Contact } from "../../../sanity.types";
import { client } from "../lib/client";
import { defineQuery } from "next-sanity";
import seoStructure from "../lib/seo";

export const getContactPageData = async (): Promise<Contact> => {
  const CONTACT_PAGE_QUERY = defineQuery(`*[_type == 'contact']`);
  const data = await client.fetch(CONTACT_PAGE_QUERY, {}, { cache: "no-store" });
  return data[0];
};

const contact = {
  name: "contact",
  type: "document",
  title: "Contact Page",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    seoStructure,
  ],
};

export default contact;
