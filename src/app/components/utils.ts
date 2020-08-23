export const addHand = (color, clothes, pose, isUser = false) => {
    console.log('adding new hand', color, clothes, pose, isUser);
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
