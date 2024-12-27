const seoStructure = {
  name: "seo",
  type: "object",
  title: "SEO",
  fields: [
    {
      name: "title",
      type: "string",
      title: "SEO Title",
    },
    {
      name: "description",
      type: "text",
      title: "SEO Description",
    },
    {
      name: "keywords",
      title: "SEO Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "openGraph",
      type: "object",
      title: "OpenGraph Settings",
      fields: [
        {
          name: "title",
          type: "string",
          title: "OpenGraph Title",
        },
        {
          name: "description",
          type: "text",
          title: "OpenGraph Description",
        },
        {
          name: "image",
          type: "image",
          title: "OpenGraph Image",
        },
      ],
    },
  ],
};

export default seoStructure;
