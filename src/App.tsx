import "./styles.css";
import { QRCodeGenerator } from "./QRCodeGenerator";

export default function App() {
  const params = new URLSearchParams();
  const trackingId = params.get("tracking_id");
  const userId = params.get("user_id");
  const width = params.get("width") || 500;

  console.log(trackingId, width);

  return (
    <div className="App">
      <QRCodeGenerator
        options={{
          width
        }}
        data={
          trackingId
            ? {
                tracking_id: trackingId
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
