Sasspool
========

A mixin and function library for Sass.

## About Sasspool

Sasspool is an all-in-one Sass framework to help you get started on projects quickly and remain organized as you progress.

## Requirements

These items must be installed on your computer:

* [Node.js](http://nodejs.org)
* [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

When you first download the repo, you will want to open the project directory in terminal and run `yarn`. This will download all the packages you need to compile assets on this project.

Running `yarn start` will start the task that watches for changes to your files.

### Using Sasspool in other projects

When you start a project that you want to use Sasspool with you can always just download the files and move them over to your project, but there is an easy way to import just the Sasspool Sass files. Open your project directory in terminal and run `svn export https://github.com/guerillalabs/Sasspool/trunk/sass --force`. This will bring over the "sass" folder from the Sasspool repository (without any versioning history, as you will want to modify the files to suit your project).

If you use this technique, you will be responsible for setting up your Sass watch task and making sure Autoprefixer is configured to compile the Sasspool files properly. The [Air-Drop](https://github.com/guerillalabs/air-drop) Jekyll framework is already structured to do this, so you may want to consider it as a base for your site.

## Including Sasspool in your HTML

The following code is recommended for use in the `<head>` element of your pages (be sure to check the absolute vs. relative path to the stylesheet depending on your environment's needs):

``` html
<!-- CSS -->
<link rel='stylesheet' href='/css/screen.css'>
```

## URLs in Sass

When using URLs in Sasspool, things can be easier by replacing normal css `url()` calls with either `image-url($filename)` or `font-url($filename)` function calls. These functions can be located in the `sass/_1_base/_mixins/_assets.scss` file.

To update the location of the folders holding these assets, look to the `$static-dir`, `$font-dir`, and `$images-dir` variables in the `sass/_1_base/_vars.scss` file.

## Naming Conventions

How CSS classes are named have become a matter of debate over recent years. For consistency, we're documenting our naming convention here.

We use the BEM (block, element, modifier) naming convention as honed by [Harry Roberts at CSS Wizardry](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

### Block

This is a "module" of the page. Let's go with "nav".

``` html
<ul class="nav">
    ...
</ul>
```

### Element

A distinct element within the block. We try to not rely on HTML elements for this. HTML elements are best for hierarchy, while classes are for styling. A heading in a sidebar may need to change from an h2 to h3 on different pages to keep the document outline in tact, but they class can stay the same to keep the styling correct in each situation.

Two underscores indicate the element portion of the class.

Let's add some links to our navigation.

``` html
<ul class="nav">
    <li class="nav__item"><a href="#">Nav Item</a></li>
    <li class="nav__item"><a href="#">Nav Item</a></li>
</ul>
```

### Modifier

A modifier changes a block or element that has already been defined. Really popular modifiers are for buttons, where you'll end up with classes like `.btn--large`, `btn--small`, `btn--disabled`, and others.

Two hyphens indicate the modifier portion of the class.

Let's add a modifier to our navigation.

``` html
<ul class="nav nav--inline">
    <li class="nav__item"><a href="#">Nav Item</a></li>
    <li class="nav__item"><a href="#">Nav Item</a></li>
</ul>
```

Note that the new class is added in addition to the base "block" class.

## Relative Sizing Units

Because Air-Drop still supports IE8, we need a good way to deal with rem units in CSS. There are helper functions to calculate rems, ems and percentages. You can find them all in `sass/_1_base/_mixins/_units.scss`.

The philosophy behind our use of ems and rems follows closely with the thoughts of [Jeremy Church](http://j.eremy.net/confused-about-rem-and-em/). tl;dr – use ems to size text, and most other things; use rems when you need to ensure horizontal spacing (like gutters) stays consistent across contexts.

The rem() and em() functions are available for your convenience to avoid having to do calculations, but their use isn't required.

**Important note:** if you use ems for media queries (and you should), make sure that they are always based off of the default browser text size and not the `$base-font-size`. So, something like `@media (min-width: em(480, 16)) {` should always be used.

## Media Queries

A query mixin – `sass/_1_base/_mixins/_media-queries.scss` – is provided to ease working with breakpoint variables. In brief, here's how they work:

``` sass
@media #{query('s')} { // min-width starting at the 's' breakpoint variable
    styles here...
}
```

When using 'max-width' media queries, the mixin reduces the variable value by 1px to keep styles from overlapping.

``` sass
@media #{query('s', 'max')} { // max-width of 1px below the 's' breakpoint variable
    styles here...
}
```

More complex uses are also possible:

``` sass
@media screen and #{query('s') and #{query('900px', $dimension: 'height')} {
    styles here...
}
```

## Variables, Spacing and Typography

The `sass/_1_base/_vars.scss` is very important for each project. This is where font sizes, dimensions, grid gutters and colors are all set.

As much as possible, these variables should be used throughout your project to aid in maintenance and making changes.

### Typography

There is a fairly complex responsive typography technique in use by default. Be sure to read the "Typography" section of the `_vars.scss` file for full details and instructions.

### Colors

Many color variables are provided by default, but there is also a `_shades.scss` mixin that allows you to quickly, and consistently, lighten and darken the colors throughout your site.

## Grids

Air-Drop includes 3 grid variants.

All of the variables that control the grid are in `sass/_1_base/_vars.scss`.

Read the instructions at the top of `sass/_2_layout/_grids/_legacy.scss`, `sass/_2_layout/_grids/_flex.scss`, and `sass/_2_layout/_grids/_modern.scss` for more details on usage. Sasspool used flexbox based grids by default.

If you are using legacy grids, be sure to comment out the white space between the individual grid items. Like so:

``` html
...
</div><!--

--><div class="grid__item" ...
```
