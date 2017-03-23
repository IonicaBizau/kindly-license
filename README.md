
# `$ kindly-license`

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/kindly-license.svg)](https://www.npmjs.com/package/kindly-license) [![Downloads](https://img.shields.io/npm/dt/kindly-license.svg)](https://www.npmjs.com/package/kindly-license)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


### Editing the license content

If you found a way to improve the license content, there are two places where you have to change it:


 - in the `LICENSE.kindly` file
 - in `README.md` (*The license content*)


After modifying `LICENSE.kindly` you can run `npm run install` to update the other files.



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
