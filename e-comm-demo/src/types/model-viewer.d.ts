declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': {
      src: string;
      ar?: boolean;
      'camera-controls'?: boolean;
      'ar-modes'?: string;
      'environment-image'?: string;
      'shadow-intensity'?: number | string;
      style?: React.CSSProperties;
      class?: string;
      children?: React.ReactNode;
      ref?: React.Ref<HTMLElement>;
    } & React.HTMLAttributes<HTMLElement>;
  }
}