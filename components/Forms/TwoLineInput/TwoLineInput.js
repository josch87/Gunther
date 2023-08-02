import dynamic from "next/dynamic";
const CreatableSelect = dynamic(
  () => import("react-select/creatable").then((mod) => mod.default),
  { ssr: false }
);

import {
  ColumnOne,
  ColumnTwo,
  Container,
  StyledLabel,
} from "./TwoLineInput.styled";

export default function TwoLineInput({
  type,
  labelContent,
  id,
  typeId,
  name,
  typeName,
  options,
  required = false,
  value,
  typeValue,
  onChange,
  typeOnChange,
}) {
  if (type === "email") {
    return (
      <Container>
        <ColumnOne>
          <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
          <input
            type="email"
            id={id}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
          />
        </ColumnOne>
        <ColumnTwo>
          <StyledLabel htmlFor={typeId}>Type</StyledLabel>
          <CreatableSelect
            id={typeId}
            name={typeName}
            options={options}
            value={
              typeValue ? { label: typeValue, value: typeValue } : undefined
            }
            onChange={typeOnChange}
          />
        </ColumnTwo>
      </Container>
    );
  }

  if (type === "tel") {
    return (
      <Container>
        <ColumnOne>
          <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
          <input
            type="tel"
            id={id}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
          />
        </ColumnOne>
        <ColumnTwo>
          <StyledLabel htmlFor={typeId}>Type</StyledLabel>
          <CreatableSelect
            id={typeId}
            name={typeName}
            options={options}
            value={
              typeValue ? { label: typeValue, value: typeValue } : undefined
            }
            onChange={typeOnChange}
          />
        </ColumnTwo>
      </Container>
    );
  }

  if (type === "text") {
    return (
      <Container>
        <ColumnOne>
          <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
          <input
            type="text"
            id={id}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
          />
        </ColumnOne>
        <ColumnTwo>
          <StyledLabel htmlFor={typeId}>Type</StyledLabel>
          <CreatableSelect
            id={typeId}
            name={typeId}
            options={options}
            value={
              typeValue ? { label: typeValue, value: typeValue } : undefined
            }
            onChange={typeOnChange}
          />
        </ColumnTwo>
      </Container>
    );
  }

  return "Input type is missing for TwoLineInput";
}
