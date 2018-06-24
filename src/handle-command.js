import VTranslitCli from './vtranslit-cli';

const invalidCommandError = command => () => {

  const referHelpMsg = 'Refer the help (--help) for vaild commands.';

  console.error( // eslint-disable-line no-console
    (command) ? (
      `Unknown command: "${command}". ${referHelpMsg}`
    ) : (
      `Specify a command. ${referHelpMsg}`
    )
  );

};

export const handleCommand = command => ({
  fromScheme,
  toScheme,
  translitMode,
  inputFilePath,
  outputFilePath,
  ...options
}) => ({

  'file': () => {

    const vtranslitCli = new VTranslitCli(fromScheme, toScheme, translitMode);

    vtranslitCli.file(inputFilePath, outputFilePath);

  },

  'find-scheme': () => {

    const vtranslitCli = new VTranslitCli(fromScheme, toScheme, translitMode);

    vtranslitCli.find(options.inputString || options._[1]);

  },

  'string': () => {

    const vtranslitCli = new VTranslitCli(fromScheme, toScheme, translitMode);

    vtranslitCli.string(options.inputString || options._[1], outputFilePath);

  }

}[command] || invalidCommandError(command));
