export const getButtonTranslation = (lang) => {
  switch (lang) {
    case 'english':
      return "Submit";
    case 'dutch':
      return "Voorleggen";
    default:
      return "Submit";
  }
}

export const getInputLabel = (lang) => {
  switch (lang) {
    case 'english':
      return "Name";
    case 'dutch':
      return "Naam";
    default:
      return "Name";
  }
}