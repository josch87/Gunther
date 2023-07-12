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
  max,
  options,
  isClearable = false,
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
        <Select options={options} isClearable={isClearable} />
      </StyledTextInput>
    );
  }

  if (type === "date") {
    return (
      <StyledTextInput>
        <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
        <StyledInput
          type="date"
          id={id}
          name={name}
          max={max}
          required={required}
        />
      </StyledTextInput>
    );
  }

  return "Input type is missing for SingleLineInput";
}
