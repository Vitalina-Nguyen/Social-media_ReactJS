import React from "react";
import Dialog from './DialogItem/DialogItem';
import Message  from './Message/Message';
import s from './Dialogs.module.css';


    
function Dialogs (props) {

    // Mapping of DialogsItems
    let dialogsElements = props.dialogs
    .map( (el) => <Dialog name = {el.name} id = {el.id} photo = {el.photo} />)

    // Mapping of MassageData
    let massagesElements = props.massages
    .map( m => <Message message = {m.massage}/>)

    let addMessage = () => {
        props.sendNewMessageCreator();
        
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body); 
    }

    return (
        <div className= {s.dialogs}>
            <div className= {s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className= {s.massages}>
                {massagesElements}
                <textarea onChange = {onMessageChange}
                          value = {props.newMessageBody}>  
                </textarea>
                <button onClick= {addMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;