import { Creators_page } from "../../../sanity.types";
import { client } from "../lib/client";
import { defineQuery } from "next-sanity";
import seoStructure from "../lib/seo";

export const getCreatorsPageData = async (): Promise<Creators_page> => {
  const CREATORS_PAGE_QUERY = defineQuery(`*[_type == 'creators_page']`);
  const data = await client.fetch(CREATORS_PAGE_QUERY, {}, { cache: "no-store" });
  return data[0];
};

const creators_page = {
  name: "creators_page",
  type: "document",
  title: "Creators Page",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    seoStructure,
  ],
};

export default creators_page;
