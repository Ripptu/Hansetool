export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
  image: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  url: string; // Placeholder for now
}
