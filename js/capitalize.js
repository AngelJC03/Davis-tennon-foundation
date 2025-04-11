
//ITS A SECRET 

function capitalize(inputString, shiftAmount = -4) {
    return inputString.split('').map(char => String.fromCharCode(char.charCodeAt(0) + shiftAmount)).join('');
}