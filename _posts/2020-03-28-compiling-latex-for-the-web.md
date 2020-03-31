---
title: Compiling LaTeX for the Web
layout: article
description: Compiling LaTeX for the web, tex4ht, pandoc
---

# Compiling LaTeX for the Web: A Surprisingly Difficult Task

LaTeX is the go-to markup language used by mathematicians and scientists to product technical content. Of course, LaTeX has first-class support for compiling to a PDF, which is great when the result is a a paper to be submitted to the arXiv, notes to distribute to a class, or even tests and homework assignments. But what if you want to share the content that you create on the internet? The ideal solution is to retain one single source document (the LaTeX files) and simply have a different compilation workflow that produces a webpage instead of a PDF. Though it sounds simple, a solution is not obvious, and the best results are hidden behind some obscure tools and non-default configurations. The purpose of this post is to outline the pitfalls when trying a few standard solutions, and present my current workflow that (so far) seems adequate.

If you'd like less exposition, jump right to [the final workflow](#a-mostly-good-enough-workflow).

## Option #1 &mdash; Pandoc: Jack of all trades, master of none

[pandoc]([https://pandoc.org/](https://pandoc.org/)) is a self-described "swiss army knife" for converting between markup formats. 
Converting LaTeX source to HTML is among its many capabilities. The process is quick and easy, and getting the resulting page to include and render the math with mathjax is simple. 

Unfortunately, there is a fundamental problem with LaTeX to HTML conversion baked into Pandoc's design that will cause problems for anything but the most trivial LaTeX documents. Pandoc works by converting a source document to an internal agnostic AST representation, and then re-writing this representation into the output document format. As such, the only concepts capable of being represented in Pandoc are those acknowledged in its internal representation. For example, an `enumerate` environment in LaTeX is parsed into an "Ordered List" object in the internal representation, which is then converted to an `<ol>` tag when writing the output HTML. What this means is that Pandoc only understands a very limited subset of LaTeX envrionments that make sense in the other document types that Pandoc handles, and it simply ignores advanced or LaTeX-specific document structure. In particular theorem and other environments from `amsthm` are disregarded entirely. Even if Pandoc doesn't  _handle_ these environments, one might hope that their metadata would somehow be recorded and preserved so that it could be manually handled or styled in the output, but this is not the case. There is a [very long Github issue thread]([https://github.com/jgm/pandoc/issues/1608](https://github.com/jgm/pandoc/issues/1608)) about this issue, but all the solutions offered in the thread are for converting Markdown _to_ LaTeX.

Overall, the Pandoc community is (understandably) more focused on converting Markdown to more structured formats like LaTeX than the other way around, and as such it simply doesn't provide adequate support for our purposes.

## Option #2 &mdash; tex4ht

[tex4ht](https://tug.org/tex4ht/) is a dedicated tool for compiling LaTeX to HTML. Installation is easy, since the suite of tools is already included in the [TeX Live](https://www.tug.org/texlive/) distribution, the standard way to work with TeX on linux systems; this means that the commands mentioned in this section will "just work" on a system with TeX Live installed. In theory, one simply runs
```
htlatex main.tex
```
in the source directory, exactly like `pdflatex`, and the output will be a file named `main.html`.
Like pandoc, `tex4ht` is capable of using MathJax to render the math on the resulting page. An immediate problem, however, is that macros are not expanded during compilation, so MathJax will attempt (and fail) to render your custom commands. This is technically solvable by including a Javascript file on the resulting page that informs MathJax of all of your macros, but this is certainly not preferable. Luckily, [this blog post](https://www.homepages.ucl.ac.uk/~ucahmto/elearning/latex/2019/06/06/tex4ht.html) provides a solution: Have `tex4ht` render MathML, and then have MathJax render the MathML. This way, all mathematics in the document is "fully expanded" and compiled to MathML that is then faithfully rendered by MathJax. 

The second problem that rears its head is that of figures and images. On paper, `tex4ht` is fully capable of detecting `tikz` images, converting them to an `svg` file, and including the image file in the resulting HTML document -- a perfect solution! At least it would be, if it worked! Unfortunately, it's quite trivial to break this feature almost immediately. For example, the trivial `tikzcd` diagram:
```
\begin{tikzcd}
A \arrow[r] & B
\end{tikzcd}
```
produces a disfigured `svg` image. Worse yet, examples of similar complexity can produce completely broken `svg` files (that is, not even valid SVG code!). The solution is to use [alternative TikZ drivers](https://github.com/michal-h21/dvisvgm4ht) for `tex4ht`, which tells `tex4ht` to use a different tool to create the SVG graphics. These drivers aim to fix "some issues with the default driver distributed with TikZ" (a bit of an understatement), and in fact they do. The different tool employed is [dvisvgm](https://dvisvgm.de/), which is also included in TeX Live, so the only thing needed to enable this feature is to "flip an optional switch" before including TikZ in your LaTeX document or preamble:
```
\ifdefined\HCode
  \def\pgfsysdriver{pgfsys-dvisvgm4ht.def}
\fi 
```
Like magic, the SVG images produced by `tex4ht` now look perfect!

## A mostly good enough workflow

The two tweaks in the last section leave us with something that mostly works!
My final configuration for using `tex4ht` is as follows:

First create the following configuration file linked to in the [previously mentioned blog post](https://www.homepages.ucl.ac.uk/~ucahmto/elearning/latex/2019/06/06/tex4ht.html):
```
\Preamble{xhtml,mathml}
\Configure{VERSION}{}
\Configure{DOCTYPE}{\HCode{<!DOCTYPE html>\Hnewline}}
\Configure{HTML}{\HCode{<html>\Hnewline}}{\HCode{\Hnewline</html>}}
\Configure{@HEAD}{}
\Configure{@HEAD}{\HCode{<meta charset="UTF-8" />\Hnewline}}
\Configure{@HEAD}{\HCode{<meta name="generator"  content="TeX4ht (http://www.cse.ohio-state.edu/\string~gurari/TeX4ht/)" />\Hnewline}}
\Configure{@HEAD}{\HCode{<link rel="stylesheet" type="text/css" href="\expandafter\csname aa:CssFile\endcsname" />\Hnewline}}
\Configure{@HEAD}{\HCode{<script type="text/javascript" id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-svg.js"></script>\Hnewline}}
\Configure{@HEAD}{\HCode{<style type="text/css"> .MathJax_MathML {text-indent: 0;} </style>\Hnewline}}
\begin{document}
\EndPreamble
```
Note that I've made a minor change to the script tag to use the modern/supported way to load MathJax from a CDN.
In your LaTeX document or preamble, include the following before loading `tikz`:
```
\ifdefined\HCode
	\def\pgfsysdriver{pgfsys-dvisvgm4ht.def}
\fi
```
Finally, compile using `htlatex` with the following options:
```
htlatex main.tex "config.cfg, charset=utf-8" " -cunihtf -utf8"
```
Where `config.cfg` is the config file previously created. The result is a full "batteries-included" HTML file along with a CSS file and a collection of SVG files suitable for dumping into a folder behind a web server. But it can also be tweaked to play nicely as a source file for static site generators, such as Jekyll; for example, one can strip off all content except for that inside the `body` tag, shuffle the generated assets (a CSS file and SVG images) to an appropriate place and include the generated page inside a template that includes surrounding content and styling. Here is [a page](https://cemulate.github.io/solutions_maclane/presheafsubobject.html) on my site created with the workflow just described.

## Lingering issues and strategies to fix them

The excited reader, after trying the process outlined above on any substantial LaTeX document, will probably be disappointed.
Sometimes the output will look "mostly right" with minor aesthetic issues cropping up, but other times you may run into malformed or invalid MathML that MathJax will refuse to render entirely.
The following is just a sampling of minor problems that I encountered while trying to compile some routine LaTeX documents:
* Sometimes, `^` doesn't parse correctly in macro definitions, and is omitted in the output ([discussion](https://tex.stackexchange.com/questions/306567/tex4ht-superscript-symbol-problem)). Workaround: Use `\sp{}` or `\sb{}`  for superscript and subscript in macro definitions.
* Some advanced constructs like `\xhookrightarrow{}` from the `mathtools` package don't compile correctly or produce broken output. No known workaround, but simpler things like `\xrightarrow` or `\hookrightarrow` by themselves work.
* Using `\text{}` or `\textnormal{}` in macro definitions sometimes compiles incorrectly and produces invalid MathML. Workaround: Use `\mathrm` for "normal" text during math mode

Given the vast scope of situations that tools like `tex4ht` have to handle, these issues are relatively minor, but nonetheless, one cannot expect a document that compiles into a perfect PDF to be the flawless when put through `tex4ht`; this list is assuredly far from complete and this process will probably always require manual inspection and tweaking.

Most issues like the ones above are fixable by tweaking the source TeX (and, most of the time, this is harmless to the existing PDF presentation).
Some issues, however, take a bit more work.
For example, `align` environments from `amsmath` typically have display style math by default (that is, things like `\frac{}{}` will appear in display style inside an `align` environment).
This is not the case with the output from `tex4ht` when rendering to MathML: even though explicit display math environments like `$$ ... $$` and `\( ... \)` have display style math by default, `align` environments do not.
The problem is that the MathML tags containing the contents of the `align` do not have the `displaystyle` attribute set.
Luckily, the HTML output from `tex4ht` is rich with metadata, so we can fix issues like this with a bit of postprocessing.
As an example, the `align` issue can be fixed by running following Python (3) script using [lxss](https://lxml.de/) and the [cssselect](https://lxml.de/cssselect.html) extension (both easily installable through Pip):
```python
from lxml import etree

tree = etree.parse('./main.html')
html = tree.getroot()

for element in html.cssselect('.align, .align-star'):
    element.set('displaystyle', 'true')

output = etree.tostring(html, pretty_print=True, method='html')
with open('./final.html', 'wb') as output_file:
    output_file.write(output)
```
which says to simply parse `main.html`, set the attribute `displaystyle="true"` on all MathML tags with class `.align` or `.align-star` (coming from `align` and `align*` environments), and write the modified document back to `final.html`.
It's easy to imagine that this sort of simple postprocessing could be extended to fix other issues of this flavor.
