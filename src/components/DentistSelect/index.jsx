import React, { useContext, useEffect } from "react";
import { SchedulingContext } from "../../context/SchedulingContext";

export function DentistSelect() {
  const { dentistsList, dentist, setDentist, setSpecialization, setStep } =
    useContext(SchedulingContext);

  useEffect(() => {
    setDentist(dentistsList[0]?.id_dentista);
  }, []);

  const handleDentistChange = (value) => {
    const [dent, spec] = value.split("-");
    setDentist(dent);
    setSpecialization(spec);
    setStep(1);
  };

  return (
    <>
      <div>
        <label htmlFor="dentists-select">
          Selecione o(a) dentista e especialização:
        </label>
        <select
          defaultValue={dentist}
          onChange={(e) => handleDentistChange(e.target.value)}
          name="dentists-select"
          id="dentists-select"
        >
          {dentistsList.map((dentist) =>
            dentist.especializacoes.map((e) => (
              <option
                value={`${dentist.id_dentista}-${e.id_especializacao}`}
                key={dentist.id_dentista}
              >
                {dentist.nome_tratamento} ({e.especializacao})
              </option>
            ))
          )}
        </select>
      </div>
    </>
  );
}
