import { ErrorBox, ErrorPage, ErrorPageInner, StyledIcon, Title } from "./styles";

const PageError = () => (
  <ErrorPage>
    <ErrorPageInner>
      <ErrorBox>
        <StyledIcon type='bug' />
        <Title>There’s been a glitch…</Title>
        <p>
          {"We are not quite sure what went wrong. Please contact us or try looking on our "}
          <a href='https://github.com/KirillHub'>GitHub Dev</a>
          {" if you need a hand."}
        </p>
      </ErrorBox>
    </ErrorPageInner>
  </ErrorPage>
);

export default PageError;
