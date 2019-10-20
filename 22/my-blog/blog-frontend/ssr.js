import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import {Provider} from 'react-redux';
import configure from 'store/configure';
import axios from 'axios';

import App from 'components/App';

const render = async (ctx) => {
    const {url, origin} = ctx;

    axios.defaults.baseURL = origin;

    // 요청이 들어올 때마다 새 스토어를 만듭니다
    const store = configure();

    // renderToString 은 렌더링된 결과물을 문자열로 만들어줍니다.
    // 서버에서는 BrowserRouter 대신에 StaticRouter 를 사용합니다.
    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={url}>
                <App/>
            </StaticRouter>
        </Provider>
    );

    return html;
};

export default render;
