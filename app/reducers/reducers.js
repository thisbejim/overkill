import Immutable from 'immutable';

const immutableState = Immutable.Map({
  hello: null
});

export const reducer = (state = immutableState, action) => {
  switch (action.type) {
    case "HELLO":
      return state.set("hello", "hello!");

    default:
      return state
  }
}
