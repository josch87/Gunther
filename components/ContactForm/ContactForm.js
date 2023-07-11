import TextInput from "./TextInput/TextInput";

export default function ContactForm() {
  return (
    <form>
      <TextInput
        labelContent="First name"
        id="firstName"
        name="firstName"
        required
      />
      <TextInput labelContent="Last name" id="lastName" name="lastName" />
      <TextInput labelContent="Nickname" id="nickName" name="nickName" />
    </form>
  );
}
