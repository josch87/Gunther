import { HeadingOne } from "./Heading.styled";

export default function Heading({ level, children }) {
  if (level === 1) {
    return <HeadingOne>{children}</HeadingOne>;
  }
}
