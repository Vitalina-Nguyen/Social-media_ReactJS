import React from "react";
import Dialogs from "./Dialogs";
import {updateNewMessageBodyCreator, sendNewMessageCreator} from './../../redux/dialogsReducer';
import { connect } from "react-redux";


let mapStateToProps = (state) => {
        return {
        dialogs: state.dialogsPage.dialogs,
        massages: state.dialogsPage.massages,
        newMessageBody: state.dialogsPage.newMessageBody
        }
}
let mapDispatchToProps = (dispatch) => {
    
    return {
    sendNewMessageCreator: () => {dispatch(sendNewMessageCreator())},
    updateNewMessageBodyCreator: (body) => {dispatch(updateNewMessageBodyCreator(body))}
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;