export interface DynamicTable {
  id: number;
  tableName: string;
  dynamicTableColumns: {
    [key: string]: DynamicTableColumn;
  };
  dynamicTableRows: {
    [key: string]: DynamicTableColumn;
  };
}

export interface DynamicTableColumn {
  id: number;
  headerText: string;
}

export interface DynamicTableRow {
  id: number;
  completed: boolean;
  dynamicTableRowEntry: {
    [key: string]: DynamicTableRowEntry;
  };
}

export interface DynamicTableRowEntry {
  id: number;
  columnText: string;
}
