import  ReactDom  from "react-dom";
import App from "./App";



const rootElement=document.getElementById('root');
const rootRef=ReactDom.createRoot(rootElement);

rootRef.render(<App/>);


