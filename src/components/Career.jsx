import styles from './Career.module.css'
import data from './data/careerData.json'

export default function Career() {
    return (
        <div>
            <h4>Previous Education</h4>
            <ul>
                {data.educationExperiences.map(item => <li>{item}</li>)}
            </ul>
            <h4>Career</h4>
            <ul>
                {data.workExperiences.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}