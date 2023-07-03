import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const isObject = typeof(error) === 'object' && error !== null;
  const statusText = (isObject && 'statusText' in error && typeof(error.statusText) === 'string') ?
    error.statusText : '';
  const message = (isObject && 'message' in error && typeof(error.message) === 'string') ?
    error.message : '';
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
}