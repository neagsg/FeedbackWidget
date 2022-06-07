import { CloseButton } from "./CloseButton"

import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'
import { useState } from "react"

const feedbacktypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'imagem de um inseto',
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'imagem de uma lâmpada',
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'imagem de um balão de pensamento',
    }
  },
}

type FeedbackTypeProps = keyof typeof feedbacktypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypeProps | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbacktypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 py-5 rounded-lg w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
              onClick={() => setFeedbackType(key as FeedbackTypeProps)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
      ) : (
        <p>Hello World</p>
      )}
      <footer>
        <span className="text-xs text-neutral-400">Feito com ♥</span>
      </footer>
    </div>
  )
}