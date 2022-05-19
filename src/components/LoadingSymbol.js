import ReactLoading from "react-loading";
import "../customcss.css";

export default function LoadingSymbol() {
  return (
    <div className="container" class="LoadingSymbol">
      <ReactLoading type={"bars"} color={"#03fc4e"} height={100} width={100} />
    </div>
  );
}
