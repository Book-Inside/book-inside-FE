import { ProgressBarProps } from "@interface/type";

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="progress_bar_box">
      <div className="flex-1">
        <div className="progress_bar_all">
          <div
            className="progress_bar_progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="progress_bar_state">{progress}%</div>
    </div>
  );
}
