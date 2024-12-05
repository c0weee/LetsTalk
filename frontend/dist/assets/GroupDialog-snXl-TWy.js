import{B as P,ax as Q,ay as R,s as W,o as g,c as T,p as r,r as Z,m as s,ai as J,az as Y,aA as X,U as x,i as H,a2 as tt,aw as v,aB as et,a3 as lt,Z as C,aC as E,aD as nt,aE as ot,a0 as m,au as h,aF as it,aG as rt,O as A,aH as at,aI as st,ar as N,C as U,d as z,w as L,ak as c,k as dt,a as qt,j as ct,b as O,l as pt,q as S,v as B,e as w,A as ut,F as bt,z as V,h as ft,g as mt,as as ht}from"./index-DX4UmDNc.js";import{_ as vt}from"./CustomFileUpload-nmJplHsg.js";var gt=function(e){var t=e.dt;return`
/*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor > * {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-left: 1.5rem;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: '\\2022';
}
.ql-editor ul[data-checked='true'],
.ql-editor ul[data-checked='false'] {
    pointer-events: none;
}
.ql-editor ul[data-checked='true'] > li *,
.ql-editor ul[data-checked='false'] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before,
.ql-editor ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before {
    content: '\\2611';
}
.ql-editor ul[data-checked='false'] > li::before {
    content: '\\2610';
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2rem;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-left: -1.5rem;
    margin-right: 0.3rem;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-left: 0.3rem;
    margin-right: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-right: 1.5rem;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3rem;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5rem;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3rem;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5rem;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6rem;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5rem;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6rem;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5rem;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9rem;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5rem;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9rem;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5rem;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12rem;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5rem;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12rem;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5rem;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15rem;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5rem;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15rem;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5rem;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18rem;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5rem;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18rem;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5rem;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21rem;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5rem;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21rem;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5rem;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24rem;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5rem;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24rem;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5rem;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27rem;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5rem;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27rem;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5rem;
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background: #000;
}
.ql-editor .ql-bg-red {
    background: #e60000;
}
.ql-editor .ql-bg-orange {
    background: #f90;
}
.ql-editor .ql-bg-yellow {
    background: #ff0;
}
.ql-editor .ql-bg-green {
    background: #008a00;
}
.ql-editor .ql-bg-blue {
    background: #06c;
}
.ql-editor .ql-bg-purple {
    background: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75rem;
}
.ql-editor .ql-size-large {
    font-size: 1.5rem;
}
.ql-editor .ql-size-huge {
    font-size: 2.5rem;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: right;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type='file'],
.ql-snow .ql-toolbar input.ql-image[type='file'] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
    }
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2rem;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1rem;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83rem;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67rem;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-top: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    font-size: 2rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    font-size: 1.5rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    font-size: 1.17rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    font-size: 1rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    font-size: 0.83rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    font-size: 0.67rem;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
}
.ql-snow .ql-tooltip {
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-right: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0px;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-right: 1px solid #ccc;
    content: 'Edit';
    margin-left: 16px;
    padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-left: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type='text'] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: 'Save';
    padding-right: 0px;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
    content: 'Enter link:';
}
.ql-snow .ql-tooltip[data-mode='formula']::before {
    content: 'Enter formula:';
}
.ql-snow .ql-tooltip[data-mode='video']::before {
    content: 'Enter video:';
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}

.p-editor .p-editor-toolbar {
    background: `.concat(t("editor.toolbar.background"),`;
    border-top-right-radius: `).concat(t("editor.toolbar.border.radius"),`;
    border-top-left-radius: `).concat(t("editor.toolbar.border.radius"),`;
}

.p-editor .p-editor-toolbar.ql-snow {
    border: 1px solid `).concat(t("editor.toolbar.border.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-stroke {
    stroke: `).concat(t("editor.toolbar.item.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-fill {
    fill: `).concat(t("editor.toolbar.item.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
    border: 0 none;
    color: `).concat(t("editor.toolbar.item.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
    color: `).concat(t("editor.toolbar.item.hover.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
    stroke: `).concat(t("editor.toolbar.item.hover.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
    fill: `).concat(t("editor.toolbar.item.hover.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: `).concat(t("editor.toolbar.item.active.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: `).concat(t("editor.toolbar.item.active.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: `).concat(t("editor.toolbar.item.active.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background: `).concat(t("editor.overlay.background"),`;
    border: 1px solid `).concat(t("editor.overlay.border.color"),`;
    box-shadow: `).concat(t("editor.overlay.shadow"),`;
    border-radius: `).concat(t("editor.overlay.border.radius"),`;
    padding: `).concat(t("editor.overlay.padding"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
    color: `).concat(t("editor.overlay.option.color"),`;
    border-radius: `).concat(t("editor.overlay.option.border.radius"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
    background: `).concat(t("editor.overlay.option.focus.background"),`;
    color: `).concat(t("editor.overlay.option.focus.color"),`;
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
    padding: `).concat(t("editor.overlay.option.padding"),`;
}

.p-editor .p-editor-content {
    border-bottom-right-radius: `).concat(t("editor.content.border.radius"),`;
    border-bottom-left-radius: `).concat(t("editor.content.border.radius"),`;
}

.p-editor .p-editor-content.ql-snow {
    border: 1px solid `).concat(t("editor.content.border.color"),`;
}

.p-editor .p-editor-content .ql-editor {
    background: `).concat(t("editor.content.background"),`;
    color: `).concat(t("editor.content.color"),`;
    border-bottom-right-radius: `).concat(t("editor.content.border.radius"),`;
    border-bottom-left-radius: `).concat(t("editor.content.border.radius"),`;
}

.p-editor .ql-snow.ql-toolbar button:hover,
.p-editor .ql-snow.ql-toolbar button:focus {
    color: `).concat(t("editor.toolbar.item.hover.color"),`;
}

.p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {
    stroke: `).concat(t("editor.toolbar.item.hover.color"),`;
}

.p-editor .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor .ql-snow.ql-toolbar button:focus .ql-fill {
    fill: `).concat(t("editor.toolbar.item.hover.color"),`;
}

.p-editor .ql-snow.ql-toolbar button.ql-active,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    color: `).concat(t("editor.toolbar.item.active.color"),`;
}

.p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
    stroke: `).concat(t("editor.toolbar.item.active.color"),`;
}

.p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
    fill: `).concat(t("editor.toolbar.item.active.color"),`;
}

.p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
    color: `).concat(t("editor.toolbar.item.active.color"),`;
}
`)},wt={root:"p-editor",toolbar:"p-editor-toolbar",content:"p-editor-content"},kt=P.extend({name:"editor",theme:gt,classes:wt}),yt={name:"BaseEditor",extends:W,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:kt,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function k(l){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(l)}function D(l,e){var t=Object.keys(l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(l,o).enumerable})),t.push.apply(t,n)}return t}function xt(l){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?D(Object(t),!0).forEach(function(n){$t(l,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach(function(n){Object.defineProperty(l,n,Object.getOwnPropertyDescriptor(t,n))})}return l}function $t(l,e,t){return(e=_t(e))in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}function _t(l){var e=Et(l,"string");return k(e)=="symbol"?e:e+""}function Et(l,e){if(k(l)!="object"||!l)return l;var t=l[Symbol.toPrimitive];if(t!==void 0){var n=t.call(l,e||"default");if(k(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(l)}var j=function(){try{return window.Quill}catch{return null}}(),F={name:"Editor",extends:yt,inheritAttrs:!1,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(e))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var e=this,t={modules:xt({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};j?(this.quill=new j(this.$refs.editorElement,t),this.initQuill(),this.handleLoad()):Q(()=>import("./quill-CyBI07AH.js").then(n=>n.q),[]).then(function(n){n&&R(e.$refs.editorElement)&&(n.default?e.quill=new n.default(e.$refs.editorElement,t):e.quill=new n(e.$refs.editorElement,t),e.initQuill())}).then(function(){e.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(e){this.quill&&(e?this.quill.setContents(this.quill.clipboard.convert(e)):this.quill.setText(""))},initQuill:function(){var e=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(t,n,o){if(o==="user"){var i=e.$refs.editorElement.children[0].innerHTML,a=e.quill.getText().trim();i==="<p><br></p>"&&(i=""),e.$emit("update:modelValue",i),e.$emit("text-change",{htmlValue:i,textValue:a,delta:t,source:o,instance:e.quill})}}),this.quill.on("selection-change",function(t,n,o){var i=e.$refs.editorElement.children[0].innerHTML,a=e.quill.getText().trim();e.$emit("selection-change",{htmlValue:i,textValue:a,range:t,oldRange:n,source:o,instance:e.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function Ot(l,e,t,n,o,i){return g(),T("div",s({class:l.cx("root")},l.ptmi("root")),[r("div",s({ref:"toolbarElement",class:l.cx("toolbar")},l.ptm("toolbar")),[Z(l.$slots,"toolbar",{},function(){return[r("span",s({class:"ql-formats"},l.ptm("formats")),[r("select",s({class:"ql-header",defaultValue:"0"},l.ptm("header")),[r("option",s({value:"1"},l.ptm("option")),"Heading",16),r("option",s({value:"2"},l.ptm("option")),"Subheading",16),r("option",s({value:"0"},l.ptm("option")),"Normal",16)],16),r("select",s({class:"ql-font"},l.ptm("font")),[r("option",J(Y(l.ptm("option"))),null,16),r("option",s({value:"serif"},l.ptm("option")),null,16),r("option",s({value:"monospace"},l.ptm("option")),null,16)],16)],16),r("span",s({class:"ql-formats"},l.ptm("formats")),[r("button",s({class:"ql-bold",type:"button"},l.ptm("bold")),null,16),r("button",s({class:"ql-italic",type:"button"},l.ptm("italic")),null,16),r("button",s({class:"ql-underline",type:"button"},l.ptm("underline")),null,16)],16),(g(),T("span",s({key:o.reRenderColorKey,class:"ql-formats"},l.ptm("formats")),[r("select",s({class:"ql-color"},l.ptm("color")),null,16),r("select",s({class:"ql-background"},l.ptm("background")),null,16)],16)),r("span",s({class:"ql-formats"},l.ptm("formats")),[r("button",s({class:"ql-list",value:"ordered",type:"button"},l.ptm("list")),null,16),r("button",s({class:"ql-list",value:"bullet",type:"button"},l.ptm("list")),null,16),r("select",s({class:"ql-align"},l.ptm("select")),[r("option",s({defaultValue:""},l.ptm("option")),null,16),r("option",s({value:"center"},l.ptm("option")),null,16),r("option",s({value:"right"},l.ptm("option")),null,16),r("option",s({value:"justify"},l.ptm("option")),null,16)],16)],16),r("span",s({class:"ql-formats"},l.ptm("formats")),[r("button",s({class:"ql-link",type:"button"},l.ptm("link")),null,16),r("button",s({class:"ql-image",type:"button"},l.ptm("image")),null,16),r("button",s({class:"ql-code-block",type:"button"},l.ptm("codeBlock")),null,16)],16),r("span",s({class:"ql-formats"},l.ptm("formats")),[r("button",s({class:"ql-clean",type:"button"},l.ptm("clean")),null,16)],16)]})],16),r("div",s({ref:"editorElement",class:l.cx("content"),style:l.editorStyle},l.ptm("content")),null,16)],16)}F.render=Ot;var St=function(e){var t=e.dt;return`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: `.concat(t("tooltip.max.width"),`;
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 `).concat(t("tooltip.gutter"),`;
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: `).concat(t("tooltip.gutter"),` 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: `).concat(t("tooltip.background"),`;
    color: `).concat(t("tooltip.color"),`;
    padding: `).concat(t("tooltip.padding"),`;
    box-shadow: `).concat(t("tooltip.shadow"),`;
    border-radius: `).concat(t("tooltip.border.radius"),`;
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    margin-top: calc(-1 * `).concat(t("tooltip.gutter"),`);
    border-width: `).concat(t("tooltip.gutter")," ").concat(t("tooltip.gutter")," ").concat(t("tooltip.gutter"),` 0;
    border-right-color: `).concat(t("tooltip.background"),`;
}

.p-tooltip-left .p-tooltip-arrow {
    margin-top: calc(-1 * `).concat(t("tooltip.gutter"),`);
    border-width: `).concat(t("tooltip.gutter")," 0 ").concat(t("tooltip.gutter")," ").concat(t("tooltip.gutter"),`;
    border-left-color: `).concat(t("tooltip.background"),`;
}

.p-tooltip-top .p-tooltip-arrow {
    margin-left: calc(-1 * `).concat(t("tooltip.gutter"),`);
    border-width: `).concat(t("tooltip.gutter")," ").concat(t("tooltip.gutter")," 0 ").concat(t("tooltip.gutter"),`;
    border-top-color: `).concat(t("tooltip.background"),`;
    border-bottom-color: `).concat(t("tooltip.background"),`;
}

.p-tooltip-bottom .p-tooltip-arrow {
    margin-left: calc(-1 * `).concat(t("tooltip.gutter"),`);
    border-width: 0 `).concat(t("tooltip.gutter")," ").concat(t("tooltip.gutter")," ").concat(t("tooltip.gutter"),`;
    border-top-color: `).concat(t("tooltip.background"),`;
    border-bottom-color: `).concat(t("tooltip.background"),`;
}
`)},Tt={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},zt=P.extend({name:"tooltip-directive",theme:St,classes:Tt}),Lt=X.extend({style:zt});function Ht(l,e){return Vt(l)||Bt(l,e)||At(l,e)||Ct()}function Ct(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function At(l,e){if(l){if(typeof l=="string")return M(l,e);var t={}.toString.call(l).slice(8,-1);return t==="Object"&&l.constructor&&(t=l.constructor.name),t==="Map"||t==="Set"?Array.from(l):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?M(l,e):void 0}}function M(l,e){(e==null||e>l.length)&&(e=l.length);for(var t=0,n=Array(e);t<e;t++)n[t]=l[t];return n}function Bt(l,e){var t=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(t!=null){var n,o,i,a,d=[],p=!0,y=!1;try{if(i=(t=t.call(l)).next,e!==0)for(;!(p=(n=i.call(t)).done)&&(d.push(n.value),d.length!==e);p=!0);}catch($){y=!0,o=$}finally{try{if(!p&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(y)throw o}}return d}}function Vt(l){if(Array.isArray(l))return l}function I(l,e,t){return(e=Dt(e))in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}function Dt(l){var e=jt(l,"string");return f(e)=="symbol"?e:e+""}function jt(l,e){if(f(l)!="object"||!l)return l;var t=l[Symbol.toPrimitive];if(t!==void 0){var n=t.call(l,e||"default");if(f(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(l)}function f(l){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(l)}var Mt=Lt.extend("tooltip",{beforeMount:function(e,t){var n,o=this.getTarget(e);if(o.$_ptooltipModifiers=this.getModifiers(t),t.value){if(typeof t.value=="string")o.$_ptooltipValue=t.value,o.$_ptooltipDisabled=!1,o.$_ptooltipEscape=!0,o.$_ptooltipClass=null,o.$_ptooltipFitContent=!0,o.$_ptooltipIdAttr=x()+"_tooltip",o.$_ptooltipShowDelay=0,o.$_ptooltipHideDelay=0,o.$_ptooltipAutoHide=!0;else if(f(t.value)==="object"&&t.value){if(H(t.value.value)||t.value.value.trim()==="")return;o.$_ptooltipValue=t.value.value,o.$_ptooltipDisabled=!!t.value.disabled===t.value.disabled?t.value.disabled:!1,o.$_ptooltipEscape=!!t.value.escape===t.value.escape?t.value.escape:!0,o.$_ptooltipClass=t.value.class||"",o.$_ptooltipFitContent=!!t.value.fitContent===t.value.fitContent?t.value.fitContent:!0,o.$_ptooltipIdAttr=t.value.id||x()+"_tooltip",o.$_ptooltipShowDelay=t.value.showDelay||0,o.$_ptooltipHideDelay=t.value.hideDelay||0,o.$_ptooltipAutoHide=!!t.value.autoHide===t.value.autoHide?t.value.autoHide:!0}}else return;o.$_ptooltipZIndex=(n=t.instance.$primevue)===null||n===void 0||(n=n.config)===null||n===void 0||(n=n.zIndex)===null||n===void 0?void 0:n.tooltip,this.bindEvents(o,t),e.setAttribute("data-pd-tooltip",!0)},updated:function(e,t){var n=this.getTarget(e);if(n.$_ptooltipModifiers=this.getModifiers(t),this.unbindEvents(n),!!t.value){if(typeof t.value=="string")n.$_ptooltipValue=t.value,n.$_ptooltipDisabled=!1,n.$_ptooltipEscape=!0,n.$_ptooltipClass=null,n.$_ptooltipIdAttr=n.$_ptooltipIdAttr||x()+"_tooltip",n.$_ptooltipShowDelay=0,n.$_ptooltipHideDelay=0,n.$_ptooltipAutoHide=!0,this.bindEvents(n,t);else if(f(t.value)==="object"&&t.value)if(H(t.value.value)||t.value.value.trim()===""){this.unbindEvents(n,t);return}else n.$_ptooltipValue=t.value.value,n.$_ptooltipDisabled=!!t.value.disabled===t.value.disabled?t.value.disabled:!1,n.$_ptooltipEscape=!!t.value.escape===t.value.escape?t.value.escape:!0,n.$_ptooltipClass=t.value.class||"",n.$_ptooltipFitContent=!!t.value.fitContent===t.value.fitContent?t.value.fitContent:!0,n.$_ptooltipIdAttr=t.value.id||n.$_ptooltipIdAttr||x()+"_tooltip",n.$_ptooltipShowDelay=t.value.showDelay||0,n.$_ptooltipHideDelay=t.value.hideDelay||0,n.$_ptooltipAutoHide=!!t.value.autoHide===t.value.autoHide?t.value.autoHide:!0,this.bindEvents(n,t)}},unmounted:function(e,t){var n=this.getTarget(e);this.remove(n),this.unbindEvents(n,t),n.$_ptooltipScrollHandler&&(n.$_ptooltipScrollHandler.destroy(),n.$_ptooltipScrollHandler=null)},timer:void 0,methods:{bindEvents:function(e,t){var n=this,o=e.$_ptooltipModifiers;o.focus?(e.$_focusevent=function(i){return n.onFocus(i,t)},e.addEventListener("focus",e.$_focusevent),e.addEventListener("blur",this.onBlur.bind(this))):(e.$_mouseenterevent=function(i){return n.onMouseEnter(i,t)},e.addEventListener("mouseenter",e.$_mouseenterevent),e.addEventListener("mouseleave",this.onMouseLeave.bind(this)),e.addEventListener("click",this.onClick.bind(this))),e.addEventListener("keydown",this.onKeydown.bind(this))},unbindEvents:function(e){var t=e.$_ptooltipModifiers;t.focus?(e.removeEventListener("focus",e.$_focusevent),e.$_focusevent=null,e.removeEventListener("blur",this.onBlur.bind(this))):(e.removeEventListener("mouseenter",e.$_mouseenterevent),e.$_mouseenterevent=null,e.removeEventListener("mouseleave",this.onMouseLeave.bind(this)),e.removeEventListener("click",this.onClick.bind(this))),e.removeEventListener("keydown",this.onKeydown.bind(this))},bindScrollListener:function(e){var t=this;e.$_ptooltipScrollHandler||(e.$_ptooltipScrollHandler=new tt(e,function(){t.hide(e)})),e.$_ptooltipScrollHandler.bindScrollListener()},unbindScrollListener:function(e){e.$_ptooltipScrollHandler&&e.$_ptooltipScrollHandler.unbindScrollListener()},onMouseEnter:function(e,t){var n=e.currentTarget,o=n.$_ptooltipShowDelay;this.show(n,t,o)},onMouseLeave:function(e){var t=e.currentTarget,n=t.$_ptooltipHideDelay,o=t.$_ptooltipAutoHide;if(o)this.hide(t,n);else{var i=v(e.target,"data-pc-name")==="tooltip"||v(e.target,"data-pc-section")==="arrow"||v(e.target,"data-pc-section")==="text"||v(e.relatedTarget,"data-pc-name")==="tooltip"||v(e.relatedTarget,"data-pc-section")==="arrow"||v(e.relatedTarget,"data-pc-section")==="text";!i&&this.hide(t,n)}},onFocus:function(e,t){var n=e.currentTarget,o=n.$_ptooltipShowDelay;this.show(n,t,o)},onBlur:function(e){var t=e.currentTarget,n=t.$_ptooltipHideDelay;this.hide(t,n)},onClick:function(e){var t=e.currentTarget,n=t.$_ptooltipHideDelay;this.hide(t,n)},onKeydown:function(e){var t=e.currentTarget,n=t.$_ptooltipHideDelay;e.code==="Escape"&&this.hide(e.currentTarget,n)},tooltipActions:function(e,t){if(!(e.$_ptooltipDisabled||!R(e))){var n=this.create(e,t);this.align(e),!this.isUnstyled()&&et(n,250);var o=this;window.addEventListener("resize",function i(){lt()||o.hide(e),window.removeEventListener("resize",i)}),n.addEventListener("mouseleave",function i(){o.hide(e),n.removeEventListener("mouseleave",i)}),this.bindScrollListener(e),C.set("tooltip",n,e.$_ptooltipZIndex)}},show:function(e,t,n){var o=this;n!==void 0?this.timer=setTimeout(function(){return o.tooltipActions(e,t)},n):this.tooltipActions(e,t)},tooltipRemoval:function(e){this.remove(e),this.unbindScrollListener(e)},hide:function(e,t){var n=this;clearTimeout(this.timer),t!==void 0?setTimeout(function(){return n.tooltipRemoval(e)},t):this.tooltipRemoval(e)},getTooltipElement:function(e){return document.getElementById(e.$_ptooltipId)},create:function(e){var t=e.$_ptooltipModifiers,n=E("div",{class:!this.isUnstyled()&&this.cx("arrow"),"p-bind":this.ptm("arrow",{context:t})}),o=E("div",{class:!this.isUnstyled()&&this.cx("text"),"p-bind":this.ptm("text",{context:t})});e.$_ptooltipEscape?(o.innerHTML="",o.appendChild(document.createTextNode(e.$_ptooltipValue))):o.innerHTML=e.$_ptooltipValue;var i=E("div",I(I({id:e.$_ptooltipIdAttr,role:"tooltip",style:{display:"inline-block",width:e.$_ptooltipFitContent?"fit-content":void 0,pointerEvents:!this.isUnstyled()&&e.$_ptooltipAutoHide&&"none"},class:[!this.isUnstyled()&&this.cx("root"),e.$_ptooltipClass]},this.$attrSelector,""),"p-bind",this.ptm("root",{context:t})),n,o);return document.body.appendChild(i),e.$_ptooltipId=i.id,this.$el=i,i},remove:function(e){if(e){var t=this.getTooltipElement(e);t&&t.parentElement&&(C.clear(t),document.body.removeChild(t)),e.$_ptooltipId=null}},align:function(e){var t=e.$_ptooltipModifiers;t.top?(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignTop(e))):t.left?(this.alignLeft(e),this.isOutOfBounds(e)&&(this.alignRight(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignLeft(e))))):t.bottom?(this.alignBottom(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&this.alignBottom(e))):(this.alignRight(e),this.isOutOfBounds(e)&&(this.alignLeft(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignRight(e)))))},getHostOffset:function(e){var t=e.getBoundingClientRect(),n=t.left+nt(),o=t.top+ot();return{left:n,top:o}},alignRight:function(e){this.preAlign(e,"right");var t=this.getTooltipElement(e),n=this.getHostOffset(e),o=n.left+m(e),i=n.top+(h(e)-h(t))/2;t.style.left=o+"px",t.style.top=i+"px"},alignLeft:function(e){this.preAlign(e,"left");var t=this.getTooltipElement(e),n=this.getHostOffset(e),o=n.left-m(t),i=n.top+(h(e)-h(t))/2;t.style.left=o+"px",t.style.top=i+"px"},alignTop:function(e){this.preAlign(e,"top");var t=this.getTooltipElement(e),n=this.getHostOffset(e),o=n.left+(m(e)-m(t))/2,i=n.top-h(t);t.style.left=o+"px",t.style.top=i+"px"},alignBottom:function(e){this.preAlign(e,"bottom");var t=this.getTooltipElement(e),n=this.getHostOffset(e),o=n.left+(m(e)-m(t))/2,i=n.top+h(e);t.style.left=o+"px",t.style.top=i+"px"},preAlign:function(e,t){var n=this.getTooltipElement(e);n.style.left="-999px",n.style.top="-999px",it(n,"p-tooltip-".concat(n.$_ptooltipPosition)),!this.isUnstyled()&&rt(n,"p-tooltip-".concat(t)),n.$_ptooltipPosition=t,n.setAttribute("data-p-position",t);var o=A(n,'[data-pc-section="arrow"]');o.style.top=t==="bottom"?"0":t==="right"||t==="left"||t!=="right"&&t!=="left"&&t!=="top"&&t!=="bottom"?"50%":null,o.style.bottom=t==="top"?"0":null,o.style.left=t==="right"||t!=="right"&&t!=="left"&&t!=="top"&&t!=="bottom"?"0":t==="top"||t==="bottom"?"50%":null,o.style.right=t==="left"?"0":null},isOutOfBounds:function(e){var t=this.getTooltipElement(e),n=t.getBoundingClientRect(),o=n.top,i=n.left,a=m(t),d=h(t),p=at();return i+a>p.width||i<0||o<0||o+d>p.height},getTarget:function(e){return st(e,"p-inputwrapper")?A(e,"input"):e},getModifiers:function(e){return e.modifiers&&Object.keys(e.modifiers).length?e.modifiers:e.arg&&f(e.arg)==="object"?Object.entries(e.arg).reduce(function(t,n){var o=Ht(n,2),i=o[0],a=o[1];return(i==="event"||i==="position")&&(t[a]=!0),t},{}):{}}}});const It={class:"ql-formats"},Pt={class:"ql-font"},Rt={class:"ql-bold"},Nt={class:"ql-italic"},Ut={class:"ql-underline"},Ft={class:"ql-strike"},Kt={class:"ql-link"},Gt={class:"ql-list",value:"ordered"},Qt={class:"ql-list",value:"bullet"},Wt={class:"ql-list",value:"check"},Zt={class:"ql-clean"},Jt={__name:"CustomEditor",props:N({placeholder:{type:String,default:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const e=U(l,"modelValue"),t=["font","bold","italic","underline","strike","link","list"];return(n,o)=>{const i=F,a=Mt;return g(),z(i,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.value=d),editorStyle:"height: 240px",class:"mb-5",placeholder:l.placeholder,formats:t},{toolbar:L(()=>[r("span",It,[c(r("select",Pt,null,512),[[a,"Font",void 0,{bottom:!0}]]),c(r("button",Rt,null,512),[[a,"Bold",void 0,{bottom:!0}]]),c(r("button",Nt,null,512),[[a,"Italic",void 0,{bottom:!0}]]),c(r("button",Ut,null,512),[[a,"Underline",void 0,{bottom:!0}]]),c(r("button",Ft,null,512),[[a,"Strike",void 0,{bottom:!0}]]),c(r("button",Kt,null,512),[[a,"Link",void 0,{bottom:!0}]]),c(r("button",Gt,null,512),[[a,"Ordered List",void 0,{bottom:!0}]]),c(r("button",Qt,null,512),[[a,"Bullet List",void 0,{bottom:!0}]]),c(r("button",Wt,null,512),[[a,"Checklist",void 0,{bottom:!0}]]),c(r("button",Zt,null,512),[[a,"Clean Formatting",void 0,{bottom:!0}]])])]),_:1},8,["modelValue","placeholder"])}}},Yt={class:"my-5"},ee={__name:"GroupDialog",props:N({isNew:{type:Boolean,default:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const e=dt(),t=qt(),n=ct(),o=O(),i=O(!1),a=O({name:null,intro:null,avatar:null}),d=U(l,"modelValue"),p=l,y=async()=>{try{let u;p.isNew?(u=await V.post("group/create",a.value),t.push({name:"thread",params:{id:u.data.id}})):(u=await V.post("group/updateById",{id:d.value.id,...a.value}),i.value=!1),e.success(u.data.message)}catch(u){console.log(u),e.error(u)}},$=()=>{o.value.maximized||o.value.maximize()};return pt(i,()=>{p.isNew||(i.value?a.value={...d.value}:(d.value={...a.value},a.value={name:null,intro:null,avatar:null}))}),(u,q)=>{const _=ft,K=mt,G=ht;return g(),T(bt,null,[S(n).isLogin&&l.isNew?(g(),z(_,{key:0,onClick:q[0]||(q[0]=b=>i.value=!0),icon:"pi pi-plus",class:"text-sm font-thin ml-1",severity:"secondary"})):B("",!0),S(n).isLogin&&!l.isNew&&d.value.createdBy===S(n).user.id?(g(),z(_,{key:1,onClick:q[1]||(q[1]=()=>{}),class:"text-sm font-thin ml-1",icon:"pi pi-pencil",severity:"secondary"})):B("",!0),w(G,{visible:i.value,"onUpdate:visible":q[5]||(q[5]=b=>i.value=b),onShow:$,ref_key:"dialog",ref:o,header:l.isNew?"Add Group":"Update Group",maximizable:"",class:"!p-10"},{default:L(()=>[r("div",Yt,[w(K,{modelValue:a.value.name,"onUpdate:modelValue":q[2]||(q[2]=b=>a.value.name=b),placeholder:"Group Name",class:"!w-full mb-5"},null,8,["modelValue"]),w(Jt,{modelValue:a.value.intro,"onUpdate:modelValue":q[3]||(q[3]=b=>a.value.intro=b),placeholder:"Introduction"},null,8,["modelValue"]),w(vt,{avatar:a.value.avatar,"onUpdate:avatar":q[4]||(q[4]=b=>a.value.avatar=b)},null,8,["avatar"]),w(_,{onClick:y,class:"w-full mt-5"},{default:L(()=>[ut("Submit")]),_:1})])]),_:1},8,["visible","header"])],64)}}};export{ee as _,F as s};
