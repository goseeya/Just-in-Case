import { useSelector } from 'react-redux';

import { AppState } from '../reducers';
import { CaseCreatorReducer } from '../reducers/case-creator';

const useCaseCreator = ():CaseCreatorReducer =>
    useSelector((appState: AppState) => appState.caseCreator);

export default useCaseCreator;
