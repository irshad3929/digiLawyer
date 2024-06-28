'use client'

import React, { useState, useEffect } from 'react'

interface TypeWriterProps {
  words: string[]
  typingSpeed?: number
  wordPause?: number
}

export function TypeWriter({
  words,
  typingSpeed = 150,
  wordPause = 1000,
}: TypeWriterProps) {
  const [text, setText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null

    const type = () => {
      timeout = setTimeout(() => {
        const currentWord = words[currentWordIndex]
        const currentText = currentWord.substring(0, currentCharIndex + 1)
        setText(currentText)

        if (currentCharIndex < currentWord.length - 1) {
          setCurrentCharIndex(currentCharIndex + 1)
        } else {
          setTimeout(() => {
            setCurrentCharIndex(0)
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
          }, wordPause)
        }
      }, typingSpeed)
    }

    type()

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [currentCharIndex, currentWordIndex, words, typingSpeed, wordPause])

  return (
    <div
      style={{ color: '#9B8B5D', display: 'inline-block', minWidth: '100px' }}
    >
      {text}
      <div
        className="cursor"
        style={{
          display: 'inline-block',
          width: '1px',
          border: '1px solid #9B8B5D',
        }}
      >
        |
      </div>
    </div>
  )
}

export default TypeWriter
