import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import { HeaderContainer } from "../containers/header";
import { OptForm, Feature } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimted films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at anytime.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it out</OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership?
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
