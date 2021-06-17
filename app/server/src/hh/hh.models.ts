export interface IHhResponse {
  items: IVacancy[];
  found: number;
  pages: number;
  per_page: number;
  page: number;
  clusters: ICluster[];
  arguments?: any;
  alternate_url: string;
}

export interface ICluster {
  name: string;
  id: string;
  items: IClusterElement[];
}

export interface IClusterElement {
  name: string;
  url: string;
  count: number;
}

export interface IVacancy {
  id: string;
  premium: boolean;
  name: string;
  department?: any;
  has_test: boolean;
  response_letter_required: boolean;
  area: IArea;
  salary?: ISalary;
  type: IType;
  address?: IAddress;
  response_url?: any;
  sort_point_distance?: any;
  published_at: string;
  created_at: string;
  archived: boolean;
  apply_alternate_url: string;
  insider_interview?: any;
  url: string;
  alternate_url: string;
  relations: any[];
  employer: IEmployer;
  snippet: ISnippet;
  contacts?: IContact;
  schedule: IType;
  working_days: any[];
  working_time_intervals: any[];
  working_time_modes: any[];
  accept_temporary: boolean;
}

export interface IContact {
  name: string;
  email: string;
  phones: IPhone[];
}

export interface IPhone {
  comment?: any;
  city: string;
  number: string;
  country: string;
}

export interface ISnippet {
  requirement?: string;
  responsibility?: string;
}

export interface IEmployer {
  id: string;
  name: string;
  url: string;
  alternate_url: string;
  logo_urls?: ILogourl;
  vacancies_url: string;
  trusted: boolean;
}

export interface ILogourl {
  '90': string;
  '240': string;
  original: string;
}

export interface IAddress {
  city?: string;
  street?: string;
  building?: string;
  description?: any;
  lat?: number;
  lng?: number;
  raw?: string;
  metro?: IMetro;
  metro_stations: IMetro[];
  id: string;
}

export interface IMetro {
  station_name: string;
  line_name: string;
  station_id: string;
  line_id: string;
  lat: number;
  lng: number;
}

export interface IType {
  id: string;
  name: string;
}

export interface ISalary {
  from: number;
  to?: number;
  currency: string;
  gross: boolean;
}

export interface IArea {
  id: string;
  name: string;
  url: string;
}
