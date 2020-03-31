export type RouteParams = {
  slug?: string;
  category?: string;
};

export type Item = {
  name: string;
  slug: string;
  recipe?: string;
  url?: string;
  uuid?: string;
};

export type ItemDetails = {
  name: string;
  slug: string;
  recipe: string;
  url: string;
};

export type Review = {
  recipeName: string;
  commenterName: string;
  text: string;
  stars: number;
};
