import * as QRCode from "qrcode";
import React, { useEffect, useRef } from "react";

interface QRCodeGeneratorProps {
  data: object;
  options?: QRCode.QRCodeRenderersOptions;
  onRefresh?(): object;
}

const DEFAULT_WIDTH = 300;

export function QRCodeGenerator({ data, options }: QRCodeGeneratorProps) {
  const width = options?.width || DEFAULT_WIDTH;
  const ref = useRef<HTMLCanvasElement | null>(null);

  const generateQR = (data: object) => {
    QRCode.toCanvas(
      ref.current,
      JSON.stringify(data),
      {
        errorCorrectionLevel: "L",
        width,
        ...options,
      },
      error => {
        if (error) {
          console.error(error);
        }
      },
    );
  };

  useEffect(() => {
    generateQR(data);
  }, []);

  return (
    <div>
      <canvas ref={ref} />
    </div>
  );
}
