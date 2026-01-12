import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk(
  'items/fetchItemsStatus',
  async () => {

    const { data } = await axios.get('https://69603bb5e7aa517cb7959649.mockapi.io/items');
    
    const fixedData = data.map((item, index) => ({
      ...item,
      id: item.id || index + 1
    }));

    return fixedData;
  }
);

const initialState = {
  items: [],
  status: 'loading', 
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export default itemsSlice.reducer;