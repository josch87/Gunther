import CreatableSelect from "react-select/creatable";
import {
  ColumnOne,
  ColumnTwo,
  Container,
  StyledInput,
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
  onChange,
}) {
  if (type === "email") {
    return (
      <Container>
        <ColumnOne>
          <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
          <StyledInput
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
          <CreatableSelect id={typeId} name={typeName} options={options} />
        </ColumnTwo>
      </Container>
    );
  }

  if (type === "tel") {
    return (
      <Container>
        <ColumnOne>
          <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
          <StyledInput
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
          <CreatableSelect id={typeId} name={typeName} options={options} />
        </ColumnTwo>
      </Container>
    );
  }

  if (type === "text") {
    return (
      <Container>
        <ColumnOne>
          <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
          <StyledInput type="text" id={id} name={name} required={required} />
        </ColumnOne>
        <ColumnTwo>
          <StyledLabel htmlFor={typeId}>Type</StyledLabel>
          <CreatableSelect id={typeId} name={typeId} options={options} />
        </ColumnTwo>
      </Container>
    );
  }

  return "Input type is missing for TwoLineInput";
}
