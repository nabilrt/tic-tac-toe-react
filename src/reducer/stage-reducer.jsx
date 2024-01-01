export const INITIAL_STATE = {
  firstStage: false,
  secondStage: false,
};

export const stageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FIRST_STAGE_COMPLETED":
      return {
        ...state,
        firstStage: true,
      };
    case "SECOND_STAGE_COMPLETED":
      return {
        ...state,
        secondStage: true,
      };
  }
};
