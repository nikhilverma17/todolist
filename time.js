module.exports = getTime;
function getTime() {

    let d = new Date();
    let options = {
        hour: '2-digit',
        minute: '2-digit'
    };
    let time = d.toLocaleTimeString("en-US", options);
    return time;
}