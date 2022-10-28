import { useContext } from "react";
import { Calendar } from "./components/Calendar";
import { DentistSelect } from "./components/DentistSelect";
import { SchedulingContext } from "./context/SchedulingContext";
import { Schedule } from "./components/Schedule";
import { Spinner } from "./components/Spinner";

import { Container } from "./styles";
import { ClientInput } from "./components/ClientInput";

function App() {
  const { dentistsList, step, message } = useContext(SchedulingContext);

  return (
    <Container>
      <ClientInput />

      {dentistsList.length > 0 ? (
        <>
          <DentistSelect />
          <Calendar />
        </>
      ) : (
        <Spinner />
      )}

      {step >= 2 && <Schedule />}

      {message && <p className={`${message.type}-text`}>{message.text}</p>}
    </Container>
  );
}

export default App;
