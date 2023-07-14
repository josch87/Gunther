import {
  ColumnOne,
  ColumnTwo,
  Container,
  StyledInput,
  StyledLabel,
} from "./City.styled";

export default function City({ id, name, required = false }) {
  return (
    <Container>
      <ColumnOne>
        <StyledLabel htmlFor={`${id}ZipCode`}>Zip code</StyledLabel>
        <StyledInput
          type="text"
          id={`${id}ZipCode`}
          name={`${name}ZipCode`}
          size="5"
          required={required}
        />
      </ColumnOne>
      <ColumnTwo>
        <StyledLabel htmlFor={`${id}City`}>City</StyledLabel>
        <StyledInput
          type="text"
          id={`${id}City`}
          name={`${name}City`}
          size="10"
          required={required}
        />
      </ColumnTwo>
    </Container>
  );
}
