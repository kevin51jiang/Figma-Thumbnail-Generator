export const addHand = (color, clothes, pose, isUser = false) => {
    fetch(`https://emily.louie.ca/handz/${color}-in-${clothes}${pose}.png`)
        .then(r => {
            if ((r.status + '')[0] != '2') throw Error(`HTTP ${r.status} ${r.statusText}`);
            return r.arrayBuffer();
            //@ts-ignore
        })
        .then(a => {
            parent.postMessage({pluginMessage: {type: 'addHand', image: new Uint8Array(a), isUser: isUser}}, '*');
        })
        .catch(err => console.error('Error occurred:', err));
};

export const createUUID = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
};
