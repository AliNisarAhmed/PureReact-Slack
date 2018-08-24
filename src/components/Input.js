import React from 'react';

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.persist();
    this.setState(() => ({ value: e.target.value }))
  }

  handleSubmit(event) {
    event.preventDefault();
    let value = this.state.value;
    this.setState(() => ({ value: '' }))
    this.props.handleChatSubmit(this.props.activeTab, value);
    
  }

  render() {
    return (
      <form 
        className="input"
        onSubmit={this.handleSubmit}  
      >
        <input
          className="input__input" 
          type="text" 
          value={this.state.value} 
          placeholder="Type your message here, click submit to send"
          onChange={this.handleChange}
        />
        <button 
          className="input__button"
        >
          Send
        </button>
      </form>
    );
  } 
}

export default Input;