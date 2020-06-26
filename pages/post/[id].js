
export default ({ postName }) => {
  return (
      <div>
          <h1>{postName}</h1>
          <p>The post!</p>
      </div>
  );
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const postName = `Post #${id}`;

  return {
    props: { postName },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: false,
  };
}
