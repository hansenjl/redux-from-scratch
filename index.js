let addQuarter = document.getElementById("add-quarter");
let addDime = document.getElementById("add-dime");
let addNickel = document.getElementById("add-nickel");
let addPenny = document.getElementById("add-penny");
let total = document.getElementById("total");

addQuarter.addEventListener("click", () => {
  updateState({ type: "QUARTER" });
});

addDime.addEventListener("click", () => {
  updateState({ type: "DIME" });
});

addNickel.addEventListener("click", () => {
  updateState({ type: "ADD", amount: 5 });
});

addPenny.addEventListener("click", () => {
  updateState({ type: "ADD", amount: 1 });
});

function updateState(action) {
  counter.dispatch(action);
  total.innerText = counter.state();
}

function counterReducer(state, action) {
  switch (action.type) {
    case "QUARTER":
      return state + 25;
      break;
    case "DIME":
      return state + 10;
      break;
    case "ADD":
      return state + action.amount;
      break;
    case "SUBTRACT":
      return state - 1;
    default:
      return state;
      break;
  }
}

function createStore(initialValue, reducer) {
  let state = initialValue;
  return {
    state: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
      return state;
    },
  };
}

let counter = createStore(0, counterReducer);
