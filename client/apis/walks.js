// import request from 'superagent'

import { request } from "express";

export function getWalksAPI () {

}

export function getWalkAPI () {

}

export function getSavedWalksByUserAPI () {

}

export function fetchCompletedWalksAPI (){
  return request
  .get('/api/v1/walks/completed')
  .then (res =>res.body)
}
