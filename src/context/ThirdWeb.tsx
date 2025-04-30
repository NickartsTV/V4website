import { ThirdwebProvider } from "thirdweb/react";

const ThirdwebContext = ({ children }) => {
  return <ThirdwebProvider>{children}</ThirdwebProvider>;
};

export default ThirdwebContext;
