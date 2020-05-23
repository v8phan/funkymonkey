import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost';
import weekendfly from '../images/weekendfly.jpg';
import redclay from '../images/redclay.jpg';
import nightfamily from '../images/nightfamily.jpg';

const styles = (theme) => ({
  content: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

const blogList = [
  {
    name: 'Jeremiah Jae & L’Orange – The Night Took Us In Like Family',
    image: nightfamily,
    description:
      'This is the album I play when I feel like robbing banks with Tommy guns in my favorite trench coat. With his dark and smooth production and deftly utilized noir film samples, L’Orange shows us the gritty underworld of the 1930s gangster. Rapping from what is probably a dark alley behind a greasy speakeasy, Jeremiah Jae gives us a peek into the confident yet paranoid mind of a Prohibition-era crime lord. Together, they make your world feel black and white.',
  },
  {
    name: 'Charlotte Dos Santos - Cleo',
    image: redclay,
    description:
      'Cleo is a classic soul album recorded this year that also has a cover of a “round” sung in the 13th century? As explained in a note to Fader, Red Clay is a metaphor comparing clay’s malleability and also fragility to “vapid people who lack identity and need others to give them a purpose.” Vapid or not, this smoky and sexy album will mold your hips into a grind and heads into a bob.',
    link: (
      <iframe
        src="https://open.spotify.com/embed/album/1peRsBvuNWGMgEcwj1lx0K"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    ),
  },

  {
    name: 'Isaiah Rashad’s Find A Topic w/ original sample',
    description:
      'Isaiah originally planned to use a sample of George Benson’s soulful guitar in Find A Topic, but unfortunately it couldn’t get cleared and he was forced to reproduce it himself. Isaiah and crew did a good job, but of course the original guitar is impossible to recreate perfectly. Here is the original, produced by Free P and J.LBS.',
    link: (
      <iframe
        title="Find A Topic"
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/281865623&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    ),
  },
  {
    name: 'Anna Wise - Some Mistakes (prod. MNDSGN)',
    description:
      "MNDSGN's funky basslines and Anna Wise showing us why she's one of Kendrick Lamar's favorite collabs (Real, These Walls, Institutionalized.)",
    link: (
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/304152402&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    ),
  },
  {
    name: 'City Pop Curated',
    image: weekendfly,
    alt: 'Weekend Fly To The Sun by Toshiki Kadomatsu',
    description:
      'City Pop is a genre from 1980’s Japan and is a smooth amalgamation of Western influenced sounds like funk, rock, and jazz. During their unprecedented economic boom, Japan started putting more and more stereos into their brand new sports cars. Of course, this meant that they now demanded more music for when you’re driving around a sophisticated metropolitan or open coastline with your convertible roof down. I came across it in a fighting game forum: on a thread about Chun Li’s latest businesswoman-themed alt costume, someone posted Office Lady by Toshiki Kadomatsu. This is some of the best stuff I’ve found since then.',
    link: (
      <iframe
        title="City Pop Curated"
        width="100%"
        height="450"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/339120201&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
    ),
  },
];

function Page(props) {
  const { classes } = props;

  return (
    <div className={classes.content}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              {blogList.map((blog) => (
                <BlogPost
                  name={blog.name}
                  image={blog.image}
                  alt={blog.alt}
                  description={blog.description}
                  link={blog.link}
                />
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>Sidebar</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page);
