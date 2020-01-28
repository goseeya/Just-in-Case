import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actions';
import * as actions from '../actions/index';

export function* initTypeInitSaga(action) {
    try {
      const response = yield axios.get('https://react-iphone-case.firebaseio.com/type.json');
          Object.filter = (obj, predicate) =>
            Object.keys(obj)
              .filter( key => predicate(obj[key]))
              .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );
          let iPhoneType = yield Object.filter(response.data, type => type);

          let typeToReturn = yield Object.keys(iPhoneType)[0];
          yield put(actions.modifyType(typeToReturn));
        }

      catch(error) {
        yield put(actions.fetchTypeFailed());
      };
}
