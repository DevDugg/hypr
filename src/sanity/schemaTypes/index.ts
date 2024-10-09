import { type SchemaTypeDefinition } from "sanity";
import home_page from "../schemas/home";
import news from "../schemas/news";
import projects from "../schemas/projects";
import form from "../schemas/form";
import about_us from "../schemas/about-us";
import contact from "../schemas/contact-us";
import news_page from "../schemas/news-page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, projects, home_page, form, about_us, contact, news_page],
};
