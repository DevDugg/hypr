import { AUTHORS_QUERYResult } from "../../../sanity.types";
import { client } from "../lib/client";
import { defineQuery } from "next-sanity";

export const getAuthorsData = async (
  page: number = 1,
  pageSize: number = 12,
): Promise<{ authors: AUTHORS_QUERYResult; hasMore: boolean }> => {
  const offset = (page - 1) * pageSize;

  const AUTHORS_QUERY = defineQuery(`*[_type == 'authors'] | order(_createdAt desc) [$offset...$limit]{
      creator_name,
      handle,
      image,
      social_media_1,
      social_media_2,
      slug
    }`);

  const COUNT_AUTHORS_QUERY = defineQuery(`count(*[_type == 'authors'])`);

  const [data, totalCount] = await Promise.all([
    client.fetch(AUTHORS_QUERY, { offset, limit: offset + pageSize }, { cache: "no-store" }),
    client.fetch(COUNT_AUTHORS_QUERY, {}, { cache: "no-store" }),
  ]);

  const hasMore = offset + pageSize < totalCount;

  return { authors: data, hasMore };
};

const authors = {
  name: "authors",
  type: "document",
  title: "Authors",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Creator Name",
    },
    {
      name: "avatar",
      type: "image",
      title: "Avatar",
    },
  ],
};

export default authors;
