import { StyledInput, StyledTextInput, StyledLabel } from "./TextInput.styled";

export default function TextInput({
  labelContent,
  id,
  name,
  required = false,
}) {
  return (
    <StyledTextInput>
      <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
      <StyledInput type="text" id={id} name={name} required={required} />
    </StyledTextInput>
  );
}
