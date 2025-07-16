import Box from "./components/box";
import Steps from "./components/steps";
import Divider from "./components/divider";
import Input from "./components/Input";

function App() {
  
  return (
    <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}>
      <Box>
        <Steps steps= {[
          {nome: 'Contato',ordem: 1},
          {nome: 'Empresa',ordem: 2},
          {nome: 'Projeto',ordem: 3},

        ]} />
        <Divider/>
        <form > 
          <Input/>
          <Input/>
          <Input/>




        </form>
      </Box>
      

    </div>
  );
}

export default App
