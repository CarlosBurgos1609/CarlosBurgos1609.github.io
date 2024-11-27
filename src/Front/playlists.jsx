import './../Style/style.scss';
import Mylogo from './../img/Mylogo.png'
import spotify from './../img/spotify.png'



function PlayLists() {
  return (
    <body>
      <div class="part">
        <p>   cab</p>
      </div>

      <section class="containers">
        <section class="playlist">
          <h1>Play Lists</h1>

          <div class="play">
            <div class="colum-1">
              <iframe src="https://open.spotify.com/embed/playlist/6KERsvpYzzhISMRnJz77xh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <div class="colum-2">
              <iframe src="https://open.spotify.com/embed/playlist/6KERsvpYzzhISMRnJz77xh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </section>
      </section>
    </body >
  );
}
export default PlayLists;