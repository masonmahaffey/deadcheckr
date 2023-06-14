import Header from "../components/Header";
import Table from "../components/Table";
import Head from 'next/head';


export default function Root() {
  return (
    <div>
      <div>
        <Head>
          <title>deadcheckr
          </title>
          <meta
            name="description"
            content="Which characters got got?"
            key="desc"
          />
        </Head>
        <Header />
        <Table/>
      </div>
    </div>
  );
}
