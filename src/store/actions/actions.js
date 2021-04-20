import {
  ADD_ANSWER_TEXT,
  DELETE_ANSWER,
  SET_ANSWER,
  SET_RIGHT_ANSWER,
  PICK_RIGHT_ANSWERS,
  SET_TYPE_OF_ANSWER,
  ADD_QUESTION_TEXT,
} from '../types'

export const addQuestionText = text => ({
  type: ADD_QUESTION_TEXT,
  text,
})

export const setTypeOfAnswer = value => ({
  type: SET_TYPE_OF_ANSWER,
  payload: value,
})

export const deleteAnswer = id => ({
  type: DELETE_ANSWER,
  id,
})

export const setAnswer = () => ({
  type: SET_ANSWER,
})

export const addAnswerText = (id, text) => ({
  type: ADD_ANSWER_TEXT,
  payload: {
    id,
    text,
  },
})

export const setRightAnswer = id => ({
  type: SET_RIGHT_ANSWER,
  id,
})

export const pickRightAnswers = id => ({
  type: PICK_RIGHT_ANSWERS,
  id,
})
