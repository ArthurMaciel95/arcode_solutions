import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PostCard, PostCardProps } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Post",
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  alt: "foto de um computador aberto com site",
  createAt: "há 3 horas",
  tags: ["MARKETING"],
  title: "Quais as Vantagens de ter um site em 2022",
  url: "https://arcodesolucoes.com/post/quais-as-vantagens-de-ter-um-site-em-2022",
  srcImg: "tmp/image/criaçaodesite.webp",
};
