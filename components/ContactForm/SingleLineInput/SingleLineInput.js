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
  onChange,
  value,
}) {
  if (type === "text") {
    return (
      <Container>
        <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
        <StyledInput
          type="text"
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
        />
      </Container>
    );
  }

  if (type === "singleSelect") {
    return (
      <Container>
        <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
        <Select
          options={options}
          isClearable={isClearable}
          value={value ? { label: value, value: value } : undefined}
          onChange={onChange}
        />
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
          value={value}
          onChange={onChange}
        />
      </Container>
    );
  }

  return "Input type is missing for SingleLineInput";
}
