import $yargs from 'yargs';

import { handleCommand } from './handle-command';

const options = $yargs
  .usage('Usage: $0 <command> [options]')
  .command('string', 'input a string', yargs => yargs
    .usage('Usage: $0 string [-s] <string> [options]')
    .options({
      'inputString': {
        alias: 's',
        description: 'The string to be transliterated',
        type: 'string'
      }
    })
    .argv
  )
  .command('file', 'input a file', yargs => yargs
    .usage('Usage: $0 file -i <input_file path> [options]')
    .options({

      inputFilePath: {
        alias: 'i',
        demand: 'Specify the path to the file to be transliterated',
        description: 'The path to the file to be transliterated',
        type: 'string'
      }

    })

  )
  .command('find-scheme', 'input a string to find the scheme for.', yargs => yargs
    .usage('Usage: $0 find-scheme [-s] <string>')
    .options({
      'inputString': {
        alias: 's',
        description: 'The string to find the scheme for.',
        type: 'string'
      }
    })
    .argv

  )
  .options({

    fromScheme: {
      alias: 'f',
      default: 'Itrn',
      demand: 'Specify Scheme to transliterate from',
      describe: 'Scheme to transliterate from. \n' +
        'Use "vtranslit list" to know the list available schemes for transliteration.',
      global: true,
      type: 'string'
    },

    outputFilePath: {
      alias: 'o',
      description: 'The path to the file to be transliterated',
      global: true,
      type: 'string'
    },

    toScheme: {
      alias: 't',
      default: 'Deva',
      demand: 'Specify Scheme to transliterate to. \n' +
        'Use "vtranslit list" to know the list available schemes for transliteration.',
      describe: 'Scheme to transliterate to',
      global: true,
      type: 'string'
    },

    translitMode: {
      alias: 'm',
      default: 0,
      describe: 'The mode to translit when the string is marked with "#{" and "}#". \n' +
        '0 = Toggling Mode is off i.e. The whole is translit\'ed. \n' +
        '1 = Only the string outside of the markers are translit\'ed. \n' +
        '2 = Only the string inside of the markers are translit\'ed.',
      global: true,
      type: 'number'
    }

  })

  .alias('v', 'version')
  .describe('v', 'show version information')

  .help('h')
  .alias('h', 'help')

  .argv;

handleCommand(options._[0])(options)();
