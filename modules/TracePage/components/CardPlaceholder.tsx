import type { FunctionComponent } from 'react';

type CardPlaceholderProps = {};

const CardPlaceholder: FunctionComponent<CardPlaceholderProps> = ({}) => {
    return (
        <div className="flex flex-col items-center justify-center w-96 gap-4 animate-pulse bg-gray-800 p-4 rounded-xl">
            <div className="a bg-gray-700 h-6 w-3/4 rounded-full"></div>
            <div className="a bg-gray-700 h-4 w-full rounded-full"></div>
            <div className="a bg-gray-700 h-4 w-full rounded-full"></div>
            <div className="a bg-gray-700 h-4 w-full rounded-full"></div>
            <div className="a bg-gray-700 h-4 w-full rounded-full"></div>
            <div className="a bg-gray-700 h-4 w-full rounded-full"></div>
            <div className="a bg-gray-700 h-4 w-full rounded-full"></div>
        </div>
    );
};

export default CardPlaceholder;
