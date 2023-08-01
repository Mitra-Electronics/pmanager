import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center h-screen text-6xl md:text-7xl lg:text-9xl">
        {error.statusText || error.message}
    </div>
  );
}