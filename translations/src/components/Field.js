import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import { getInputLabel } from '../utils/getTranslations';

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = getInputLabel(this.context);

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
};

export default Field;