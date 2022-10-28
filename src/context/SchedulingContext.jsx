import { createContext, useEffect, useState } from "react";

export const SchedulingContext = createContext(null);

export const SchedulingProvider = ({ children }) => {
  const [dentistsList, setDentistsList] = useState([]);
  const [dentist, setDentist] = useState(0);
  const [specialization, setSpecialization] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(0);
  const [schedule, setSchedule] = useState([]);
  const [message, setMessage] = useState({ text: "", type: "" });

  const submitSchedule = (time, setIsFetching) => {
    const _phone = phone.replace(/[() -]/g, "");

    window.wp.ajax
      .post("post_client", { nome_completo: name, telefone: _phone })
      .then((response) => {
        const data = JSON.parse(response);

        return window.wp.ajax.post("post_schedule", {
          hora: time,
          id_dentista: dentist,
          id_cliente: data.id_cliente,
          id_especializacao: specialization,
        });
      })
      .then((response) => {
        window.alert("Agendamento realizado!");
        setIsFetching(false);
        setStep(0);
      })
      .catch((error) => {
        const data = JSON.parse(error);
        setMessage({ text: data, type: "error" });
      });
  };

  useEffect(() => {
    window.wp.ajax
      .post("get_dentists")
      .done((response) => {
        const data = JSON.parse(response);
        setDentistsList(data);
      })
      .fail((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SchedulingContext.Provider
      value={{
        dentistsList,
        setDentistsList,
        dentist,
        setDentist,
        specialization,
        setSpecialization,
        name,
        setName,
        phone,
        setPhone,
        step,
        setStep,
        schedule,
        setSchedule,
        submitSchedule,
        message,
      }}
    >
      {children}
    </SchedulingContext.Provider>
  );
};
