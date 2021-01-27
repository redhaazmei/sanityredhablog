export default {
  title: "Blog Posts",
  name: "blog",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Cover Image",
      name: "coverImage",
      type: "image",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alt Text",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
        {
          title: "Code Editor",
          name: "codeEditor",
          type: "code",
          options: {
            withFilename: true,
            theme: "tomorrow",
          },
        },
      ],
    },
    {
      title: "Date Published",
      name: "datePublished",
      type: "datetime",
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required().error("The unique identifier slug is required"),
    },
  ],
};
