import React, {Component} from 'react';
import Header from 'components/common/Header';
import {withRouter} from 'react-router-dom';
import * as baseActions from 'store/modules/base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class HeaderContainer extends Component {
    handleRemove = () => {
        //미리 만들어 두기
    };

    render() {
        const {handleRemove} = this;
        const {match, logged} = this.props;

        const {id} = match.params;

        return (
            <Header
                postId={id}
                onRemove={handleRemove}
            />
        );
    }
}

export default withRouter(HeaderContainer);
