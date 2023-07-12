import {
  StyledInput,
  StyledLabel,
  StyledTextInput,
} from "./TwoLineInput.styled";

export default function TwoLineInput({
  type,
  labelContent,
  id,
  name,
  max,
  options,
  isClearable = false,
  required = false,
}) {
  if (type === "email") {
    return (
      <StyledTextInput>
        <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
        <StyledInput type="email" id={id} name={name} required={required} />
      </StyledTextInput>
    );
  }

  if (type === "tel") {
    return (
      <StyledTextInput>
        <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
        <StyledInput type="tel" id={id} name={name} required={required} />
      </StyledTextInput>
    );
  }

  return "Input type is missing for TwoLineInput";
}
