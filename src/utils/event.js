import { EventEmitter } from 'fbemitter';

const emitter = new EventEmitter();

export default emitter;

// const {
// 	addListener,
// 	removeAllListeners,
// 	once,
// 	emit,
// 	listeners
// } = emitter;

// export const { 
// 	on: addListener.bind(emitter), 
// 	once: once.bind(emitter), 
// 	emit: emit.bind(emitter), 
// 	removeAll: removeAllListeners.bind(emitter), 
// 	listeners: listeners.bind(emitter)
// };
