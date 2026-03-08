# The Complete HTML (and Semantic HTML) Cheat Sheet

This document is a comprehensive HyperText Markup Language (HTML) cheat sheet designed to help web developers by explaining each major HTML tag and its usage, with a special focus on Semantic HTML.

> [!NOTE]
> **What is Semantic HTML?**
> Semantic HTML refers to using HTML markup to reinforce the semantics, or meaning, of the information in web pages and web applications rather than merely to define its presentation (look). For example, using `<article>` instead of `<div>` clearly defines the content as an independent article.

## 1. Document Summary

| Tag                  | Description                                                                                                                           |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `<html> … </html>`   | The **root element** that acts as a parent tag for every other tag on the page. It specifies the page is HTML and indicates HTML5.    |
| `<title> … </title>` | A **mandatory** tag containing the webpage name seen in the browser title bar. Search engines use this to extract topics for ranking. |

> [!TIP]
> **Basic Structure Example:** Every HTML5 document should start with this boilerplate.
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <title>My First Website</title>
>   </head>
>   <body></body>
> </html>
> ```

## 2. Document Information

| Tag                    | Description                                                                                         |
| :--------------------- | :-------------------------------------------------------------------------------------------------- |
| `<base>`               | Used once in the `<head>` to specify the **base URL** of your site to systematize internal linking. |
| `<link>`               | Links to external scripts, most commonly used for **stylesheets**.                                  |
| `<script> … </script>` | Adds code snippets (typically **JavaScript**) to make a page dynamic or links to external scripts.  |
| `<meta>`               | A **metadata tag** highlighting information like author, keywords, or original publication date.    |
| `<style> … </style>`   | Contains **appearance information**; can complement or replace external style sheets.               |
| `<head> … </head>`     | Specifies metadata, including the page name, dependencies (JS/CSS), and font usage.                 |
| `<body> … </body>`     | The **container** for all contents visible to the user.                                             |

## 3. Document Structure

| Tag                  | Description                                                                                     |
| :------------------- | :---------------------------------------------------------------------------------------------- |
| `<h1-h6> … </h1-h6>` | Six variations of headings; `<h1>` is the largest font, `<h6>` is the smallest.                 |
| `<br>`               | A single **line break**.                                                                        |
| `<p> … </p>`         | A tag for plain text.                                                                           |
| `<hr>`               | Moves to a new line and draws a **horizontal bar** to indicate the end of a section.            |
| `<div> … </div>`     | Divides content into specified **blocks**.                                                      |
| `<span> … </span>`   | Injects **inline elements** (images, icons, emoticons) without affecting formatting or styling. |

## 4. Text Formatting

| Tag                            | Description                                                                      |
| :----------------------------- | :------------------------------------------------------------------------------- |
| `<strong> … </strong>`         | Makes text **bold** to emphasize a word or phrase.                               |
| `<em> … </em>`                 | An emphasis tag that displays text in _italics_.                                 |
| `<pre> … </pre>`               | **Pre-formatted text**; uses monospaced font and preserves whitespace.           |
| `<cite> … </cite>`             | Used to cite the author of a quote.                                              |
| `<blockquote> … </blockquote>` | Used for quotes, typically alongside the `<cite>` tag.                           |
| `<abbr> … </abbr>`             | Denotes abbreviations or acronyms.                                               |
| `<address> … </address>`       | For specifying the author’s **contact details**.                                 |
| `<q> … </q>`                   | Used for shorter quotes.                                                         |
| `<dfn> … </dfn>`               | Dedicated to marking **definitions**.                                            |
| `<ins> … </ins>`               | Denotes text added to the webpage.                                               |
| `<del> … </del>`               | Denotes text deleted from the webpage (often crossed out).                       |
| `<s> … </s>`                   | Renders text with a strikethrough (indicates no longer correct or relevant).     |
| `<u> … </u>`                   | Renders text with an underline (unarticulated annotation, like spelling errors). |
| `<i> … </i>`                   | Displays italics without adding emphasis (e.g., foreign words, thoughts).        |
| `<b> … </b>`                   | Generates bold text as an alternative to `<strong>` without extra importance.    |
| `<code> … </code>`             | Displays **code snippets** within a paragraph.                                   |
| `<kbd> … </kbd>`               | Represents user input (e.g., keyboard input: Ctrl+C).                            |
| `<samp> … </samp>`             | Represents sample output from a computer program.                                |
| `<var> … </var>`               | Represents a variable in programming or mathematical expressions.                |
| `<sup> … </sup>`               | Writes a superscript (e.g., a^x).                                                |
| `<small> … </small>`           | Reduces text size; in HTML5, often refers to secondary info like copyright.      |
| `<sub> … </sub>`               | Writes a subscript (e.g., a_x).                                                  |

## 5. Links

| Tag/Attribute                   | Description                                                                                  |
| :------------------------------ | :------------------------------------------------------------------------------------------- |
| `<a href=""> … </a>`            | The anchor tag used for hyperlinks.                                                          |
| `target="_blank"`               | Attribute to open the linked document in a new tab or window.                                |
| `download`                      | Attribute to specify that the target will be downloaded when a user clicks on the hyperlink. |
| `<a href="#name"> … </a>`       | Navigates specifically to an element with the corresponding `id` on the same page.           |
| `<a href="tel:###-###"> … </a>` | Mention **contact numbers**; beneficial for mobile users as they are clickable.              |
| `<a href="mailto:"> … </a>`     | Used for sending emails.                                                                     |

## 6. Images & Maps

| Attribute/Tag            | Description                                                                                  |
| :----------------------- | :------------------------------------------------------------------------------------------- |
| `<img>`                  | Displays images on a webpage.                                                                |
| `src="url"`              | The path or URL where the image is located.                                                  |
| `alt="text"`             | Hover text that provides additional details about the image.                                 |
| `width=""` / `height=""` | Image dimensions in pixels or percentages.                                                   |
| `align=""`               | Relative alignment of the image.                                                             |
| `border=""`              | Border thickness (default is 0). _Note: Use CSS instead._                                    |
| `<picture> … </picture>` | A container that provides alternative `<source>` elements for specific responsive scenarios. |
| `<map> … </map>`         | Denotes an **interactive (clickable) image**.                                                |
| `<map name=""> … </map>` | Associates a specific image with a map.                                                      |
| `<area>`                 | Specifies the map area.                                                                      |
| `shape=""`               | The shape of the clickable area.                                                             |
| `coords=""`              | Vital coordinates (vertices for rectangles, center/radius for circles).                      |

## 7. Lists

| Tag            | Description                                         |
| :------------- | :-------------------------------------------------- |
| `<li> … </li>` | An individual list item.                            |
| `<ul> … </ul>` | An **unordered list**.                              |
| `<ol> … </ol>` | An **ordered/numbered list**.                       |
| `<dl> … </dl>` | A list of items with definitions.                   |
| `<dt> … </dt>` | A definition of a single term in-line with content. |
| `<dd> … </dd>` | The description of the defined term.                |

## 8. Forms & Inputs

### Form Attributes

| Attribute         | Description                                                                       |
| :---------------- | :-------------------------------------------------------------------------------- |
| `action="url"`    | Where form data is submitted.                                                     |
| `method=""`       | Specifies the HTTP method (**POST** or **GET**).                                  |
| `target`          | Where the response displays; values include `_blank`, `_self`, `_parent`, `_top`. |
| `autocomplete`    | Determines if auto-complete is enabled.                                           |
| `novalidate`      | Determines if the form should be validated before submission.                     |
| `accept-charsets` | Determines character encodings.                                                   |
| `enctype=""`      | Used with POST to dictate the data encoding scheme.                               |

### Input Attributes

| Attribute                       | Description                                                                                      |
| :------------------------------ | :----------------------------------------------------------------------------------------------- |
| `type=""`                       | Requested input type (e.g., text, password, email, number, date, checkbox, radio, file, hidden). |
| `name=""`                       | Name of the input field.                                                                         |
| `value=""`                      | Current value contained in the field.                                                            |
| `placeholder=""`                | Provides a hint about the requested data.                                                        |
| `required`                      | Makes the field **compulsory**.                                                                  |
| `maxlength=""` / `minlength=""` | Maximum/Minimum allowed characters in the field.                                                 |
| `min=""` / `max=""` / `step=""` | Allowed value range and numeric intervals for an input element.                                  |
| `autofocus`                     | Forces focus on the element upon page load.                                                      |
| `disabled`                      | Prevents user data entry or interaction.                                                         |
| `readonly`                      | Specifies that an input field is read-only (unmodifiable).                                       |
| `multiple`                      | Specifies that the user is allowed to enter/select more than one value.                          |
| `pattern=""`                    | Uses a **regular expression** to validate input text patterns.                                   |
| `width=""` / `height=""`        | Input element dimensions in pixels (used for `type="image"`).                                    |

### Form Elements

| Tag                        | Description                                                                        |
| :------------------------- | :--------------------------------------------------------------------------------- |
| `<form> … </form>`         | The parent tag for the form.                                                       |
| `<fieldset> … </fieldset>` | Groups related fields.                                                             |
| `<legend> … </legend>`     | A caption for the `<fieldset>`.                                                    |
| `<label> … </label>`       | Labels a specific field.                                                           |
| `<textarea> … </textarea>` | For **longer strings** of multi-sentence text.                                     |
| `<select> … </select>`     | A list of options for the user (drop-down list).                                   |
| `<optgroup> … </optgroup>` | Groups related options within a `<select>` drop-down list.                         |
| `<option> … </option>`     | Individual items within the list.                                                  |
| `<datalist> … </datalist>` | Specifies a list of pre-defined options for input controls (creates autocomplete). |
| `<output> … </output>`     | Represents the result of a calculation or user action.                             |
| `<button> … </button>`     | Creates a button for submission.                                                   |

## 9. Tables

| Tag                               | Description                                                     |
| :-------------------------------- | :-------------------------------------------------------------- |
| `<table> … </table>`              | Marks the table.                                                |
| `<caption> … </caption>`          | A description placed inside the table.                          |
| `<thead>` / `<tbody>` / `<tfoot>` | Specifies headers, data body, and footers.                      |
| `<tr> … </tr>`                    | Denotes a single row.                                           |
| `<th> … </th>`                    | The heading of a column.                                        |
| `<td> … </td>`                    | A single cell containing data.                                  |
| `colspan=""` / `rowspan=""`       | Attributes to make a cell span across multiple columns or rows. |
| `<colgroup>` / `<col>`            | Used for grouping and denoting columns to apply styling.        |

## 10. Multimedia & Embeds

> [!TIP]
> **Modern Best Practice:** Use `<video>` and `<audio>` instead of `<embed>` or `<object>` for native media playback.

| Tag/Attribute          | Description                                                                   |
| :--------------------- | :---------------------------------------------------------------------------- |
| `<iframe> … </iframe>` | A flexible container for multimedia that floats relative to other items.      |
| `<object> … </object>` | Embeds multimedia like audio, video, or **.pdf documents**.                   |
| `<embed> … </embed>`   | Embeds external objects like **plugins**.                                     |
| `srcdoc=""`            | HTML content to display inside an iFrame.                                     |
| `<param />`            | Used to define parameters for `<object>` elements.                            |
| `<video> … </video>`   | Embeds video content (e.g., mp4, WebM) with optional playback controls.       |
| `<audio> … </audio>`   | Embeds audio content (e.g., mp3, wav) with optional playback controls.        |
| `<source>`             | Specifies multiple media resources for `<picture>`, `<video>`, and `<audio>`. |
| `<track>`              | Specifies text tracks (subtitles, captions) for `<audio>` and `<video>`.      |
| `<canvas> … </canvas>` | Used to draw graphics on the fly via scripting (usually JavaScript).          |
| `<svg> … </svg>`       | Used to define vector-based graphics for the web.                             |

## 11. HTML5 Semantic & Structural Tags

| Tag                         | Description                                                                                                                                                      |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<header>` / `<footer>`     | Headers and footers for the page or objects.                                                                                                                     |
| `<main>`                    | The main content area.                                                                                                                                           |
| `<section>`                 | A particular webpage section.                                                                                                                                    |
| `<article>`                 | Denotes an article.                                                                                                                                              |
| `<aside>`                   | Sidebar content.                                                                                                                                                 |
| `<nav>`                     | Navigation links.                                                                                                                                                |
| `<figure>` / `<figcaption>` | Reserved for diagrams/charts and their descriptions.                                                                                                             |
| `<details>` / `<summary>`   | Additional info the user can hide/view; `<summary>` is the visible heading.                                                                                      |
| `<dialog>`                  | Creates a dialog box.                                                                                                                                            |
| `<mark>`                    | Highlights specific text.                                                                                                                                        |
| `<progress>`                | A progress bar.                                                                                                                                                  |
| `<meter>`                   | Measures data within a range.                                                                                                                                    |
| `<time>`                    | Formatting date and time.                                                                                                                                        |
| `<ruby>` / `<rt>` / `<rp>`  | **East Asian typography** tags for annotations and character details.                                                                                            |
| `<wbr>`                     | A line-break opportunity within a long word or URL.                                                                                                              |
| `<bdi>`                     | Bi-directional isolation (isolates a span of text that might be formatted in a different direction).                                                             |
| `<bdo>`                     | Bi-directional override (overrides the current text directionality).                                                                                             |
| `<data>`                    | Links a given piece of content with a machine-readable translation.                                                                                              |
| `<template>`                | A mechanism for holding HTML that is not to be rendered immediately when a page is loaded, but may be instantiated subsequently during runtime using JavaScript. |
| `<slot>`                    | A placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.                 |

## 12. Character Objects

| Character          | Symbol | Entity Code          |
| :----------------- | :----- | :------------------- |
| Ampersand          | `&`    | `&#38;` or `&amp;`   |
| Less than          | `<`    | `&#60;` or `&lt;`    |
| Greater than       | `>`    | `&#62;` or `&gt;`    |
| Quotation Marks    | `"`    | `&#34;` or `&quot;`  |
| Copyright          | `©`    | `&#169;` or `&copy;` |
| @ Symbol           | `@`    | `&#64;`              |
| Small bullet       | `•`    | `&#149;`             |
| Non-breaking space | ` `    | `&#160;` or `&nbsp;` |
| Trademark          | `™`    | `&#153;`             |

---
