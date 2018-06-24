import VTranslitCli from './vtranslit-cli';

const invalidCommandError = command => () => {

  const referHelpMsg = 'Refer the help (--help) for vaild commands.';

  console.error( // eslint-disable-line no-console
    (command) ? `Unknown command: "${command}". ${referHelpMsg}` : `Specify a command. ${referHelpMsg}`
  );

};

export const handleCommand = command => options => ({

  'file': () => {

    const vtranslitCli = new VTranslitCli(options.fromScheme, options.toScheme);

    vtranslitCli.file(options.inputFilePath, options.outputFilePath);

  },

  'find-scheme': () => {

    const vtranslitCli = new VTranslitCli(options.fromScheme, options.toScheme);

    vtranslitCli.find(options.inputString || options._[1]);

  },

  'string': () => {

    const vtranslitCli = new VTranslitCli(options.fromScheme, options.toScheme);

    vtranslitCli.string(options.inputString || options._[1], options.outputFilePath);

  }

}[command] || invalidCommandError(command));
