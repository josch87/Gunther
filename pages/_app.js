import GlobalStyle from "../styles";
import { contactsSampleData } from "@/data/SampleData";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [contacts, setContacts] = useLocalStorageState("contacts", {
    defaultValue: contactsSampleData,
  });

  function handleAddNewContact(newContact) {
    const newContactId = uid();
    const date = new Date();
    const currentUtcDateTime = date.toISOString();

    const formattedContact = {
      ...newContact,
      id: newContactId,
      dateCreated: currentUtcDateTime,
      dateDeleted: "",
      deceased: newContact.deceased ? true : false,
      isSampleData: false,
    };

    setContacts([...contacts, formattedContact]);
    router.push(formattedContact.id);
  }

  function handleUpdateContact(updatedContact) {
    console.log(updatedContact);

    setContacts(
      contacts.map((contact) => {
        if (contact.id === updatedContact.id) {
          return updatedContact;
        } else {
          return contact;
        }
      })
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          contacts={contacts}
          onAddNewContact={handleAddNewContact}
          onUpdateContact={handleUpdateContact}
        />
      </Layout>
    </>
  );
}
