import React from "react";
import { useSession } from "next-auth/react";
import Backdrop from "components/loading_backdrop";
import { GetServerSideProps } from "next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
const Admin = () => {
  const { data: session, status: sessionStatus } = useSession();
  console.log(session);
  return (
    <>
      {sessionStatus === "loading" && <Backdrop />}
      {sessionStatus === "unauthenticated" && (
        <h1>USUÁRIO NÃO ESTÁ AUTENTICADO</h1>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions,
  );
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }
  return {
    props: {
      loggedUser: session.user,
    },
  };
};

export default Admin;
