import React from "react";
import Head from "next/head";
import Menu from "./components/Menu";
import Panel from "./components/Panel";
import { SplitView } from "./components/SplitView";
import { useCommitTree } from "../hooks/useCommitTree";

function Home() {

  const [repo, setRepo] = React.useState([]);

  function getRepo(files:string[]){
    setRepo(files)
  }

  const data = useCommitTree();

  return (
    <div>
      <Head>
        <title>Upgrade UI Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <SplitView
            right={<Panel data={repo} />}
            left={<Menu data={data} func={getRepo} />}
          />
        </section>
      </main>

      <style jsx>{`
        section {
          background: aliceblue;
          height: 100%;
          z-index: 1;
        }
        main {
          height: 100vh;
          width: 100%;
        }
      `}</style>

      <style jsx global>{`
        html {
          height:100vh;
          overflow:hidden;
        }
        body {
          margin:0;top:0;right:0;bottom:0;left:0;
          position:absolute;
          overflow:auto;
        }
      `}</style>
    </div>
  );
}

export default Home;
