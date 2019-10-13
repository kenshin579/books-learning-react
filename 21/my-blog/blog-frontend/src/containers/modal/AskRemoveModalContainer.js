import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';
import * as postActions from 'store/modules/post';
import AskRemoveModal from 'components/modal/AskRemoveModal';
import {withRouter} from 'react-router-dom';

class AskRemoveModalContainer extends Component {
    handleCancel = () => {
    };

    handleConfirm = async () => {
    };

    render() {
        const {visible} = this.props;
        const {handleCancel, handleConfirm} = this;

        return (
            <AskRemoveModal visible={visible} onCancel={handleCancel} onConfirm={handleConfirm}/>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['modal', 'remove'])
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(withRouter(AskRemoveModalContainer));
