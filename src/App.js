import {useState} from 'react';
import './styles.css';

export default function App() {
    const color = 'white';
    let meaning;

    const emojiDictionary = {
        '🙏': 'folded hands',
        '🤝': 'handshake',
        '👋': 'waving hand',
        '🤟': 'love you gesture',
        '👏': 'clapping hands',
        '🙌': 'raising hands',
        '🤲': 'palms up together',
        '👐': 'open hands',
        '👊': 'oncoming fist',
        '🤞': 'crossed fingers',
        '🤘': 'sign of the horns',
        '🤙': 'call me hand',
        '🖖': 'vulcan salute',
    };

    const emojiArray = Object.keys(emojiDictionary);

    const [userInput, setUserInput] = useState('');

    const inputChangeHandler = (event) => {
        const userInput = event.target.value;
        console.log(userInput);

        if (!userInput) setUserInput(userInput);
        else if (emojiDictionary[userInput]) {
            meaning = 'Meaning = ' + emojiDictionary[userInput];
            setUserInput(meaning);
        } else {
            meaning = 'Emoji is not present in the database';
            setUserInput(meaning);
        }
    };

    const emojiClickHandler = (emoji) => {
        // console.log(emoji);
        meaning = 'Meaning = ' + emojiDictionary[emoji];
        setUserInput(meaning);
    };

    return (
        <div className='App'>
            <h1>
                <span style={{color: color}}>Emoji Interpreter</span>
            </h1>
            <input
                style={{padding: '1rem'}}
                size='50'
                // maxLength="2"
                placeholder='Enter an emoji'
                onChange={inputChangeHandler}
            />
            <br />
            <br />
            {userInput}
            <br />
            <hr />

            <h3> Emoji Database </h3>
            {emojiArray.map((emoji) => (
                <span
                    style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        cursor: 'pointer',
                    }}
                    onClick={() => emojiClickHandler(emoji)}
                >
                    {emoji}
                </span>
            ))}

            <hr />
        </div>
    );
}
