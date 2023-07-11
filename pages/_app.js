import GlobalStyle from "../styles";
import { useImmerLocalStorageState } from "@/hooks/useImmerLocalStorageState";
import { contactsSampleData } from "@/data/SampleData";
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  const [contacts, updateContacts] = useImmerLocalStorageState("contacts", {
    defaultValue: contactsSampleData,
  });

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} contacts={contacts} />
      </Layout>
    </>
  );
}
