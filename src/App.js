import Routing from "./routes/routing";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routing />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
