import "./styles.css";
import { QRCodeGenerator } from "./QRCodeGenerator";

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const trackingId = params.get("tracking_id");
  const userId = params.get("user_id");
  const width = params.get("width") || 500;
  const isNumber = params.get("is_number") || 0;

  return (
    <div className="App">
      <QRCodeGenerator
        options={{
          width: Number(width)
        }}
        data={
          trackingId
            ? {
                tracking_id: !!Number(isNumber)
                  ? Number(trackingId)
                  : trackingId
              }
            : userId
            ? {
                user_id: userId
              }
            : { tracking_id: 123 }
        }
      />
    </div>
  );
}
