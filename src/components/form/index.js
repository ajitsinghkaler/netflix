import {
  Error,
  Container,
  Base,
  Title,
  TextSmall,
  Submit,
  Input,
  Link,
  Text
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ ...restProps }) {
  return <Link {...restProps}></Link>;
};

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps}></Input>;
};

Form.Submit = function FormSubmit({ ...restProps }) {
  return <Submit {...restProps}></Submit>;
};
