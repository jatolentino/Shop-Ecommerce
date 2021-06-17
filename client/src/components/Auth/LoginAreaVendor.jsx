import React, { useRef, useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/img/logoShop.svg" 
import loginvendor from "../../assets/img/loginvendor.jpg" 
import AuthContext from "../../contexts/auth-context";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import "./loginarea.scss"

function LoginAreaVendor({history }) {
  const email = useRef("vendor@gmail.com");
  const password = useRef("password");
  const [alertMsg, setAlertMsg] = useState(null);
  const context = useContext(AuthContext);
  const [loading, setLoading] = useState(false)


  const Loader = () => (
    <div className="spinner">
      <svg
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231   0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475   2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464    1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
          stroke="white"
        />
      </svg>
    </div>
  )

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true)
    fetch(process.env.REACT_APP_SERVER_API + "user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.id && res.role === "user"){
          alert("You are not registered as a vendor, please register as such. Thank you!")
        }
        if (res.id && res.role === "vendor") {
          email.current.value = "";
          password.current.value = "";
          context.login(res.token, res.id, res.tokenExpiration, res.role);
          localStorage.setItem("token", JSON.stringify(res.token));
          localStorage.setItem("userId", JSON.stringify(res.id));
          localStorage.setItem(
            "tokenExpiration",
            JSON.stringify(res.tokenExpiration)
          );
          localStorage.setItem("role", JSON.stringify(res.role));
          history.push("/ecommerce/dashboard");
        } else if (res.error) {
          setAlertMsg(res.error);
        } else if (res.errors) {
          let errors = Object.values(res.errors);
          setAlertMsg(errors);
        }
      })
      .catch((err) => console.log(err));
  };

  const [showPass, setShowPass] = useState(false)

  return (
    <section className="min-h-screen flex items-stretch text-white ">
    <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{backgroundImage: "url(" + loginvendor + ")"}}>
        <div className="absolute bg-black opacity-20 inset-0 z-0" />
        <div className="w-full px-24 z-10">
        <h1 className="text-5xl font-bold text-left tracking-wide text-white">
            Welcome Again!
        </h1>
        <p className="text-3xl my-4 text-white">
            Access to your store with a single click
        </p>
        </div>
        <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
        <span>
            <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
        </span>
        <span>
            <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
        </span>
        <span>
            <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        </span>
        </div>
    </div>
    <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style={{ backgroundColor: "#161616" }}
    >
        <div
        className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center">
        <div className="absolute bg-black opacity-60 inset-0 z-0" />
        </div>
        <div className="w-full py-6 z-20">
        <Link to="/">
            <div className="my-6">
                <img src={logo}/>
            </div>
        </Link>
        <div className="py-6 space-x-2">
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
            f
            </span>
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
            G+
            </span>
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
            in
            </span>
        </div>
        <p className="text-gray-100">or use your email account</p>


        <form onSubmit={handleLogin} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto flex flex-col">
            <div className="pb-2 pt-4">
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                ref={email}
                className="block w-full p-4 text-lg rounded-sm bg-black"
                defaultValue={ email.current }
            />
            </div>

            <div className=" flex justify-between items-center bg-black">
                <input
                    className="block w-full p-4 text-lg rounded-sm bg-transparent relative -mr-10 z-0"
                    type={showPass ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    ref={password}
                    defaultValue={password.current}
                />
                
                <div onClick={() => setShowPass(!showPass)} style={{cursor:"pointer"}} className="z-10">
                    {showPass ?  <VisibilityOffOutlinedIcon className="icon mr-3" /> : <VisibilityOutlinedIcon className="icon mr-3" />}
                </div>
            </div>


            <div className="text-right">
            <a href="#" className="text-gray-400 hover:underline hover:text-gray-100 visited:text-gray-400" >Forgot your password?</a>
            </div>
            <div className="m-auto pb-2 pt-4 ">
                <button type="submit" className="submit-btn block px-20 py-3 text-lg rounded-xl bg-gray-600 hover:bg-gray-800 focus:outline-none"
                disabled={loading}>{!loading ? "Login" : <Loader className="spinner" />} 
                </button>
            </div>
            
        </form>
        </div>
    </div>
    </section>
  );
}

export default withRouter(LoginAreaVendor);
