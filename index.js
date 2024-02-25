const log = (message) => {
    console.log(message);
}

const info = (message) => {
    console.info(message);
}

const warn = (message) => {
    console.warn(message);
}

const error = (message) => {
    console.error(message);
}

const debug = (message) => {
    console.debug(message);
}

module.exports = {
    log,
    info,
    warn,
    error,
    debug
}
