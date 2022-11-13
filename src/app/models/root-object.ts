import { Search } from "./search";

export interface RootObject {
  Search: Search[];
  totalResults: string;
  Response: string;
}
