// lib/fetchPortfolioData.ts
export interface PortfolioItem {
  id: number;
  project_name: string;
  description: string;
  project_link: string;
  category: string;
  thumbnail: string;
}

export async function fetchPortfolioData(): Promise<PortfolioItem[]> {
  try {
    const res = await fetch("http://localhost:3000/api/portfolio", {
      next: { revalidate: 60 }, // Optional: Cache revalidation interval in seconds
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch portfolio data:", error);
    return [];
  }
}
