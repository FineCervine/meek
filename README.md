# meek
A shy style that hardly works.

## New! Install as a UserCSS
> Will update the README.md later

[![Install directly with Stylus](https://img.shields.io/badge/Install%20directly%20with-Stylus-00adad.svg)](https://raw.githubusercontent.com/FineCervine/meek/master/meek.user.css)

---

## Intro
The purpose of this stylesheet is to make eClass (Moodle) a bit more usable at
night. It also adds a few animations and increases spacing between divs.
This does not fix extra styling done on pages were there is custom text colours 
or more; in fact, it tends to break things.

This will be made into a [UserCSS](https://github.com/openstyles/stylus/wiki/Usercss).

## (Old) Use/Installation
Use a user styles manager like [Stylus](https://github.com/openstyles/stylus/)
(available for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)
and [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne))
or [xStyle](https://github.com/FirefoxBar/xStyle) ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/xstyle/)
and [Chrome](https://chrome.google.com/webstore/detail/xstyle/hncgkmhphmncjohllpoleelnibpmccpj)).

The font used personally in this style is [Anonymous Pro](https://www.marksimonson.com/fonts/view/anonymous-pro)
by Mark Simonson. You can change this in the style (along with a few other things) via:

```css
:root{
    --font: FirstFont, 'Fallback font' !important;
```

This will soon be updated into a [UserCSS](https://github.com/openstyles/stylus/wiki/Usercss)
which will make installation much easier and allow for updates and a few other cool things (see 
[this *unit*](https://github.com/StylishThemes/Github-Dark)). 
**But for now**:

### Stylus
If you're using [Stylus](https://github.com/openstyles/stylus/):

1. Go to `Manage`
2. Click on `Write new stlye`
3. Click on `Import`
4. Copy and paste the contents of [meek.css]() in to the window and `Overwrite`.

### xStyle
*The cuter one of the bunch*, [xStyle](https://github.com/FirefoxBar/xStyle):

1. Download [meek.css]()
2. On the extension click on `Manage Styles` (Gear symbol)
3. Click on `Install from file`

---

## How to (Usually) Fix Poor Visibility
<kbd>CTRL</kbd>+<kbd>A</kbd>
