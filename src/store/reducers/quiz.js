import {
  ADD_ANSWER_TEXT,
  DELETE_ANSWER,
  SET_ANSWER,
  SET_RIGHT_ANSWER,
  PICK_RIGHT_ANSWERS,
  SET_TYPE_OF_ANSWER,
  ADD_QUESTION_TEXT,
} from '../types'
import {v4 as uuidv4} from 'uuid'
const initialState = {
  question: {id: uuidv4(), text: ''},
  typeOfAnswer: 'one',
  answers: [
    {id: uuidv4(), text: '', isRightAnswer: false},
    {id: uuidv4(), text: '', isRightAnswer: false},
    {id: uuidv4(), text: '', isRightAnswer: false},
    {id: uuidv4(), text: '', isRightAnswer: false},
  ],
}

const handlers = {
  [ADD_QUESTION_TEXT]: (state, action) => {
    return {...state, question: {...state.question, text: action.text}}
  },
  [SET_TYPE_OF_ANSWER]: (state, action) => {
    return {
      ...state,
      answers: clearIsRightAnswers(state.answers),
      typeOfAnswer: action.payload,
    }
  },
  [DELETE_ANSWER]: (state, action) => {
    return {
      ...state,
      answers: deleteAnswer(state.answers, action.id),
    }
  },
  [SET_ANSWER]: state => {
    return {...state, answers: setAnswer(state.answers)}
  },
  [ADD_ANSWER_TEXT]: (state, action) => {
    return {
      ...state,
      answers: addAnswerText(
        state.answers,
        action.payload.id,
        action.payload.text
      ),
    }
  },
  [SET_RIGHT_ANSWER]: (state, action) => ({
    ...state,
    answers: setIsRightAnswer(state.answers, action.id),
  }),
  [PICK_RIGHT_ANSWERS]: (state, action) => ({
    ...state,
    answers: setIsRightAnswers(state.answers, action.id),
  }),
  DEFAULT: state => state,
}

const deleteAnswer = (answers, id) => {
  const arr = copyArrOfObjects(answers)
  return arr.filter(a => a.id !== id)
}

const setAnswer = answers => {
  const arr = copyArrOfObjects(answers)
  return arr.concat({id: uuidv4(), text: '', isRightAnswer: false})
}

const addAnswerText = (answers, id, text) => {
  const arr = copyArrOfObjects(answers)
  return arr.map(a => {
    a.text = a.id === id ? text : ''
    return a
  })
}

const setIsRightAnswer = (answers, id) => {
  const arr = copyArrOfObjects(answers)
  return arr.map(a => {
    a.isRightAnswer = a.id === id ? true : false
    return a
  })
}

const setIsRightAnswers = (answers, id) => {
  const arr = copyArrOfObjects(answers)
  return arr.map(a => {
    if (a.id === id) a.isRightAnswer = !a.isRightAnswer
    return a
  })
}

const clearIsRightAnswers = answers => {
  const arr = copyArrOfObjects(answers)
  return arr.map(a => {
    a.isRightAnswer = false
    return a
  })
}

const quizReducer = (state = initialState, action) => {
  const handler = handlers[action.type] ?? handlers.DEFAULT
  return handler(state, action)
}

const copyArrOfObjects = array => array.map(item => Object.assign({}, item))

export default quizReducer
