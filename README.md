Infinite Scroll and Beyond
==========================

"To Infinite Scroll, and Beyond!" -- a very lightweight, bare bones infinite scroll library with simple templating in jQuery

Features
========

* Fetches content from any JSON webservice or data source
* Uses a very simple template to generate HTML
* Appends newly generated HTML on scroll down to last page

Dependencies
============

* Any recent version of jQuery should work fine

Tested with
===========

* Chrome 23
* IE 8
* Firefox 14

How to use
==========

The heart of the scroller is of course in infinite_scroll.js. It automatically sets up a Content() object that handles the infinite scrolling and template generation, and adds a scroll listener with jQuery's $(window).scroll() to fetch more content as the user reaches the last window-height page.

It relies on some kind of JSON webservice or data source supplying an array of data. The data is inserted into a template containing variables of the form ##name##. The template output is then appended to Content()'s container div.

Setup your parameters in the Content() object:

* container - a jQuery DIV object HTML should be appended to
* template - the jQuery HTML object from the template
* path - the path to your webservice

Make sure the container div and template are present in your document, and you should be ready to go. If you want to customize it, Content has two functions for fetching new content, fetch(offset, limit) and fetchNext(limit). The default action is to store the last index and just call fetchNext().

Webservice
==========

There is a very basic dummy webservice example in PHP supplied. Just output JSON with the supplied offset and limit. URLs should be of the form:

/pathtoservice/(:offset)/(:limit)

Pull requests
=============

Are very welcome, but I will be keeping it very minimal and lightweight (no more dependencies) :)
