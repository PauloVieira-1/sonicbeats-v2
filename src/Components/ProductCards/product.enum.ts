export type ProductEnum = {
  Product1: "Product1",
  Product2: "Product2",
  Product3: "Product3",
  Product4: "Product4",
};

export type ProductId = ProductEnum[keyof ProductEnum]; // "Product1" | "Product2" | "Product3" | "Product4"