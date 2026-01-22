import React from 'react'
import styles from "../featurecourses/Featurecourses.module.css"
import course1 from '../../assets/courses/course1.png';
import course2 from '../../assets/courses/course2.png';
import course3 from '../../assets/courses/course3.png';
import course4 from '../../assets/courses/course4.png';
import course5 from '../../assets/courses/course5.jpg'
import course6 from '../../assets/courses/course6.png';
import ellipse from '../../assets/courses/Ellipse3.png'
import Featurecard from '../../components/featurecard/featurecard';

const Featurecourses = () => {
  const courses = [{
    id:1,
    icon: course1,
    title:'CSIR NET',
    subtitle:'5 Courses'
  },{
    id:2,
    icon:course2,
    title:'UGC NET',
    subtitle:'16 Courses'
  },{
    id:3,
    icon:course3,
    title:'CUET PG',
    subtitle:'76 Courses'
  },{
    id:4,
    icon:course4,
    title:'GAT B',
    subtitle:'22 Courses'
  },{
    id:5,
    icon:course5,
    title:'SET',
    subtitle:'110 Courses'
  },{
    id:6,
    icon:course6,
    title:'IIT JAM',
    subtitle:'85 Courses'
  }]
  return (
    <div className={styles.main}>
    <img src={ellipse} alt="ellipse" className={styles.ellipse}/>
        <div className={styles.primary}>
            <h3>Featured <span className={styles.highlight}>Courses</span></h3>
            <p>Explore Our Range of Courses for In-Depth Learning and Exam Success</p>
        </div>
        <div className={styles.secondary}>
        {
          courses.map(items=>{
            return <Featurecard  
              key={items.id}
              icon={items.icon}
              title={items.title}
              subtitle={items.subtitle}
            />
          })
        }
        </div>
        <div className={styles.third}>
          <button className={styles.btn}>view All Courses</button>
        </div>
    </div>
  )
}

export default Featurecourses