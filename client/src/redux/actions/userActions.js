import { 
    USERNAME_SAVE, 
    SOCKET_CONNECT,
    SOCKET_INIT,
    USER_SELF_TYPING,
    USER_OTHER_TYPING,
    USER_SELF_NOT_TYPING,
    USER_OTHER_NOT_TYPING,
    USER_CONNECT,
    USER_DISCONNECT
} from '../constants/actionTypes'

export const doLogin = username => dispatch => {
    dispatch(doConnectSocket(username));
    dispatch(doSaveUsername(username));
}

export const doSaveUsername = (username) => {
    return {
        type: USERNAME_SAVE,
        payload: {
            username
        }
    }
}

export const doConnectSocket = username => {
    return {
        type: SOCKET_CONNECT,
        payload: {
            username
        }
    }
}

export const doInitSocket = data => {
    return {
        type: SOCKET_INIT,
        payload: {
            usersTyping: data.usersTyping,
            usersConnected: data.usersConnected
        }
    }
}

export const doConnectUser = user => {
    return {
        type: USER_CONNECT,
        payload: {
            user
        }
    }
}

export const doDisconnectUser = user => {
    return {
        type: USER_DISCONNECT,
        payload: {
            user
        }
    }
}

export const doUserSelfTyping = () => {
    return {
        type: USER_SELF_TYPING
    }
}

export const doUserSelfNotTyping = () => {
    return {
        type: USER_SELF_NOT_TYPING
    }
}

export const doUserOtherTyping = user => {
    return {
        type: USER_OTHER_TYPING,
        payload: {
            user
        }
    }
}

export const doUserOtherNotTyping = user => {
    return {
        type: USER_OTHER_NOT_TYPING,
        payload: {
            user
        }
    }
}