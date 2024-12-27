import { CREATORS_QUERYResult, CREATOR_ITEM_QUERYResult } from "../../../sanity.types";

import { client } from "../lib/client";
import { defineQuery } from "next-sanity";
import seoStructure from "../lib/seo";

export const getCreatorsData = async (
  page: number = 1,
  pageSize: number = 12,
): Promise<{ creators: CREATORS_QUERYResult; hasMore: boolean }> => {
  const offset = (page - 1) * pageSize;

  const CREATORS_QUERY = defineQuery(`*[_type == 'creators'] | order(_createdAt desc) [$offset...$limit]{
      creator_name,
      handle,
      image,
      social_media_1,
      social_media_2,
      slug
    }`);

  const COUNT_CREATORS_QUERY = defineQuery(`count(*[_type == 'creators'])`);

  // Fetch paginated creators data and the total count concurrently
  const [data, totalCount] = await Promise.all([
    client.fetch(CREATORS_QUERY, { offset, limit: offset + pageSize }, { cache: "no-store" }),
    client.fetch(COUNT_CREATORS_QUERY, {}, { cache: "no-store" }),
  ]);

  const hasMore = offset + pageSize < totalCount;

  return { creators: data, hasMore };
};

export const getCreatorItem = async (slug: string): Promise<CREATOR_ITEM_QUERYResult> => {
  const CREATOR_ITEM_QUERY = defineQuery(`*[_type == 'creators' && slug.current == $slug][0]`);
  const data = await client.fetch(CREATOR_ITEM_QUERY, { slug }, { cache: "no-store" });

  return data;
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
      name: "creator_description",
      type: "array",
      title: "Creator Description",
      of: [{ type: "block" }],
    },
    {
      name: "handle",
      type: "string",
      title: "Handle",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "creator_name",
        maxLength: 96,
      },
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
    {
      name: "social_media_link_1",
      type: "string",
      title: "Social Media 1 Link",
    },
    {
      name: "social_media_link_2",
      type: "string",
      title: "Social Media 2 Link",
    },
    {
      name: "youtube_link",
      type: "string",
      title: "YouTube Link",
    },
    {
      name: "videos",
      type: "array",
      title: "Videos",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Name",
            },
            {
              name: "video",
              type: "string",
              title: "Video (YouTube link)",
            },
          ],
        },
      ],
    },
    seoStructure,
  ],
};

export default creators;
