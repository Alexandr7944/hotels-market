import listOfProductsReducer, {
  addProduct, changeProduct, removeProduct 
} from '../store/listOfProductsSlice' ;

describe('listOfProductsSlice', () => {
  test('should return default list of products', () => {
    const result = listOfProductsReducer(undefined, { type: ''});

    expect(result.list.length).toBe(40);
  });

  test('should add new products to list of products', () => {
    const action = { type: addProduct.type, payload: {
      "id": 0,
      "producer": "test",
      "brend": "test",
      "title": "test",
      "type": ["body care"],
      "packing": "450 мл",
      "image": "image-aos.png",
      "barcode": "4604049097548",
      "price": 148.76,
      "description": "Lorem"
    }};

    const result = listOfProductsReducer(undefined, action);

    expect(result.list.length).toBe(41);
    expect(result.list.some(item => item.title === 'test')).toBe(true);
  });

  test('should remove product to list of products', () => {
    const action = { type: removeProduct.type, payload: 1 };

    const result = listOfProductsReducer(undefined, action);

    expect(result.list.length).toBe(39);
    expect(result.list.some(item => item.id === 1)).toBe(false);
  });

  test('should change product to list of products', () => {
    const changeProd = {
      "id": 1,
      "producer": "test",
      "brend": "test",
      "title": "test",
      "type": ["body care"],
      "packing": "450 мл",
      "image": "image-aos.png",
      "barcode": "4604049097548",
      "price": 148.76,
      "description": "Lorem"
    };
    const action = { type: changeProduct.type, payload: changeProd };

    const result = listOfProductsReducer(undefined, action);
    
    expect(result.list.some(item => item.id === 1 && item.title === 'test')).toBe(true);
  });
})