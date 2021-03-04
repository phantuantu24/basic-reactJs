import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        },
    ]
    // const personList = persons.map((person, index) => (
    //     <Person key={index} personObject={person}/>
    // ))
    const nameList = names.map((nameItem, index) =>
        <h2 key={index}>{nameItem}</h2>
    )
    return (
        <div>
            {/* {personList} */}
            {nameList}
        </div>
    )
}

export default NameList
