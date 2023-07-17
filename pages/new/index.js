import ContactForm from "@/components/ContactForm/ContactForm";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function CreateNewContactPage({ onAddNewContact }) {
  const router = useRouter();

  function handleCreateNewContact(currentContact) {
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

    onAddNewContact(formattedContact);
    router.push(formattedContact.id);
  }
  return (
    <>
      <ContactForm
        onSubmitForm={onAddNewContact}
        headingContent="Create new contact"
      />
    </>
  );
}
