import { PageTitle } from "@/components";

export const runtime = "edge";

export default function NotFound() {
  return (
    <>
      <title>404: This page could not be found.</title>
      <div>
        <div>
          <PageTitle>404</PageTitle>
          <div>
            <p>This page could not be found.</p>
          </div>
        </div>
      </div>
    </>
  );
}
