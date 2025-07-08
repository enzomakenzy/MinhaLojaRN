export interface LoginCredentials {
  user: string;
  password: string;
}

export interface LoginResponseAPI {
  token: string;
}

export interface ProductAPI {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}