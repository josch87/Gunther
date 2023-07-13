import GlobalStyle from "../styles";
import { useImmerLocalStorageState } from "@/hooks/useImmerLocalStorageState";
import { contactsSampleData } from "@/data/SampleData";
import Layout from "@/components/Layout/Layout";
import { uid } from "uid";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [contacts, updateContacts] = useImmerLocalStorageState("contacts", {
    defaultValue: contactsSampleData,
  });

  function handleAddNewContact(newFormattedContact) {
    updateContacts([...contacts, newFormattedContact]);

    router.push(newFormattedContact.id);
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
