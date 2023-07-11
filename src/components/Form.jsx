import "../style.css";
// import { useState } from "react";

function Form() {
  // const [formData, setFormData] = useState("");

  // const handleChange = (event) => {
  //   setFormData(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setTimeout(function () {
  //     setSubmitClicked(true);
  //   }, 5000);
  //   const link = document.createElement("a");
  //   link.setAttribute(
  //     "href",
  //     `mailto:info.landchain@gmail.com?subject=Nuevo Suscriptor&body=Quiero recibir más información en ${formData}`
  //   );
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  // const [submitClicked, setSubmitClicked] = useState(false);

  return (
    <>
      <div className="form-section" id="form-section">
        {/* <div className="form-section-overlay">
          <div className="form-section-container">
            <h2>Quiero saber más sobre Landchain cuando se lance.</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={formData}
                placeholder="ejemplo@gmail.com"
                onChange={handleChange}
              />
              <button type="submit">Suscribirme</button>
            </form>
            {submitClicked && (
              <p className="thank-you">Gracias por suscribirte!</p>
            )}
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Form;
