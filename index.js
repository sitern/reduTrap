let bootstrap = {
  html: `:root {
--blue: #007bff;
--indigo: #6610f2;
--purple: #6f42c1;
--pink: #e83e8c;
--red: #dc3545;
--orange: #fd7e14;
--yellow: #ffc1070e;
--green: #28a745;
--teal: #20c997;
--cyan: #17a2b8;
--white: #fff;
--gray: #6c757d;
--gray-dark: #343a40;
--primary: #007bff;
--secondary: #6c757d;
--success: #28a745;
--info: #17a2b8;
--warning: #ffc107;
--danger: #dc3545;
--light: #f8f9fa;
--dark: #343a40;
--breakpoint-xs: 0;
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;
--font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
}

*,
::after,
::before {
box-sizing: border-box
}

html {
font-family: sans-serif;
line-height: 1.15;
-webkit-text-size-adjust: 100%;
-webkit-tap-highlight-color: transparent
}


.fade {
transition: opacity .15s linear
}

@media screen and (prefers-reduced-motion:reduce) {
.fade {
transition: none
}
}

.fade:not(.show) {
opacity: 0
}

.collapse:not(.show) {
display: none
}

.collapsing {
position: relative;
height: 0;
overflow: hidden;
transition: height .35s ease
}

@media screen and (prefers-reduced-motion:reduce) {
.collapsing {
transition: none
}
}


article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
display: block
}

body {
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
text-align: left;
background-color: #fff
}

[tabindex="-1"]:focus {
outline: 0 !important
}

hr {
box-sizing: content-box;
height: 0;
overflow: visible
}

h1,
h2,
h3,
h4,
h5,
h6 {
margin-top: 0;
margin-bottom: .5rem
}

p {
margin-top: 0;
margin-bottom: 1rem
}

abbr[data-original-title],
abbr[title] {
text-decoration: underline;
-webkit-text-decoration: underline dotted;
text-decoration: underline dotted;
cursor: help;
border-bottom: 0;
text-decoration-skip-ink: none
}

address {
margin-bottom: 1rem;
font-style: normal;
line-height: inherit
}

dl,
ol,
ul {
margin-top: 0;
margin-bottom: 1rem
}

ol ol,
ol ul,
ul ol,
ul ul {
margin-bottom: 0
}

dt {
font-weight: 700
}

dd {
margin-bottom: .5rem;
margin-left: 0
}

blockquote {
margin: 0 0 1rem
}

b,
strong {
font-weight: bolder
}

small {
font-size: 80%
}

hr {
margin-top: 1rem;
margin-bottom: 1rem;
border: 0;
border-top: 1px solid rgba(0, 0, 0, .1)
}


sub,
sup {
position: relative;
font-size: 75%;
line-height: 0;
vertical-align: baseline
}

sub {
bottom: -.25em
}

sup {
top: -.5em
}

a {
color: #007bff;
text-decoration: none;
background-color: transparent
}

a:hover {
color: #0056b3;
text-decoration: underline
}

a:not([href]):not([tabindex]) {
color: inherit;
text-decoration: none
}

a:not([href]):not([tabindex]):focus,
a:not([href]):not([tabindex]):hover {
color: inherit;
text-decoration: none
}

a:not([href]):not([tabindex]):focus {
outline: 0
}

code,
kbd,
pre,
samp {
font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
font-size: 1em
}

pre {
margin-top: 0;
margin-bottom: 1rem;
overflow: auto
}

figure {
margin: 0 0 1rem
}

img {
vertical-align: middle;
border-style: none
}

svg {
overflow: hidden;
vertical-align: middle
}

table {
border-collapse: collapse
}

caption {
padding-top: .75rem;
padding-bottom: .75rem;
color: #6c757d;
text-align: left;
caption-side: bottom
}

th {
text-align: inherit
}

label {
display: inline-block;
margin-bottom: .5rem
}

button {
border-radius: 0
}

button:focus {
outline: 1px dotted;
outline: 5px auto -webkit-focus-ring-color
}

button,
input,
optgroup,
select,
textarea {
margin: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit
}

button,
input {
overflow: visible
}

button,
select {
text-transform: none
}

[type=button],
[type=reset],
[type=submit],
button {
-webkit-appearance: button
}

[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
padding: 0;
border-style: none
}

input[type=checkbox],
input[type=radio] {
box-sizing: border-box;
padding: 0
}

input[type=date],
input[type=datetime-local],
input[type=month],
input[type=time] {
-webkit-appearance: listbox
}

textarea {
overflow: auto;
resize: vertical
}

fieldset {
min-width: 0;
padding: 0;
margin: 0;
border: 0
}

legend {
display: block;
width: 100%;
max-width: 100%;
padding: 0;
margin-bottom: .5rem;
font-size: 1.5rem;
line-height: inherit;
color: inherit;
white-space: normal
}

progress {
vertical-align: baseline
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
height: auto
}

[type=search] {
outline-offset: -2px;
-webkit-appearance: none
}

[type=search]::-webkit-search-decoration {
-webkit-appearance: none
}

::-webkit-file-upload-button {
font: inherit;
-webkit-appearance: button
}

output {
display: inline-block
}

summary {
display: list-item;
cursor: pointer
}

template {
display: none
}

[hidden] {
display: none !important
}`,
  '.h1': `
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
margin-bottom: .5rem;
font-family: inherit;
font-weight: 500;
line-height: 1.2;
color: inherit
}

.h1,
h1 {
font-size: 2.5rem
}

.h2,
h2 {
font-size: 2rem
}

.h3,
h3 {
font-size: 1.75rem
}

.h4,
h4 {
font-size: 1.5rem
}

.h5,
h5 {
font-size: 1.25rem
}

.h6,
h6 {
font-size: 1rem
}`,
  '.lead': `
.lead {
font-size: 1.25rem;
font-weight: 300
}`,
  '.display': `
.display-1 {
font-size: 6rem;
font-weight: 300;
line-height: 1.2
}

.display-2 {
font-size: 5.5rem;
font-weight: 300;
line-height: 1.2
}

.display-3 {
font-size: 4.5rem;
font-weight: 300;
line-height: 1.2
}

.display-4 {
font-size: 3.5rem;
font-weight: 300;
line-height: 1.2
}
`,
  '.mark': `
.small,
small {
font-size: 80%;
font-weight: 400
}

.mark,
mark {
padding: .2em;
background-color: #fcf8e3
}`,
  '.list': `
.list-unstyled {
padding-left: 0;
list-style: none
}

.list-inline {
padding-left: 0;
list-style: none
}

.list-inline-item {
display: inline-block
}

.list-inline-item:not(:last-child) {
margin-right: .5rem
}`,
  '.blockquote': `
.blockquote {
margin-bottom: 1rem;
font-size: 1.25rem
}

.blockquote-footer {
display: block;
font-size: 80%;
color: #6c757d
}

.blockquote-footer::before {
content: ""
}
`,
  '.initailism': `
.initialism {
font-size: 90%;
text-transform: uppercase
}`,
  '.img': `
.img-fluid {
max-width: 100%;
height: auto
}

.img-thumbnail {
padding: .25rem;
background-color: #fff;
border: 1px solid #dee2e6;
border-radius: .25rem;
max-width: 100%;
height: auto
}`,
  '.figure': `
.figure {
display: inline-block
}

.figure-img {
margin-bottom: .5rem;
line-height: 1
}

.figure-caption {
font-size: 90%;
color: #6c757d
}
`,
  pre: `
code {
font-size: 87.5%;
color: #e83e8c;
word-break: break-word
}

a>code {
color: inherit
}

kbd {
padding: .2rem .4rem;
font-size: 87.5%;
color: #fff;
background-color: #212529;
border-radius: .2rem
}

kbd kbd {
padding: 0;
font-size: 100%;
font-weight: 700
}

pre {
display: block;
font-size: 87.5%;
color: #212529
}

pre code {
font-size: inherit;
color: inherit;
word-break: normal
}

.pre-scrollable {
max-height: 340px;
overflow-y: scroll
}
`,
  '.container': `
.container {
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto
}

@media (min-width:576px) {
.container {
max-width: 540px
}
}

@media (min-width:768px) {
.container {
max-width: 720px
}
}

@media (min-width:992px) {
.container {
max-width: 960px
}
}

@media (min-width:1200px) {
.container {
max-width: 1140px
}
}`,
  '.container-fluid': `
.container-fluid {
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto
}`,
  '.row': `
.row {
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px
}

.no-gutters {
margin-right: 0;
margin-left: 0
}

.no-gutters>.col,
.no-gutters>[class*=col-] {
padding-right: 0;
padding-left: 0
}`,
  '.col': `
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px
}

.col {
-ms-flex-preferred-size: 0;
flex-basis: 0;
-ms-flex-positive: 1;
flex-grow: 1;
max-width: 100%
}

.col-auto {
-ms-flex: 0 0 auto;
flex: 0 0 auto;
width: auto;
max-width: 100%
}

.col-1 {
-ms-flex: 0 0 8.333333%;
flex: 0 0 8.333333%;
max-width: 8.333333%
}

.col-2 {
-ms-flex: 0 0 16.666667%;
flex: 0 0 16.666667%;
max-width: 16.666667%
}

.col-3 {
-ms-flex: 0 0 25%;
flex: 0 0 25%;
max-width: 25%
}

.col-4 {
-ms-flex: 0 0 33.333333%;
flex: 0 0 33.333333%;
max-width: 33.333333%
}

.col-5 {
-ms-flex: 0 0 41.666667%;
flex: 0 0 41.666667%;
max-width: 41.666667%
}

.col-6 {
-ms-flex: 0 0 50%;
flex: 0 0 50%;
max-width: 50%
}

.col-7 {
-ms-flex: 0 0 58.333333%;
flex: 0 0 58.333333%;
max-width: 58.333333%
}

.col-8 {
-ms-flex: 0 0 66.666667%;
flex: 0 0 66.666667%;
max-width: 66.666667%
}

.col-9 {
-ms-flex: 0 0 75%;
flex: 0 0 75%;
max-width: 75%
}

.col-10 {
-ms-flex: 0 0 83.333333%;
flex: 0 0 83.333333%;
max-width: 83.333333%
}

.col-11 {
-ms-flex: 0 0 91.666667%;
flex: 0 0 91.666667%;
max-width: 91.666667%
}

.col-12 {
-ms-flex: 0 0 100%;
flex: 0 0 100%;
max-width: 100%
}


@media (min-width:576px) {
.col-sm {
-ms-flex-preferred-size: 0;
flex-basis: 0;
-ms-flex-positive: 1;
flex-grow: 1;
max-width: 100%
}

.col-sm-auto {
-ms-flex: 0 0 auto;
flex: 0 0 auto;
width: auto;
max-width: 100%
}

.col-sm-1 {
-ms-flex: 0 0 8.333333%;
flex: 0 0 8.333333%;
max-width: 8.333333%
}

.col-sm-2 {
-ms-flex: 0 0 16.666667%;
flex: 0 0 16.666667%;
max-width: 16.666667%
}

.col-sm-3 {
-ms-flex: 0 0 25%;
flex: 0 0 25%;
max-width: 25%
}

.col-sm-4 {
-ms-flex: 0 0 33.333333%;
flex: 0 0 33.333333%;
max-width: 33.333333%
}

.col-sm-5 {
-ms-flex: 0 0 41.666667%;
flex: 0 0 41.666667%;
max-width: 41.666667%
}

.col-sm-6 {
-ms-flex: 0 0 50%;
flex: 0 0 50%;
max-width: 50%
}

.col-sm-7 {
-ms-flex: 0 0 58.333333%;
flex: 0 0 58.333333%;
max-width: 58.333333%
}

.col-sm-8 {
-ms-flex: 0 0 66.666667%;
flex: 0 0 66.666667%;
max-width: 66.666667%
}

.col-sm-9 {
-ms-flex: 0 0 75%;
flex: 0 0 75%;
max-width: 75%
}

.col-sm-10 {
-ms-flex: 0 0 83.333333%;
flex: 0 0 83.333333%;
max-width: 83.333333%
}

.col-sm-11 {
-ms-flex: 0 0 91.666667%;
flex: 0 0 91.666667%;
max-width: 91.666667%
}

.col-sm-12 {
-ms-flex: 0 0 100%;
flex: 0 0 100%;
max-width: 100%
}}


@media (min-width:768px) {
.col-md {
-ms-flex-preferred-size: 0;
flex-basis: 0;
-ms-flex-positive: 1;
flex-grow: 1;
max-width: 100%
}

.col-md-auto {
-ms-flex: 0 0 auto;
flex: 0 0 auto;
width: auto;
max-width: 100%
}

.col-md-1 {
-ms-flex: 0 0 8.333333%;
flex: 0 0 8.333333%;
max-width: 8.333333%
}

.col-md-2 {
-ms-flex: 0 0 16.666667%;
flex: 0 0 16.666667%;
max-width: 16.666667%
}

.col-md-3 {
-ms-flex: 0 0 25%;
flex: 0 0 25%;
max-width: 25%
}

.col-md-4 {
-ms-flex: 0 0 33.333333%;
flex: 0 0 33.333333%;
max-width: 33.333333%
}

.col-md-5 {
-ms-flex: 0 0 41.666667%;
flex: 0 0 41.666667%;
max-width: 41.666667%
}

.col-md-6 {
-ms-flex: 0 0 50%;
flex: 0 0 50%;
max-width: 50%
}

.col-md-7 {
-ms-flex: 0 0 58.333333%;
flex: 0 0 58.333333%;
max-width: 58.333333%
}

.col-md-8 {
-ms-flex: 0 0 66.666667%;
flex: 0 0 66.666667%;
max-width: 66.666667%
}

.col-md-9 {
-ms-flex: 0 0 75%;
flex: 0 0 75%;
max-width: 75%
}

.col-md-10 {
-ms-flex: 0 0 83.333333%;
flex: 0 0 83.333333%;
max-width: 83.333333%
}

.col-md-11 {
-ms-flex: 0 0 91.666667%;
flex: 0 0 91.666667%;
max-width: 91.666667%
}

.col-md-12 {
-ms-flex: 0 0 100%;
flex: 0 0 100%;
max-width: 100%
}}


@media (min-width:992px) {
.col-lg {
-ms-flex-preferred-size: 0;
flex-basis: 0;
-ms-flex-positive: 1;
flex-grow: 1;
max-width: 100%
}

.col-lg-auto {
-ms-flex: 0 0 auto;
flex: 0 0 auto;
width: auto;
max-width: 100%
}

.col-lg-1 {
-ms-flex: 0 0 8.333333%;
flex: 0 0 8.333333%;
max-width: 8.333333%
}

.col-lg-2 {
-ms-flex: 0 0 16.666667%;
flex: 0 0 16.666667%;
max-width: 16.666667%
}

.col-lg-3 {
-ms-flex: 0 0 25%;
flex: 0 0 25%;
max-width: 25%
}

.col-lg-4 {
-ms-flex: 0 0 33.333333%;
flex: 0 0 33.333333%;
max-width: 33.333333%
}

.col-lg-5 {
-ms-flex: 0 0 41.666667%;
flex: 0 0 41.666667%;
max-width: 41.666667%
}

.col-lg-6 {
-ms-flex: 0 0 50%;
flex: 0 0 50%;
max-width: 50%
}

.col-lg-7 {
-ms-flex: 0 0 58.333333%;
flex: 0 0 58.333333%;
max-width: 58.333333%
}

.col-lg-8 {
-ms-flex: 0 0 66.666667%;
flex: 0 0 66.666667%;
max-width: 66.666667%
}

.col-lg-9 {
-ms-flex: 0 0 75%;
flex: 0 0 75%;
max-width: 75%
}

.col-lg-10 {
-ms-flex: 0 0 83.333333%;
flex: 0 0 83.333333%;
max-width: 83.333333%
}

.col-lg-11 {
-ms-flex: 0 0 91.666667%;
flex: 0 0 91.666667%;
max-width: 91.666667%
}

.col-lg-12 {
-ms-flex: 0 0 100%;
flex: 0 0 100%;
max-width: 100%
}
}




@media (min-width:1200px) {
.col-xl {
-ms-flex-preferred-size: 0;
flex-basis: 0;
-ms-flex-positive: 1;
flex-grow: 1;
max-width: 100%
}

.col-xl-auto {
-ms-flex: 0 0 auto;
flex: 0 0 auto;
width: auto;
max-width: 100%
}

.col-xl-1 {
-ms-flex: 0 0 8.333333%;
flex: 0 0 8.333333%;
max-width: 8.333333%
}

.col-xl-2 {
-ms-flex: 0 0 16.666667%;
flex: 0 0 16.666667%;
max-width: 16.666667%
}

.col-xl-3 {
-ms-flex: 0 0 25%;
flex: 0 0 25%;
max-width: 25%
}

.col-xl-4 {
-ms-flex: 0 0 33.333333%;
flex: 0 0 33.333333%;
max-width: 33.333333%
}

.col-xl-5 {
-ms-flex: 0 0 41.666667%;
flex: 0 0 41.666667%;
max-width: 41.666667%
}

.col-xl-6 {
-ms-flex: 0 0 50%;
flex: 0 0 50%;
max-width: 50%
}

.col-xl-7 {
-ms-flex: 0 0 58.333333%;
flex: 0 0 58.333333%;
max-width: 58.333333%
}

.col-xl-8 {
-ms-flex: 0 0 66.666667%;
flex: 0 0 66.666667%;
max-width: 66.666667%
}

.col-xl-9 {
-ms-flex: 0 0 75%;
flex: 0 0 75%;
max-width: 75%
}

.col-xl-10 {
-ms-flex: 0 0 83.333333%;
flex: 0 0 83.333333%;
max-width: 83.333333%
}

.col-xl-11 {
-ms-flex: 0 0 91.666667%;
flex: 0 0 91.666667%;
max-width: 91.666667%
}

.col-xl-12 {
-ms-flex: 0 0 100%;
flex: 0 0 100%;
max-width: 100%
}



}
`,
  '.order': `
.order-first {
-ms-flex-order: -1;
order: -1
}

.order-last {
-ms-flex-order: 13;
order: 13
}

.order-0 {
-ms-flex-order: 0;
order: 0
}

.order-1 {
-ms-flex-order: 1;
order: 1
}

.order-2 {
-ms-flex-order: 2;
order: 2
}

.order-3 {
-ms-flex-order: 3;
order: 3
}

.order-4 {
-ms-flex-order: 4;
order: 4
}

.order-5 {
-ms-flex-order: 5;
order: 5
}

.order-6 {
-ms-flex-order: 6;
order: 6
}

.order-7 {
-ms-flex-order: 7;
order: 7
}

.order-8 {
-ms-flex-order: 8;
order: 8
}

.order-9 {
-ms-flex-order: 9;
order: 9
}

.order-10 {
-ms-flex-order: 10;
order: 10
}

.order-11 {
-ms-flex-order: 11;
order: 11
}

.order-12 {
-ms-flex-order: 12;
order: 12
}



@media (min-width:576px) {
.order-sm-first {
-ms-flex-order: -1;
order: -1
}

.order-sm-last {
-ms-flex-order: 13;
order: 13
}

.order-sm-0 {
-ms-flex-order: 0;
order: 0
}

.order-sm-1 {
-ms-flex-order: 1;
order: 1
}

.order-sm-2 {
-ms-flex-order: 2;
order: 2
}

.order-sm-3 {
-ms-flex-order: 3;
order: 3
}

.order-sm-4 {
-ms-flex-order: 4;
order: 4
}

.order-sm-5 {
-ms-flex-order: 5;
order: 5
}

.order-sm-6 {
-ms-flex-order: 6;
order: 6
}

.order-sm-7 {
-ms-flex-order: 7;
order: 7
}

.order-sm-8 {
-ms-flex-order: 8;
order: 8
}

.order-sm-9 {
-ms-flex-order: 9;
order: 9
}

.order-sm-10 {
-ms-flex-order: 10;
order: 10
}

.order-sm-11 {
-ms-flex-order: 11;
order: 11
}

.order-sm-12 {
-ms-flex-order: 12;
order: 12
}}



@media (min-width:768px) {


.order-md-first {
-ms-flex-order: -1;
order: -1
}

.order-md-last {
-ms-flex-order: 13;
order: 13
}

.order-md-0 {
-ms-flex-order: 0;
order: 0
}

.order-md-1 {
-ms-flex-order: 1;
order: 1
}

.order-md-2 {
-ms-flex-order: 2;
order: 2
}

.order-md-3 {
-ms-flex-order: 3;
order: 3
}

.order-md-4 {
-ms-flex-order: 4;
order: 4
}

.order-md-5 {
-ms-flex-order: 5;
order: 5
}

.order-md-6 {
-ms-flex-order: 6;
order: 6
}

.order-md-7 {
-ms-flex-order: 7;
order: 7
}

.order-md-8 {
-ms-flex-order: 8;
order: 8
}

.order-md-9 {
-ms-flex-order: 9;
order: 9
}

.order-md-10 {
-ms-flex-order: 10;
order: 10
}

.order-md-11 {
-ms-flex-order: 11;
order: 11
}

.order-md-12 {
-ms-flex-order: 12;
order: 12
}
}


@media (min-width:992px) {


.order-lg-first {
-ms-flex-order: -1;
order: -1
}

.order-lg-last {
-ms-flex-order: 13;
order: 13
}

.order-lg-0 {
-ms-flex-order: 0;
order: 0
}

.order-lg-1 {
-ms-flex-order: 1;
order: 1
}

.order-lg-2 {
-ms-flex-order: 2;
order: 2
}

.order-lg-3 {
-ms-flex-order: 3;
order: 3
}

.order-lg-4 {
-ms-flex-order: 4;
order: 4
}

.order-lg-5 {
-ms-flex-order: 5;
order: 5
}

.order-lg-6 {
-ms-flex-order: 6;
order: 6
}

.order-lg-7 {
-ms-flex-order: 7;
order: 7
}

.order-lg-8 {
-ms-flex-order: 8;
order: 8
}

.order-lg-9 {
-ms-flex-order: 9;
order: 9
}

.order-lg-10 {
-ms-flex-order: 10;
order: 10
}

.order-lg-11 {
-ms-flex-order: 11;
order: 11
}

.order-lg-12 {
-ms-flex-order: 12;
order: 12
}
}


@media (min-width:1200px){
.order-xl-first {
-ms-flex-order: -1;
order: -1
}

.order-xl-last {
-ms-flex-order: 13;
order: 13
}

.order-xl-0 {
-ms-flex-order: 0;
order: 0
}

.order-xl-1 {
-ms-flex-order: 1;
order: 1
}

.order-xl-2 {
-ms-flex-order: 2;
order: 2
}

.order-xl-3 {
-ms-flex-order: 3;
order: 3
}

.order-xl-4 {
-ms-flex-order: 4;
order: 4
}

.order-xl-5 {
-ms-flex-order: 5;
order: 5
}

.order-xl-6 {
-ms-flex-order: 6;
order: 6
}

.order-xl-7 {
-ms-flex-order: 7;
order: 7
}

.order-xl-8 {
-ms-flex-order: 8;
order: 8
}

.order-xl-9 {
-ms-flex-order: 9;
order: 9
}

.order-xl-10 {
-ms-flex-order: 10;
order: 10
}

.order-xl-11 {
-ms-flex-order: 11;
order: 11
}

.order-xl-12 {
-ms-flex-order: 12;
order: 12
}
}
`,
  '.offset': `
.offset-1 {
margin-left: 8.333333%
}

.offset-2 {
margin-left: 16.666667%
}

.offset-3 {
margin-left: 25%
}

.offset-4 {
margin-left: 33.333333%
}

.offset-5 {
margin-left: 41.666667%
}

.offset-6 {
margin-left: 50%
}

.offset-7 {
margin-left: 58.333333%
}

.offset-8 {
margin-left: 66.666667%
}

.offset-9 {
margin-left: 75%
}

.offset-10 {
margin-left: 83.333333%
}

.offset-11 {
margin-left: 91.666667%
}



@media (min-width:576px) {

.offset-sm-0 {
margin-left: 0
}

.offset-sm-1 {
margin-left: 8.333333%
}

.offset-sm-2 {
margin-left: 16.666667%
}

.offset-sm-3 {
margin-left: 25%
}

.offset-sm-4 {
margin-left: 33.333333%
}

.offset-sm-5 {
margin-left: 41.666667%
}

.offset-sm-6 {
margin-left: 50%
}

.offset-sm-7 {
margin-left: 58.333333%
}

.offset-sm-8 {
margin-left: 66.666667%
}

.offset-sm-9 {
margin-left: 75%
}

.offset-sm-10 {
margin-left: 83.333333%
}

.offset-sm-11 {
margin-left: 91.666667%
}
}




@media (min-width:768px) {

.offset-md-0 {
margin-left: 0
}

.offset-md-1 {
margin-left: 8.333333%
}

.offset-md-2 {
margin-left: 16.666667%
}

.offset-md-3 {
margin-left: 25%
}

.offset-md-4 {
margin-left: 33.333333%
}

.offset-md-5 {
margin-left: 41.666667%
}

.offset-md-6 {
margin-left: 50%
}

.offset-md-7 {
margin-left: 58.333333%
}

.offset-md-8 {
margin-left: 66.666667%
}

.offset-md-9 {
margin-left: 75%
}

.offset-md-10 {
margin-left: 83.333333%
}

.offset-md-11 {
margin-left: 91.666667%
}
}



@media (min-width:992px) {

.offset-lg-0 {
margin-left: 0
}

.offset-lg-1 {
margin-left: 8.333333%
}

.offset-lg-2 {
margin-left: 16.666667%
}

.offset-lg-3 {
margin-left: 25%
}

.offset-lg-4 {
margin-left: 33.333333%
}

.offset-lg-5 {
margin-left: 41.666667%
}

.offset-lg-6 {
margin-left: 50%
}

.offset-lg-7 {
margin-left: 58.333333%
}

.offset-lg-8 {
margin-left: 66.666667%
}

.offset-lg-9 {
margin-left: 75%
}

.offset-lg-10 {
margin-left: 83.333333%
}

.offset-lg-11 {
margin-left: 91.666667%
}
}


@media (min-width:1200px) {

.offset-xl-0 {
margin-left: 0
}

.offset-xl-1 {
margin-left: 8.333333%
}

.offset-xl-2 {
margin-left: 16.666667%
}

.offset-xl-3 {
margin-left: 25%
}

.offset-xl-4 {
margin-left: 33.333333%
}

.offset-xl-5 {
margin-left: 41.666667%
}

.offset-xl-6 {
margin-left: 50%
}

.offset-xl-7 {
margin-left: 58.333333%
}

.offset-xl-8 {
margin-left: 66.666667%
}

.offset-xl-9 {
margin-left: 75%
}

.offset-xl-10 {
margin-left: 83.333333%
}

.offset-xl-11 {
margin-left: 91.666667%
}
}


`,

  '.table': `
.table {
width: 100%;
margin-bottom: 1rem;
background-color: transparent
}

.table td,
.table th {
padding: .75rem;
vertical-align: top;
border-top: 1px solid #dee2e6
}

.table thead th {
vertical-align: bottom;
border-bottom: 2px solid #dee2e6
}

.table tbody+tbody {
border-top: 2px solid #dee2e6
}

.table .table {
background-color: #fff
}

.table-sm td,
.table-sm th {
padding: .3rem
}

.table-bordered {
border: 1px solid #dee2e6
}

.table-bordered td,
.table-bordered th {
border: 1px solid #dee2e6
}

.table-bordered thead td,
.table-bordered thead th {
border-bottom-width: 2px
}

.table-borderless tbody+tbody,
.table-borderless td,
.table-borderless th,
.table-borderless thead th {
border: 0
}

.table-striped tbody tr:nth-of-type(odd) {
background-color: rgba(0, 0, 0, .05)
}

.table-hover tbody tr:hover {
background-color: rgba(0, 0, 0, .075)
}

.table-primary,
.table-primary>td,
.table-primary>th {
background-color: #b8daff
}

.table-primary tbody+tbody,
.table-primary td,
.table-primary th,
.table-primary thead th {
border-color: #7abaff
}

.table-hover .table-primary:hover {
background-color: #9fcdff
}

.table-hover .table-primary:hover>td,
.table-hover .table-primary:hover>th {
background-color: #9fcdff
}

.table-secondary,
.table-secondary>td,
.table-secondary>th {
background-color: #d6d8db
}

.table-secondary tbody+tbody,
.table-secondary td,
.table-secondary th,
.table-secondary thead th {
border-color: #b3b7bb
}

.table-hover .table-secondary:hover {
background-color: #c8cbcf
}

.table-hover .table-secondary:hover>td,
.table-hover .table-secondary:hover>th {
background-color: #c8cbcf
}

.table-success,
.table-success>td,
.table-success>th {
background-color: #c3e6cb
}

.table-success tbody+tbody,
.table-success td,
.table-success th,
.table-success thead th {
border-color: #8fd19e
}

.table-hover .table-success:hover {
background-color: #b1dfbb
}

.table-hover .table-success:hover>td,
.table-hover .table-success:hover>th {
background-color: #b1dfbb
}

.table-info,
.table-info>td,
.table-info>th {
background-color: #bee5eb
}

.table-info tbody+tbody,
.table-info td,
.table-info th,
.table-info thead th {
border-color: #86cfda
}

.table-hover .table-info:hover {
background-color: #abdde5
}

.table-hover .table-info:hover>td,
.table-hover .table-info:hover>th {
background-color: #abdde5
}

.table-warning,
.table-warning>td,
.table-warning>th {
background-color: #ffeeba
}

.table-warning tbody+tbody,
.table-warning td,
.table-warning th,
.table-warning thead th {
border-color: #ffdf7e
}

.table-hover .table-warning:hover {
background-color: #ffe8a1
}

.table-hover .table-warning:hover>td,
.table-hover .table-warning:hover>th {
background-color: #ffe8a1
}

.table-danger,
.table-danger>td,
.table-danger>th {
background-color: #f5c6cb
}

.table-danger tbody+tbody,
.table-danger td,
.table-danger th,
.table-danger thead th {
border-color: #ed969e
}

.table-hover .table-danger:hover {
background-color: #f1b0b7
}

.table-hover .table-danger:hover>td,
.table-hover .table-danger:hover>th {
background-color: #f1b0b7
}

.table-light,
.table-light>td,
.table-light>th {
background-color: #fdfdfe
}

.table-light tbody+tbody,
.table-light td,
.table-light th,
.table-light thead th {
border-color: #fbfcfc
}

.table-hover .table-light:hover {
background-color: #ececf6
}

.table-hover .table-light:hover>td,
.table-hover .table-light:hover>th {
background-color: #ececf6
}

.table-dark,
.table-dark>td,
.table-dark>th {
background-color: #c6c8ca
}

.table-dark tbody+tbody,
.table-dark td,
.table-dark th,
.table-dark thead th {
border-color: #95999c
}

.table-hover .table-dark:hover {
background-color: #b9bbbe
}

.table-hover .table-dark:hover>td,
.table-hover .table-dark:hover>th {
background-color: #b9bbbe
}

.table-active,
.table-active>td,
.table-active>th {
background-color: rgba(0, 0, 0, .075)
}

.table-hover .table-active:hover {
background-color: rgba(0, 0, 0, .075)
}

.table-hover .table-active:hover>td,
.table-hover .table-active:hover>th {
background-color: rgba(0, 0, 0, .075)
}

.table .thead-dark th {
color: #fff;
background-color: #212529;
border-color: #32383e
}

.table .thead-light th {
color: #495057;
background-color: #e9ecef;
border-color: #dee2e6
}

.table-dark {
color: #fff;
background-color: #212529
}

.table-dark td,
.table-dark th,
.table-dark thead th {
border-color: #32383e
}

.table-dark.table-bordered {
border: 0
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
background-color: rgba(255, 255, 255, .05)
}

.table-dark.table-hover tbody tr:hover {
background-color: rgba(255, 255, 255, .075)
}

@media (max-width:575.98px) {
.table-responsive-sm {
display: block;
width: 100%;
overflow-x: auto;
-webkit-overflow-scrolling: touch;
-ms-overflow-style: -ms-autohiding-scrollbar
}

.table-responsive-sm>.table-bordered {
border: 0
}
}

@media (max-width:767.98px) {
.table-responsive-md {
display: block;
width: 100%;
overflow-x: auto;
-webkit-overflow-scrolling: touch;
-ms-overflow-style: -ms-autohiding-scrollbar
}

.table-responsive-md>.table-bordered {
border: 0
}
}

@media (max-width:991.98px) {
.table-responsive-lg {
display: block;
width: 100%;
overflow-x: auto;
-webkit-overflow-scrolling: touch;
-ms-overflow-style: -ms-autohiding-scrollbar
}

.table-responsive-lg>.table-bordered {
border: 0
}
}

@media (max-width:1199.98px) {
.table-responsive-xl {
display: block;
width: 100%;
overflow-x: auto;
-webkit-overflow-scrolling: touch;
-ms-overflow-style: -ms-autohiding-scrollbar
}

.table-responsive-xl>.table-bordered {
border: 0
}
}

.table-responsive {
display: block;
width: 100%;
overflow-x: auto;
-webkit-overflow-scrolling: touch;
-ms-overflow-style: -ms-autohiding-scrollbar
}

.table-responsive>.table-bordered {
border: 0
}`,
  '.form-control': `


.form-control {
display: block;
width: 100%;
height: calc(2.25rem + 2px);
padding: .375rem .75rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #495057;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: .25rem;
transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media screen and (prefers-reduced-motion:reduce) {
.form-control {
transition: none
}
}

.form-control::-ms-expand {
background-color: transparent;
border: 0
}

.form-control:focus {
color: #495057;
background-color: #fff;
border-color: #80bdff;
outline: 0;
box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.form-control::-webkit-input-placeholder {
color: #6c757d;
opacity: 1
}

.form-control::-moz-placeholder {
color: #6c757d;
opacity: 1
}

.form-control:-ms-input-placeholder {
color: #6c757d;
opacity: 1
}

.form-control::-ms-input-placeholder {
color: #6c757d;
opacity: 1
}

.form-control::placeholder {
color: #6c757d;
opacity: 1
}

.form-control:disabled,
.form-control[readonly] {
background-color: #e9ecef;
opacity: 1
}

select.form-control:focus::-ms-value {
color: #495057;
background-color: #fff
}

.form-control-file,
.form-control-range {
display: block;
width: 100%
}

.col-form-label {
padding-top: calc(.375rem + 1px);
padding-bottom: calc(.375rem + 1px);
margin-bottom: 0;
font-size: inherit;
line-height: 1.5
}

.col-form-label-lg {
padding-top: calc(.5rem + 1px);
padding-bottom: calc(.5rem + 1px);
font-size: 1.25rem;
line-height: 1.5
}

.col-form-label-sm {
padding-top: calc(.25rem + 1px);
padding-bottom: calc(.25rem + 1px);
font-size: .875rem;
line-height: 1.5
}

.form-control-plaintext {
display: block;
width: 100%;
padding-top: .375rem;
padding-bottom: .375rem;
margin-bottom: 0;
line-height: 1.5;
color: #212529;
background-color: transparent;
border: solid transparent;
border-width: 1px 0
}

.form-control-plaintext.form-control-lg,
.form-control-plaintext.form-control-sm {
padding-right: 0;
padding-left: 0
}

.form-control-sm {
height: calc(1.8125rem + 2px);
padding: .25rem .5rem;
font-size: .875rem;
line-height: 1.5;
border-radius: .2rem
}

.form-control-lg {
height: calc(2.875rem + 2px);
padding: .5rem 1rem;
font-size: 1.25rem;
line-height: 1.5;
border-radius: .3rem
}

select.form-control[multiple],
select.form-control[size] {
height: auto
}

textarea.form-control {
height: auto
}

.form-group {
margin-bottom: 1rem
}

.form-text {
display: block;
margin-top: .25rem
}

.form-row {
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
margin-right: -5px;
margin-left: -5px
}

.form-row>.col,
.form-row>[class*=col-] {
padding-right: 5px;
padding-left: 5px
}

.form-check {
position: relative;
display: block;
padding-left: 1.25rem
}

.form-check-input {
position: absolute;
margin-top: .3rem;
margin-left: -1.25rem
}

.form-check-input:disabled~.form-check-label {
color: #6c757d
}

.form-check-label {
margin-bottom: 0
}

.form-check-inline {
display: -ms-inline-flexbox;
display: inline-flex;
-ms-flex-align: center;
align-items: center;
padding-left: 0;
margin-right: .75rem
}

.form-check-inline .form-check-input {
position: static;
margin-top: 0;
margin-right: .3125rem;
margin-left: 0
}

.valid-feedback {
display: none;
width: 100%;
margin-top: .25rem;
font-size: 80%;
color: #28a745
}

.valid-tooltip {
position: absolute;
top: 100%;
z-index: 5;
display: none;
max-width: 100%;
padding: .25rem .5rem;
margin-top: .1rem;
font-size: .875rem;
line-height: 1.5;
color: #fff;
background-color: rgba(40, 167, 69, .9);
border-radius: .25rem
}

.form-control.is-valid,
.was-validated .form-control:valid {
border-color: #28a745;
padding-right: 2.25rem;
background-repeat: no-repeat;
background-position: center right calc(2.25rem / 4);
background-size: calc(2.25rem / 2) calc(2.25rem / 2);
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")
}

.form-control.is-valid:focus,
.was-validated .form-control:valid:focus {
border-color: #28a745;
box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .25)
}

.form-control.is-valid~.valid-feedback,
.form-control.is-valid~.valid-tooltip,
.was-validated .form-control:valid~.valid-feedback,
.was-validated .form-control:valid~.valid-tooltip {
display: block
}

.was-validated textarea.form-control:valid,
textarea.form-control.is-valid {
padding-right: 2.25rem;
background-position: top calc(2.25rem / 4) right calc(2.25rem / 4)
}

.custom-select.is-valid,
.was-validated .custom-select:valid {
border-color: #28a745;
padding-right: 3.4375rem;
background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e") no-repeat center right 1.75rem/1.125rem 1.125rem
}

.custom-select.is-valid:focus,
.was-validated .custom-select:valid:focus {
border-color: #28a745;
box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .25)
}

.custom-select.is-valid~.valid-feedback,
.custom-select.is-valid~.valid-tooltip,
.was-validated .custom-select:valid~.valid-feedback,
.was-validated .custom-select:valid~.valid-tooltip {
display: block
}

.form-control-file.is-valid~.valid-feedback,
.form-control-file.is-valid~.valid-tooltip,
.was-validated .form-control-file:valid~.valid-feedback,
.was-validated .form-control-file:valid~.valid-tooltip {
display: block
}

.form-check-input.is-valid~.form-check-label,
.was-validated .form-check-input:valid~.form-check-label {
color: #28a745
}

.form-check-input.is-valid~.valid-feedback,
.form-check-input.is-valid~.valid-tooltip,
.was-validated .form-check-input:valid~.valid-feedback,
.was-validated .form-check-input:valid~.valid-tooltip {
display: block
}

.custom-control-input.is-valid~.custom-control-label,
.was-validated .custom-control-input:valid~.custom-control-label {
color: #28a745
}

.custom-control-input.is-valid~.custom-control-label::before,
.was-validated .custom-control-input:valid~.custom-control-label::before {
border-color: #28a745
}

.custom-control-input.is-valid~.valid-feedback,
.custom-control-input.is-valid~.valid-tooltip,
.was-validated .custom-control-input:valid~.valid-feedback,
.was-validated .custom-control-input:valid~.valid-tooltip {
display: block
}

.custom-control-input.is-valid:checked~.custom-control-label::before,
.was-validated .custom-control-input:valid:checked~.custom-control-label::before {
border-color: #34ce57;
background-color: #34ce57
}

.custom-control-input.is-valid:focus~.custom-control-label::before,
.was-validated .custom-control-input:valid:focus~.custom-control-label::before {
box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .25)
}

.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before,
.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before {
border-color: #28a745
}

.custom-file-input.is-valid~.custom-file-label,
.was-validated .custom-file-input:valid~.custom-file-label {
border-color: #28a745
}

.custom-file-input.is-valid~.valid-feedback,
.custom-file-input.is-valid~.valid-tooltip,
.was-validated .custom-file-input:valid~.valid-feedback,
.was-validated .custom-file-input:valid~.valid-tooltip {
display: block
}

.custom-file-input.is-valid:focus~.custom-file-label,
.was-validated .custom-file-input:valid:focus~.custom-file-label {
border-color: #28a745;
box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .25)
}

.invalid-feedback {
display: none;
width: 100%;
margin-top: .25rem;
font-size: 80%;
color: #dc3545
}

.invalid-tooltip {
position: absolute;
top: 100%;
z-index: 5;
display: none;
max-width: 100%;
padding: .25rem .5rem;
margin-top: .1rem;
font-size: .875rem;
line-height: 1.5;
color: #fff;
background-color: rgba(220, 53, 69, .9);
border-radius: .25rem
}

.form-control.is-invalid,
.was-validated .form-control:invalid {
border-color: #dc3545;
padding-right: 2.25rem;
background-repeat: no-repeat;
background-position: center right calc(2.25rem / 4);
background-size: calc(2.25rem / 2) calc(2.25rem / 2);
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E")
}

.form-control.is-invalid:focus,
.was-validated .form-control:invalid:focus {
border-color: #dc3545;
box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .25)
}

.form-control.is-invalid~.invalid-feedback,
.form-control.is-invalid~.invalid-tooltip,
.was-validated .form-control:invalid~.invalid-feedback,
.was-validated .form-control:invalid~.invalid-tooltip {
display: block
}

.was-validated textarea.form-control:invalid,
textarea.form-control.is-invalid {
padding-right: 2.25rem;
background-position: top calc(2.25rem / 4) right calc(2.25rem / 4)
}

.custom-select.is-invalid,
.was-validated .custom-select:invalid {
border-color: #dc3545;
padding-right: 3.4375rem;
background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E") no-repeat center right 1.75rem/1.125rem 1.125rem
}

.custom-select.is-invalid:focus,
.was-validated .custom-select:invalid:focus {
border-color: #dc3545;
box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .25)
}

.custom-select.is-invalid~.invalid-feedback,
.custom-select.is-invalid~.invalid-tooltip,
.was-validated .custom-select:invalid~.invalid-feedback,
.was-validated .custom-select:invalid~.invalid-tooltip {
display: block
}

.form-control-file.is-invalid~.invalid-feedback,
.form-control-file.is-invalid~.invalid-tooltip,
.was-validated .form-control-file:invalid~.invalid-feedback,
.was-validated .form-control-file:invalid~.invalid-tooltip {
display: block
}

.form-check-input.is-invalid~.form-check-label,
.was-validated .form-check-input:invalid~.form-check-label {
color: #dc3545
}

.form-check-input.is-invalid~.invalid-feedback,
.form-check-input.is-invalid~.invalid-tooltip,
.was-validated .form-check-input:invalid~.invalid-feedback,
.was-validated .form-check-input:invalid~.invalid-tooltip {
display: block
}

.custom-control-input.is-invalid~.custom-control-label,
.was-validated .custom-control-input:invalid~.custom-control-label {
color: #dc3545
}

.custom-control-input.is-invalid~.custom-control-label::before,
.was-validated .custom-control-input:invalid~.custom-control-label::before {
border-color: #dc3545
}

.custom-control-input.is-invalid~.invalid-feedback,
.custom-control-input.is-invalid~.invalid-tooltip,
.was-validated .custom-control-input:invalid~.invalid-feedback,
.was-validated .custom-control-input:invalid~.invalid-tooltip {
display: block
}

.custom-control-input.is-invalid:checked~.custom-control-label::before,
.was-validated .custom-control-input:invalid:checked~.custom-control-label::before {
border-color: #e4606d;
background-color: #e4606d
}

.custom-control-input.is-invalid:focus~.custom-control-label::before,
.was-validated .custom-control-input:invalid:focus~.custom-control-label::before {
box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .25)
}

.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before,
.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before {
border-color: #dc3545
}

.custom-file-input.is-invalid~.custom-file-label,
.was-validated .custom-file-input:invalid~.custom-file-label {
border-color: #dc3545
}

.custom-file-input.is-invalid~.invalid-feedback,
.custom-file-input.is-invalid~.invalid-tooltip,
.was-validated .custom-file-input:invalid~.invalid-feedback,
.was-validated .custom-file-input:invalid~.invalid-tooltip {
display: block
}

.custom-file-input.is-invalid:focus~.custom-file-label,
.was-validated .custom-file-input:invalid:focus~.custom-file-label {
border-color: #dc3545;
box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .25)
}

.form-inline {
display: -ms-flexbox;
display: flex;
-ms-flex-flow: row wrap;
flex-flow: row wrap;
-ms-flex-align: center;
align-items: center
}

.form-inline .form-check {
width: 100%
}

@media (min-width:576px) {
.form-inline label {
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: center;
justify-content: center;
margin-bottom: 0
}

.form-inline .form-group {
display: -ms-flexbox;
display: flex;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
-ms-flex-flow: row wrap;
flex-flow: row wrap;
-ms-flex-align: center;
align-items: center;
margin-bottom: 0
}

.form-inline .form-control {
display: inline-block;
width: auto;
vertical-align: middle
}

.form-inline .form-control-plaintext {
display: inline-block
}

.form-inline .custom-select,
.form-inline .input-group {
width: auto
}

.form-inline .form-check {
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: center;
justify-content: center;
width: auto;
padding-left: 0
}

.form-inline .form-check-input {
position: relative;
margin-top: 0;
margin-right: .25rem;
margin-left: 0
}

.form-inline .custom-control {
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: center;
justify-content: center
}

.form-inline .custom-control-label {
margin-bottom: 0
}
}
`,
  '.btn': `
.btn {
display: inline-block;
font-weight: 400;
color: #212529;
text-align: center;
vertical-align: middle;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: transparent;
border: 1px solid transparent;
padding: .375rem .75rem;
font-size: 1rem;
line-height: 1.5;
border-radius: .25rem;
transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media screen and (prefers-reduced-motion:reduce) {
.btn {
transition: none
}
}

.btn:hover {
color: #212529;
text-decoration: none
}

.btn.focus,
.btn:focus {
outline: 0;
box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.btn.disabled,
.btn:disabled {
opacity: .65
}

.btn:not(:disabled):not(.disabled) {
cursor: pointer
}

a.btn.disabled,
fieldset:disabled a.btn {
pointer-events: none
}

.btn-primary {
color: #fff;
background-color: #007bff;
border-color: #007bff
}

.btn-primary:hover {
color: #fff;
background-color: #0069d9;
border-color: #0062cc
}

.btn-primary.focus,
.btn-primary:focus {
box-shadow: 0 0 0 .2rem rgba(38, 143, 255, .5)
}

.btn-primary.disabled,
.btn-primary:disabled {
color: #fff;
background-color: #007bff;
border-color: #007bff
}

.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show>.btn-primary.dropdown-toggle {
color: #fff;
background-color: #0062cc;
border-color: #005cbf
}

.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show>.btn-primary.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(38, 143, 255, .5)
}

.btn-secondary {
color: #fff;
background-color: #6c757d;
border-color: #6c757d
}

.btn-secondary:hover {
color: #fff;
background-color: #5a6268;
border-color: #545b62
}

.btn-secondary.focus,
.btn-secondary:focus {
box-shadow: 0 0 0 .2rem rgba(130, 138, 145, .5)
}

.btn-secondary.disabled,
.btn-secondary:disabled {
color: #fff;
background-color: #6c757d;
border-color: #6c757d
}

.btn-secondary:not(:disabled):not(.disabled).active,
.btn-secondary:not(:disabled):not(.disabled):active,
.show>.btn-secondary.dropdown-toggle {
color: #fff;
background-color: #545b62;
border-color: #4e555b
}

.btn-secondary:not(:disabled):not(.disabled).active:focus,
.btn-secondary:not(:disabled):not(.disabled):active:focus,
.show>.btn-secondary.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(130, 138, 145, .5)
}

.btn-success {
color: #fff;
background-color: #28a745;
border-color: #28a745
}

.btn-success:hover {
color: #fff;
background-color: #218838;
border-color: #1e7e34
}

.btn-success.focus,
.btn-success:focus {
box-shadow: 0 0 0 .2rem rgba(72, 180, 97, .5)
}

.btn-success.disabled,
.btn-success:disabled {
color: #fff;
background-color: #28a745;
border-color: #28a745
}

.btn-success:not(:disabled):not(.disabled).active,
.btn-success:not(:disabled):not(.disabled):active,
.show>.btn-success.dropdown-toggle {
color: #fff;
background-color: #1e7e34;
border-color: #1c7430
}

.btn-success:not(:disabled):not(.disabled).active:focus,
.btn-success:not(:disabled):not(.disabled):active:focus,
.show>.btn-success.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(72, 180, 97, .5)
}

.btn-info {
color: #fff;
background-color: #17a2b8;
border-color: #17a2b8
}

.btn-info:hover {
color: #fff;
background-color: #138496;
border-color: #117a8b
}

.btn-info.focus,
.btn-info:focus {
box-shadow: 0 0 0 .2rem rgba(58, 176, 195, .5)
}

.btn-info.disabled,
.btn-info:disabled {
color: #fff;
background-color: #17a2b8;
border-color: #17a2b8
}

.btn-info:not(:disabled):not(.disabled).active,
.btn-info:not(:disabled):not(.disabled):active,
.show>.btn-info.dropdown-toggle {
color: #fff;
background-color: #117a8b;
border-color: #10707f
}

.btn-info:not(:disabled):not(.disabled).active:focus,
.btn-info:not(:disabled):not(.disabled):active:focus,
.show>.btn-info.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(58, 176, 195, .5)
}

.btn-warning {
color: #212529;
background-color: #ffc107;
border-color: #ffc107
}

.btn-warning:hover {
color: #212529;
background-color: #e0a800;
border-color: #d39e00
}

.btn-warning.focus,
.btn-warning:focus {
box-shadow: 0 0 0 .2rem rgba(222, 170, 12, .5)
}

.btn-warning.disabled,
.btn-warning:disabled {
color: #212529;
background-color: #ffc107;
border-color: #ffc107
}

.btn-warning:not(:disabled):not(.disabled).active,
.btn-warning:not(:disabled):not(.disabled):active,
.show>.btn-warning.dropdown-toggle {
color: #212529;
background-color: #d39e00;
border-color: #c69500
}

.btn-warning:not(:disabled):not(.disabled).active:focus,
.btn-warning:not(:disabled):not(.disabled):active:focus,
.show>.btn-warning.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(222, 170, 12, .5)
}

.btn-danger {
color: #fff;
background-color: #dc3545;
border-color: #dc3545
}

.btn-danger:hover {
color: #fff;
background-color: #c82333;
border-color: #bd2130
}

.btn-danger.focus,
.btn-danger:focus {
box-shadow: 0 0 0 .2rem rgba(225, 83, 97, .5)
}

.btn-danger.disabled,
.btn-danger:disabled {
color: #fff;
background-color: #dc3545;
border-color: #dc3545
}

.btn-danger:not(:disabled):not(.disabled).active,
.btn-danger:not(:disabled):not(.disabled):active,
.show>.btn-danger.dropdown-toggle {
color: #fff;
background-color: #bd2130;
border-color: #b21f2d
}

.btn-danger:not(:disabled):not(.disabled).active:focus,
.btn-danger:not(:disabled):not(.disabled):active:focus,
.show>.btn-danger.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(225, 83, 97, .5)
}

.btn-light {
color: #212529;
background-color: #f8f9fa;
border-color: #f8f9fa
}

.btn-light:hover {
color: #212529;
background-color: #e2e6ea;
border-color: #dae0e5
}

.btn-light.focus,
.btn-light:focus {
box-shadow: 0 0 0 .2rem rgba(216, 217, 219, .5)
}

.btn-light.disabled,
.btn-light:disabled {
color: #212529;
background-color: #f8f9fa;
border-color: #f8f9fa
}

.btn-light:not(:disabled):not(.disabled).active,
.btn-light:not(:disabled):not(.disabled):active,
.show>.btn-light.dropdown-toggle {
color: #212529;
background-color: #dae0e5;
border-color: #d3d9df
}

.btn-light:not(:disabled):not(.disabled).active:focus,
.btn-light:not(:disabled):not(.disabled):active:focus,
.show>.btn-light.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(216, 217, 219, .5)
}

.btn-dark {
color: #fff;
background-color: #343a40;
border-color: #343a40
}

.btn-dark:hover {
color: #fff;
background-color: #23272b;
border-color: #1d2124
}

.btn-dark.focus,
.btn-dark:focus {
box-shadow: 0 0 0 .2rem rgba(82, 88, 93, .5)
}

.btn-dark.disabled,
.btn-dark:disabled {
color: #fff;
background-color: #343a40;
border-color: #343a40
}

.btn-dark:not(:disabled):not(.disabled).active,
.btn-dark:not(:disabled):not(.disabled):active,
.show>.btn-dark.dropdown-toggle {
color: #fff;
background-color: #1d2124;
border-color: #171a1d
}

.btn-dark:not(:disabled):not(.disabled).active:focus,
.btn-dark:not(:disabled):not(.disabled):active:focus,
.show>.btn-dark.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(82, 88, 93, .5)
}

.btn-outline-primary {
color: #007bff;
border-color: #007bff
}

.btn-outline-primary:hover {
color: #fff;
background-color: #007bff;
border-color: #007bff
}

.btn-outline-primary.focus,
.btn-outline-primary:focus {
box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .5)
}

.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
color: #007bff;
background-color: transparent
}

.btn-outline-primary:not(:disabled):not(.disabled).active,
.btn-outline-primary:not(:disabled):not(.disabled):active,
.show>.btn-outline-primary.dropdown-toggle {
color: #fff;
background-color: #007bff;
border-color: #007bff
}

.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-primary.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .5)
}

.btn-outline-secondary {
color: #6c757d;
border-color: #6c757d
}

.btn-outline-secondary:hover {
color: #fff;
background-color: #6c757d;
border-color: #6c757d
}

.btn-outline-secondary.focus,
.btn-outline-secondary:focus {
box-shadow: 0 0 0 .2rem rgba(108, 117, 125, .5)
}

.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
color: #6c757d;
background-color: transparent
}

.btn-outline-secondary:not(:disabled):not(.disabled).active,
.btn-outline-secondary:not(:disabled):not(.disabled):active,
.show>.btn-outline-secondary.dropdown-toggle {
color: #fff;
background-color: #6c757d;
border-color: #6c757d
}

.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-secondary.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(108, 117, 125, .5)
}

.btn-outline-success {
color: #28a745;
border-color: #28a745
}

.btn-outline-success:hover {
color: #fff;
background-color: #28a745;
border-color: #28a745
}

.btn-outline-success.focus,
.btn-outline-success:focus {
box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .5)
}

.btn-outline-success.disabled,
.btn-outline-success:disabled {
color: #28a745;
background-color: transparent
}

.btn-outline-success:not(:disabled):not(.disabled).active,
.btn-outline-success:not(:disabled):not(.disabled):active,
.show>.btn-outline-success.dropdown-toggle {
color: #fff;
background-color: #28a745;
border-color: #28a745
}

.btn-outline-success:not(:disabled):not(.disabled).active:focus,
.btn-outline-success:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-success.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .5)
}

.btn-outline-info {
color: #17a2b8;
border-color: #17a2b8
}

.btn-outline-info:hover {
color: #fff;
background-color: #17a2b8;
border-color: #17a2b8
}

.btn-outline-info.focus,
.btn-outline-info:focus {
box-shadow: 0 0 0 .2rem rgba(23, 162, 184, .5)
}

.btn-outline-info.disabled,
.btn-outline-info:disabled {
color: #17a2b8;
background-color: transparent
}

.btn-outline-info:not(:disabled):not(.disabled).active,
.btn-outline-info:not(:disabled):not(.disabled):active,
.show>.btn-outline-info.dropdown-toggle {
color: #fff;
background-color: #17a2b8;
border-color: #17a2b8
}

.btn-outline-info:not(:disabled):not(.disabled).active:focus,
.btn-outline-info:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-info.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(23, 162, 184, .5)
}

.btn-outline-warning {
color: #ffc107;
border-color: #ffc107
}

.btn-outline-warning:hover {
color: #212529;
background-color: #ffc107;
border-color: #ffc107
}

.btn-outline-warning.focus,
.btn-outline-warning:focus {
box-shadow: 0 0 0 .2rem rgba(255, 193, 7, .5)
}

.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
color: #ffc107;
background-color: transparent
}

.btn-outline-warning:not(:disabled):not(.disabled).active,
.btn-outline-warning:not(:disabled):not(.disabled):active,
.show>.btn-outline-warning.dropdown-toggle {
color: #212529;
background-color: #ffc107;
border-color: #ffc107
}

.btn-outline-warning:not(:disabled):not(.disabled).active:focus,
.btn-outline-warning:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-warning.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(255, 193, 7, .5)
}

.btn-outline-danger {
color: #dc3545;
border-color: #dc3545
}

.btn-outline-danger:hover {
color: #fff;
background-color: #dc3545;
border-color: #dc3545
}

.btn-outline-danger.focus,
.btn-outline-danger:focus {
box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .5)
}

.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
color: #dc3545;
background-color: transparent
}

.btn-outline-danger:not(:disabled):not(.disabled).active,
.btn-outline-danger:not(:disabled):not(.disabled):active,
.show>.btn-outline-danger.dropdown-toggle {
color: #fff;
background-color: #dc3545;
border-color: #dc3545
}

.btn-outline-danger:not(:disabled):not(.disabled).active:focus,
.btn-outline-danger:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-danger.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .5)
}

.btn-outline-light {
color: #f8f9fa;
border-color: #f8f9fa
}

.btn-outline-light:hover {
color: #212529;
background-color: #f8f9fa;
border-color: #f8f9fa
}

.btn-outline-light.focus,
.btn-outline-light:focus {
box-shadow: 0 0 0 .2rem rgba(248, 249, 250, .5)
}

.btn-outline-light.disabled,
.btn-outline-light:disabled {
color: #f8f9fa;
background-color: transparent
}

.btn-outline-light:not(:disabled):not(.disabled).active,
.btn-outline-light:not(:disabled):not(.disabled):active,
.show>.btn-outline-light.dropdown-toggle {
color: #212529;
background-color: #f8f9fa;
border-color: #f8f9fa
}

.btn-outline-light:not(:disabled):not(.disabled).active:focus,
.btn-outline-light:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-light.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(248, 249, 250, .5)
}

.btn-outline-dark {
color: #343a40;
border-color: #343a40
}

.btn-outline-dark:hover {
color: #fff;
background-color: #343a40;
border-color: #343a40
}

.btn-outline-dark.focus,
.btn-outline-dark:focus {
box-shadow: 0 0 0 .2rem rgba(52, 58, 64, .5)
}

.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
color: #343a40;
background-color: transparent
}

.btn-outline-dark:not(:disabled):not(.disabled).active,
.btn-outline-dark:not(:disabled):not(.disabled):active,
.show>.btn-outline-dark.dropdown-toggle {
color: #fff;
background-color: #343a40;
border-color: #343a40
}

.btn-outline-dark:not(:disabled):not(.disabled).active:focus,
.btn-outline-dark:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-dark.dropdown-toggle:focus {
box-shadow: 0 0 0 .2rem rgba(52, 58, 64, .5)
}

.btn-link {
font-weight: 400;
color: #007bff
}

.btn-link:hover {
color: #0056b3;
text-decoration: underline
}

.btn-link.focus,
.btn-link:focus {
text-decoration: underline;
box-shadow: none
}

.btn-link.disabled,
.btn-link:disabled {
color: #6c757d;
pointer-events: none
}

.btn-group-lg>.btn,
.btn-lg {
padding: .5rem 1rem;
font-size: 1.25rem;
line-height: 1.5;
border-radius: .3rem
}

.btn-group-sm>.btn,
.btn-sm {
padding: .25rem .5rem;
font-size: .875rem;
line-height: 1.5;
border-radius: .2rem
}

.btn-block {
display: block;
width: 100%
}

.btn-block+.btn-block {
margin-top: .5rem
}



input[type=button].btn-block,
input[type=reset].btn-block,
input[type=submit].btn-block {
width: 100%
}`,

  '.drop': `
.dropdown,
.dropleft,
.dropright,
.dropup {
position: relative
}

.dropdown-toggle::after {
display: inline-block;
margin-left: .255em;
vertical-align: .255em;
content: "";
border-top: .3em solid;
border-right: .3em solid transparent;
border-bottom: 0;
border-left: .3em solid transparent
}

.dropdown-toggle:empty::after {
margin-left: 0
}

.dropdown-menu {
position: absolute;
top: 100%;
left: 0;
z-index: 1000;
display: none;
float: left;
min-width: 10rem;
padding: .5rem 0;
margin: .125rem 0 0;
font-size: 1rem;
color: #212529;
text-align: left;
list-style: none;
background-color: #fff;
background-clip: padding-box;
border: 1px solid rgba(0, 0, 0, .15);
border-radius: .25rem
}

.dropdown-menu-right {
right: 0;
left: auto
}

@media (min-width:576px) {
.dropdown-menu-sm-right {
right: 0;
left: auto
}
}

@media (min-width:768px) {
.dropdown-menu-md-right {
right: 0;
left: auto
}
}

@media (min-width:992px) {
.dropdown-menu-lg-right {
right: 0;
left: auto
}
}

@media (min-width:1200px) {
.dropdown-menu-xl-right {
right: 0;
left: auto
}
}

.dropdown-menu-left {
right: auto;
left: 0
}

@media (min-width:576px) {
.dropdown-menu-sm-left {
right: auto;
left: 0
}
}

@media (min-width:768px) {
.dropdown-menu-md-left {
right: auto;
left: 0
}
}

@media (min-width:992px) {
.dropdown-menu-lg-left {
right: auto;
left: 0
}
}

@media (min-width:1200px) {
.dropdown-menu-xl-left {
right: auto;
left: 0
}
}

.dropup .dropdown-menu {
top: auto;
bottom: 100%;
margin-top: 0;
margin-bottom: .125rem
}

.dropup .dropdown-toggle::after {
display: inline-block;
margin-left: .255em;
vertical-align: .255em;
content: "";
border-top: 0;
border-right: .3em solid transparent;
border-bottom: .3em solid;
border-left: .3em solid transparent
}

.dropup .dropdown-toggle:empty::after {
margin-left: 0
}

.dropright .dropdown-menu {
top: 0;
right: auto;
left: 100%;
margin-top: 0;
margin-left: .125rem
}

.dropright .dropdown-toggle::after {
display: inline-block;
margin-left: .255em;
vertical-align: .255em;
content: "";
border-top: .3em solid transparent;
border-right: 0;
border-bottom: .3em solid transparent;
border-left: .3em solid
}

.dropright .dropdown-toggle:empty::after {
margin-left: 0
}

.dropright .dropdown-toggle::after {
vertical-align: 0
}

.dropleft .dropdown-menu {
top: 0;
right: 100%;
left: auto;
margin-top: 0;
margin-right: .125rem
}

.dropleft .dropdown-toggle::after {
display: inline-block;
margin-left: .255em;
vertical-align: .255em;
content: ""
}

.dropleft .dropdown-toggle::after {
display: none
}

.dropleft .dropdown-toggle::before {
display: inline-block;
margin-right: .255em;
vertical-align: .255em;
content: "";
border-top: .3em solid transparent;
border-right: .3em solid;
border-bottom: .3em solid transparent
}

.dropleft .dropdown-toggle:empty::after {
margin-left: 0
}

.dropleft .dropdown-toggle::before {
vertical-align: 0
}

.dropdown-menu[x-placement^=bottom],
.dropdown-menu[x-placement^=left],
.dropdown-menu[x-placement^=right],
.dropdown-menu[x-placement^=top] {
right: auto;
bottom: auto
}

.dropdown-divider {
height: 0;
margin: .5rem 0;
overflow: hidden;
border-top: 1px solid #e9ecef
}

.dropdown-item {
display: block;
width: 100%;
padding: .25rem 1.5rem;
clear: both;
font-weight: 400;
color: #212529;
text-align: inherit;
white-space: nowrap;
background-color: transparent;
border: 0
}

.dropdown-item:first-child {
border-top-left-radius: calc(.25rem - 1px);
border-top-right-radius: calc(.25rem - 1px)
}

.dropdown-item:last-child {
border-bottom-right-radius: calc(.25rem - 1px);
border-bottom-left-radius: calc(.25rem - 1px)
}

.dropdown-item:focus,
.dropdown-item:hover {
color: #16181b;
text-decoration: none;
background-color: #f8f9fa
}

.dropdown-item.active,
.dropdown-item:active {
color: #fff;
text-decoration: none;
background-color: #007bff
}

.dropdown-item.disabled,
.dropdown-item:disabled {
color: #6c757d;
pointer-events: none;
background-color: transparent
}

.dropdown-menu.show {
display: block
}

.dropdown-header {
display: block;
padding: .5rem 1.5rem;
margin-bottom: 0;
font-size: .875rem;
color: #6c757d;
white-space: nowrap
}

.dropdown-item-text {
display: block;
padding: .25rem 1.5rem;
color: #212529
}
`,

  '.btn-group': `
.btn-group,
.btn-group-vertical {
position: relative;
display: -ms-inline-flexbox;
display: inline-flex;
vertical-align: middle
}

.btn-group-vertical>.btn,
.btn-group>.btn {
position: relative;
-ms-flex: 1 1 auto;
flex: 1 1 auto
}

.btn-group-vertical>.btn:hover,
.btn-group>.btn:hover {
z-index: 1
}

.btn-group-vertical>.btn.active,
.btn-group-vertical>.btn:active,
.btn-group-vertical>.btn:focus,
.btn-group>.btn.active,
.btn-group>.btn:active,
.btn-group>.btn:focus {
z-index: 1
}

.btn-toolbar {
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-ms-flex-pack: start;
justify-content: flex-start
}

.btn-toolbar .input-group {
width: auto
}

.btn-group>.btn-group:not(:first-child),
.btn-group>.btn:not(:first-child) {
margin-left: -1px
}

.btn-group>.btn-group:not(:last-child)>.btn,
.btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
border-top-right-radius: 0;
border-bottom-right-radius: 0
}

.btn-group>.btn-group:not(:first-child)>.btn,
.btn-group>.btn:not(:first-child) {
border-top-left-radius: 0;
border-bottom-left-radius: 0
}

.dropdown-toggle-split {
padding-right: .5625rem;
padding-left: .5625rem
}

.dropdown-toggle-split::after,
.dropright .dropdown-toggle-split::after,
.dropup .dropdown-toggle-split::after {
margin-left: 0
}

.dropleft .dropdown-toggle-split::before {
margin-right: 0
}

.btn-group-sm>.btn+.dropdown-toggle-split,
.btn-sm+.dropdown-toggle-split {
padding-right: .375rem;
padding-left: .375rem
}

.btn-group-lg>.btn+.dropdown-toggle-split,
.btn-lg+.dropdown-toggle-split {
padding-right: .75rem;
padding-left: .75rem
}

.btn-group-vertical {
-ms-flex-direction: column;
flex-direction: column;
-ms-flex-align: start;
align-items: flex-start;
-ms-flex-pack: center;
justify-content: center
}

.btn-group-vertical>.btn,
.btn-group-vertical>.btn-group {
width: 100%
}

.btn-group-vertical>.btn-group:not(:first-child),
.btn-group-vertical>.btn:not(:first-child) {
margin-top: -1px
}

.btn-group-vertical>.btn-group:not(:last-child)>.btn,
.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle) {
border-bottom-right-radius: 0;
border-bottom-left-radius: 0
}

.btn-group-vertical>.btn-group:not(:first-child)>.btn,
.btn-group-vertical>.btn:not(:first-child) {
border-top-left-radius: 0;
border-top-right-radius: 0
}

.btn-group-toggle>.btn,
.btn-group-toggle>.btn-group>.btn {
margin-bottom: 0
}

.btn-group-toggle>.btn input[type=checkbox],
.btn-group-toggle>.btn input[type=radio],
.btn-group-toggle>.btn-group>.btn input[type=checkbox],
.btn-group-toggle>.btn-group>.btn input[type=radio] {
position: absolute;
clip: rect(0, 0, 0, 0);
pointer-events: none
}
`,
  '.input-group': `
.input-group {
position: relative;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-ms-flex-align: stretch;
align-items: stretch;
width: 100%
}

.input-group>.custom-file,
.input-group>.custom-select,
.input-group>.form-control,
.input-group>.form-control-plaintext {
position: relative;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
width: 1%;
margin-bottom: 0
}

.input-group>.custom-file+.custom-file,
.input-group>.custom-file+.custom-select,
.input-group>.custom-file+.form-control,
.input-group>.custom-select+.custom-file,
.input-group>.custom-select+.custom-select,
.input-group>.custom-select+.form-control,
.input-group>.form-control+.custom-file,
.input-group>.form-control+.custom-select,
.input-group>.form-control+.form-control,
.input-group>.form-control-plaintext+.custom-file,
.input-group>.form-control-plaintext+.custom-select,
.input-group>.form-control-plaintext+.form-control {
margin-left: -1px
}

.input-group>.custom-file .custom-file-input:focus~.custom-file-label,
.input-group>.custom-select:focus,
.input-group>.form-control:focus {
z-index: 3
}

.input-group>.custom-file .custom-file-input:focus {
z-index: 4
}

.input-group>.custom-select:not(:last-child),
.input-group>.form-control:not(:last-child) {
border-top-right-radius: 0;
border-bottom-right-radius: 0
}

.input-group>.custom-select:not(:first-child),
.input-group>.form-control:not(:first-child) {
border-top-left-radius: 0;
border-bottom-left-radius: 0
}

.input-group>.custom-file {
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center
}

.input-group>.custom-file:not(:last-child) .custom-file-label,
.input-group>.custom-file:not(:last-child) .custom-file-label::after {
border-top-right-radius: 0;
border-bottom-right-radius: 0
}

.input-group>.custom-file:not(:first-child) .custom-file-label {
border-top-left-radius: 0;
border-bottom-left-radius: 0
}

.input-group-append,
.input-group-prepend {
display: -ms-flexbox;
display: flex
}

.input-group-append .btn,
.input-group-prepend .btn {
position: relative;
z-index: 2
}

.input-group-append .btn:focus,
.input-group-prepend .btn:focus {
z-index: 3
}

.input-group-append .btn+.btn,
.input-group-append .btn+.input-group-text,
.input-group-append .input-group-text+.btn,
.input-group-append .input-group-text+.input-group-text,
.input-group-prepend .btn+.btn,
.input-group-prepend .btn+.input-group-text,
.input-group-prepend .input-group-text+.btn,
.input-group-prepend .input-group-text+.input-group-text {
margin-left: -1px
}

.input-group-prepend {
margin-right: -1px
}

.input-group-append {
margin-left: -1px
}

.input-group-text {
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
padding: .375rem .75rem;
margin-bottom: 0;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #495057;
text-align: center;
white-space: nowrap;
background-color: #e9ecef;
border: 1px solid #ced4da;
border-radius: .25rem
}

.input-group-text input[type=checkbox],
.input-group-text input[type=radio] {
margin-top: 0
}

.input-group-lg>.custom-select,
.input-group-lg>.form-control:not(textarea) {
height: calc(2.875rem + 2px)
}

.input-group-lg>.custom-select,
.input-group-lg>.form-control,
.input-group-lg>.input-group-append>.btn,
.input-group-lg>.input-group-append>.input-group-text,
.input-group-lg>.input-group-prepend>.btn,
.input-group-lg>.input-group-prepend>.input-group-text {
padding: .5rem 1rem;
font-size: 1.25rem;
line-height: 1.5;
border-radius: .3rem
}

.input-group-sm>.custom-select,
.input-group-sm>.form-control:not(textarea) {
height: calc(1.8125rem + 2px)
}

.input-group-sm>.custom-select,
.input-group-sm>.form-control,
.input-group-sm>.input-group-append>.btn,
.input-group-sm>.input-group-append>.input-group-text,
.input-group-sm>.input-group-prepend>.btn,
.input-group-sm>.input-group-prepend>.input-group-text {
padding: .25rem .5rem;
font-size: .875rem;
line-height: 1.5;
border-radius: .2rem
}

.input-group-lg>.custom-select,
.input-group-sm>.custom-select {
padding-right: 1.75rem
}

.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),
.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),
.input-group>.input-group-append:not(:last-child)>.btn,
.input-group>.input-group-append:not(:last-child)>.input-group-text,
.input-group>.input-group-prepend>.btn,
.input-group>.input-group-prepend>.input-group-text {
border-top-right-radius: 0;
border-bottom-right-radius: 0
}

.input-group>.input-group-append>.btn,
.input-group>.input-group-append>.input-group-text,
.input-group>.input-group-prepend:first-child>.btn:not(:first-child),
.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),
.input-group>.input-group-prepend:not(:first-child)>.btn,
.input-group>.input-group-prepend:not(:first-child)>.input-group-text {
border-top-left-radius: 0;
border-bottom-left-radius: 0
}
`,
  '.custom': `

.custom-control {
position: relative;
display: block;
min-height: 1.5rem;
padding-left: 1.5rem
}

.custom-control-inline {
display: -ms-inline-flexbox;
display: inline-flex;
margin-right: 1rem
}

.custom-control-input {
position: absolute;
z-index: -1;
opacity: 0
}

.custom-control-input:checked~.custom-control-label::before {
color: #fff;
border-color: #007bff;
background-color: #007bff
}

.custom-control-input:focus~.custom-control-label::before {
box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.custom-control-input:focus:not(:checked)~.custom-control-label::before {
border-color: #80bdff
}

.custom-control-input:not(:disabled):active~.custom-control-label::before {
color: #fff;
background-color: #b3d7ff;
border-color: #b3d7ff
}

.custom-control-input:disabled~.custom-control-label {
color: #6c757d
}

.custom-control-input:disabled~.custom-control-label::before {
background-color: #e9ecef
}

.custom-control-label {
position: relative;
margin-bottom: 0;
vertical-align: top
}

.custom-control-label::before {
position: absolute;
top: .25rem;
left: -1.5rem;
display: block;
width: 1rem;
height: 1rem;
pointer-events: none;
content: "";
background-color: #fff;
border: #adb5bd solid 1px
}

.custom-control-label::after {
position: absolute;
top: .25rem;
left: -1.5rem;
display: block;
width: 1rem;
height: 1rem;
content: "";
background-repeat: no-repeat;
background-position: center center;
background-size: 50% 50%
}

.custom-checkbox .custom-control-label::before {
border-radius: .25rem
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::after {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e")
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before {
border-color: #007bff;
background-color: #007bff
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e")
}

.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before {
background-color: rgba(0, 123, 255, .5)
}

.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before {
background-color: rgba(0, 123, 255, .5)
}

.custom-radio .custom-control-label::before {
border-radius: 50%
}

.custom-radio .custom-control-input:checked~.custom-control-label::after {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")
}

.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before {
background-color: rgba(0, 123, 255, .5)
}

.custom-switch {
padding-left: 2.25rem
}

.custom-switch .custom-control-label::before {
left: -2.25rem;
width: 1.75rem;
pointer-events: all;
border-radius: .5rem
}

.custom-switch .custom-control-label::after {
top: calc(.25rem + 2px);
left: calc(-2.25rem + 2px);
width: calc(1rem - 4px);
height: calc(1rem - 4px);
background-color: #adb5bd;
border-radius: .5rem;
transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-transform .15s ease-in-out;
transition: transform .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
transition: transform .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-transform .15s ease-in-out
}

@media screen and (prefers-reduced-motion:reduce) {
.custom-switch .custom-control-label::after {
transition: none
}
}

.custom-switch .custom-control-input:checked~.custom-control-label::after {
background-color: #fff;
-webkit-transform: translateX(.75rem);
transform: translateX(.75rem)
}

.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before {
background-color: rgba(0, 123, 255, .5)
}

.custom-select {
display: inline-block;
width: 100%;
height: calc(2.25rem + 2px);
padding: .375rem 1.75rem .375rem .75rem;
font-weight: 400;
line-height: 1.5;
color: #495057;
vertical-align: middle;
background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px;
background-color: #fff;
border: 1px solid #ced4da;
border-radius: .25rem;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none
}

.custom-select:focus {
border-color: #80bdff;
outline: 0;
box-shadow: 0 0 0 .2rem rgba(128, 189, 255, .5)
}

.custom-select:focus::-ms-value {
color: #495057;
background-color: #fff
}

.custom-select[multiple],
.custom-select[size]:not([size="1"]) {
height: auto;
padding-right: .75rem;
background-image: none
}

.custom-select:disabled {
color: #6c757d;
background-color: #e9ecef
}

.custom-select::-ms-expand {
opacity: 0
}

.custom-select-sm {
height: calc(1.8125rem + 2px);
padding-top: .25rem;
padding-bottom: .25rem;
padding-left: .5rem;
font-size: .875rem
}

.custom-select-lg {
height: calc(2.875rem + 2px);
padding-top: .5rem;
padding-bottom: .5rem;
padding-left: 1rem;
font-size: 1.25rem
}

.custom-file {
position: relative;
display: inline-block;
width: 100%;
height: calc(2.25rem + 2px);
margin-bottom: 0
}

.custom-file-input {
position: relative;
z-index: 2;
width: 100%;
height: calc(2.25rem + 2px);
margin: 0;
opacity: 0
}

.custom-file-input:focus~.custom-file-label {
border-color: #80bdff;
box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.custom-file-input:disabled~.custom-file-label {
background-color: #e9ecef
}

.custom-file-input:lang(en)~.custom-file-label::after {
content: "Browse"
}

.custom-file-input~.custom-file-label[data-browse]::after {
content: attr(data-browse)
}

.custom-file-label {
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: 1;
height: calc(2.25rem + 2px);
padding: .375rem .75rem;
font-weight: 400;
line-height: 1.5;
color: #495057;
background-color: #fff;
border: 1px solid #ced4da;
border-radius: .25rem
}

.custom-file-label::after {
position: absolute;
top: 0;
right: 0;
bottom: 0;
z-index: 3;
display: block;
height: 2.25rem;
padding: .375rem .75rem;
line-height: 1.5;
color: #495057;
content: "Browse";
background-color: #e9ecef;
border-left: inherit;
border-radius: 0 .25rem .25rem 0
}

.custom-range {
width: 100%;
height: calc(1rem + .4rem);
padding: 0;
background-color: transparent;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none
}

.custom-range:focus {
outline: 0
}

.custom-range:focus::-webkit-slider-thumb {
box-shadow: 0 0 0 1px #fff, 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.custom-range:focus::-moz-range-thumb {
box-shadow: 0 0 0 1px #fff, 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.custom-range:focus::-ms-thumb {
box-shadow: 0 0 0 1px #fff, 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.custom-range::-moz-focus-outer {
border: 0
}

.custom-range::-webkit-slider-thumb {
width: 1rem;
height: 1rem;
margin-top: -.25rem;
background-color: #007bff;
border: 0;
border-radius: 1rem;
transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
-webkit-appearance: none;
appearance: none
}

@media screen and (prefers-reduced-motion:reduce) {
.custom-range::-webkit-slider-thumb {
transition: none
}
}

.custom-range::-webkit-slider-thumb:active {
background-color: #b3d7ff
}

.custom-range::-webkit-slider-runnable-track {
width: 100%;
height: .5rem;
color: transparent;
cursor: pointer;
background-color: #dee2e6;
border-color: transparent;
border-radius: 1rem
}

.custom-range::-moz-range-thumb {
width: 1rem;
height: 1rem;
background-color: #007bff;
border: 0;
border-radius: 1rem;
transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
-moz-appearance: none;
appearance: none
}

@media screen and (prefers-reduced-motion:reduce) {
.custom-range::-moz-range-thumb {
transition: none
}
}

.custom-range::-moz-range-thumb:active {
background-color: #b3d7ff
}

.custom-range::-moz-range-track {
width: 100%;
height: .5rem;
color: transparent;
cursor: pointer;
background-color: #dee2e6;
border-color: transparent;
border-radius: 1rem
}

.custom-range::-ms-thumb {
width: 1rem;
height: 1rem;
margin-top: 0;
margin-right: .2rem;
margin-left: .2rem;
background-color: #007bff;
border: 0;
border-radius: 1rem;
transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
appearance: none
}

@media screen and (prefers-reduced-motion:reduce) {
.custom-range::-ms-thumb {
transition: none
}
}

.custom-range::-ms-thumb:active {
background-color: #b3d7ff
}

.custom-range::-ms-track {
width: 100%;
height: .5rem;
color: transparent;
cursor: pointer;
background-color: transparent;
border-color: transparent;
border-width: .5rem
}

.custom-range::-ms-fill-lower {
background-color: #dee2e6;
border-radius: 1rem
}

.custom-range::-ms-fill-upper {
margin-right: 15px;
background-color: #dee2e6;
border-radius: 1rem
}

.custom-range:disabled::-webkit-slider-thumb {
background-color: #adb5bd
}

.custom-range:disabled::-webkit-slider-runnable-track {
cursor: default
}

.custom-range:disabled::-moz-range-thumb {
background-color: #adb5bd
}

.custom-range:disabled::-moz-range-track {
cursor: default
}

.custom-range:disabled::-ms-thumb {
background-color: #adb5bd
}

.custom-control-label::before,
.custom-file-label,
.custom-select {
transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media screen and (prefers-reduced-motion:reduce) {

.custom-control-label::before,
.custom-file-label,
.custom-select {
transition: none
}
}
`,
  '.nav': `
.nav {
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
padding-left: 0;
margin-bottom: 0;
list-style: none
}

.nav-link {
display: block;
padding: .5rem 1rem
}

.nav-link:focus,
.nav-link:hover {
text-decoration: none
}

.nav-link.disabled {
color: #6c757d;
pointer-events: none;
cursor: default
}

.nav-tabs {
border-bottom: 1px solid #dee2e6
}

.nav-tabs .nav-item {
margin-bottom: -1px
}

.nav-tabs .nav-link {
border: 1px solid transparent;
border-top-left-radius: .25rem;
border-top-right-radius: .25rem
}

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
border-color: #e9ecef #e9ecef #dee2e6
}

.nav-tabs .nav-link.disabled {
color: #6c757d;
background-color: transparent;
border-color: transparent
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
color: #495057;
background-color: #fff;
border-color: #dee2e6 #dee2e6 #fff
}

.nav-tabs .dropdown-menu {
margin-top: -1px;
border-top-left-radius: 0;
border-top-right-radius: 0
}

.nav-pills .nav-link {
border-radius: .25rem
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
color: #fff;
background-color: #007bff
}

.nav-fill .nav-item {
-ms-flex: 1 1 auto;
flex: 1 1 auto;
text-align: center
}

.nav-justified .nav-item {
-ms-flex-preferred-size: 0;
flex-basis: 0;
-ms-flex-positive: 1;
flex-grow: 1;
text-align: center
}

.tab-content>.tab-pane {
display: none
}

.tab-content>.active {
display: block
}
`,
  '.navbar': `
.navbar {
position: relative;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: justify;
justify-content: space-between;
padding: .5rem 1rem
}

.navbar>.container,
.navbar>.container-fluid {
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: justify;
justify-content: space-between
}

.navbar-brand {
display: inline-block;
padding-top: .3125rem;
padding-bottom: .3125rem;
margin-right: 1rem;
font-size: 1.25rem;
line-height: inherit;
white-space: nowrap
}

.navbar-brand:focus,
.navbar-brand:hover {
text-decoration: none
}

.navbar-nav {
display: -ms-flexbox;
display: flex;
-ms-flex-direction: column;
flex-direction: column;
padding-left: 0;
margin-bottom: 0;
list-style: none
}

.navbar-nav .nav-link {
padding-right: 0;
padding-left: 0
}

.navbar-nav .dropdown-menu {
position: static;
float: none
}

.navbar-text {
display: inline-block;
padding-top: .5rem;
padding-bottom: .5rem
}

.navbar-collapse {
-ms-flex-preferred-size: 100%;
flex-basis: 100%;
-ms-flex-positive: 1;
flex-grow: 1;
-ms-flex-align: center;
align-items: center
}

.navbar-toggler {
padding: .25rem .75rem;
font-size: 1.25rem;
line-height: 1;
background-color: transparent;
border: 1px solid transparent;
border-radius: .25rem
}

.navbar-toggler:focus,
.navbar-toggler:hover {
text-decoration: none
}

.navbar-toggler:not(:disabled):not(.disabled) {
cursor: pointer
}

.navbar-toggler-icon {
display: inline-block;
width: 1.5em;
height: 1.5em;
vertical-align: middle;
content: "";
background: no-repeat center center;
background-size: 100% 100%
}

@media (max-width:575.98px) {

.navbar-expand-sm>.container,
.navbar-expand-sm>.container-fluid {
padding-right: 0;
padding-left: 0
}
}

@media (min-width:576px) {
.navbar-expand-sm {
-ms-flex-flow: row nowrap;
flex-flow: row nowrap;
-ms-flex-pack: start;
justify-content: flex-start
}

.navbar-expand-sm .navbar-nav {
-ms-flex-direction: row;
flex-direction: row
}

.navbar-expand-sm .navbar-nav .dropdown-menu {
position: absolute
}

.navbar-expand-sm .navbar-nav .nav-link {
padding-right: .5rem;
padding-left: .5rem
}

.navbar-expand-sm>.container,
.navbar-expand-sm>.container-fluid {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap
}

.navbar-expand-sm .navbar-collapse {
display: -ms-flexbox !important;
display: flex !important;
-ms-flex-preferred-size: auto;
flex-basis: auto
}

.navbar-expand-sm .navbar-toggler {
display: none
}
}

@media (max-width:767.98px) {

.navbar-expand-md>.container,
.navbar-expand-md>.container-fluid {
padding-right: 0;
padding-left: 0
}
}

@media (min-width:768px) {
.navbar-expand-md {
-ms-flex-flow: row nowrap;
flex-flow: row nowrap;
-ms-flex-pack: start;
justify-content: flex-start
}

.navbar-expand-md .navbar-nav {
-ms-flex-direction: row;
flex-direction: row
}

.navbar-expand-md .navbar-nav .dropdown-menu {
position: absolute
}

.navbar-expand-md .navbar-nav .nav-link {
padding-right: .5rem;
padding-left: .5rem
}

.navbar-expand-md>.container,
.navbar-expand-md>.container-fluid {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap
}

.navbar-expand-md .navbar-collapse {
display: -ms-flexbox !important;
display: flex !important;
-ms-flex-preferred-size: auto;
flex-basis: auto
}

.navbar-expand-md .navbar-toggler {
display: none
}
}

@media (max-width:991.98px) {

.navbar-expand-lg>.container,
.navbar-expand-lg>.container-fluid {
padding-right: 0;
padding-left: 0
}
}

@media (min-width:992px) {
.navbar-expand-lg {
-ms-flex-flow: row nowrap;
flex-flow: row nowrap;
-ms-flex-pack: start;
justify-content: flex-start
}

.navbar-expand-lg .navbar-nav {
-ms-flex-direction: row;
flex-direction: row
}

.navbar-expand-lg .navbar-nav .dropdown-menu {
position: absolute
}

.navbar-expand-lg .navbar-nav .nav-link {
padding-right: .5rem;
padding-left: .5rem
}

.navbar-expand-lg>.container,
.navbar-expand-lg>.container-fluid {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap
}

.navbar-expand-lg .navbar-collapse {
display: -ms-flexbox !important;
display: flex !important;
-ms-flex-preferred-size: auto;
flex-basis: auto
}

.navbar-expand-lg .navbar-toggler {
display: none
}
}

@media (max-width:1199.98px) {

.navbar-expand-xl>.container,
.navbar-expand-xl>.container-fluid {
padding-right: 0;
padding-left: 0
}
}

@media (min-width:1200px) {
.navbar-expand-xl {
-ms-flex-flow: row nowrap;
flex-flow: row nowrap;
-ms-flex-pack: start;
justify-content: flex-start
}

.navbar-expand-xl .navbar-nav {
-ms-flex-direction: row;
flex-direction: row
}

.navbar-expand-xl .navbar-nav .dropdown-menu {
position: absolute
}

.navbar-expand-xl .navbar-nav .nav-link {
padding-right: .5rem;
padding-left: .5rem
}

.navbar-expand-xl>.container,
.navbar-expand-xl>.container-fluid {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap
}

.navbar-expand-xl .navbar-collapse {
display: -ms-flexbox !important;
display: flex !important;
-ms-flex-preferred-size: auto;
flex-basis: auto
}

.navbar-expand-xl .navbar-toggler {
display: none
}
}

.navbar-expand {
-ms-flex-flow: row nowrap;
flex-flow: row nowrap;
-ms-flex-pack: start;
justify-content: flex-start
}

.navbar-expand>.container,
.navbar-expand>.container-fluid {
padding-right: 0;
padding-left: 0
}

.navbar-expand .navbar-nav {
-ms-flex-direction: row;
flex-direction: row
}

.navbar-expand .navbar-nav .dropdown-menu {
position: absolute
}

.navbar-expand .navbar-nav .nav-link {
padding-right: .5rem;
padding-left: .5rem
}

.navbar-expand>.container,
.navbar-expand>.container-fluid {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap
}

.navbar-expand .navbar-collapse {
display: -ms-flexbox !important;
display: flex !important;
-ms-flex-preferred-size: auto;
flex-basis: auto
}

.navbar-expand .navbar-toggler {
display: none
}

.navbar-light .navbar-brand {
color: rgba(0, 0, 0, .9)
}

.navbar-light .navbar-brand:focus,
.navbar-light .navbar-brand:hover {
color: rgba(0, 0, 0, .9)
}

.navbar-light .navbar-nav .nav-link {
color: rgba(0, 0, 0, .5)
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
color: rgba(0, 0, 0, .7)
}

.navbar-light .navbar-nav .nav-link.disabled {
color: rgba(0, 0, 0, .3)
}

.navbar-light .navbar-nav .active>.nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show>.nav-link {
color: rgba(0, 0, 0, .9)
}

.navbar-light .navbar-toggler {
color: rgba(0, 0, 0, .5);
border-color: rgba(0, 0, 0, .1)
}

.navbar-light .navbar-toggler-icon {
background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
}

.navbar-light .navbar-text {
color: rgba(0, 0, 0, .5)
}

.navbar-light .navbar-text a {
color: rgba(0, 0, 0, .9)
}

.navbar-light .navbar-text a:focus,
.navbar-light .navbar-text a:hover {
color: rgba(0, 0, 0, .9)
}

.navbar-dark .navbar-brand {
color: #fff
}

.navbar-dark .navbar-brand:focus,
.navbar-dark .navbar-brand:hover {
color: #fff
}

.navbar-dark .navbar-nav .nav-link {
color: rgba(255, 255, 255, .5)
}

.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover {
color: rgba(255, 255, 255, .75)
}

.navbar-dark .navbar-nav .nav-link.disabled {
color: rgba(255, 255, 255, .25)
}

.navbar-dark .navbar-nav .active>.nav-link,
.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .show>.nav-link {
color: #fff
}

.navbar-dark .navbar-toggler {
color: rgba(255, 255, 255, .5);
border-color: rgba(255, 255, 255, .1)
}

.navbar-dark .navbar-toggler-icon {
background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
}

.navbar-dark .navbar-text {
color: rgba(255, 255, 255, .5)
}

.navbar-dark .navbar-text a {
color: #fff
}

.navbar-dark .navbar-text a:focus,
.navbar-dark .navbar-text a:hover {
color: #fff
}
`,

  '.card': `
.card {
position: relative;
display: -ms-flexbox;
display: flex;
-ms-flex-direction: column;
flex-direction: column;
min-width: 0;
word-wrap: break-word;
background-color: #fff;
background-clip: border-box;
border: 1px solid rgba(0, 0, 0, .125);
border-radius: .25rem
}

.card>hr {
margin-right: 0;
margin-left: 0
}

.card>.list-group:first-child .list-group-item:first-child {
border-top-left-radius: .25rem;
border-top-right-radius: .25rem
}

.card>.list-group:last-child .list-group-item:last-child {
border-bottom-right-radius: .25rem;
border-bottom-left-radius: .25rem
}

.card-body {
-ms-flex: 1 1 auto;
flex: 1 1 auto;
padding: 1.25rem
}

.card-title {
margin-bottom: .75rem
}

.card-subtitle {
margin-top: -.375rem;
margin-bottom: 0
}

.card-text:last-child {
margin-bottom: 0
}

.card-link:hover {
text-decoration: none
}

.card-link+.card-link {
margin-left: 1.25rem
}

.card-header {
padding: .75rem 1.25rem;
margin-bottom: 0;
color: inherit;
background-color: rgba(0, 0, 0, .03);
border-bottom: 1px solid rgba(0, 0, 0, .125)
}

.card-header:first-child {
border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0
}

.card-header+.list-group .list-group-item:first-child {
border-top: 0
}

.card-footer {
padding: .75rem 1.25rem;
background-color: rgba(0, 0, 0, .03);
border-top: 1px solid rgba(0, 0, 0, .125)
}

.card-footer:last-child {
border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px)
}

.card-header-tabs {
margin-right: -.625rem;
margin-bottom: -.75rem;
margin-left: -.625rem;
border-bottom: 0
}

.card-header-pills {
margin-right: -.625rem;
margin-left: -.625rem
}

.card-img-overlay {
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
padding: 1.25rem
}

.card-img {
width: 100%;
border-radius: calc(.25rem - 1px)
}

.card-img-top {
width: 100%;
border-top-left-radius: calc(.25rem - 1px);
border-top-right-radius: calc(.25rem - 1px)
}

.card-img-bottom {
width: 100%;
border-bottom-right-radius: calc(.25rem - 1px);
border-bottom-left-radius: calc(.25rem - 1px)
}

.card-deck {
display: -ms-flexbox;
display: flex;
-ms-flex-direction: column;
flex-direction: column
}

.card-deck .card {
margin-bottom: 15px
}

@media (min-width:576px) {
.card-deck {
-ms-flex-flow: row wrap;
flex-flow: row wrap;
margin-right: -15px;
margin-left: -15px
}

.card-deck .card {
display: -ms-flexbox;
display: flex;
-ms-flex: 1 0 0%;
flex: 1 0 0%;
-ms-flex-direction: column;
flex-direction: column;
margin-right: 15px;
margin-bottom: 0;
margin-left: 15px
}
}

.card-group {
display: -ms-flexbox;
display: flex;
-ms-flex-direction: column;
flex-direction: column
}

.card-group>.card {
margin-bottom: 15px
}

@media (min-width:576px) {
.card-group {
-ms-flex-flow: row wrap;
flex-flow: row wrap
}

.card-group>.card {
-ms-flex: 1 0 0%;
flex: 1 0 0%;
margin-bottom: 0
}

.card-group>.card+.card {
margin-left: 0;
border-left: 0
}

.card-group>.card:first-child {
border-top-right-radius: 0;
border-bottom-right-radius: 0
}

.card-group>.card:first-child .card-header,
.card-group>.card:first-child .card-img-top {
border-top-right-radius: 0
}

.card-group>.card:first-child .card-footer,
.card-group>.card:first-child .card-img-bottom {
border-bottom-right-radius: 0
}

.card-group>.card:last-child {
border-top-left-radius: 0;
border-bottom-left-radius: 0
}

.card-group>.card:last-child .card-header,
.card-group>.card:last-child .card-img-top {
border-top-left-radius: 0
}

.card-group>.card:last-child .card-footer,
.card-group>.card:last-child .card-img-bottom {
border-bottom-left-radius: 0
}

.card-group>.card:only-child {
border-radius: .25rem
}

.card-group>.card:only-child .card-header,
.card-group>.card:only-child .card-img-top {
border-top-left-radius: .25rem;
border-top-right-radius: .25rem
}

.card-group>.card:only-child .card-footer,
.card-group>.card:only-child .card-img-bottom {
border-bottom-right-radius: .25rem;
border-bottom-left-radius: .25rem
}

.card-group>.card:not(:first-child):not(:last-child):not(:only-child) {
border-radius: 0
}

.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,
.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,
.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,
.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top {
border-radius: 0
}
}

.card-columns .card {
margin-bottom: .75rem
}

@media (min-width:576px) {
.card-columns {
-webkit-column-count: 3;
-moz-column-count: 3;
column-count: 3;
-webkit-column-gap: 1.25rem;
-moz-column-gap: 1.25rem;
column-gap: 1.25rem;
orphans: 1;
widows: 1
}

.card-columns .card {
display: inline-block;
width: 100%
}
}
`,
  '.accordion': `
.accordion .card {
overflow: hidden
}

.accordion .card:not(:first-of-type) .card-header:first-child {
border-radius: 0
}

.accordion .card:not(:first-of-type):not(:last-of-type) {
border-bottom: 0;
border-radius: 0
}

.accordion .card:first-of-type {
border-bottom: 0;
border-bottom-right-radius: 0;
border-bottom-left-radius: 0
}

.accordion .card:last-of-type {
border-top-left-radius: 0;
border-top-right-radius: 0
}

.accordion .card .card-header {
margin-bottom: -1px
}`,
  '.breadcrumb': `

.breadcrumb {
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
padding: .75rem 1rem;
margin-bottom: 1rem;
list-style: none;
background-color: #e9ecef;
border-radius: .25rem
}

.breadcrumb-item+.breadcrumb-item {
padding-left: .5rem
}

.breadcrumb-item+.breadcrumb-item::before {
display: inline-block;
padding-right: .5rem;
color: #6c757d;
content: ""
}

.breadcrumb-item+.breadcrumb-item:hover::before {
text-decoration: underline
}

.breadcrumb-item+.breadcrumb-item:hover::before {
text-decoration: none
}

.breadcrumb-item.active {
color: #6c757d
}
`,
  '.pagination': `
.pagination {
display: -ms-flexbox;
display: flex;
padding-left: 0;
list-style: none;
border-radius: .25rem
}

.page-link {
position: relative;
display: block;
padding: .5rem .75rem;
margin-left: -1px;
line-height: 1.25;
color: #007bff;
background-color: #fff;
border: 1px solid #dee2e6
}

.page-link:hover {
z-index: 2;
color: #0056b3;
text-decoration: none;
background-color: #e9ecef;
border-color: #dee2e6
}

.page-link:focus {
z-index: 2;
outline: 0;
box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25)
}

.page-link:not(:disabled):not(.disabled) {
cursor: pointer
}

.page-item:first-child .page-link {
margin-left: 0;
border-top-left-radius: .25rem;
border-bottom-left-radius: .25rem
}

.page-item:last-child .page-link {
border-top-right-radius: .25rem;
border-bottom-right-radius: .25rem
}

.page-item.active .page-link {
z-index: 1;
color: #fff;
background-color: #007bff;
border-color: #007bff
}

.page-item.disabled .page-link {
color: #6c757d;
pointer-events: none;
cursor: auto;
background-color: #fff;
border-color: #dee2e6
}

.pagination-lg .page-link {
padding: .75rem 1.5rem;
font-size: 1.25rem;
line-height: 1.5
}

.pagination-lg .page-item:first-child .page-link {
border-top-left-radius: .3rem;
border-bottom-left-radius: .3rem
}

.pagination-lg .page-item:last-child .page-link {
border-top-right-radius: .3rem;
border-bottom-right-radius: .3rem
}

.pagination-sm .page-link {
padding: .25rem .5rem;
font-size: .875rem;
line-height: 1.5
}

.pagination-sm .page-item:first-child .page-link {
border-top-left-radius: .2rem;
border-bottom-left-radius: .2rem
}

.pagination-sm .page-item:last-child .page-link {
border-top-right-radius: .2rem;
border-bottom-right-radius: .2rem
}`,
};



function handleClick() {

  let pageCode=document.getElementById('codeArea').value;
  const classes=pageCode.split(' ');

  for(k in bootstrap){
      for(let j=0;j<classes.length;j++){
        if(classes[j].search(k)>=0){
          console.log(k,"found")
          resultArea.value+=bootstrap[k];
        }
      }
  }


  
}


function switchDark(){
  document.getElementById('codeArea').classList.toggle('bg-dark')
  document.getElementById('resultArea').classList.toggle('bg-dark')
  document.getElementById('mainBody').classList.toggle('bg-dark')

  document.getElementById('appBody').classList.toggle('text-white')
  document.getElementById('codeArea').classList.toggle('text-white')
  document.getElementById('resultArea').classList.toggle('text-white')
  


}
