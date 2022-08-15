import React from "react";
import * as S from "./styles";
import Image from "next/image";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Navbar from "components/navbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
const Post = () => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();

    console.info("You clicked a breadcrumb.");
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,

    <Typography key="3" color="text.primary">
      Post
    </Typography>,
  ];
  return (
    <>
      <Navbar />
      <S.Container>
        <div className="post-image-area">
          <Image
            src="/tmp/image/criaçãodesite.webp"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <span role="presentation">
          <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </span>
        <h1 className="degrad-color">
          Qual a importância de ter um site em 2022?
        </h1>
        <div className="post-profile-area">
          <img src="/tmp/image/avatar_profile.jpg" className="avatar" />
          <div>
            <h4>Postado por Arthur Nogueira</h4>
          </div>
        </div>
      </S.Container>
    </>
  );
};

export default Post;
