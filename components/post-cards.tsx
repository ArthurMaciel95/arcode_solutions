import * as React from 'react';
import styles from '../styles/posts.module.css';
import Image from 'next/image';
import Link from 'next/link';
type PostCardProps = {
  srcImg: string;
  alt: string;
  tags: Array<'TUTORIAL' | 'TECNOLOGIA' | 'PROGRAMAÇÃO' | 'MARKETING'>;
  title: string;
  url: string;
  createAt: string;
};

const PostCard: React.FunctionComponent<PostCardProps> = ({
  srcImg,
  alt,
  title,
  url,
  tags,
  createAt,
}): JSX.Element => {
  return (
    <Link href={url}>
      <article className={styles.postCard}>
        <Image
          src={srcImg}
          alt={alt}
          width="276px"
          height="188px"
          layout="responsive"
          objectFit="cover"
        />
        <div className={styles.tagArea}>
          {tags.map((tag, index) => (
            <span className={styles.tags} key={index}>
              {tag.toLocaleUpperCase()}
            </span>
          ))}
        </div>
        <h4>{title}</h4>
        <span className={styles.postDate}>{createAt}</span>
      </article>
    </Link>
  );
};

export default PostCard;
