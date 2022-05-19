import ErrorAlert from "../components/ErrorAlert";
import "../customcss.css";

export default function ErrorPage() {
  const error = "This page was not found!";

  return <ErrorAlert data={error} />;
}
