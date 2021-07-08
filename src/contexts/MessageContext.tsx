import React from 'react';

interface MessageContextValue{
    message: string | any;
    setMessage: Function;
}

const MessageContext = React.createContext<MessageContextValue>(null!);

export default MessageContext;