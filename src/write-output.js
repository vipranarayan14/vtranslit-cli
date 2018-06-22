import { print, writeFile } from './utils';

export const writeOutput = (output, outputFilePath) => {

  if (outputFilePath) {

    writeFile(outputFilePath, output, writeError => {

      if (writeError) {

        throw new Error(writeError);

      }

      return print(`Transliterated output written to the file: '${outputFilePath}'.`);

    });

    return;

  }

  print('Transliterated output:\n', output);

  return;

};
