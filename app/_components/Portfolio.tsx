const Portfolio_API_Endpoint = "NEXT_PUBLIC_PORTFOLIO_API";
async function getData() {
  const res = await fetch(process.env[Portfolio_API_Endpoint] as string);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const data = getData();
