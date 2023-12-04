import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      toastOptions={{
        className: "RaleWay",
        success: {
          style: {
            color: "green",
            border: "1px solid #EA0F13",
            padding: "16px",
            fontSize: "16px",
          },
        },
        error: {
          style: {
            border: "1px solid #EA0F13",
            padding: "16px",
            color: "#EA0F13",
            fontSize: "16px",
          },
        },
      }}
    />
  );
};

export default Toast;
