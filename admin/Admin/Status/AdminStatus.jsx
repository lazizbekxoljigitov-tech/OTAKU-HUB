import { useEffect } from "react"

function AdminStatus() {

  useEffect(()=>{
    document.title = 'OTAKU-HUB | Status'
  })
  return (
    <div>
      AdminStatus
    </div>
  )
}

export default AdminStatus
