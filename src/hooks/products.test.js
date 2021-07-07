const { useProduct, useProducts } = require("./products");

describe("useProduct()", () => {
  test("returns a product", () => {
    const slang = "first-photography-flowers";

    const product = useProduct({ slang });

    expect(product.title).toEqual("1ª photography flowers");
  });

  test("returns undefined if product was not found", () => {
    const slang = "invalid-slang";

    const product = useProduct({ slang });

    expect(product).toBeUndefined();
  });
});

describe("useProducts()", () => {
  test("returns a product list", () => {
    const products = useProducts();

    expect(products.length).toBeGreaterThan(1);
  });
});
