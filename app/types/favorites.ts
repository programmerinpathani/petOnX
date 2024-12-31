export interface FavoriteItem {
  id: number;
  dateAdded: string;
}

export interface FavoritesState {
  items: FavoriteItem[];
}