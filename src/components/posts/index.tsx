import React from "react";
import * as S from "./styles";
import { PostCard } from "./post-card";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";
const Posts: React.FC = (): JSX.Element => {
  const { t } = useTranslation("common");
  return (
    <>
      <AnimationOnScroll animateIn="animate__fadeIn" animatePreScroll={false}>
        <S.Container>
          <PostCard
            srcImg="/tmp/image/criaçãodesite.webp"
            alt={t("blog_posts.0.post_image_alt")}
            tags={["TECNOLOGIA"]}
            title={t("blog_posts.0.post_title")}
            url="/posts/ainda-vale-a-pena-criar-sites-em-2022"
            createAt="há 3 dias atrás"
          />
          <PostCard
            srcImg="/tmp/image/seo.jpeg"
            alt={t("blog_posts.1.post_image_alt")}
            tags={["TUTORIAL"]}
            title={t("blog_posts.1.post_title")}
            url="/posts/ainda-vale-a-pena-criar-sites-em-2022"
            createAt="há 4 dias atrás"
          />
          <PostCard
            srcImg="/tmp/image/o-que-e-ecommerce.webp"
            alt={t("blog_posts.2.post_image_alt")}
            tags={["PROGRAMAÇÃO"]}
            title={t("blog_posts.2.post_title")}
            url="/posts/ainda-vale-a-pena-criar-sites-em-2022"
            createAt="há 1 semana atrás"
          />
          <PostCard
            srcImg="/tmp/image/criaçãodesite.webp"
            alt={t("blog_posts.3.post_image_alt")}
            tags={["MARKETING", "TUTORIAL"]}
            title={t("blog_posts.3.post_title")}
            url="/posts/ainda-vale-a-pena-criar-sites-em-2022"
            createAt="há 3 dias atrás"
          />
        </S.Container>
      </AnimationOnScroll>
    </>
  );
};

export default Posts;
