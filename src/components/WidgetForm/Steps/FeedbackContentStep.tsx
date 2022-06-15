import { FormEvent, useState } from 'react'
import { ArrowLeft } from 'phosphor-react';
import { FeedbackTypeProps, feedbackTypes } from '../'

import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackTypes {
  feedbackType: FeedbackTypeProps;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent
}: FeedbackTypes) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  function handleSubmitComment(event: FormEvent) {
    event.preventDefault()

    console.log({
      screenshot,
      comment,
    })

    onFeedbackSent()
  }


  const feedbackTypeInfo = feedbackTypes[feedbackType]
  return (
    <>
      <header className="flex px-10 items-center">
        <button
          className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex gap-2 items-center">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form
        onSubmit={handleSubmitComment}
        className="my-4 w-full"
      >
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={event => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />          
          <button
            disabled={comment.length === 0}
            type="submit"
            className="bg-brand-500 p-2 w-full rounded-[4px] border-transparent flex flex-1 items-center justify-center text-sm hover:bg-brand-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>

      {/* <div className="flex py-8 gap-2 w-full"></div> */}
      
    </>
  )
}