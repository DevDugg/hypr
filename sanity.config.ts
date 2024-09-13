"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\content\[[...tool]]\page.tsx` route
 */

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";

import { defineConfig } from "sanity";
import { muxInput } from "sanity-plugin-mux-input";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  basePath: "/content",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    muxInput(),
  ],
});
