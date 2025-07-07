import type { AppProps, AppContext } from "next/app";
import { trpc } from "@/shared/api";
import { SessionProvider, getSession } from "next-auth/react";

import "@/app/global.css";
import { useRouter } from "next/router";
import Layout from "@/pages/layout";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-4xl">
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </div>
  );
}

App.getInitialProps = async (ctx: AppContext) => {
  return {
    pageProps: {
      session: await getSession(ctx.ctx),
    },
  };
};

export default trpc.withTRPC(App);
