import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';


function MeetupList(props){
  return(
      <ul className={classes.list}>
        {props.meetups.map((meetup => <MeetupItem 
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          // meetup={meetup} // can be as a whole but need to be de structure it inside the meetup components
        />
        ))}
      </ul>
  );
}

export default MeetupList;