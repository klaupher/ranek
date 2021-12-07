import React from 'react';

const Head = (props) => {
    React.useEffect(() => {
        if (props.title !== null) document.title = props.title;
        if (props.description !== null)
            document
                .querySelector('meta[name="description"]')
                .setAttribute('content', props.description);
    }, [props]);

    return <></>;
};

export default Head;
