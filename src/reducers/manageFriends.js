export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: ...state.friends, action.friend}
    case 'REMOVE_FRIEND':
      return {numberOfPresents: state.numberOfPresents + 1}
    default:
      return state;
  }
}
