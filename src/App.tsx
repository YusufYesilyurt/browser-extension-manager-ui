import { Header, Main } from "./app-layout";
import AppHeader from "./components/app-header";
import ButtonGroup from "./components/button-group";
import ExtensionsCard from "./components/extensions-card";
import ExtensionsCards from "./components/extensions-cards";
import ExtensionsHeader from "./components/extensions-header";
import H1 from "./components/h-1";
import { ExtensionProvider } from "./context/extension-context";

function App() {
  return (
    <>
      <Header>
        <AppHeader></AppHeader>
      </Header>
      <Main>
        <ExtensionProvider>
          <ExtensionsHeader>
            <H1></H1>
            <ButtonGroup></ButtonGroup>
          </ExtensionsHeader>
          <ExtensionsCards>
            <ExtensionsCard></ExtensionsCard>
          </ExtensionsCards>
        </ExtensionProvider>
      </Main>
    </>
  );
}

export default App;
