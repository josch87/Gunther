import ContactForm from "@/components/ContactForm/ContactForm";
import { useRouter } from "next/router";

export default function EditContactPage({ contacts, onUpdateContact }) {
  const router = useRouter();
  const { id } = router.query;

  const contact = contacts.find((contact) => contact.id === id);

  if (id === undefined) {
    return <p>Loading contact details...</p>;
  }

  if (contact === undefined) {
    return <div>Contact with the ID &apos;{id}&apos; not found</div>;
  }

  return (
    <>
      <ContactForm
        type="update"
        contact={contact}
        onSubmitForm={onUpdateContact}
      />
    </>
  );
}
