import Select from "react-select";
import { StyledInput, StyledLabel, Container } from "./SingleLineInput.styled";

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
      <Container>
        <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
        <StyledInput type="text" id={id} name={name} required={required} />
      </Container>
    );
  }

  if (type === "singleSelect") {
    return (
      <Container>
        <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
        <Select options={options} isClearable={isClearable} />
      </Container>
    );
  }

  if (type === "date") {
    return (
      <Container>
        <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
        <StyledInput
          type="date"
          id={id}
          name={name}
          max={max}
          required={required}
        />
      </Container>
    );
  }

  return "Input type is missing for SingleLineInput";
}
