import * as React from "react";
import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";
export type PostCardProps = {
  srcImg: string;
  alt: string;
  tags: Array<"TUTORIAL" | "TECNOLOGIA" | "PROGRAMAÇÃO" | "MARKETING">;
  title: string;
  url: string;
  createAt: string;
};

export const PostCard: React.FunctionComponent<PostCardProps> = ({
  srcImg,
  alt,
  title,
  url,
  tags,
  createAt,
}): JSX.Element => {
  return (
    <Link href={url}>
      <S.Container>
        <Image
          src={srcImg}
          alt={alt}
          width="276px"
          height="188px"
          objectFit="cover"
        />
        <div className="tag-area">
          {tags.map((tag, index) => (
            <span className="tags" key={index}>
              {tag.toLocaleUpperCase()}
            </span>
          ))}
        </div>
        <h4>{title}</h4>
        <time dateTime={createAt} className="post-date">
          {createAt}
        </time>
      </S.Container>
    </Link>
  );
};
