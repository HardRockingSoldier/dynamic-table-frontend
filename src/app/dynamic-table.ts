export interface DynamicTable {
  id: number;
  tableName: string;
  dynamicTableColumns: DynamicTableColumn[];
  dynamicTableRows: DynamicTableRow[];
}

export interface DynamicTableColumn {
  id: number;
  headerText: string;
}

export interface DynamicTableRow {
  id: number;
  completed: boolean;
  dynamicTableRowEntries: DynamicTableRowEntry[];
}

export interface DynamicTableRowEntry {
  id: number;
  columnText: string;
}
