var React = require('react');

class CodeComponent extends React.Component{
  render () {
    return React.createElement('pre', {key: this.props.key},
      React.createElement('code', {
          ref: 'code',
          className: 'language-' + this.props.language
        }, this.props.code)
    );
  }
};

CodeComponent.componentDidMount = () => {
    if (typeof Prism === 'undefined') {
      console.warn('You do not have Prism included as a global object');
      return;
    }
    Prism.highlightAll();
};

CodeComponent.componentDidUpdate = () => {
    if (typeof Prism === 'undefined') {
      console.warn('You do not have Prism included as a global object');
      return;
    }
    Prism.highlightAll();
};

module.exports = CodeComponent;
