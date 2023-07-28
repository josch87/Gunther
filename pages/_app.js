import GlobalStyle from "../styles";
import { contactsSampleData, interactionsSampleData } from "@/data/SampleData";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import Chance from "chance";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [contacts, setContacts] = useLocalStorageState("contacts", {
    defaultValue: [],
  });
  const [interactions, setInteractions] = useLocalStorageState("interactions", {
    defaultValue: [],
  });

  const activeContacts = contacts.filter(
    (contact) => contact.dateDeleted === null || contact.dateDeleted === ""
  );

  const date = new Date();
  const currentUtcDateTime = date.toISOString();

  function handleImportDemoContacts() {
    const demoContact = contactsSampleData.map((contact) => {
      return { id: uid(), ...contact };
    });
    setContacts([...contacts, ...demoContact]);
  }

  function handleImportDemoInteractions() {
    if (activeContacts.length === 0) {
      console.warn(
        "Cannot import demo interactions when no contacts are available"
      );
      return;
    }

    const demoInteractions = interactionsSampleData.map((interaction) => {
      const chance = new Chance();

      let maxNumberOfParticipants = 5;
      if (activeContacts.length < 5) {
        maxNumberOfParticipants = activeContacts.length;
      }

      const randomNumberOfParticipants = chance.integer({
        min: 1,
        max: maxNumberOfParticipants,
      });

      let ArrayOfRandomParticipants = [];

      while (ArrayOfRandomParticipants.length < randomNumberOfParticipants) {
        const randomContactIndex = chance.integer({
          min: 0,
          max: activeContacts.length - 1,
        });
        const randomContact = activeContacts[randomContactIndex];

        const isIncluded = ArrayOfRandomParticipants.includes(randomContact.id);

        if (!isIncluded) {
          ArrayOfRandomParticipants = [
            ...ArrayOfRandomParticipants,
            randomContact.id,
          ];
        }
      }

      const newInteraction = { id: uid(), ...interaction };

      console.log("newInteraction", newInteraction);

      return;
    });
    setInteractions([...interactions, ...demoInteractions]);
  }

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

  function handleDeleteContact(IdOfContactToDelete) {
    setContacts(
      contacts.map((contact) => {
        if (contact.id === IdOfContactToDelete) {
          return { ...contact, dateDeleted: currentUtcDateTime };
        } else {
          return contact;
        }
      })
    );

    router.push("/");
  }

  function handleAddNewInteraction(newInteraction) {
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

  function handleDeleteInteraction(IdOfInteractionToDelete) {
    setInteractions(
      interactions.map((interaction) => {
        if (interaction.id === IdOfInteractionToDelete) {
          return { ...interaction, dateDeleted: currentUtcDateTime };
        } else {
          return interaction;
        }
      })
    );

    router.push("/interactions");
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
          onDeleteContact={handleDeleteContact}
          onAddNewInteraction={handleAddNewInteraction}
          onUpdateInteraction={handleUpdateInteraction}
          onDeleteInteraction={handleDeleteInteraction}
          onImportDemoContact={handleImportDemoContacts}
          onImportDemoInteractions={handleImportDemoInteractions}
        />
      </Layout>
    </>
  );
}
