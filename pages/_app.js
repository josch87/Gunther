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
    const activityId = uid();
    data = { ...data, id: activityId };
    console.log(data);
    setActivityLog([...activityLog, data]);
  }

  const activeContacts = contacts.filter(
    (contact) => contact.dateDeleted === null || contact.dateDeleted === ""
  );

  function handleImportDemoContacts() {
    const currentDateTime = getCurrentTimestamp();

    const demoContact = contactsSampleData.map((contact) => {
      return { id: uid(), ...contact, dateCreated: currentDateTime };
    });
    setContacts([...contacts, ...demoContact]);

    updateActivityLog({
      date: currentDateTime,
      entity: "Contact",
      action: "ImportSampleData",
      oldData: null,
      newData: demoContact,
    });

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

    const currentDateTime = getCurrentTimestamp();

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
        dateCreated: currentDateTime,
      };

      return newInteraction;
    });

    setInteractions([...interactions, ...demoInteractions]);

    updateActivityLog({
      date: currentDateTime,
      entity: "Interaction",
      action: "ImportSampleData",
      oldData: null,
      newData: demoInteractions,
    });

    toast.success("Interactions imported", {
      progress: undefined,
    });
  }

  function handleAddNewContact(newContact) {
    const newContactId = uid();
    const currentDateTime = getCurrentTimestamp();

    const enhancedNewContact = {
      ...newContact,
      id: newContactId,
      dateCreated: currentDateTime,
      dateDeleted: "",
      deceased: newContact.deceased ? true : false,
    };

    setContacts([...contacts, enhancedNewContact]);
    router.push(enhancedNewContact.id);

    updateActivityLog({
      date: currentDateTime,
      entity: "Contact",
      action: "Create",
      oldData: null,
      newData: enhancedNewContact,
    });

    toast.success("Contact created", {
      progress: undefined,
    });
  }

  function handleUpdateContact(contactToUpdate) {
    const currentDateTime = getCurrentTimestamp();
    let oldContact = {};
    let updatedContact = {};

    setContacts(
      contacts.map((contact) => {
        if (contact.id === contactToUpdate.id) {
          oldContact = contact;
          updatedContact = {
            ...contactToUpdate,
            dateLastUpdate: currentDateTime,
          };
          return updatedContact;
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

    router.push(`/${contactToUpdate.id}`);

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
    const currentDateTime = getCurrentTimestamp();

    const formattedInteraction = {
      ...newInteraction,
      id: newInteractionId,
      dateCreated: currentDateTime,
      dateDeleted: "",
    };

    setInteractions([...interactions, formattedInteraction]);

    updateActivityLog({
      date: currentDateTime,
      entity: "Interaction",
      action: "Create",
      oldData: null,
      newData: formattedInteraction,
    });

    router.push(`/interactions/${formattedInteraction.id}`);

    toast.success("Interaction created", {
      progress: undefined,
    });
  }

  function handleUpdateInteraction(interactionToUpdate) {
    const currentDateTime = getCurrentTimestamp();
    let oldInteraction = {};
    let updatedInteraction = {};

    setInteractions(
      interactions.map((interaction) => {
        if (interaction.id === interactionToUpdate.id) {
          oldInteraction = interaction;
          updatedInteraction = {
            ...interactionToUpdate,
            dateLastUpdate: currentDateTime,
          };
          return updatedInteraction;
        } else {
          return interaction;
        }
      })
    );

    updateActivityLog({
      date: currentDateTime,
      entity: "Interaction",
      action: "Update",
      oldData: oldInteraction,
      newData: updatedInteraction,
    });

    router.push(`/interactions/${interactionToUpdate.id}`);

    toast.success("Interaction updated", {
      progress: undefined,
    });
  }

  function handleDeleteInteraction(IdOfInteractionToDelete) {
    const currentDateTime = getCurrentTimestamp();
    let oldInteraction = {};
    let updatedInteraction = {};

    setInteractions(
      interactions.map((interaction) => {
        if (interaction.id === IdOfInteractionToDelete) {
          oldInteraction = interaction;
          updatedInteraction = { ...interaction, dateDeleted: currentDateTime };
          return updatedInteraction;
        } else {
          return interaction;
        }
      })
    );

    updateActivityLog({
      date: currentDateTime,
      entity: "Interaction",
      action: "Delete",
      oldData: oldInteraction,
      newData: updatedInteraction,
    });

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
