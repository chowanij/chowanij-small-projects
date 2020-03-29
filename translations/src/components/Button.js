import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import { getButtonTranslation } from '../utils/getTranslations';

class Button extends Component {
  static contextType = LanguageContext;

  render() {

    return (
      <button className="ui button primary">
      <LanguageContext.Consumer>
         {(dupa) => getButtonTranslation(dupa)}
      </LanguageContext.Consumer>
      </button>
    );
  }
};

export default Button;