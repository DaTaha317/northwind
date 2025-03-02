import { OData } from "@odata/client";

const serviceEndpoint =
  import.meta.env.MODE === "development"
    ? "/api" // Uses Vite proxy in dev
    : `${window.location.origin}/api`; // Uses Vercel API in prod

export const client = OData.New4({ serviceEndpoint });
