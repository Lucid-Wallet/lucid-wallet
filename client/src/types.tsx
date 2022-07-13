export interface CategoryType {
  category_id: number,
  category: string,
}

export interface HomeCategoryType {
  category: string,
  items: any,
}

export interface ItemType {
  category: string,
  category_id: number,
  count: number,
  date_purchased: string,
  item_id: number,
  name: string,
  note: string,
  price_per: number,
  rating: number,
  user_id: number,
  variable_cost: boolean
}