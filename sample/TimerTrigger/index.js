﻿module.exports = function (context, timerInfo) {
    var timeStamp = new Date().toISOString();
    context.log('Node.js timer trigger function ran! %s', timeStamp);

    context.log('PastDue: %s', timerInfo.isPastDue);
    context.log('Last: %s', timerInfo.last);
    context.log('Next: %s', timerInfo.next);

    context.bindings.message = {
        id: Math.floor(Math.random() * 10000) + 1,
        notes: "Generated by Timer function"
    };

    context.done();
}