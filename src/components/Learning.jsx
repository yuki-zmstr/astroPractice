import data from './data/learningData.json'

export default function Learning() {
    return (
        <div>
            <h4>An archive of great learning material.</h4>
            {data.entries.map(entry => (
                <div>
                    <h4>{entry.header}</h4>
                    {entry.content.map(item => (
                        <li>{item.title}&nbsp;
                            <a href={item.link} target="_blank">link</a>
                        </li>))}
                </div>
            ))}
        </div>
    )
}