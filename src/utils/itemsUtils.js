import { products } from '../products';

export const getQty = (currentItems, productId) => {
  const existProduct = currentItems.find(
    (item) => item.product.pId === productId
  );
  return existProduct ? existProduct.qty : 0;
};

export const getPrice = (currentItems, productId) =>{
  const existProduct = currentItems.find(
    (item) => item.product.pId === productId);
    return existProduct ? existProduct.price: 0;
  
}

export const upsertProductToChart = (items, productId, isAdd = true) => {
  const currentQty = getQty(items, productId);
  const urun = products.find((item) => item.pId === productId)
  console.log(urun);
  const condition = (!isAdd && currentQty > 1) || isAdd;

  return [
    ...items.filter((item) => item.product.pId !== productId),
    ...[
      {
        qty: getQty(items, productId) + (isAdd ? 1 : -1),
        product: urun,
        price: getPrice(items, productId) + (
          isAdd ?
          urun.price
           : -(urun.price)),
      },
    ].filter(() => condition),
  ].sort((firstItem, secondItem) =>
    firstItem.product.text.localeCompare(secondItem.product.text)
  );
};