import { Site_settings } from "../../../sanity.types";
import { client } from "../lib/client";
import { defineQuery } from "next-sanity";

export const getSiteSettingsData = async (): Promise<Site_settings> => {
  const SITE_SETTINGS_QUERY = defineQuery(`*[_type == 'site_settings']`);
  const data = await client.fetch(SITE_SETTINGS_QUERY, {}, { cache: "no-store" });
  return data[0];
};

const site_settings = {
  name: "site_settings",
  type: "document",
  title: "Site Setting",
  fields: [
    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
          title: "SEO Title",
          description: "Title for the website (up to 50 characters)",
        },
        {
          name: "description",
          type: "text",
          title: "SEO Description",
          description: "Description for the website (up to 160 characters)",
        },
        {
          name: "keywords",
          type: "array",
          title: "SEO Keywords",
          of: [{ type: "string" }],
          description: "Comma-separated keywords for SEO",
        },
        {
          name: "openGraph",
          type: "object",
          title: "OpenGraph Settings",
          fields: [
            { name: "title", type: "string", title: "OpenGraph Title" },
            { name: "description", type: "text", title: "OpenGraph Description" },
            {
              name: "image",
              type: "image",
              title: "OpenGraph Image",
              description: "Image for sharing on social media",
            },
          ],
        },
        {
          name: "canonicalUrlRelative",
          type: "string",
          title: "Canonical URL",
          description: "Relative URL for the canonical link",
        },
        {
          name: "extraTags",
          type: "array",
          title: "Extra Meta Tags",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", type: "string" },
                { name: "content", type: "string" },
              ],
            },
          ],
          description: "Additional meta tags for specific pages",
        },
      ],
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "object",
      fields: [
        {
          name: "applicationName",
          type: "string",
          title: "Application Name",
          description: "Name of the application",
        },
        {
          name: "metadataBase",
          type: "string",
          title: "Metadata Base",
          description: "Base URL prefix for other fields that require a fully qualified URL",
        },
        {
          name: "apple_icon",
          type: "image",
          title: "apple-icon",
        },
        {
          name: "favicon",
          type: "image",
          title: "favicon",
        },
        {
          name: "icon",
          type: "image",
          title: "icon",
        },
        {
          name: "opengraph_image",
          type: "image",
          title: "opengraph-image",
        },
        {
          name: "twitter_image",
          type: "image",
          title: "twitter-image",
        },
      ],
    },
  ],
};

export default site_settings;
