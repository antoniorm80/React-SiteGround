import { useEffect, useRef } from "react";

export const LoginPage = () => {

  const focusRef = useRef()

  useEffect(() => {
    focusRef.current.focus()
  }, [])
  

  return (
    <>
      <div className="container">
        <form>
          <img
            className="mb-4"
            src="/src/assets/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control mb-3"
              id="floatingInput"
              placeholder="name@example.com"
              ref={focusRef}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </div>
    </>
  );
};
