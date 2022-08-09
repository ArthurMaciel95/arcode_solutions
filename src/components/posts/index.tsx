import React from "react";
import * as S from "./styles";
import PostCard from "../post-card";

const Posts: React.FC = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <PostCard
          srcImg="/tmp/image/criaçãodesite.webp"
          alt="vários dispositivos, computador, celular, notebook mostrando um site"
          tags={["TECNOLOGIA"]}
          title="Ainda vale a pena criar sites em 2022?"
          url="/posts/ainda-vale-a-pena-criar-sites-em-2022"
          createAt="há 3 dias atrás"
        />
        <PostCard
          srcImg="/tmp/image/seo.jpeg"
          alt="na imagem está escrito 'SEO' feitas com objetos como engrenagem e uma lente de aumento"
          tags={["TUTORIAL"]}
          title="Como posso melhorar o 
          SEO do meu site."
          url="/posts/ainda-vale-a-pena-criar-sites-em-2022"
          createAt="há 4 dias atrás"
        />
        <PostCard
          srcImg="/tmp/image/o-que-e-ecommerce.webp"
          alt="um carrinho de compra pequeno em cima de uma teclado de computador, a tecla 'entrar' está na cor amarela."
          tags={["PROGRAMAÇÃO"]}
          title="5 dicas para alavancar seu e-commerce."
          url="/posts/ainda-vale-a-pena-criar-sites-em-2022"
          createAt="há 1 semana atrás"
        />
        <PostCard
          srcImg="/tmp/image/criaçãodesite.webp"
          alt=""
          tags={["MARKETING", "TUTORIAL"]}
          title="Ainda vale a pena criar sites em 2022?"
          url="/posts/ainda-vale-a-pena-criar-sites-em-2022"
          createAt="há 3 dias atrás"
        />
      </S.Container>
    </>
  );
};

export default Posts;
