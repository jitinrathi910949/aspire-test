import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index';
import _ from 'lodash';

export interface CardModel {
  id: number;
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  isFreeze: boolean;
}

const initCardList: CardModel[] = [
  {
    id: 1,
    name: 'Mark Henry',
    cardNumber: '444444444444',
    expiryDate: '12/20',
    cvv: '444',
    isFreeze: true
  },
  {
    id: 2,
    name: 'Steve Madden',
    cardNumber: '555555555555',
    expiryDate: '12/20',
    cvv: '555',
    isFreeze: false
  }
]

// Define a type for the slice state
interface CardState {
  selectedTab: string;
  cardList: CardModel[];
  selectedCard: CardModel;
  openCreateCardDialog: boolean
}

// Define the initial state using that type
const initialState: CardState = {
  selectedTab: 'myDebitCard',
  cardList: initCardList,
  selectedCard: initCardList[0],
  openCreateCardDialog: false
}

export const cardSlice = createSlice({
  name: 'card',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    selectTab: (state, action: PayloadAction<string>) => {
      state.selectedTab = action.payload;
    },

    addCard: (state, action: PayloadAction<CardModel>) => {
      state.cardList = [...state.cardList, action.payload];
    },
    toggleFreeze: (state, action: PayloadAction<number>) => {
      const upCardList = _.cloneDeep(state.cardList);
      const ind = _.findIndex(upCardList, item => item.id === action.payload);
      upCardList[ind].isFreeze = !upCardList[ind].isFreeze;
      state.cardList = upCardList; 
    },
    selectCard: (state, action:PayloadAction<CardModel>) => {
      state.selectedCard = action.payload;
    },
    toggleCreateCardDialog: (state, action: PayloadAction<boolean>) => {
      state.openCreateCardDialog = action.payload;
    },
    deleteCard: (state, action:PayloadAction<number>) => {
      const upCardList = _.cloneDeep(state.cardList);
      const ind = _.findIndex(upCardList, item => item.id === action.payload);
      upCardList.splice(ind, 1);
      state.cardList = upCardList;
    }

    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const cardAction = cardSlice.actions


export default cardSlice.reducer