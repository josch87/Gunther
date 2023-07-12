import GlobalStyle from "../styles";
import { useImmerLocalStorageState } from "@/hooks/useImmerLocalStorageState";
import { contactsSampleData } from "@/data/SampleData";
import Layout from "@/components/Layout/Layout";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [contacts, updateContacts] = useImmerLocalStorageState("contacts", {
    defaultValue: contactsSampleData,
  });

  function handleAddNewContact(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newContact = Object.fromEntries(formData);

    console.log("data:", newContact);

    updateContacts([...contacts, { ...newContact, id: uid() }]);
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
