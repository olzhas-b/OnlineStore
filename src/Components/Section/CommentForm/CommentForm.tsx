import React, { useRef } from 'react'
import { useSelector } from 'react-redux';

interface CommentFormProps {
  onAdd(title: string): void
}

export const CommentForm: React.FC<CommentFormProps> = props => {
  const logged = useSelector((state: any) => state.isLogged);
  const ref = useRef<HTMLTextAreaElement>(null)



  const ClickPressHandler = (event: any) => {
      event.preventDefault(); 

      if (ref.current!.value !== '' && ref.current!.value.length < 50){
        props.onAdd(ref.current!.value)
        ref.current!.value = ''
      }
      else {
        ref.current!.value = ''
        alert('Should be less than 50 words!');
      }

  }

  return (
    <>
    
    <form>
      {!logged? <span style={{paddingLeft:"40px"}}>To write comment please authorize</span>:
      <div>
        <div className="mb-3">
            <div className="form-group ml-3 mr-5">
                <label htmlFor="exampleFormControlTextarea1">Reviews</label>
                <textarea ref={ref} className="form-control" id="exampleFormControlTextarea1" placeholder="Leave a review"></textarea>
            </div>
        </div>
        <button onClick={ClickPressHandler} type="submit" className="btn btn-info mb-4 ml-3">Add</button>
      </div>}
    </form>

    </>
  )
}
