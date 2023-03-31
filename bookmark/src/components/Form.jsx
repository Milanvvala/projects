import { useContext } from 'react';
import { Context } from '../Context/mainContext';

const Form = ( props ) => {
    const { type, submit } = props
    const { handleChange, temp } = useContext( Context )
    console.log( type )

    return (
        <>  <div style={ { maxWidth: '500px' } }>
            <form onSubmit={ submit } className="m-5">
                { type === 'signup' ?
                    <><label htmlFor="name" required>Name</label>
                        <input onChange={ handleChange } value={ temp.name } name="name" id="name" type="text" required /></> : '' }

                { type === 'create' ?
                    <><label htmlFor="url" required>Url</label>
                        <input onChange={ handleChange } value={ temp.url } name="url" id="url" type="url" required /></> : '' }

                { type === 'signup' || type === 'login' ? <>
                    <label htmlFor="name" required>Email</label>
                    <div className='grid'>
                        <input onChange={ handleChange } value={ temp.email } name="email" id="email" type="email" required />
                    </div>
                    <div className='grid'>
                        <div>
                            <label htmlFor="password" required>Password</label>
                            <input onChange={ handleChange } minLength={ 5 } value={ temp.password } name="password" id="password" type="password" required />
                        </div>
                        { type === 'signup' ? <div>
                            <label htmlFor="confirmPassword" required>Confirm Password</label>
                            <input onChange={ handleChange } minLength={ 5 } value={ temp.confirmPassword } name="confirmPassword" id="confirmPassword" type="password" required /> </div> : '' }
                    </div>
                </> : '' }
                <button type="submit" >Submit</button>
            </form>
        </div>
        </>
    )
}
// submit disabled todo {temp.password === temp.confirmPassword ? '' : 'disabled'}
export default Form