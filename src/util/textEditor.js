export const getPositionForTextArea = (ctrlRef) => {
    let caretPos = {
        start: 0,
        end: 0
    };
    if(ctrlRef.current.selectionStart){
        caretPos.start = ctrlRef.current.selectionStart;
    }
    if(ctrlRef.current.selectionEnd){
        caretPos.end = ctrlRef.current.selectionEnd;
    }
    return caretPos;
}