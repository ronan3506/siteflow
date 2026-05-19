// @ts-nocheck
import { jsx as originalJsx, jsxs as originalJsxs, Fragment as originalFragment } from 'react/jsx-runtime';
import { TranslatedText } from './TranslatedText';

function wrapString(child: any) {
  if (typeof child === 'string' && child.trim() !== '') {
    return originalJsx(TranslatedText, { text: child });
  }
  return child;
}

export function jsx(type: any, props: any, key: any) {
  if (props && props.children !== undefined) {
    if (Array.isArray(props.children)) {
      props = { ...props, children: props.children.map(wrapString) };
    } else {
      props = { ...props, children: wrapString(props.children) };
    }
  }
  return originalJsx(type, props, key);
}

export function jsxs(type: any, props: any, key: any) {
  if (props && props.children !== undefined) {
    if (Array.isArray(props.children)) {
      props = { ...props, children: props.children.map(wrapString) };
    } else {
      props = { ...props, children: wrapString(props.children) };
    }
  }
  return originalJsxs(type, props, key);
}

export const Fragment = originalFragment;
