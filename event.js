const EventEmitter = require('events');
const readline = require('readline');

const event = new EventEmitter();

event.on('message', function () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let table, start, end;

    rl.question('Which table do you want to print? ', function (inputTable) {
        table = parseInt(inputTable);

        rl.question('Enter the starting value: ', function (inputStart) {
            start = parseInt(inputStart);

            rl.question('Enter the ending value: ', function (inputEnd) {
                end = parseInt(inputEnd);

                console.log("Print Table by Event and Modules");
                for (let i = start; i < end; i++) {
                    console.log(`${table} x ${i} = ${i * table}`);
                }

                rl.close();
            });
        });
    });
});

// Uncomment the following line to trigger the event
// event.emit('message');

module.exports.event = event;
