export class QueryParams {
  // 当前页码
  page?: number;
  // 每页条数
  pageSize?: number;
}

export class QueryList<T> extends QueryParams {
  // 列表数据
  list?: T[];
  // 总条数
  total?: number;
}

export interface ListToTreeOptions {
  root?: string | number;
  pidKey?: string;
  idKey?: string;
  childKey?: string;
}
