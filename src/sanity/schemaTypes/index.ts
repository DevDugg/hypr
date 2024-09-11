import { type SchemaTypeDefinition } from "sanity";
import home_page from "../schemas/home";
import news from "../schemas/news";
import projects from "../schemas/projects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, projects, home_page],
};
