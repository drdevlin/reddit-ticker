export const extractImage = (post) => {
  let image = <img src='/default.jpg' alt='' />;
  if (post.post_hint === 'image') {
    image = <img src={post.url} alt='' />;
  } else if (post.post_hint === 'rich:video') {
    image = <video controls autoplay muted src={post.url}>Video unsupported.</video>
  } else if (post.thumbnail && post.thumbnail !== 'default') {
    image = <img src={post.thumbnail} alt='' />;
  }
  return image;
}