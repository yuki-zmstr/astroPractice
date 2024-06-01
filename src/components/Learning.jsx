import data from './data/learningData.json'

export default function Learning() {
    const keys = Object.keys(data)
    return (
        <div>
            <h4>An archive of great learning material.</h4>
            {keys.map(key => (
                <div>
                    <h4>{data[key].header}</h4>
                    {data[key].content.map(item => (
                        <li>{item.title}&nbsp;
                            <a href={item.link}>link</a>
                        </li>))}
                </div>
            ))}
        </div>
    )
}