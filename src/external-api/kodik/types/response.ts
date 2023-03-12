export interface ResponseKodik<T = any> {
  total: number;
  prev_page: string | null;
  next_page: string | null;
  results: T[];
}
