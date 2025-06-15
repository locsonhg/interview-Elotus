import { AxiosResponse } from "axios";

export type ResponceCommon<T> = Promise<AxiosResponse<T>>;

export type Params = {
  page?: number;
  language?: string;
};
