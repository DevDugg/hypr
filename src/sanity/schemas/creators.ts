import { CREATORS_QUERYResult, Creators } from "../../../sanity.types";

import { client } from "../lib/client";
import { defineQuery } from "next-sanity";

export const getCreatorsData = async (
  page: number = 1,
  pageSize: number = 12,
): Promise<{ creators: CREATORS_QUERYResult; hasMore: boolean }> => {
  const offset = (page - 1) * pageSize;

  // Define the query to fetch creators with pagination
  const CREATORS_QUERY = defineQuery(`*[_type == 'creators'] | order(_createdAt desc) [$offset...$limit]{
      creator_name,
      handle,
      image,
      social_media_1,
      social_media_2
    }`);

  // Define the count query for total creators count
  const COUNT_CREATORS_QUERY = defineQuery(`count(*[_type == 'creators'])`);

  // Fetch paginated creators data and the total count concurrently
  const [data, totalCount] = await Promise.all([
    client.fetch(CREATORS_QUERY, { offset, limit: offset + pageSize }, { cache: "no-store" }),
    client.fetch(COUNT_CREATORS_QUERY, {}, { cache: "no-store" }),
  ]);

  // Determine if there are more pages based on the count
  const hasMore = offset + pageSize < totalCount;

  return { creators: data, hasMore };
};

const creators = {
  name: "creators",
  type: "document",
  title: "Creators",
  fields: [
    {
      name: "creator_name",
      type: "string",
      title: "Creator Name",
    },
    {
      name: "handle",
      type: "string",
      title: "Handle",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "social_media_1",
      type: "string",
      title: "Social Media 1",
    },
    {
      name: "social_media_2",
      type: "string",
      title: "Social Media 2",
    },
  ],
};

export default creators;
