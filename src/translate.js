// var GTranslate = {
//   atranslateText: function (text, target) {
//     // Imports the Google Cloud client library
//     const { Translate } = require('@google-cloud/translate').v2;

import { Translate } from '@google-cloud/translate/build/src/v2';

//     const projectId = 'cohesive-scope-301917';
//     const keyFilename = 'creds.json';

//     // Creates a client
//     const translate = new Translate({ projectId, keyFilename });

//     // Translates the text into the target language. "text" can be a string for
//     // translating a single piece of text, or an array of strings for translating
//     // multiple texts.
//     let [translations] = await translate.translate(text, target);
//     translations = Array.isArray(translations) ? translations : [translations];
//     console.log('Translations:');
//     translations.forEach((translation, i) => {
//       console.log(`${text[i]} => (${target}) ${translation}`);
//     });
//   }
// };

async function translateText(text, target) {
  // Imports the Google Cloud client library
  

  const projectId = 'cohesive-scope-301917';
  const keyFilename = 'creds.json';

  // Creates a client
  const translate = new Translate({ projectId, keyFilename });

  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log('Translations:');
  translations.forEach((translation, i) => {
    console.log(`${text[i]} => (${target}) ${translation}`);
  });
}

module.exports.translateText = translateText;


//translateText(["Hello there. General Kenobi."],'ja');