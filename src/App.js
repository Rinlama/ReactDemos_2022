import { useState } from "react";
import useForm from "./hook/useForm";
import DiscordService from "./services/DiscordService";

export const initialFormState = {
  data: {
    name: "",
    email: "",
    message: "",
  },
  error: {},
};

function App() {
  const { formData, setDynamicFormData, clearForm, isValid } =
    useForm(initialFormState);

  const { Send } = DiscordService(clearForm);

  const PostToDiscord = () => {
    const description = Object.entries(formData.data)
      .map((d) => `${d[0]} : ${d[1]}`)
      .join("\n");

    Send(description);
  };

  return (
    <div className="bg-light">
      <nav className="fixed-top p-2 bg-primary text-white">
        React Contact Form
      </nav>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="card p-3">
          {JSON.stringify(formData)}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              PostToDiscord();
            }}
          >
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control form-control-sm"
                name="name"
                value={formData.data.name}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}
              />
              {formData.error.name ? (
                <div className="alert alert-danger py-2">
                  {formData.error.name}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.data.email}
                className="form-control form-control-sm"
                onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}
              />
              {formData.error.email ? (
                <div className="alert alert-danger py-2">
                  {formData.error.email}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control form-control-sm"
                cols="40"
                rows="5"
                name="message"
                value={formData.data.message}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}
              ></textarea>
              {formData.error.message ? (
                <div className="alert alert-danger py-2">
                  {formData.error.message}
                </div>
              ) : (
                ""
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-sm"
              disabled={!isValid}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
