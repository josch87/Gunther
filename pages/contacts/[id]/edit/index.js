import ContactForm from "@/components/Forms/ContactForm/ContactForm";
import DefaultHead from "@/components/Layout/DefaultHead/DefaultHead";
import { getFullName } from "@/utils/getContactDetails";
import { useRouter } from "next/router";

export default function EditContactPage({ contacts, onUpdateContact }) {
  const router = useRouter();
  const { id } = router.query;

  const contact = contacts.find(
    (contact) =>
      contact.id === id &&
      (contact.dateDeleted === null || contact.dateDeleted === "")
  );

  if (id === undefined) {
    return <p>Loading contact details...</p>;
  }

  if (contact === undefined) {
    return <p>Contact with the ID &apos;{id}&apos; not found</p>;
  }

  return (
    <>
      <DefaultHead
        pageTitle={`Edit Contact Details of ${getFullName(contact)}`}
      />
      <ContactForm contact={contact} onSubmitForm={onUpdateContact} isUpdate />
    </>
  );
}
