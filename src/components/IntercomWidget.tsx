"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Intercom: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    intercomSettings: any;
  }
}

export function IntercomWidget() {
  useEffect(() => {
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "py6ncg0l",
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://widget.intercom.io/widget/py6ncg0l";
    document.head.appendChild(script);

    return () => {
      if (window.Intercom) {
        window.Intercom("shutdown");
      }
    };
  }, []);

  return null;
}
