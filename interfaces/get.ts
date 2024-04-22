export interface getData {
  status: number;
  result: {
    data: any[];
    total: number;
    page: number;
    limit: number;
  };
}
