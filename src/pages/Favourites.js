import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
      content = <p>You have no Favorites. Add some!</p>;
    } else {
      content = <MeetupList meetups={favoritesCtx.favorites} />;
    }

    return <section>
      <h1>My Favorites:</h1>
      {content}
    </section>;
  }
  
  // favorites would be ereased with page reload
  // as these data are not being stored on a server or in browser memory

  export default FavoritesPage;
  