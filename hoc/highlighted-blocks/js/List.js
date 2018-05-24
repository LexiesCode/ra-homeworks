'use strict';

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <MarkedVideo {...item} />
                );

            case 'article':
                return (
                    <MarkedArticle {...item} />
                );
        }
    });
};