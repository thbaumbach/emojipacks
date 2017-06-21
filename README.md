# emojipacks-local (WORK-IN-PROGRESS)

> CLI to bulk upload emojis to your Slack! Pimped to accept local files/directories instead of YAML

Forked from [lambtron's emojipack](https://github.com/lambtron/emojipacks)

## Install

*Note you must have `node` and `npm` installed. If you don't, go to [nodejs.org](https://www.nodejs.org) and follow the install instructions there.*

```bash
$ git clone https://github.com/thbaumbach/emojipacks-local.git
$ cd emojipacks-local
$ make
```

## Usage

There is only one command:

```bash
$ emojipacks-local
```

It'll ask you a few questions:

```bash
Slack subdomain: 20percentclub
Email address login: andyjiang@gmail.com
Password: *********
Path or URL of Emoji yaml file: ./packs/futurama.yaml
```

Then, let it work its magic:

```bash
Starting import
Got tokens
Logged in
Upload crumb is s-1437797544-90b75206a7-☃
Getting emoji page
Uploading bender with http://i.imgur.com/7zYM751.png
Uploading amywong with http://i.imgur.com/DgKkcCi.png
 .
 .
 .
Uploading hypnotoad with http://i.imgur.com/o7tyjxN.gif
Uploaded emojis
```

## Optionally Pass Command Line Parameters

This will allow for easier batch uploading of multiple yaml files

```bash
$ emojipacks-local -s <subdomain> -e <email> -p <password> -y <yaml_file>
```

## Troubleshooting

This script will essentially log into your Slack and then submit a `POST` request on the emoji upload form page. If you are seeing errors, make sure that:
- **you have Slack privileges to add custom emojis**: otherwise, the script won't be able to get to the emoji upload form
- **you disabled two-factor authentication**: again, having two-factor enabled will prevent the script from getting to the necessary emoji upload form
- **your credentials are correct**: if you have done all of the following correctly try running the command **emojipacks-local -d**

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
