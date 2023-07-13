import GlobalStyle from "../styles";
import { contactsSampleData } from "@/data/SampleData";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [contacts, setContacts] = useLocalStorageState("contacts", {
    defaultValue: contactsSampleData,
  });

  function handleAddNewContact(newFormattedContact) {
    setContacts([...contacts, newFormattedContact]);
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          contacts={contacts}
          onAddNewContact={handleAddNewContact}
        />
      </Layout>
    </>
  );
}
