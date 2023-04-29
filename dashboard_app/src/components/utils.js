import { redirect } from 'react-router-dom'


// export async function taskLoder() {
//   const data = await fetch('http://localhost:3000/tasks')
//   return data.json();
// }

export async function createAction({ request }){
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('priority') === ''
  }

  console.log(task)
  return redirect('/')
}