import { useState } from "react";
import { InfoIcon, XIcon } from "../../icons";

export interface ViewportAlertProps {
  viewPortIssues: string[];
}

export function ViewportAlert({ viewPortIssues }: ViewportAlertProps) {
  const [showViewPortIssuesAlert, setShowViewPortIssuesAlert] = useState(true);

  return showViewPortIssuesAlert ? (
    <div
      className="lg:hidden relative alert alert-warning shadow-lg opacity-90 mb-4"
      role="alert"
    >
      <InfoIcon className="hidden md:block" />
      <div>
        <h3 className="font-bold">Ooops!</h3>
        <div className="text-xs">
          This project may not work on smaller viewports:{" "}
          <span className="font-semibold">{viewPortIssues.join(" - ")}</span>
        </div>
      </div>
      <button
        className="absolute right-4 top-4"
        onClick={() => setShowViewPortIssuesAlert(false)}
        aria-label="Close Alert"
      >
        <XIcon />
      </button>
    </div>
  ) : null;
}
