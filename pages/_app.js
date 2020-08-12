//import stylesheet from 'styles/main.scss'
import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;
export default function App({ Component, pageProps }) {
  
      return <Component {...pageProps} />
    }