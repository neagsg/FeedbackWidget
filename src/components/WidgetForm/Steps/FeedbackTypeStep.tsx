import { FeedbackTypeProps, feedbacktypes } from ".."

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackTypeProps) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
      <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbacktypes).map(([key, value]) => {
        return (
          <button
            key={key}
            className="bg-zinc-800 py-5 rounded-lg w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            type="button"
            onClick={() => onFeedbackTypeChanged(key as FeedbackTypeProps)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        )
      })}
    </div>
  )
}