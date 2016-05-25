
# `$ kindly-license`

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/kindly-license.svg)](https://www.npmjs.com/package/kindly-license) [![Downloads](https://img.shields.io/npm/dt/kindly-license.svg)](https://www.npmjs.com/package/kindly-license) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A human readable license for projects created by human-beings.

## Why yet another license?

I'm not a supporter of closed source software. I do not promote it. This license contains simple and human readable terms. It lets the author to decide if he/she allows using their work in closed source projects or not. :four_leaf_clover:

## The license content
```
The KINDLY License
Copyright (c) <year> <author>

You have the permission to use this software, read its source code, modify and
redistribute it under the following terms:

 - if you want to use this software or include parts of its code in a
   closed-source or commercial project you should kindly ask the
   author (via a private message or email) and get a positive answer
 - this license should be included in the modified versions of this software
 - in case of redistributing modified copies, you are encouraged to clearly
   indicate that the copies are based on this work
 - if you think that your redistributed copy is awesome, you are encouraged to
   show the author of this software what you did and how you helped the others

You are free to install and use this software on as many machines as you want,
free of charge, making sure you met the terms above.

You are encouraged to kindly support the software and its author by:

 - sharing his/her work
 - reporting issues/bugs and asking for feature requests
 - donating money or any other things that can help the author
 - contribute on the software code by fixing bugs and adding features
```

In the `i18n` directory you can find the license translated in other languages. If your language translation is missing, we would appreciate to add it. :sparkles:


You can install the package globally and use it as command line tool:


```sh
$ npm i -g kindly-license
```


Then, run `kindly-license --help` and see what the CLI tool can do.


```
$ kindly-license --help
Usage: kindly-license [options]

Options:
  -a, --author <author>              The copyright holder.
  -e, --email <email>                The copyright holder email.
  -y, --year <email>                 The copyright year.
  -o, --output                       Instead of writing to file, output the license to
                                     stdout.
  -f, --file <path/to/license/file>  The output file.
  -h, --help                         Displays this help.
  -v, --version                      Displays version information.

Examples:
  kindly -a Alice -y 1990 -e alice@example.com
  kindly -a Alice -y 1990 -e alice@example.com -o

Documentation can be found at https://github.com/IonicaBizau/kindly-license
```

## Usage
### Online

You can use the online version to get a copy of the license:

```
http://ionicabizau.github.io/kindly-license/?author=Your%20Name&year=2014
```

[Here is an example](http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u&year=2014).

### Command line

You can use this as command line tool and generate KINDLY licenses providing the copyright data.

```sh
$ npm install -g kindly-license
$ kindly-license --help
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save kindly-license
```



```js
// Dependencies
var KindlyLicense = require("kindly-license");

// Output a copy
console.log(KindlyLicense(new Date().getFullYear(), "Ionică Bizău"));
```

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

### Editing the license content

If you found a way to improve the license content, there are two places where you have to change it:


 - in the `LICENSE.kindly` file
 - in `README.md` (*The license content*)


After modifying `LICENSE.kindly` you can run `npm run install` to update the other files.



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
