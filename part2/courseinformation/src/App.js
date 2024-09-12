import Course from './components/Course'


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const total0 = courses[0].parts.reduce((s, p) => {
    let accumulator = 0;
    if(typeof s === 'number'){
      accumulator = s + p.exercises
    }else{
      accumulator = s.exercises + p.exercises
    }
    
    console.log('what is happening', s, p)
    console.log(accumulator)
    return accumulator
  })

  const total1 = courses[1].parts.reduce((s, p) => {
    let accumulator = 0;
    if(typeof s === 'number'){
      accumulator = s + p.exercises
    }else{
      accumulator = s.exercises + p.exercises
    }
    
    console.log('what is happening', s, p)
    console.log(accumulator)
    return accumulator
  })

  return (
    <div>
      <h1>{courses[0].name}</h1>
      <ul>
        {courses[0].parts.map(part => 
          <Course key={part.id} course={part} />
        )}
      </ul>
      <p>total of {total0} exercises</p>
      <h1>{courses[1].name}</h1>
      <ul>
        {courses[1].parts.map(part => 
          <Course key={part.id} course={part} />
        )}
      </ul>
      <p>total of {total1} exercises</p>
    </div>
  )
}

export default App