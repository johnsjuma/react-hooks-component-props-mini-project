import React from 'react'

const makeEmo = (minutes) => {
    const interval = minutes < 30 ? 5 : 10;
    const emoji = minutes < 30 ? "☕️" : "🍱";

    let emojis = "";
    for (let i = 0; i < minutes; i += interval) {
      emojis += emoji;
    }

    return emojis;
}

const Article = ({title, date = "January 1, 1970", preview, minutes}) => {
    const emojies = makeEmo(minutes)
  return (
    <article>
        <h3>{title}</h3>
        <small>
        {date} • {emojies} {minutes} min read
        </small>
        <small>
            <p>{preview}</p>
        </small>
    </article>
  )
}

export default Article