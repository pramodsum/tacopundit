export type RouteParams = {
  slug?: string;
  category?: string;
};

export type Recipe = {
  name: string;
  slug: string;
  recipe?: string;
  url?: string;
  uuid?: string;
};

export type RecipeDetails = {
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
