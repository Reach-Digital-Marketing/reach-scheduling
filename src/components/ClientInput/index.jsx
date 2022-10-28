import React, { useContext } from "react";
import { SchedulingContext } from "../../context/SchedulingContext";

export function ClientInput() {
  const { name, setName, phone, setPhone } = useContext(SchedulingContext);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handlePhoneChange = (value) => {
    setPhone(phoneMask(value));
  };

  return (
    <>
      <div>
        <label htmlFor="name">Seu nome completo:</label>
        <input
          type="text"
          value={name}
          name="name"
          id="name"
          onChange={(e) => handleNameChange(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Telefone:</label>
        <input
          type="text"
          value={phone}
          name="phone"
          id="phone"
          onChange={(e) => handlePhoneChange(e.target.value)}
          required
        />
      </div>
    </>
  );
}

function phoneMask(value) {
  var r = value.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    // 11+ digits. Format as 5+4.
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    // 6..10 digits. Format as 4+4
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    // 3..5 digits. Add (..)
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    // 0..2 digits. Just add (
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}
