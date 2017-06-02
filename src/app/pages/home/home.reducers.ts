import { HOUR, MINUTES, SECOND, ADVANCE, RECALL } from './course.actions';
import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR,
ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_ERROR, TOGGLE_TODO, TOGGLE_SUCCESS } from './course.actions';
import * as _ from 'lodash';

// import * as COURSE_ACTIONS from './course.actions'

// export const clock = (state = new Date(), { type, payload } = {type: '', payload: 0}) => {
//   const date = new Date(state.getTime());
//
//   switch (type) {
//     case SECOND:
//       date.setSeconds(date.getSeconds() + payload);
//
//       return date;
//
//     case MINUTES:
//       date.setMinutes(date.getMinutes() + payload);
//
//       return date;
//
//     case HOUR:
//       date.setHours(date.getHours() + payload);
//
//       return date;
//
//     default:
//       return state;
//   }
// };
//
// const defaultPeople = [
//   {name: 'Sara', time: clock()},
//   {name: 'John', time: clock()},
//   {name: 'Nancy', time: clock()},
//   {name: 'Drew', time: clock()},
// ];
//
// export const people = (state = defaultPeople, { type, payload }) => {
//   switch (type) {
//     case ADVANCE:
//       return state.map((person) => {
//         if (payload === person) {
//           return {
//             name: person.name,
//             time: clock(person.time, { type: HOUR, payload: 5 })
//           };
//         }
//
//         return person;
//       });
//
//     case RECALL:
//       return state
//         .map((person) => {
//           return {
//             name: person.name,
//             time: payload
//           };
//         });
//
//     default:
//       return state;
//   }
// };

export function getTodos() {
  return {
    type: GET_TODOS
  };
}

export function addTodo( title ) {
  return {
    type: ADD_TODO,
    payload: {
      title,
    }
  };
}

export function toggleTodo( todo ) {
  return {
    type: TOGGLE_TODO,
    payload: todo
  };
}

const initialState = {
  data: [],
  pending: false,
  error: {},
  status: null
};

export function todos( state = initialState, { type, payload } ) {
  switch ( type ) {
    case GET_TODOS:
      return Object.assign({}, state, {pending: true, error: false});

    case GET_TODOS_SUCCESS:
      return Object.assign({}, state, {data: payload, pending: false});

    case GET_TODOS_ERROR:
      return Object.assign({}, state, {pending: false, error: true, status: 404});

    case ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data, payload]
      });

    case TOGGLE_SUCCESS:
      let copyState = [...state.data];
      let todoIndex = _.findIndex(copyState, {id: payload.id});

      copyState[todoIndex] = payload;

      return Object.assign({}, state, {
        data: copyState
      });

    default:
      return state;
  }
}
