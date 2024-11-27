const form = {
  name: "form-submission",
  type: "document",
  title: "Form Submission",
  fields: [
    {
      name: "name",
      type: "string",
      readonly: true,
      title: "Name",
    },
    {
      name: "email",
      type: "string",
      readonly: true,
      title: "Email",
    },
    {
      name: "subject",
      type: "string",
      readonly: true,
      title: "Subject",
    },
    {
      name: "message",
      type: "text",
      readonly: true,
      title: "Message",
    },
    {
      name: "category",
      type: "string",
      readonly: true,
      title: "Category",
    },
  ],
};

export default form;
