export const handleNext = payload => {
    return {
        type: 'HANDLE_NEXT',
        payload
    };
}

export const handlePrevious = payload => {
    return {
        type: 'HANDLE_PREVIOUS',
        payload
    };
}
