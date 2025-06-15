import { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "category",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "color",
      type: "text",
    },
    {
      name: "parent",
      type: "relationship",
      relationTo: "category",
      hasMany: false,
    },
    {
      name: "subcategories",
      type: "join",
      collection: "category",
      on: "parent",
      hasMany: true,
    },
  ],
};
