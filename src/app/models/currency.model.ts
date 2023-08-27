export interface ICurrency {
  selected: boolean;
  code: string;
  flagUrl: string;
  desc: string;
  rate?: number;
}

export interface IApiResponse<T> {
  currencies: T;
}
