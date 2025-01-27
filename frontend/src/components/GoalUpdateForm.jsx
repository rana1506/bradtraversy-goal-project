import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateGoal } from '../features/goals/goalSlice'

function GoalUpdateForm({goal}) {
  const [formData, setFormData] = useState({ text: '' });    
  const [goalId, setGoalId] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()      
    dispatch(updateGoal( {goalId, formData} ))
  }

  useEffect(()=>{
    setGoalId(goal._id)
    setFormData({ text: goal.text });
  }, [])

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Update Goal</label>
          <input
            type='text'
            name='text'
            id='text'
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Update Goal
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalUpdateForm
