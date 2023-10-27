import React, { useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p className="success-message">
      Ditt Meddelande har skickats. Vi återkommer inom en arbetsdag
    </p>
  );
};
function ContactForm({ props }) {
  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p4x3hv8",
        "template_jgfr42f",
        e.target,
        "user_jrfTH2e0Ely35ZCVFdT9S"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <form action="" onSubmit={sendEmail}>
      <div className="rn-form-group">
        <input
          type="text"
          name="fullname"
          placeholder="Namn"
          onInvalid={(F) =>
            F.target.setCustomValidity("Vänligen fyll i ditt namn")
          }
          onInput={(F) => F.target.setCustomValidity("")}
          required
        />
      </div>

      <div className="rn-form-group">
        <input
          onInvalid={(F) =>
            F.target.setCustomValidity("Vänligen fyll i din epost")
          }
          onInput={(F) => F.target.setCustomValidity("")}
          type="email"
          name="email"
          placeholder="Epost"
          required
        />
      </div>

      <div className="rn-form-group">
        <input
          onInvalid={(F) =>
            F.target.setCustomValidity("Vänligen fyll i ditt telefonnummer")
          }
          onInput={(F) => F.target.setCustomValidity("")}
          type="text"
          name="phone"
          placeholder="Telefonnummer"
          required
        />
      </div>

      <div className="rn-form-group">
        <input
          onInvalid={(F) =>
            F.target.setCustomValidity("Vänligen fyll i ditt Ämne")
          }
          onInput={(F) => F.target.setCustomValidity("")}
          type="text"
          name="subject"
          placeholder="Ämne"
          required
        />
      </div>

      <div className="rn-form-group">
        <textarea
          onInvalid={(F) =>
            F.target.setCustomValidity("Vänligen fyll i ditt meddelande")
          }
          onInput={(F) => F.target.setCustomValidity("")}
          name="message"
          placeholder="Meddelande"
          required
        ></textarea>
      </div>

      <div className="rn-form-group">
        <button
          className="rn-button-style--2 btn-solid"
          type="submit"
          value="submit"
          name="submit"
          id="mc-embedded-subscribe"
        >
          Skicka
        </button>
      </div>

      <div className="rn-form-group">{result ? <Result /> : null}</div>
    </form>
  );
}
export default ContactForm;
