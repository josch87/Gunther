import GlobalStyle from "../styles";
import { contactsSampleData, interactionsSampleData } from "@/data/SampleData";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [contacts, setContacts] = useLocalStorageState("contacts", {
    defaultValue: contactsSampleData,
  });
  const [interactions, setInteractions] = useLocalStorageState("interactions", {
    defaultValue: interactionsSampleData,
  });

  const date = new Date();
  const currentUtcDateTime = date.toISOString();

  function handleAddNewContact(newContact) {
    const newContactId = uid();

    const formattedContact = {
      ...newContact,
      id: newContactId,
      dateCreated: currentUtcDateTime,
      dateDeleted: "",
      deceased: newContact.deceased ? true : false,
    };

    setContacts([...contacts, formattedContact]);
    router.push(formattedContact.id);
  }

  function handleUpdateContact(updatedContact) {
    setContacts(
      contacts.map((contact) => {
        if (contact.id === updatedContact.id) {
          return { ...updatedContact, dateLastUpdate: currentUtcDateTime };
        } else {
          return contact;
        }
      })
    );
    router.push(`/${updatedContact.id}`);
  }

  function handleAddNewInteraction(newInteraction) {
    console.log("new");
    const newInteractionId = uid();

    const formattedInteraction = {
      ...newInteraction,
      id: newInteractionId,
      dateCreated: currentUtcDateTime,
      dateDeleted: "",
    };

    setInteractions([...interactions, formattedInteraction]);
    router.push(`/interactions/${formattedInteraction.id}`);
  }

  function handleUpdateInteraction(updatedInteraction) {
    setInteractions(
      interactions.map((interaction) => {
        if (interaction.id === updatedInteraction.id) {
          return { ...updatedInteraction, dateLastUpdate: currentUtcDateTime };
        } else {
          return interaction;
        }
      })
    );
    router.push(`/interactions/${updatedInteraction.id}`);
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          contacts={contacts}
          interactions={interactions}
          onAddNewContact={handleAddNewContact}
          onUpdateContact={handleUpdateContact}
          onAddNewInteraction={handleAddNewInteraction}
          onUpdateInteraction={handleUpdateInteraction}
        />
      </Layout>
    </>
  );
}
