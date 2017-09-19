# eslint-config-lennym
My personal eslint preferences

Extends from `semistandard` with some rules as per my own preferences/reckons.

## My rules

* File names must always be lower case and hyphen separated - underscores are ugly and mixing case causes snafus when dev-ing on OSX and deploying to Linux.
* If you `require` a module, it has to be in package.json - accidentally depending on modules which are only installed as transitive dependencies of other things can cause unexpected failures if your dependency tree changes.
