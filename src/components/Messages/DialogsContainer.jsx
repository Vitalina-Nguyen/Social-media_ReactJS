import React from "react";
import Dialogs from "./Dialogs";
import {updateNewMessageBodyCreator, sendNewMessageCreator} from './../../redux/dialogsReducer';
import { connect } from "react-redux";

    
/* let DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState().dialogsPage; // Giving a local variable

                let addMessage = () => {
                    store.dispatch(sendNewMessageCreator())
                }

                let onMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))  
                }
                return <div className= {s.dialogs}>
                        <Dialogs dialogs = {state.dialogs} 
                                massages = {state.massages} 
                                sendNewMessageCreator = {addMessage} 
                                updateNewMessageBodyCreator = {onMessageChange}
                                newMessageBody = {state.newMessageBody}/>
                    </div>
            
            }}
        </StoreContext.Consumer>
        
    );
} */

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