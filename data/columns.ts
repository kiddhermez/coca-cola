import { employeeColumns } from "./employeeColumns";
import { providerColumns } from "./providerColumns";
import { rawMaterialColumns } from "./rawMaterialColumns";
import { transportistColumns } from "./transportistColumns";

export interface columnsProps {
  key: string;
  label: string;
  sort: boolean;
}

export const columns: { [key: string]: columnsProps[] } = {
  employee: employeeColumns,
  provider: providerColumns,
  rawMaterial: rawMaterialColumns,
  transportist: transportistColumns,
};
