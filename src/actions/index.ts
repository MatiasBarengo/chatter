import apiClient from '../utils/client';

import {
  POST_SIGNUP,
  POST_LOGIN,
  GET_USERS,
  GET_CHATS,
  DELETE_USER,
  POST_CHAT,
  SEND_MSG,
  DELETE_CHAT
} from './actionType';

export function registerUser(data: any) {
  return apiClient.post(POST_SIGNUP, data);
}

export function loginUser(data: any) {
  return apiClient.post(POST_LOGIN, data);
}

export function getUserData() {
  return apiClient.get(GET_USERS);
}

export function getChatData() {
  return apiClient.get(GET_CHATS);
}

export function deleteUser() {
  return apiClient.delete(DELETE_USER);
}

export function createUserChat(data: any) {
  return apiClient.post(POST_CHAT, data);
}

export function sendMessage(data: any, id: any) {
  return apiClient.post(SEND_MSG + id, data);
}

export function deleteChat(id: any) {
  return apiClient.delete(DELETE_CHAT + id);
}
