export function h(type: any, props = {}, ...children: any[]) {
  console.log('type :', type, typeof type);

  // if (typeof type === 'function')

  let renderType = '';

  if (typeof type === 'function') {
    renderType = 'main';

    const getContent = type({ children: children })
    console.log('getContent :', getContent);

    return getContent;
  } else {
    renderType = type;

    let element = `<${renderType} ${Object.entries(props || {})
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')}>${children.join('')}</${renderType}>`;

    return element;
  }
}

