import React, { useState } from 'react';
import {appendErrors, useForm} from 'react-hook-form';

export const NewActivityForm = ({onSubmit, isUpdate, user}) => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const [activityInfo,setActivityInfo] = useState([]);
    // const onSubmit = data => {
    //     setActivityInfo(data)
    //     console.log(data)
    //     reset
    // }

    console.log(user)
    return (
        <div className='acivityform-container'>
            <h1>New Activity</h1>   
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("activityType",{required: true})}>
                    <option value="">{isUpdate? user.activities[0].activityType : 'activity type'}</option>
                    <option value="cardio">cardio</option>
                    <option value="weight">weight</option>
                </select>
                {errors.activityType && <p>Please chhoose your activity types</p>}
                <br />
                <select {...register(("activity"))}>                                                                                                                                                            
                    <option value="">{isUpdate? user.activities[0].activity : 'activity'}</option>
                    <option value="run">Run</option>
                    <option value="bicycle">bicycle</option>
                    <option value="ride">ride</option>
                    <option value="swim">swim</option>
                    <option value="walk">walk</option>
                    <option value="hike">hike</option>
                </select>
                {errors.activityType && <p>Please chhoose your activity</p>}                                                   
                <br/>
                <input value={isUpdate? new Date(user.activities[0].date).toISOString().split('T')[0] : null } type="date" {...register("date",{ required: true})}/>
                {errors.date && <p>Please enter the date</p>}                                                                           
                <br/>
                <input value={isUpdate? user.activities[0].duration : null} type="number" placeholder='duration(minutes)'  {...register("duration",{min: {value:0,message: "duration can't be zero"}})}/>
                <p>{errors.duration?.message}</p>
                <br/>
                <textarea value={isUpdate? user.activities[0].comment : null} placeholder='Comment' {...register("comment")}></textarea>
                <br/>
                <button>Add Activity</button>
            </form> 
        </div>
    )
}
export default NewActivityForm