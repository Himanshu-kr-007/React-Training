import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            // In Vanialla Redux (older Redux ): Don't Mutate state - this is prohibitaed : state.items.push(action.payload); 
            // In Vanialla Redux we are using the mentioned method and returning was mendatory
            // const newState = [...state];
            // new.items.push(action.payload);
            // return newState
            
            // New Version of Redux Toolkiy - We have to Mutate the state - Directly modifing the existing state and returning was not mandatory
            // Redux is doing all the above things behind the scene and redux is using immer library which is used to find the difference between orignal state and the mutated state and then gives us the new state as immutable state also known as new copy of the state
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // Find the index of the item to be removed from the items array
            const index = action.payload;
      
            // Check if the index is valid before attempting to remove the item
            if (index >= 0 && index < state.items.length) {
              state.items.splice(index, 1); // Remove 1 item at the specified index
            }
          },
        clearCart: (state) => {
            state.items.length = 0; // Clear the Cart to empty Array - [] == state = [] == return {items: []} 
        }
    }
})


// Export the actions: addItem, removeItem,  clearCart
export const {addItem, removeItem, clearCart} = cartSlice.actions;

// Export the Reducer
export default cartSlice.reducer;