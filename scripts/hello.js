`use strict`;
module.exports = (robot) => {
    robot.hear(/こんにちは>/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('こんにちは！！元気？, ' + username);
    });
};
