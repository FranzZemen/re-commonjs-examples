type ExecutionContextI = import('@franzzemen/app-utility').ExecutionContextI;
// LoggerAdapter the typescript definition
type LoggerAdapter = import('@franzzemen/app-utility').LoggerAdapter
// Rules the typescript definition
type Rules = import('@franzzemen/re').Rules
// ReResult the typescript definition
type ReResult = import('@franzzemen/re').ReResult;

// Define a self evaluating anonymous function to create a namespace for variables outside the global scope, since we're not using modules.
(() => {
  // Define the execution context, the Rules.Engine will create a default one if not provided
  const ec: ExecutionContextI = {
    config: {
      log: {
        level: 'info', // Info level
        depth: 10      // An object inspect depth of 10
      }
    }
  };

  // Remember all dynamic import promises
  const exportsPromises: Promise<any>[] = [];
  // For convenience, map indexes to import packages
  const namedIndices = new Map<string, number>;

  // Import what you need
  namedIndices.set('app-utility', 0);
  exportsPromises.push(import('@franzzemen/app-utility'));
  namedIndices.set('re', 1);
  exportsPromises.push(import('@franzzemen/re'));

  // Resolve all imports
  Promise.all(exportsPromises)
    .then(packages => {
      // Get the packages (objects)
      const apUtility = packages[namedIndices.get('app-utility')];
      const re = packages[namedIndices.get('re')];

      // LoggerAdapter the javascript class - in contrast to the typescript definition at the top.  You will need both
      // iif using typescript and you want type checking.  Only this line if using Javascript;
      const LoggerAdapter = apUtility.LoggerAdapter;
      if (!LoggerAdapter) {
        const err = new Error('LoggerAdapter not in app-utility');
        console.error(err);
        throw err;
      }
      // Now use the type!
      const log: LoggerAdapter = new LoggerAdapter(ec, 're-commonjs-examples', 'index', 'global');

      // Rules the javascript class and other objects...we only do LoggerAdapter above to create our log object.
      const Rules = re.Rules;
      if (!Rules) {
        const err = new Error('Rules not in re');
        log.error(err);
        throw (err);
      }

      // Main code...as if you were in the ES modules.
      Rules.Engine.load('price > 5.0', ec);
      const result: ReResult = Rules.Engine.awaitEvaluation({price: 6.0}, ec);
      log.info(result, 'Result');
    });
})();




