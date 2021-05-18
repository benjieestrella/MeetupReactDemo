const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is the First meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Hvannhagi_9.jpg',
    address : 'dira did2 baki',
    description: 'ahmmm basta naa lay description payts nana'

  },
  {
    id: 'm2',
    title: 'This is the Second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/HafenCity%2C_Hamburg%2C_Germany_%2848855293557%29.jpg',
    address : 'ambut asa na dra nga street creepy kaau ',
    description: 'ahmmm wala najud ko labot ana nganu naabot man mo dra heheh'

  }
];

function AllMeetupsPage(){
  return (
        <section>
            <h1>All Meetups</h1>
          <ul>
              {DUMMY_DATA.map((meetup) => {
                return (

                  <li key={meetup.id}>{meetup.title}</li>
                  
                );
              })}
          </ul>
            
        </section>
    );

}

export default AllMeetupsPage;