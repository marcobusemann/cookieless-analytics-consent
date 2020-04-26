import React from 'react';

interface Content {
    title: string;
    text: React.ReactElement;
    buttonAcceptText: string;
    buttonRejectText: string;
}

export default ({
    content,
    onAccept,
    onReject,
    className,
}: {
    content: Content;
    className?: any;
    onAccept: () => void;
    onReject: () => void;
}) => {
    return (
        <div className={`user-consent ${className}`}>
            <h1>{content.title}</h1>
            <span>
                {content.text}
            </span>

            <div className="buttons">
                <button className="button decline" onClick={onReject}>{content.buttonRejectText}</button>
                <button className="button accept" onClick={onAccept}>{content.buttonAcceptText}</button>
            </div>
        </div>
    )
}