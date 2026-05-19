// @ts-nocheck
import { jsxDEV as originalJsxDEV, Fragment as originalFragment } from 'react/jsx-dev-runtime';
import { TranslatedText } from './TranslatedText';

function wrapString(child: any) {
  if (typeof child === 'string' && child.trim() !== '') {
    return originalJsxDEV(TranslatedText, { text: child }, undefined, false, {
      fileName: 'TranslatedText',
      lineNumber: 1,
      columnNumber: 1
    }, this);
  }
  return child;
}

export function jsxDEV(type: any, props: any, key: any, isStaticChildren: boolean, source: any, self: any) {
  if (props && props.children !== undefined) {
    if (Array.isArray(props.children)) {
      props = { ...props, children: props.children.map(wrapString) };
    } else {
      props = { ...props, children: wrapString(props.children) };
    }
  }
  return originalJsxDEV(type, props, key, isStaticChildren, source, self);
}

export const Fragment = originalFragment;
