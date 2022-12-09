import React, { useState } from "react";
import { Modal } from 'repopup';

const modal = () => {
  // const [modal, setModal] = useState(false)
    const [open,setOpen] = useState(false);

return (
  <div>
	<button onClick={() => setOpen(true)}>Open</button>
	<Modal 
      onRequestClose={() => setOpen(false)} 
      open={open} 
      title={`Message sent successfully 🎉🎉🎉 `} 
     />
</div>
  
  )
}

export default modal