import ShowDetails from './ShowDetails'

const UserComponent = (props) => {


        return(
         <div>

            <h1>Contacts!</h1>
            <div className='user_area'>
            {props.contacts.map((user, index) => {
             return <div key={'u'+index} className='user_list'>
                <img src={user.picture.thumbnail} width='auto' height='125' alt="user thumbnail" /> 
                <p key={'li'+index}>{user.name.title} {user.name.first} {user.name.last}</p>

             <ShowDetails key={user.login.uuid} index={index} showUserDetails={props.showUserDetails} contacts={props.contacts} />

             </div>
            })}
            </div>
         </div>
        )
    }

    export default UserComponent;