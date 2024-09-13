import { PROJECT_ITEM_QUERYResult, Projects } from "../../../sanity.types";

import { client } from "../lib/client";
import { defineQuery } from "next-sanity";

export const getProjectsData = async (
  page: number = 1,
  pageSize: number = 10,
): Promise<{ projects: Projects[]; hasMore: boolean }> => {
  const offset = (page - 1) * pageSize;

  // Use parameters `$offset` and `$limit` in the query
  const PROJECTS_QUERY = defineQuery(`
    *[_type == 'projects'] | order(_createdAt desc) [$offset...$limit]
  `);

  const COUNT_PROJECTS_QUERY = defineQuery(`
    count(*[_type == 'projects'])
  `);

  // Pass the offset and limit as query parameters
  const [data, totalCount] = await Promise.all([
    client.fetch(PROJECTS_QUERY, { offset, limit: offset + pageSize }, { cache: "no-store" }),
    client.fetch(COUNT_PROJECTS_QUERY, {}, { cache: "no-store" }),
  ]);

  const hasMore = offset + pageSize < totalCount;
  return { projects: data, hasMore };
};

export const getProjectItem = async (slug: string): Promise<PROJECT_ITEM_QUERYResult[number]> => {
  const PROJECT_ITEM_QUERY = defineQuery(`
    *[_type == 'projects' && slug.current == $slug]{
      ...,
      "videos": videos[] {
        name,
        "playbackId": video.asset->playbackId,  // Mux playback ID for streaming
        "filename": video.asset->filename,  // Video file name
        "status": video.asset->status,  // Mux asset status
        "duration": video.asset->data.duration,  // Video duration
        "aspectRatio": video.asset->data.aspect_ratio,  // Aspect ratio
        "maxResolution": video.asset->data.max_stored_resolution,  // Maximum resolution
        "maxFrameRate": video.asset->data.max_stored_frame_rate,  // Max frame rate
        "tracks": video.asset->data.tracks[] {  // Tracks for video and audio
          type,
          duration,
          "maxHeight": select(type == "video" => max_height),
          "maxWidth": select(type == "video" => max_width),
          "maxChannels": select(type == "audio" => max_channels)
        }
      }
    }
  `);

  const data = await client.fetch(PROJECT_ITEM_QUERY, { slug }, { cache: "no-store" });

  return data[0];
};

const projects = {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "main_image",
      type: "image",
      title: "Main Image",
    },
    {
      name: "title_1",
      type: "string",
      title: "Title 1",
    },
    {
      name: "title_2",
      type: "string",
      title: "Title 2",
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
    },
    {
      name: "description_1",
      type: "string",
      title: "Description 1",
    },
    {
      name: "description_2",
      type: "string",
      title: "Description 2",
    },
    {
      name: "key_visuals",
      type: "array",
      title: "Key Visuals",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "information",
      type: "array",
      title: "Information",
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
              name: "value",
              type: "string",
              title: "Value",
            },
          ],
        },
      ],
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
              type: "mux.video",
              title: "Video",
            },
          ],
        },
      ],
    },
    {
      name: "gallery",
      type: "object",
      title: "Gallery",
      fields: [
        {
          name: "image_1",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "image_2",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "image_3",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "image_4",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "image_5",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "image_6",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

export default projects;
