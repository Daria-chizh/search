import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import {
  searchSkillsRequest,
  searchSkillsSuccess,
  searchSkillsFailure
} from '../actions/actionCreators';

import { CHANGE_SEARCH_FIELD , SEARCH_SKILLS_REQUEST } from "../actions/actionTypes";

const REACT_APP_SEARCH_URL = 'http://localhost:7070/api/search';

export const changeSearchEpic = action$ =>  action$.pipe(
  ofType(CHANGE_SEARCH_FIELD),
  map((o) => o.payload.search.trim()),
  filter((o) => o !== ''),
  debounceTime(100),
  map((o) => searchSkillsRequest(o))
);

export const searchSkillsEpic = action$ => action$.pipe(
  ofType(SEARCH_SKILLS_REQUEST),
  map((o) => o.payload.search),
  map((o) => new URLSearchParams({ q: o })),
  switchMap((o) => ajax.getJSON(`${REACT_APP_SEARCH_URL}?${o}`)),
  map((o) => searchSkillsSuccess(o)),
  catchError((err) => of(searchSkillsFailure(err)))
);

