import GlobalStyle from "../styles";
import { contactsSampleData, interactionsSampleData } from "@/data/SampleData";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import Chance from "chance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentTimestamp } from "@/utils/dateTime";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [contacts, setContacts] = useLocalStorageState("contacts", {
    defaultValue: [],
  });
  const [interactions, setInteractions] = useLocalStorageState("interactions", {
    defaultValue: [],
  });
  const [activityLog, setActivityLog] = useLocalStorageState("activityLog", {
    defaultValue: [],
  });

  function updateActivityLog(data) {
    setActivityLog([...activityLog, data]);
  }

  const activeContacts = contacts.filter(
    (contact) => contact.dateDeleted === null || contact.dateDeleted === ""
  );

  function handleImportDemoContacts() {
    const demoContact = contactsSampleData.map((contact) => {
      return { id: uid(), ...contact };
    });
    setContacts([...contacts, ...demoContact]);

    toast.success("Contacts imported", {
      progress: undefined,
    });
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

      const newInteraction = {
        id: uid(),
        ...interaction,
        participants: ArrayOfRandomParticipants,
      };

      return newInteraction;
    });

    setInteractions([...interactions, ...demoInteractions]);

    toast.success("Interactions imported", {
      progress: undefined,
    });
  }

  function handleAddNewContact(newContact) {
    const newContactId = uid();
    const currentDateTime = getCurrentTimestamp();

    const formattedContact = {
      ...newContact,
      id: newContactId,
      dateCreated: currentDateTime,
      dateDeleted: "",
      deceased: newContact.deceased ? true : false,
    };

    setContacts([...contacts, formattedContact]);
    router.push(formattedContact.id);

    updateActivityLog({
      date: currentDateTime,
      entity: "Contact",
      action: "Create",
      oldData: null,
      newData: formattedContact,
    });

    toast.success("Contact created", {
      progress: undefined,
    });
  }

  function handleUpdateContact(updatedContact) {
    const currentDateTime = getCurrentTimestamp();
    let oldContact = {};

    setContacts(
      contacts.map((contact) => {
        if (contact.id === updatedContact.id) {
          oldContact = contact;
          return { ...updatedContact, dateLastUpdate: currentDateTime };
        } else {
          return contact;
        }
      })
    );

    updateActivityLog({
      date: currentDateTime,
      entity: "Contact",
      action: "Update",
      oldData: oldContact,
      newData: updatedContact,
    });

    router.push(`/${updatedContact.id}`);

    toast.success("Contact updated", {
      progress: undefined,
    });
  }

  function handleDeleteContact(IdOfContactToDelete) {
    const currentDateTime = getCurrentTimestamp();
    let oldContact = {};
    let updatedContact = {};

    setContacts(
      contacts.map((contact) => {
        if (contact.id === IdOfContactToDelete) {
          oldContact = contact;
          updatedContact = { ...contact, dateDeleted: currentDateTime };
          return updatedContact;
        } else {
          return contact;
        }
      })
    );

    updateActivityLog({
      date: currentDateTime,
      entity: "Contact",
      action: "Delete",
      oldData: oldContact,
      newData: updatedContact,
    });

    router.push("/");

    toast.success("Contact deleted", {
      progress: undefined,
    });
  }

  function handleAddNewInteraction(newInteraction) {
    const newInteractionId = uid();

    const formattedInteraction = {
      ...newInteraction,
      id: newInteractionId,
      dateCreated: getCurrentTimestamp(),
      dateDeleted: "",
    };

    setInteractions([...interactions, formattedInteraction]);
    router.push(`/interactions/${formattedInteraction.id}`);

    toast.success("Interaction created", {
      progress: undefined,
    });
  }

  function handleUpdateInteraction(updatedInteraction) {
    setInteractions(
      interactions.map((interaction) => {
        if (interaction.id === updatedInteraction.id) {
          return {
            ...updatedInteraction,
            dateLastUpdate: getCurrentTimestamp(),
          };
        } else {
          return interaction;
        }
      })
    );
    router.push(`/interactions/${updatedInteraction.id}`);

    toast.success("Interaction updated", {
      progress: undefined,
    });
  }

  function handleDeleteInteraction(IdOfInteractionToDelete) {
    setInteractions(
      interactions.map((interaction) => {
        if (interaction.id === IdOfInteractionToDelete) {
          return { ...interaction, dateDeleted: getCurrentTimestamp() };
        } else {
          return interaction;
        }
      })
    );

    router.push("/interactions");

    toast.success("Interaction deleted", {
      progress: undefined,
    });
  }

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
