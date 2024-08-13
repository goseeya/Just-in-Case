import { useSelector } from 'react-redux';

import { AppState } from '../reducers';
import { TranslatedText } from '../reducers/types';

const useText = (): TranslatedText => useSelector((appState: AppState) => appState.config.config.data.text);

export default useText;