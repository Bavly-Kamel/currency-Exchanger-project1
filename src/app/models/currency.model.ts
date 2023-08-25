export interface ICurrency {
  selected: boolean;
  code: string;
  flagUrl: string;
  desc: string;
}

export interface IApiResponse<T> {
  currencies: T;
}
