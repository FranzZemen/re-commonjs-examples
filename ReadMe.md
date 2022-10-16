# Read Me

This provides an example on how to use the ES module loaded packages in the re framework from a commonjs loaded source 
project.

## Installation

To run:

From any folder, noting that this will create the subdirectory node_modules

    npm i @franzzemen/re-commonjs-examples

Run it

    node ./node_modules/@franzzemen/re-commonjs-examples/index.js

Or create an index.js file in the folder you ran npm from.

    index.js:

    // Start index.js
    require('@franzzemen/re-commonjs-examples');
    // End

And run it:

    node

The simple act of loading the package will run the top example and output to the console.
    
You can inspect the Javascript code at ./node_modules/@franzzemen/re-commonjs-examples/index.js.  However you may prefer
working with original source, especially if you know typescrip.  See next section.

## Building the code

You can build the git project to run as is, or use the build scaffolding for your own uses.  For more information on 
how to use the scaffolding, see the documentation for @franzzemen/gulp-base.  For simple purposes:

Make sure you have properly installed:
- git (most versions should work, but use latest available)
- node & npm (node 16.x+, npm 8.x+)
- typescript (4.8.x+ was the earliest tested, may work on earlier versions)
- gulp-cli (global, most recent or 2.3.0+)

Then execute:

Fetch the project and cd into it:

    git clone https://github.com/FranzZemen/re-commonjs-examples
    cd ./re-commonjs-examples
    
Install local dependencies

    npm i

Build and test (all the test does is run the index file)    

    gulp

You can also run it

    node publish 

If you're just rebuilding and running the test(s):

    gulp buildTest

## Output

The main output from the index.js file loading should look similar to:

     2022-10-16T20:56:19.348 INFO:
{
  message: 'Result',
  data: {
    applicationResults: [
      {
        applicationRef: 'Default',
        ruleSetResults: [
          {
            ruleSetRef: 'Default',
            ruleSetText: '',
            ruleResults: [
              RuleResult {
                _result: {
                  ruleRef: 'Rule 2022-10-16T16:56:19:eee80659-a852-42a0-b94a-260244907229',
                  ruleText: '',
                  logicalConditionResult: { logicalOperator: 'and', result: true }
                }
              }
            ],
            valid: true
          }
        ],
        valid: true
      }
    ],
    valid: true
  }
}
