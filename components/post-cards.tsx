import * as React from 'react';
import styles from '../styles/posts.module.css';
import Image from 'next/image';
import Link from 'next/link';
type PostCardProps = {
  srcImg: string;
  alt: string;
  tags: Array<string>;
  title: string;
  description: string;
  url: string;
  createAt: string;
};

const PostCard: React.FunctionComponent<PostCardProps> = ({
  srcImg,
  alt,
  title,
  description,
  url,
  tags,
  createAt,
}): JSX.Element => {
  return (
    <a href={url}>
      <article className={styles.postCard}>
        <Image src={srcImg} alt={alt} />
        <span>{createAt}</span>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
        <h4>{title}</h4>
        <p>{description}</p>
      </article>
    </a>
  );
};

export default PostCard;
