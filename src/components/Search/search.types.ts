export interface SearchProps {
  responseData: (data?: any) => void;
}

export interface FormDataType {
  search: String;
}

export interface ItemsType {
  items: Array<{}>;
}

export interface ApiGetType {
  albums: ItemsType;
}
