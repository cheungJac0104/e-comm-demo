interface Navigator {
    xr?: {
      isSessionSupported(sessionType: string): Promise<boolean>;
      requestSession(sessionType: string, options?: any): Promise<any>;
    };
  }
  
  interface Window {
    XRSession?: any;
    XRSystem?: any;
  }