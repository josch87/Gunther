import SingleLineInput from "./SingleLineInput/SingleLineInput";

const baseGender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "diverse", label: "Diverse" },
];

export default function ContactForm() {
  return (
    <form>
      <SingleLineInput
        type={"text"}
        labelContent="First name"
        id="firstName"
        name="firstName"
        required
      />
      <SingleLineInput
        type={"text"}
        labelContent="Middle name"
        id="middleName"
        name="middleName"
      />
      <SingleLineInput
        type={"text"}
        labelContent="Last name"
        id="lastName"
        name="lastName"
      />
      <SingleLineInput
        type={"text"}
        labelContent="Nickname"
        id="nickName"
        name="nickName"
      />
      <SingleLineInput
        type={"singleSelect"}
        labelContent="Gender"
        id="gender"
        name="gender"
        options={baseGender}
      />
    </form>
  );
}
