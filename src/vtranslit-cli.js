import { print, readFile } from './utils';

import { vTranslit } from 'vtranslit';
import { vTranslitSchemeDeva } from 'vtranslit-scheme-deva';
import { vTranslitSchemeGran } from 'vtranslit-scheme-gran';
import { vTranslitSchemeItrn } from 'vtranslit-scheme-itrn';
import { vTranslitSchemeKnda } from 'vtranslit-scheme-knda';
import { vTranslitSchemeTaml } from 'vtranslit-scheme-taml';
import { vTranslitSchemeTelu } from 'vtranslit-scheme-telu';

import { writeOutput } from './write-output';

export default class VTranslitCli {

  constructor(fromScheme, toScheme, translitMode) {

    this.vtranslit = vTranslit([
      vTranslitSchemeDeva,
      vTranslitSchemeGran,
      vTranslitSchemeItrn,
      vTranslitSchemeKnda,
      vTranslitSchemeTaml,
      vTranslitSchemeTelu
    ]);

    this.vt = this.vtranslit.init(fromScheme, toScheme, {
      translitMode
    });

  }

  file(inputFilePath, outputFilePath) {

    readFile(inputFilePath, (readError, data) => {

      if (readError) {

        throw new Error(readError);

      }

      const output = this.vt(data);

      writeOutput(output, outputFilePath);

    });

  }

  find(str) {

    print(this.vtranslit.find(str));

  }

  string(str, outputFilePath = '') {

    if (str) {

      const output = this.vt(str);

      return writeOutput(output, outputFilePath);

    }

    return print('Provide a string to transliterate.');

  }

};
