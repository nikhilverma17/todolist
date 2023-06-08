exports.getDate = function () {
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-IN", options);
    return day;
}
exports.getTime = function () {

    let d = new Date();
    let options = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'

    };
    return d.toLocaleTimeString("en-IN", options);
    return time;
}
