import dynamic from "next/dynamic";
const Select = dynamic(
  () => import("react-select").then((mod) => mod.default),
  { ssr: false }
);

import { StyledInput, StyledLabel, Container } from "./SingleLineInput.styled";
const CreatableSelect = dynamic(
  () => import("react-select/creatable").then((mod) => mod.default),
  { ssr: false }
);

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
  isMulti,
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
          id={id}
          name={name}
          options={options}
          isClearable={isClearable}
          value={value ? { label: value, value: value } : undefined}
          onChange={onChange}
          isMulti={isMulti}
          required={required}
        />
      </Container>
    );
  }

  if (type === "creatableSelect") {
    return (
      <Container>
        <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
        <CreatableSelect
          id={id}
          name={name}
          options={options}
          isClearable={isClearable}
          required={required}
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

  return `Input type '${type}' is missing for SingleLineInput`;
}
