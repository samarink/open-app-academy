const MessageStore = require('./message_store');

const Inbox = {
  render() {
    const container = document.createElement('ul');
    container.className = 'messages';

    const messages = MessageStore.getInboxMessages()
    messages.forEach(message => {
      container.appendChild(this.renderMessage(message));
    });

    return container;
  },

  renderMessage(message) {
    const messageEl = document.createElement('li');
    messageEl.classList = 'message';
    messageEl.innerHTML = `
      <span class="from">${message.from}</span>
      <span class="subject">${message.subject}</span> -
      <span class="body">${message.body}</span>
    `;
    return messageEl;
  }
}

module.exports = Inbox;
