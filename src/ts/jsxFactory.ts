export function h(type: any, props = {}, ...children: any[]) {
    let element = `<${type} ${Object.entries(props || {})
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')}>${children.join('')}</${type}>`;
    return element;
  }