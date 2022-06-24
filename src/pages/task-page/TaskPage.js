import React from 'react'
import './TaskPage.css'
import { Button } from "@mui/material";
import TaskResult from '../../components/task-result/TaskResult'

function TaskPage() {
  return (
    <div className='problemPage'>
        <div className='problemPage__info'>
            <Button variant="outlined">Легкий</Button>
            <Button variant="outlined">Средний</Button>
            <Button variant="outlined">Сложный</Button>
        </div>

        <TaskResult
                img="https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bWVldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                title="Онлайн Встреча"
                description="При поддержке Министерства информации и общественного развития в рамках реализации социального проекта «Комплекс мероприятий."
                star={4.73}
                level="Легкий"
      />

      <TaskResult
          img="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8aGVscHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
          title="Помощь"
          description="Помоги коллегам"
          star={4.3}
          level="Средний"
      />

      <TaskResult
          img="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          title="Проект"
          description="Каждый этап"
          star={3.8}
          level="Сложный"
      />
      <TaskResult
          img="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFsa3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
          title="Meetings 1-1"
          description="Get to know each other"
          star={4.1}
          level="Сложный"
      />
      <TaskResult
          img="https://images.unsplash.com/photo-1525875098832-46c7d9d0794e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFjdGl2aXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          title="Outside activities"
          description="Chekc this one out"
          star={5.0}
          level="Легкий"
      />
      <TaskResult
          img="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lmdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
          title="Gift"
          description="it's a birthday?"
          star={4.23}
          level="Легкий"
      />
      <TaskResult
          img="https://images.unsplash.com/photo-1559891272-8a206fbc5c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVuY3R1YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
          title="On time"
          description="before 9am/2pm!!"
          star={3.85}
          level="Сложный"
      />
    </div>
  )
}

export default TaskPage