import react, { useEffect, useState } from "react";
import useForm from "./hook/useForm";
import useLoader from "./hook/useLoader";
import useMessage from "./hook/useMessage";
import DiscordServices from "./services/DiscordService";

function App() {
  const { formState, setFormNameValue, isValid, clearForm } = useForm({
    data: { name: "", email: "", message: "" },
    error: {},
  });

  const { setBusy, busy } = useLoader({
    state: false,
  });

  const { render, setMessage } = useMessage({
    type: "",
    text: "",
  });

  const { WebHookBot } = DiscordServices(clearForm, setBusy, setMessage);

  return (
    <div className="bg-light">
      <nav className="fixed-top p-2 bg-primary text-white">React Form</nav>
      <div className="vh-100 d-flex flex-column  justify-content-center align-items-center">
        {render()}
        <div className="card">
          <form
            className="p-3"
            onSubmit={(e) => {
              e.preventDefault();
              WebHookBot(formState.data);
            }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="name"
                name="name"
                value={formState.data.name}
                className="form-control form-control-sm"
                onChange={(e) => {
                  const { name, value } = e.target;
                  setFormNameValue(name, value);
                }}
                onBlur={(e) => {
                  const { name, value } = e.target;
                  setFormNameValue(name, value);
                }}
              />
            </div>
            {formState.error.name ? (
              <div className="alert alert-danger py-2">
                {formState.error.name}
              </div>
            ) : (
              ""
            )}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formState.data.email}
                className="form-control form-control-sm"
                onChange={(e) => {
                  const { name, value } = e.target;
                  setFormNameValue(name, value);
                }}
                onBlur={(e) => {
                  const { name, value } = e.target;
                  setFormNameValue(name, value);
                }}
              />
            </div>
            {formState.error.email ? (
              <div className="alert alert-danger py-2">
                {formState.error.email}
              </div>
            ) : (
              ""
            )}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                cols="40"
                rows="5"
                name="message"
                className="form-control form-control-sm"
                onChange={(e) => {
                  const { name, value } = e.target;
                  setFormNameValue(name, value);
                }}
                onBlur={(e) => {
                  const { name, value } = e.target;
                  setFormNameValue(name, value);
                }}
                value={formState.data.message}
              ></textarea>
            </div>
            {formState.error.message ? (
              <div className="alert alert-danger py-2">
                {formState.error.message}
              </div>
            ) : (
              ""
            )}

            <button
              className="btn btn-primary btn-sm"
              type="submit"
              disabled={!isValid}
            >
              <span className="mx-2">Submit</span>
              {busy.state ? (
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                ""
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
