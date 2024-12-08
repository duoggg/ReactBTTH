import { fetchAPI } from "../services/fetchAPI";
import { FilterOptions } from "../@types/FilterOptions";;


export async function getProducts(filters: FilterOptions): Promise<any> {
  try {
    const data = await fetchAPI(filters);
    return data;
  } catch(error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
