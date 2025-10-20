declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
declare module '*.webp';

// Типы для SVG как React-компонентов
declare module '*.svg?react' {
  import React = require('react');
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// Типы для SCSS-модулей
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}