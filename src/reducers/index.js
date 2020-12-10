import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const reducer = (state= initialState, action) => {
  switch(action.type) {
    case ADD_FEATURE:
      console.log(action.payload);
      //% Needs to add to features array in car object
      //% Needs to add price to additional price
      //% Needs to remove from additionalFeatures array
      return ({
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        additionalPrice: state.additionalPrice + action.payload.price,
        additionalFeatures: state.additionalFeatures.filter(
          feature => feature !== action.payload
        )
      });
    case REMOVE_FEATURE:
      //% Needs to add back to additional features array
      //% subtract price from additional Price
      //% Remove from features array in car object
      return ({
        ...state,
        additionalFeatures: [...state.additionalFeatures, action.payload],
        car: {
          ...state.car,
          features: state.car.features.filter(
            feature => feature !== action.payload
          )
        },
        additionalPrice: state.additionalPrice - action.payload.price
      })
    default:
      return state;
  }
};