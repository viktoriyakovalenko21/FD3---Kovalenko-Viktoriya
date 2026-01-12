import cartReducer, { addItem, clearCart } from './cartSlice';

describe('Тесты корзины (cartSlice)', () => {
  
  test('должен вернуть начальное состояние', () => {
    expect(cartReducer(undefined, { type: undefined })).toEqual({
      items: [],
      totalPrice: 0,
    });
  });

  test('должен добавить товар и посчитать сумму', () => {
    const startState = { items: [], totalPrice: 0 };
    const newItem = { id: 1, title: 'Vinyl', price: 100, imageUrl: 'img.jpg' };
    const nextState = cartReducer(startState, addItem(newItem));

    expect(nextState.items.length).toBe(1);
    expect(nextState.totalPrice).toBe(100);
  });

  test('должен очистить корзину', () => {
    const startState = { items: [{ id: 1, price: 100, count: 5 }], totalPrice: 500 };
    const nextState = cartReducer(startState, clearCart());

    expect(nextState.items).toEqual([]);
    expect(nextState.totalPrice).toBe(0);
  });
});