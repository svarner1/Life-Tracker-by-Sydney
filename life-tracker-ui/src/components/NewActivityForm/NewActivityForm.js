import { useState } from "react"
// import axios from "axios"
//import apiClient from "../../services/apiClient"
//import NotAllowed from "../NotAllowed/NotAllowed"
import "./NewActivityForm.css"

export default function NewActivityForm({ user, addActivity }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    caption: "",
    imageUrl: "",
  })

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  // const handleOnSubmit = async () => {
  //   setIsLoading(true)

  //   const { data, error } = await apiClient.createPost({ caption: form.caption, imageUrl: form.imageUrl })
  //   if (data) {
  //     addActivity(data.post)
  //     setForm({ caption: "", imageUrl: "" })
  //   }
  //   if (error) {
  //     setError(error)
  //   }

  //   setIsLoading(false)
  // }

  // const handleOnSubmit = async (e) => {
  //   e.preventDefault()
  //   setIsLoading(true)

  //   try {
  //     const res = await axios.post(`http://localhost:3001/posts`, form)
  //     if (res?.data?.post) {
  //       addActivity(res.data.post)
  //       setForm({ caption: "", imageUrl: "" })
  //     } else {
  //       setError("Something went wrong with post creation.")
  //     }
  //   } catch (err) {
  //     console.log(err)
  //     const message = err?.response?.data?.error?.message
  //     setError(message ?? String(err))
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // const renderForm = () => {
  //   if (!user?.email) {
  //     return <NotAllowed />
  //   }
  //   return (
  //     <div className="form">
  //       <div className="input-field">
  //         <label htmlFor="caption">Caption</label>
  //         <input
  //           type="text"
  //           name="caption"
  //           placeholder="A cool caption here"
  //           value={form.caption}
  //           onChange={handleOnInputChange}
  //         />
  //       </div>

  //       <div className="input-field">
  //         <label htmlFor="imageUrl">Image URL</label>
  //         <input
  //           type="text"
  //           name="imageUrl"
  //           placeholder="The image URL for your workstation"
  //           value={form.imageUrl}
  //           onChange={handleOnInputChange}
  //         />
  //       </div>

  //       <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
  //         {isLoading ? "Loading..." : "Submit"}
  //       </button>
  //     </div>
  //   )
  // }

  // return (
  //   <div className="NewPostForm">
  //     <div className="card">
  //       <h2>Create a new post</h2>

  //       {Boolean(error) && <span className="error">{error}</span>}

  //       {renderForm()}
  //     </div>
  //   </div>
  //)
}