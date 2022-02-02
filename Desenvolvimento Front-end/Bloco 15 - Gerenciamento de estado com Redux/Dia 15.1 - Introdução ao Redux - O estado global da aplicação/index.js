const Redux = require('redux');

const fazerLogin = (email) => ({
  type: "LOGIN",
  email
});

//P q o é preciso do reducer? P q nao só jogar a informação para o store?
const ESTADO_INICIAL = {
  login: false,
  email: '',
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fazerLogin('abner84@gmail.com'))
