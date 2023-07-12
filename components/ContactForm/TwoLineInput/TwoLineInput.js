import CreatableSelect from "react-select/creatable";
import {
  ColumnOne,
  ColumnTwo,
  Container,
  StyledInput,
  StyledLabel,
} from "./TwoLineInput.styled";
import { baseEmailInputType } from "@/data/BaseData";

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
      <Container>
        <ColumnOne>
          <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
          <StyledInput type="email" id={id} name={name} required={required} />
        </ColumnOne>
        <ColumnTwo>
          <StyledLabel htmlFor={`${id}Type`}>Type</StyledLabel>
          <CreatableSelect
            id={`${id}Type`}
            name={`${id}Type`}
            options={baseEmailInputType}
          />
        </ColumnTwo>
      </Container>
    );
  }

  return "Input type is missing for TwoLineInput";
}
