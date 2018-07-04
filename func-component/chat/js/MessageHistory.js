'use strict';

const MessageHistory = ({list}) => {

    if (!list.length) {
        return null;
    }

    const messageList = list.map(message => {
        
        const MessageTypes = {
            'message': Message,
            'response': Response,
            'typing': Typing
        }

        const Msg = MessageTypes[message.type];
        
        return(
            <Msg key={message.id} from={message.from} message={message} />
        );
    });

    return <ul>{messageList}</ul>;
}

MessageHistory.defaultProps = { 
    list: [] 
}