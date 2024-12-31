export interface Pet {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
  category?: string;
  description?: string;
  breed: string;
  age: string;
  height: string;
  weight: string;
  healthStatus: string;
  sellerId: string;
  sellerName: string;
  sellerPhone?: string;
  sellerEmail?: string;
}

export interface SearchFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
}