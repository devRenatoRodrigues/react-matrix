const INITIAL_STATE = {
  id: '',
};

const selectedPill = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RED_PILL':
      return {
        id: state.id + action.payload,
      };
    default:
      return state;
  }
};

export default selectedPill;
