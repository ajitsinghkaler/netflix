import { Header } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({children}) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo alt="Netflix" src="https://raw.githubusercontent.com/karlhadwen/netflix/master/src/logo.svg" to={ROUTES.HOME}/>
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
