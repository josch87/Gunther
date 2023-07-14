import ContactForm from "@/components/ContactForm/ContactForm";
import { useRouter } from "next/router";

export default function EditContactPage({ contacts }) {
  const router = useRouter();
  const { id } = router.query;

  const contact = contacts.find((contact) => contact.id === id);

  if (id === undefined) {
    return <p>Loading...</p>;
  }

  if (contact === undefined) {
    return <p>Contact with the ID &apos;{id}&apos; not found</p>;
  }

  return (
    <>
      <ContactForm />
    </>
  );
}
