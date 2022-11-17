const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY';
const SEND_MESSAGE = 'SEND-MASSAGE';

let initialState = {
  
    dialogs: [
        {id: '1', name: 'Victor', photo: 'https://i.pinimg.com/736x/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg'},
        {id: '2', name: 'Julie', photo: 'https://sun9-69.userapi.com/impg/JFLnJH20R8hcw7EDrteVfj0PosLv2tSQW3VmlA/rKMKfdDHFY8.jpg?size=828x822&quality=95&sign=813ecc8b8cf3b10d9f9add916c7841fe&type=album'},
        {id: '3', name: 'Anastasia', photo: 'https://sun9-56.userapi.com/s/v1/if1/ZSYnq9f8LjO-MSHPF0K1sJEnZ05ACMQRtnmJ_Y9AcVjhkSSQMxSVr_AlV1iVPpmvpkcYlPic.jpg?size=200x200&quality=96&crop=0,0,735,735&ava=1'},
        {id: '4', name: 'Polina', photo: 'https://pbs.twimg.com/media/FLjlF7VWUAM2XlW.jpg'}
    ],
    massages: [
        {id: '1', massage: 'Hello'},
        {id: '2', massage: 'How are you?'},
        {id: '3', massage: 'I am fine'}
    ],
    newMessageBody: '',

}

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY : {
            state.newMessageBody = action.body;
            return state;
        }

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            let newMessage = {id: '6', massage: body}
            state.massages.push(newMessage);
            state.newMessageBody = '';
            return state;
        }

        default: return state;
        
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body,
    }
  }
export const sendNewMessageCreator = () => {
    return {
      type: SEND_MESSAGE,
    }
  }

export default dialogsReducer;