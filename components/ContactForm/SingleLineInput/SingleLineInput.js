import Select from "react-select";
import {
  StyledInput,
  StyledTextInput,
  StyledLabel,
} from "./SingleLineInput.styled";

export default function SingleLineInput({
  type,
  labelContent,
  id,
  name,
  options,
  required = false,
}) {
  if (type === "text") {
    return (
      <StyledTextInput>
        <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
        <StyledInput type="text" id={id} name={name} required={required} />
      </StyledTextInput>
    );
  }

  if (type === "singleSelect") {
    return (
      <StyledTextInput>
        <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
        <Select options={options} />
      </StyledTextInput>
    );
  }

  return "Input type is missing";
}
