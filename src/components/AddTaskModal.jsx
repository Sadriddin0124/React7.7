import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { addNewTask, toggle, updateTask } from '../features/tasks/tasksSlice'
import { nanoid } from 'nanoid'
const AddTaskModal = ({edit, setEdit}) => {
    const openModal = useSelector((state)=> state.tasks.tasksModal)
    const dispatch = useDispatch()
    const addTask =(e)=> {
        e.preventDefault()
        let payload = {
            id: edit ? edit.id : nanoid(),
            title: e.target[0].value ? e.target[0].value : edit.title,
            category: e.target[1].value ? e.target[1].value : edit.category
        }
        if (edit) {
          dispatch(updateTask({...payload}))
        }
        else {
          dispatch(addNewTask({...payload}))
        }
        dispatch(toggle())
        setEdit("")
    }
  return (
    <div>
      <Modal isOpen={openModal} toggle={()=>dispatch(toggle())}>
        <ModalHeader>
            <h1>Change Task</h1>
        </ModalHeader>
        <ModalBody>
            <form id='tasks' onSubmit={addTask}>
                <input type="text" placeholder='Title...' className='form-control' defaultValue={edit.title}/>
                <select className='form-control my-2' defaultValue={edit.category}>
                    <option value="open">open</option>
                    <option value="pending">pending</option>
                    <option value="inproge">inproge</option>
                    <option value="progress">progress</option>
                </select>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className="btn btn-primary" type='submit' form='tasks'>Save</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default AddTaskModal
