import React from 'react';
import weekendfly from '../../images/weekendfly.jpg';
import redclay from '../../images/redclay.jpg';
import nightfamily from '../../images/nightfamily.jpg';
import ccpgif from '../../images/ccpgif.gif';
import mincake from '../../images/mincake.jpg';
import timefive from '../../images/timefive.jpg';

const blogList = [
  {
    name: 'Sample Sampler: Aretha Franklin - One Step Ahead',
    blogSideDate: 'September 16, 2017',
    blogSideTags:
      'Aretha Franklin, hip hop, Mos Def, Ms. Fat Booty, oldies, One Step Ahead, samples',
    description: (
      <span>
        For this sample sampler, I&apos;m presenting one of hip hop&apos;s
        favorite soul samples of all time: soul queen Aretha Franklin&apos;s One
        Step Ahead, popularized by Mos Def in Ms. Fat Booty.
      </span>
    ),
    link: (
      <iframe
        title="onestepahead"
        src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A0dSRoWYf0GOzX9L44g53sZ"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    ),
    id: '13',
    sepContent: (
      <div>
        <iframe
          title="onestepahead"
          src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A0dSRoWYf0GOzX9L44g53sZ"
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <iframe
          title="msfatbooty"
          src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A0IVAlb0cFCH1cQ974iR1TU"
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <iframe
          title="engelwood"
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/226618088&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
        <iframe
          title="bluexile"
          src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A53GyUog0e8fbctqyJieLS2"
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    ),
  },
  {
    name: 'City Pop 2',
    blogSideDate: 'September 16, 2017',
    blogSideTags: '80s, city pop, funk, groovy, Japan, jazz, synth',
    image: timefive,
    alt: 'Gentle Breeze',
    description: (
      <p>
        I made the debut city pop curated playlist back when I first became
        infatuated with this genre, and was about twenty albums in. Since then
        that infatuation has become somewhat of an obsession, and I’ve
        temporarily put everything else on the back burner while I mine deeper
        and deeper. A few months later, I’m over eighty albums in, and I hope
        that this playlist will reflect that.
      </p>
    ),
    link: (
      <iframe
        title="city pop 2"
        width="100%"
        height="450"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/352478017&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    ),
    id: '12',
    sepContent: null,
  },
  {
    name: 'Chicano Batman - Cycles of Existential Rhyme',
    blogSideDate: 'September 8, 2017',
    blogSideTags: 'bossa nova, Chicano Batman, funk, Los Angeles, wah',
    description: (
      <div>
        <p>
          A name like Chicano Batman is automatically interesting. I was lucky
          enough to see these guys put on a free show in Austin and to me
          watching them play was just that, they looked like they were having a
          blast, despite wearing slick three-piece suits in sweltering Texas
          heat. Their songs don’t seem to follow any set structure, and much
          like Batman, seem to be able to hit you from any direction at any
          time. Often in a single song, they trip across multiple tempo changes
          and genre hop across funk, South American tropicalia, Motown, bossa
          nova, psychedelia, pop, all while the very charismatic lead Bardo
          Martinez switches seamlessly between Spanish and English. Despite this
          seemingly haphazard musical style, they retain a precision and purpose
          with every note. Brimming with filthy 70s organ riffs and wah guitar
          solos, Chicano Batman will find you wherever you are, just like
          Batman.
        </p>
        <p>
          Favorite song(s):
          <b> Cycles of Existential Rhyme, Black Lipstick </b>
          (single)
        </p>
      </div>
    ),
    link: (
      <iframe
        title="blacklipstick"
        width="auto"
        height="315"
        src="https://www.youtube.com/embed/3sOXiL05VSY"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    id: '11',
    sepContent: null,
  },
  {
    name: 'Minden - Sweet, Simple Things',
    blogSideDate: 'September 4, 2017',
    blogSideTags: 'funk, Minden, pop, Sweet Simple Things',
    image: mincake,
    alt: 'Minden cupcake',
    description: (
      <div>
        <p>
          Listening to this album always reminds me of when I was a young
          teenage girl, timidly discovering how complicated first love can be in
          the loft of my parent’s imaginary colonial home in some generic
          suburbia. Once the daydream fades, I remember that I am in fact in
          Texas, and also a 22 year old man. However, my sweet tooth remained
          and with it a sobering understanding of how even the sweetest candy
          can end up rotting your teeth, destroying irreplaceable tooth enamel
          and encouraging dangerous bacteria growth and, dare I say, gingivitis.
          But am I still gonna take a piece? Goddamn right I am, because I have
          very poor self control. That’s what this album is like. Minden’s sweet
          coquettish vocals are backed by gorgeously simple and uncluttered
          instrumentals, a seductive blend of disco and funk and synthpop. You
          can enjoy this album anywhere.
        </p>
        <p>
          Favorite song:
          <b> Sheila</b>
        </p>
      </div>
    ),
    link: (
      <iframe
        title="Sweet Simple Things"
        src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A37d3I8tpth0aPQoCaTdx8C"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    ),
    id: '10',
    sepContent: null,
  },
  {
    name: 'Cool Calm Pete - Lost The Album',
    blogSideDate: 'September 4, 2017',
    blogSideTags: 'backpack rap, Cool Calm Pete, hip hop, Lost The Album',
    image: ccpgif,
    description: (
      <div>
        <p>
          Known by his distinctively relaxed, almost lethargic flow, Queens
          rapper Cool Calm Pete drops hypnotic bars so casually delivered it
          seems practically conversational. Armed with an arsenal of stupidly
          obscure funk and soul samples and colorful found dialogue skits a la
          Doom, Peter “Pedro” Chung builds his snappy yet easygoing beats around
          anything from gold digging prudes to public service announcements for
          brushing your teeth. After releasing his debut album Lost in ’05, now
          a backpack rap classic, Pete apparently took his own advice and has
          never made another solo album since. Fingers crossed he eventually
          finds his way back to us.
        </p>
        <p>
          Favorite song:
          <b> Dinner And A Movie</b>
        </p>
      </div>
    ),
    link: (
      <iframe
        title="lost cool calm pete"
        src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A0SVnQiFDcdqgQqtrZugu7R"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    ),
    id: '9',
    sepContent: null,
  },
  {
    name: 'Sample Sampler: The Jones Girls - Who Can I Run To',
    blogSideDate: 'September 2, 2017',
    blogSideTags:
      'Anderson .Paak, Bas, hip hop, Isaiah Rashad, Junggigo, samples, Xscape',
    description: (
      <div>
        <p>
          I love samples of all kinds, whether I find them in hip hop, K-pop, or
          Costco. Particularly, I&apos;m interested in how artists, often in
          very contrasting genres, can take the same sample and reinterpret it
          uniquely. Sample clearance issues are so lame; if you wanted your
          music to last and be remembered, wouldn&apos;t you want to let other
          artists be inspired by your music and use it and perpetuate it?
          Anyway, here&apos;s the song behind one of my favorite samples of all
          time, used in Sounds From Friday Morning by Isaiah Rashad.
        </p>
      </div>
    ),
    link: (
      <iframe
        title="Who Can I Run To - Jones Girls"
        src="https://open.spotify.com/embed/track/3sFoSCg2KoaCUrOeKYMqvI"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    ),
    id: '8',
    sepContent: (
      <div>
        <iframe
          title="Who Can I Run To - Jones Girls"
          src="https://open.spotify.com/embed/track/3sFoSCg2KoaCUrOeKYMqvI"
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />

        <iframe
          title="Xscape - Who Can I Run To"
          src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A0wdaPticLmmqJdhgLDJ9zI"
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />

        <iframe
          title="Isaiah Rashad - Sounds From Friday Morning"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4i4SoLdZd0Q"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <iframe
          title="Junggigo - DLMN"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mYDkrYdKq-A"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <iframe
          title="Bas - Last Winter"
          src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A4xw3qwy1dr3TLNQ4K6sYNz"
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />

        <iframe
          title="Anderson Paak - Might Be"
          src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A2WlOO5UM3eoEQt7Z2z3PU1"
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    ),
  },
  {
    name: 'The Last Shadow Puppets – The Age of the Understatement',
    blogSideDate: 'September 2, 2017',
    blogSideTags:
      '60s, Alex Turner, Arctic Monkeys, Bond, James Bond, rock, The Last Shadow Puppets',
    description: (
      <div>
        <p>
          Arctic Monkeys frontman Alex Turner teams up with The Rascals’ Miles
          Kane to make the perfect soundtrack to a Bond movie if it was ever a
          Western. Heavily influenced by equal parts ’60s English pop rock and
          nostalgic heartache, this vivid and indulgent project will have you
          swaying to lush string arrangements and yearning harmonies while
          Alex’s signature songwriting will leave you with “paper cuts from the
          love letters you never gave him.”
        </p>
        <p>
          Favorite song:
          <b> Meeting Place</b>
        </p>
      </div>
    ),
    link: (
      <iframe
        title="Age of the Understatement - TLSP"
        src="https://open.spotify.com/embed/album/4fxflUQfRpsSPzVVBMZLQm"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    ),
    id: '7',
    sepContent: null,
  },
  {
    name: 'The Kount x Verhoog – Childhood',
    blogSideDate: 'September 1, 2017',
    blogSideTags: 'jazz, synth, The Kount, Verhoog',
    description: (
      <p>
        Crooning over the Kount’s soulful synth-infused jazz chords, the
        existential Verhoog asks us: “What’s really real?” I’m not sure, but I
        know these tears on my keyboard are.
      </p>
    ),
    link: (
      <iframe
        title="Childhood"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/230959692&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
    ),
    id: '6',
    sepContent: null,
  },
  {
    name: 'Jeremiah Jae & L’Orange – The Night Took Us In Like Family',
    blogSideDate: 'September 1, 2017',
    blogSideTags: "hip hop, Jeremiah Jae, L'Orange",
    image: nightfamily,
    description: (
      <div>
        <p>
          This is the album I play when I feel like robbing banks with Tommy
          guns in my favorite trench coat. With his dark and smooth production
          and deftly utilized noir film samples, L’Orange shows us the gritty
          underworld of the 1930s gangster. Rapping from what is probably a dark
          alley behind a greasy speakeasy, Jeremiah Jae gives us a peek into the
          confident yet paranoid mind of a Prohibition-era crime lord. Together,
          they make your world feel black and white.
        </p>
        <p>
          Favorite song:
          <b> Underworld</b>
        </p>
      </div>
    ),
    id: '5',
    sepContent: null,
  },
  {
    name: 'Charlotte Dos Santos - Cleo',
    blogSideDate: 'August 31, 2017',
    blogSideTags: 'charlotte dos santos, cleo, jazz, oldies, soul',
    image: redclay,
    description:
      'Cleo is a classic soul album recorded in 2017 that has a cover of a “round” sung in the 13th century? As explained in a note to Fader, Red Clay is a metaphor comparing clay’s malleability and also fragility to “vapid people who lack identity and need others to give them a purpose.” Vapid or not, this smoky and sexy album will mold your hips into a grind and heads into a bob.',
    link: (
      <iframe
        title="Cleo"
        src="https://open.spotify.com/embed/album/1peRsBvuNWGMgEcwj1lx0K"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    ),
    id: '4',
    sepContent: null,
  },
  {
    name: 'Isaiah Rashad’s Find A Topic w/ original sample',
    blogSideDate: 'August 30, 2017',
    blogSideTags: 'hip hop, isaiah rashad, tde',
    description: (
      <p>
        Isaiah originally planned to use a sample of George Benson’s soulful
        guitar in Find A Topic, but unfortunately it couldn’t get cleared and he
        was forced to reproduce it himself. Isaiah and crew did a good job, but
        of course the original guitar is impossible to recreate perfectly. Here
        is the original, produced by Free P and J.LBS.
      </p>
    ),
    link: (
      <iframe
        title="Find A Topic"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/281865623&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
    ),
    id: '3',
    sepContent: null,
  },
  {
    name: 'Anna Wise - Some Mistakes (prod. MNDSGN)',
    blogSideDate: 'August 30, 2017',
    blogSideTags: '80s, Anna Wise, groovy, MNDSGN',
    description: (
      <p>
        MNDSGN&apos;s funky basslines and Anna Wise showing us why she&apos;s
        one of Kendrick Lamar&apos;s favorite collabs (Real, These Walls,
        Institutionalized.)
      </p>
    ),
    link: (
      <iframe
        title="Some Mistakes"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/304152402&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
    ),
    id: '2',
    sepContent: null,
  },
  {
    name: 'City Pop Curated',
    blogSideDate: 'August 30, 2017',
    blogSideTags: '80s, city pop, funk, japan, pop',
    image: weekendfly,
    alt: 'Weekend Fly To The Sun by Toshiki Kadomatsu',
    description: (
      <p>
        City Pop is a genre from 1980’s Japan and is a smooth amalgamation of
        Western influenced sounds like funk, rock, and jazz. During their
        unprecedented economic boom, Japan started putting more and more stereos
        into their brand new sports cars. Of course, this meant that they now
        demanded more music for when you’re driving around a sophisticated
        metropolitan or open coastline with your convertible roof down. I came
        across it in a fighting game forum: on a thread about Chun Li’s latest
        businesswoman-themed alt costume, someone posted Office Lady by Toshiki
        Kadomatsu. This is some of the best stuff I’ve found since then.
      </p>
    ),
    link: (
      <iframe
        title="City Pop Curated"
        width="100%"
        height="450"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/339120201&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    ),
    id: '1',
    sepContent: null,
  },
];

export default blogList;
/* 
name: '',
blogSideDate: '',
blogSideTags: '',
image: ,
alt: '',
description:
link: ,
id: ,
sepContent: ,
*/
