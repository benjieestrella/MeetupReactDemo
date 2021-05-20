import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is the First meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Hvannhagi_9.jpg',
    address : 'Here where the address is',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

  },
  {
    id: 'm2',
    title: 'This is the Second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/HafenCity%2C_Hamburg%2C_Germany_%2848855293557%29.jpg',
    address : 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

  }
];

function AllMeetupsPage(){
  return (
        <section>
            <h1>All Meetups</h1>
           <MeetupList meetups={DUMMY_DATA}/>
        </section>
    );

}

export default AllMeetupsPage;