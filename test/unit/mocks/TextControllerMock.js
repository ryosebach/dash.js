import TextBufferMock from './TextBufferMock';

class TextControllerMock {
    constructor() {
        this.textEnabled = false;
        this.buffers = [];
    }
    getTextSourceBuffer() {
        return new TextBufferMock();
    }
    isTextEnabled() {
        return this.textEnabled;
    }
    enableText(state) {
        this.textEnabled = state;
    }
}

export default TextControllerMock;
