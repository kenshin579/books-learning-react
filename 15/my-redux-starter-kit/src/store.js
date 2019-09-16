import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import loggerMiddleware from "./lib/loggerMiddleware";

// import { createLogger } from 'redux-logger';
// // import ReduxThunk from 'redux-thunk';
// import promiseMiddleware from "redux-promise-middleware";
// /* 로그 미들웨어를 생성할 때 설정을 커스터마이징할 수 있습니다.
//    https://github.com/evgenyrodionov/redux-logger#options
// */
// const logger = createLogger();
// const pm = promiseMiddleware({
//    promiseTypeSuffixes : ['PENDING', 'SUCCESS', 'FAILURE']
// });

const store = createStore(modules, applyMiddleware(loggerMiddleware));

export default store;
